'use strict';
(async () => {
  const $=id=>document.getElementById(id);
  const storageKey='sports115-exam2-basics-20261124';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let saved={};
  try {saved=JSON.parse(localStorage.getItem(storageKey))||{};} catch {}
  const answers=saved.answers||{};
  let skills;
  try {
    const res=await fetch('basics.json?v=exam2-1');
    if(!res.ok)throw Error();
    skills=await res.json();
  } catch {
    $('skillBody').textContent='講義暫時無法載入，請重新整理。';
    return;
  }
  let index=Number.isInteger(saved.index)&&skills[saved.index]?saved.index:0;
  let itemIndex=Number.isInteger(saved.itemIndex)&&saved.itemIndex>=0&&saved.itemIndex<3?saved.itemIndex:0;
  function save(){
    try {localStorage.setItem(storageKey,JSON.stringify({index,itemIndex,answers}));}
    catch {$('saveNotice').textContent='這台裝置無法儲存進度，請先保留頁面。';}
  }
  function key(i){return skills[index].number+'-'+i;}
  function progress(){
    const done=Object.values(answers).filter(a=>a.mark==='done').length;
    $('totalProgress').textContent=`已掌握 ${done} / 138 小題`;
  }
  function state(i){return answers[key(i)] ||= {};}
  function graphEditor(i){
    const s=state(i),points=s.points||[];
    const spec=points.length===2?{points,closed:!s.dashed}:{boundary:[1,0,15],closed:true};
    return `<div class="sketch" data-grid="${i}" aria-label="作圖方格">${coordinateFigure(spec)}</div>
      <p>點兩個格點畫直線。${points.length?' 已選 '+points.map(p=>'('+p.join(',')+')').join('、'):''}</p>
      <div class="drawing-tools"><label><input type="checkbox" data-dash="${i}" ${s.dashed?'checked':''}> 虛線</label> <button type="button" data-clear="${i}">重畫</button></div>`;
  }
  function sketch(i){$('sketch-'+i).innerHTML=graphEditor(i);}
  function render(){
    const skill=skills[index];
    $('unit').value=skill.section;
    $('skill').replaceChildren(...skills.filter(s=>s.section===skill.section).map(s=>new Option('第 '+s.number+' 項',s.number)));
    $('skill').value=skill.number;
    $('skillBody').innerHTML=`<h2 class="skill-prompt">${esc(skill.prompt)}</h2>
      <details class="skill-example"><summary>講義例題</summary><p>${esc(skill.example)}</p>${coordinateFigure(skill.exampleGraph)}</details>`+
      ((item,i)=>{
        const s=state(i);
        return `<article class="question" data-item="${i}"><h3>練習（${i+1}）</h3><p>${esc(item.text)}</p>${coordinateFigure(item.graph)}
        ${skill.number===36?`<div id="sketch-${i}">${graphEditor(i)}</div>`:''}
        ${skill.number===36?'<details class="sketch-notes"><summary>用文字作答</summary>':''}<label class="work-label">我的作答<textarea rows="2" data-answer="${i}" maxlength="1500">${esc(s.text)}</textarea></label>${skill.number===36?'</details>':''}
        <details class="self-check" data-check="${i}" ${s.revealed?'open':''}><summary>核對講義答案</summary><p>${esc(item.answer)}</p>${coordinateFigure(item.answerGraph)}
        <div aria-label="自評"><button type="button" data-mark="done" aria-pressed="${s.mark==='done'}">已掌握</button>
        <button type="button" data-mark="again" aria-pressed="${s.mark==='again'}">再練一次</button></div></details></article>`;
      })(skill.items[itemIndex],itemIndex);
    renderMathInElement($('skillBody'),{delimiters:[{left:'$',right:'$',display:false}],throwOnError:false});
    $('pagePosition').textContent=`技巧 ${skill.number}・第 ${itemIndex+1} / 3 題`;
    $('prev').disabled=index===0&&itemIndex===0;
    $('next').disabled=index===skills.length-1&&itemIndex===2;
    progress();
  }
  function go(n,item=0){index=n;itemIndex=item;save();render();alignQuestionPager();}
  function turnPage(direction){
    const next=index*3+itemIndex+direction;
    if(next>=0&&next<skills.length*3)go(Math.floor(next/3),next%3);
  }
  $('unit').replaceChildren(...[...new Set(skills.map(s=>s.section))].map(s=>new Option(s,s)));
  $('unit').onchange=()=>go(skills.findIndex(s=>s.section===$('unit').value));
  $('skill').onchange=()=>go(Number($('skill').value)-1);
  bindQuestionPager($('skillBody'),$('prev'),$('next'),turnPage);
  $('skillBody').addEventListener('input',e=>{
    if(e.target.matches('[data-answer]')){state(e.target.dataset.answer).text=e.target.value;save();}
    if(e.target.matches('[data-dash]')){const i=e.target.dataset.dash;state(i).dashed=e.target.checked;save();sketch(i);}
  });
  $('skillBody').addEventListener('toggle',e=>{
    if(e.target.matches('[data-check]')){state(e.target.dataset.check).revealed=e.target.open;save();}
  },true);
  $('skillBody').addEventListener('click',e=>{
    const btn=e.target.closest('[data-mark]'),grid=e.target.closest('[data-grid]'),clear=e.target.closest('[data-clear]');
    if(btn){
      const i=btn.closest('[data-item]').dataset.item;
      state(i).mark=btn.dataset.mark;
      for(const b of btn.parentElement.querySelectorAll('button'))b.setAttribute('aria-pressed',String(b===btn));
      save();progress();
    } else if(clear){const i=clear.dataset.clear;state(i).points=[];save();sketch(i);}
    else if(grid){
      const svg=grid.querySelector('svg'),p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;
      const loc=p.matrixTransform(svg.getScreenCTM().inverse());
      const xy=[Math.round((loc.x-90)/12),Math.round((90-loc.y)/12)];
      if(xy.some(v=>Math.abs(v)>6))return;
      const i=grid.dataset.grid,s=state(i),points=s.points||[];
      if(points.length===1&&points[0].toString()===xy.toString())return;
      s.points=points.length===1?[points[0],xy]:[xy];save();sketch(i);
    }
  });
  render();
})().catch(()=>{document.getElementById('skillBody').textContent='載入失敗，請重新整理。';});
