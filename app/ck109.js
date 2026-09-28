'use strict';
const exam = window.CkExam;
const endpoint = 'https://script.google.com/macros/s/AKfycbyctoOY03uZKvznm-je5NirX5JZkXixKEhqMc5UgbvEbnKM-AVnY7lS7fz5INjI_tiKig/exec';
const draftKey = exam.id + '-draft';
const $ = id => document.getElementById(id);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeRead = key => { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } };
let page = 0, completed = null, syncing = false, syncConfirmed = false, results = [], lastInput;
function math(el) { if (window.renderMathInElement) renderMathInElement(el,{delimiters:[{left:'\\(',right:'\\)',display:false}],throwOnError:false}); }
function student() { return { className:$('classInput').value.trim(),seatNumber:$('seatInput').value.trim(),studentName:$('nameInput').value.trim() }; }
function values(i) { const q=exam.questions[i];return [...document.querySelectorAll(`[name="q${i}"]`)].filter(el=>!q.options||el.checked).map(el=>el.value); }
function answered(i) { const v=values(i);return v.length>0 && v.every(s=>s.trim()); }
function saveDraft() { try { localStorage.setItem(draftKey,JSON.stringify({student:student(),values:exam.questions.map((_,i)=>values(i)),page,completed,syncConfirmed}));if(!completed)$('draftNotice').textContent='草稿已暫存在這台裝置；交卷後才會送給老師。';}catch{$('draftNotice').textContent='這台裝置無法暫存，作答期間請不要關閉頁面。';} }
function render() {
  $('quizForm').innerHTML=exam.questions.map((q,i)=>`<article class="question" id="question-${i}" ${i?'hidden':''}><div class="q-head"><span class="q-num">${q.section}第 ${q.number} 題</span><span class="q-type">${q.points} 分${q.section==='多選'?'・可複選':''}</span></div><div class="stem">${q.stem}</div>${q.figure?`<figure class="inline-figure"><img src="assets/ck109/${q.figure}.png" alt="${escape(q.alt)}"></figure>`:''}${q.options?`<fieldset class="choice-group"><legend class="sr-only">第 ${i+1} 題${q.section==='多選'?'可複選':'單選'}</legend><div class="options">${q.options.map((o,j)=>`<label class="option"><input type="${q.section==='多選'?'checkbox':'radio'}" name="q${i}" value="${'ABCDE'[j]}"><span>（${'ABCDE'[j]}）${o}</span></label>`).join('')}</div></fieldset>`:`<div class="fill-fields ${q.tuple?'tuple':''}">${q.fields.map((f,j)=>`<label>${escape(f)}<input name="q${i}" data-part="${j}" type="text" maxlength="160" autocomplete="off" spellcheck="false" placeholder="${q.order?'使用 > 連接字母':'輸入答案'}"></label>`).join('')}</div>${q.order?'':`<div class="math-tools" aria-label="插入數學符號">${['π','√','(',')',...(q.symbolic?['R','θ','sin(']:[])].map(t=>`<button type="button" data-insert="${escape(t)}">${escape(t)}</button>`).join('')}</div><p class="fill-help">π 可輸入 pi；√3 可輸入 sqrt(3)；乘法用 *，分數用 /。${q.symbolic?'θ 可輸入 theta，例如 sin(theta)。':''}請保留精確值${q.number===7?'，本題依題意四捨五入至整數':''}。</p>`}`}<div class="feedback" hidden></div></article>`).join('');
  $('questionMap').innerHTML=exam.questions.map((q,i)=>`<button type="button" data-page="${i}" aria-label="第 ${i+1} 題，${q.section}第 ${q.number} 題">${i+1}</button>`).join('');
  math($('quizForm'));
}
function update() {
  const count=exam.questions.filter((_,i)=>answered(i)).length;
  $('progressText').textContent=`${count} / 15 題`;$('progressFill').style.width=`${count/15*100}%`;
  exam.questions.forEach((_,i)=>{const b=$('questionMap').children[i];b.classList.toggle('current',i===page);b.classList.toggle('answered',answered(i));b.setAttribute('aria-current',i===page?'step':'false');});
  const s=student(),ready=Object.values(s).every(Boolean);$('studentStatus').textContent=ready?'已填寫':'尚未填寫';$('studentStatus').classList.toggle('is-ready',ready);
}
function navigate(i,scroll=true) {
  page=Math.max(0,Math.min(14,i));exam.questions.forEach((_,j)=>$('question-'+j).hidden=j!==page);
  $('pageText').textContent=`第 ${page+1} / 15 題`;$('previous').disabled=page===0;$('next').disabled=page===14;update();saveDraft();
  if(scroll)$('question-'+page).scrollIntoView({behavior:'smooth',block:'start'});
}
function restore(){
  const saved=safeRead(draftKey),s=saved?.student||safeRead('trigPracticeStudent');
  if(s){$('classInput').value=String(s.className||'').slice(0,40);$('seatInput').value=String(s.seatNumber||'').slice(0,20);$('nameInput').value=String(s.studentName||'').slice(0,40);}
  if(saved&&Array.isArray(saved.values)){
    exam.questions.forEach((q,i)=>{const v=Array.isArray(saved.values[i])?saved.values[i]:[];document.querySelectorAll(`[name="q${i}"]`).forEach((el,j)=>{if(q.options)el.checked=v.includes(el.value);else el.value=String(v[j]||'').slice(0,160);});});
    page=Number.isInteger(saved.page)?saved.page:0;
    if(saved.completed&&saved.completed.paperTitle===exam.title&&typeof saved.completed.createdAt==='string'){completed=saved.completed;syncConfirmed=saved.syncConfirmed===true;try{results=exam.questions.map((q,i)=>exam.assess(q,values(i)));showResults();}catch{completed=null;}}
  }
  navigate(page,false);
}
function calculateAll(){
  const all=[];
  for(let i=0;i<15;i++)try{all.push(exam.assess(exam.questions[i],values(i)));}catch(error){navigate(i);$('examError').textContent=`第 ${i+1} 題：${error.message}。可參考題目下方的輸入方式。`;$('examError').hidden=false;return null;}
  return all;
}
function reviewMissing(){const first=exam.questions.findIndex((_,i)=>!answered(i));if(first>=0){navigate(first);$('examError').textContent='這一題尚未完整作答。';$('examError').hidden=false;}else{$('examError').hidden=false;$('examError').textContent='15 題皆已作答，可交卷。';}}
function request(params){
  return new Promise((resolve,reject)=>{
    const callback='ck109_'+Date.now()+'_'+Math.random().toString(36).slice(2);const script=document.createElement('script');let finished=false;
    const cleanup=()=>{clearTimeout(timer);script.remove();window[callback]=()=>{};setTimeout(()=>delete window[callback],60000);};
    const fail=()=>{if(finished)return;finished=true;cleanup();reject(Error('無法連線至成績表'));};
    const timer=setTimeout(fail,20000);window[callback]=data=>{if(finished)return;finished=true;cleanup();if(data?.ok===true)resolve(data);else reject(Error(data?.error==='archived'?'成績表目前已關閉交卷':'成績表未接受這次請求'));};
    script.onerror=fail;const url=new URL(endpoint);Object.entries({...params,callback}).forEach(([key,value])=>url.searchParams.set(key,value));script.src=url.href;document.body.appendChild(script);
  });
}
function recordMatches(r){return r.paperTitle===completed.paperTitle&&r.studentName===completed.studentName&&r.className===completed.className&&String(r.seatNumber)===String(completed.seatNumber)&&new Date(r.createdAt).getTime()===new Date(completed.createdAt).getTime();}
async function sync(retry=false){
  if(syncing||syncConfirmed||!completed)return;syncing=true;const submittedRecord=completed;updateSync('sending');
  try{
    let found=false;
    if(retry){const data=await request({action:'studentRecords',className:completed.className,seatNumber:completed.seatNumber});if(!Array.isArray(data.records))throw Error('無法確認交卷狀態，請稍後再試');found=data.records.some(recordMatches);}
    if(!found)await request({action:'submit',...completed});if(completed!==submittedRecord)return;syncConfirmed=true;saveDraft();updateSync('success');
  }catch(error){updateSync('failure',error.message);}finally{syncing=false;}
}
function updateSync(status,reason=''){
  const node=$('syncStatus');if(!node)return;node.className=status==='success'?'sync-success':status==='failure'?'sync-failure':'';
  node.textContent=status==='sending'?'正在送出成績，請稍候…':status==='success'?'已成功送到老師的成績表。':`尚未確認送達老師：${reason||'請按重新確認並送出，或下載作答紀錄交給老師。'}`;
  $('newAttempt').disabled=status==='sending';$('retrySubmit').hidden=status!=='failure';$('retrySubmit').disabled=status==='sending';
}
function showResults(){
  document.querySelectorAll('#quizForm input,#studentForm input,[data-insert]').forEach(el=>el.disabled=true);
  $('submitExam').disabled=true;$('submitExam').textContent='本次已批改';$('reviewMissing').textContent='查看批改結果';$('scorePill').textContent=`${completed.percent} 分`;$('draftNotice').textContent='本次作答已鎖定。';
  results.forEach((r,i)=>{const q=exam.questions[i],article=$('question-'+i),feedback=article.querySelector('.feedback');article.classList.toggle('is-correct',r.correct);article.classList.toggle('is-wrong',!r.correct);$('questionMap').children[i].classList.toggle('correct',r.correct);$('questionMap').children[i].classList.toggle('wrong',!r.correct);feedback.hidden=false;feedback.className=`feedback ${r.correct?'good':'bad'}`;feedback.innerHTML=`<strong>${r.score} / ${q.points} 分</strong><p>你的答案：${escape(values(i).join(q.options?'、':'，')||'未作答')}</p><details class="answer-detail"><summary>參考答案與解析</summary><p>答案：${q.display||q.answer}</p><p>${q.solution}</p></details>`;math(feedback);});
  $('resultPanel').hidden=false;$('resultPanel').innerHTML=`<h2>本次作答結果</h2><p>${escape(completed.className)} ${escape(completed.seatNumber)} 號 ${escape(completed.studentName)}</p><p><span class="score-large">${completed.percent}</span> / 100 分</p><p>完全答對 ${completed.correct} / 15 題；多選題依原卷扣分。</p><p>${completed.wrongQuestions==='none'?'全部答對。':'未得滿分題號：'+escape(completed.wrongQuestions)}</p><p id="syncStatus" role="status"></p><div class="result-buttons"><button id="retrySubmit" type="button">重新確認並送出</button><button id="downloadAnswers" type="button">下載作答紀錄</button><button id="newAttempt" type="button">重新作答</button></div>`;
  $('retrySubmit').addEventListener('click',()=>sync(true));$('downloadAnswers').addEventListener('click',download);$('newAttempt').addEventListener('click',()=>{$('resetDialog').returnValue='';$('resetDialog').showModal();});
  updateSync(syncConfirmed?'success':'failure');
}
function complete(){
  if(completed)return;results=calculateAll();if(!results)return;
  const now=new Date(),wrong=results.flatMap((r,i)=>r.correct?[]:[i+1]);
  completed={...student(),paperTitle:exam.title,correct:results.filter(r=>r.correct).length,total:15,percent:results.reduce((s,r)=>s+r.score,0),wrongQuestions:wrong.length?wrong.join('、'):'none',createdAt:now.toISOString(),finishedAt:now.toLocaleString('zh-TW',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'})};
  saveDraft();showResults();sync();$('resultPanel').scrollIntoView({behavior:'smooth'});
}
function download(){
  if(!completed)return;
  const text=[exam.title,`${completed.className} ${completed.seatNumber} 號 ${completed.studentName}`,`交卷時間：${completed.createdAt}`,`總分：${completed.percent} / 100`,`送達狀態：${syncConfirmed?'已送達老師成績表':'尚未確認送達，請交給老師'}`,'',...exam.questions.map((q,i)=>`第 ${i+1} 題（${q.section}${q.number}）：${values(i).join(q.options?'、':'，')||'未作答'}；得分 ${results[i].score}/${q.points}`)].join('\n');
  const blob=new Blob(['\uFEFF'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`建中109作答紀錄-${completed.seatNumber.replace(/[^\w-]/g,'_')}.txt`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$('studentForm').addEventListener('submit',e=>e.preventDefault());$('quizForm').addEventListener('submit',e=>e.preventDefault());
$('studentForm').addEventListener('input',()=>{update();saveDraft();try{localStorage.setItem('trigPracticeStudent',JSON.stringify(student()));}catch{}});
$('quizForm').addEventListener('input',()=>{if(completed)return;update();saveDraft();$('examError').hidden=true;});
$('quizForm').addEventListener('focusin',e=>{if(e.target.matches('input[type="text"]'))lastInput=e.target;});
$('quizForm').addEventListener('click',e=>{const b=e.target.closest('[data-insert]');if(!b||completed)return;const article=b.closest('.question');const input=lastInput&&article.contains(lastInput)?lastInput:article.querySelector('input[type="text"]');const token=b.dataset.insert==='√'?'sqrt(':b.dataset.insert;const start=input.selectionStart??input.value.length;input.setRangeText(token,start,input.selectionEnd??start,'end');input.focus();update();saveDraft();});
$('questionMap').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b)navigate(Number(b.dataset.page));});
$('previous').addEventListener('click',()=>navigate(page-1));$('next').addEventListener('click',()=>navigate(page+1));
$('reviewMissing').addEventListener('click',()=>completed?$('resultPanel').scrollIntoView({behavior:'smooth'}):reviewMissing());
$('submitExam').addEventListener('click',()=>{if(completed)return;if(!$('studentForm').reportValidity()||!Object.values(student()).every(Boolean)){$('examError').textContent='請完整填寫班級、座號、姓名。';$('examError').hidden=false;return;}if(!calculateAll())return;$('examError').hidden=true;const missing=exam.questions.flatMap((_,i)=>answered(i)?[]:[i+1]);$('submitSummary').textContent=missing.length?`第 ${missing.join('、')} 題尚未完整作答，仍要交卷嗎？`:'15 題皆已作答，確定交卷嗎？';$('submitDialog').returnValue='';$('submitDialog').showModal();});
$('submitDialog').addEventListener('close',()=>{if($('submitDialog').returnValue==='submit')complete();});
$('resetDialog').addEventListener('close',()=>{if($('resetDialog').returnValue!=='reset'||syncing)return;completed=null;syncConfirmed=false;results=[];page=0;document.querySelectorAll('#studentForm input').forEach(el=>el.disabled=false);$('resultPanel').hidden=true;$('submitExam').disabled=false;$('submitExam').textContent='交卷並批改';$('reviewMissing').textContent='檢查未答題';$('scorePill').textContent='尚未交卷';$('examError').hidden=true;render();navigate(0);});
$('queryRecords').addEventListener('click',async()=>{const s=student();if(!s.className||!s.seatNumber){$('recordStatus').textContent='請先填寫班級與座號。';return;}$('queryRecords').disabled=true;$('recordStatus').textContent='正在查詢…';$('recordList').innerHTML='';try{const data=await request({action:'studentRecords',className:s.className,seatNumber:s.seatNumber});if(!Array.isArray(data.records))throw Error('回傳資料格式不正確');const rows=data.records.filter(r=>r.paperTitle===exam.title);$('recordStatus').textContent=rows.length?`查到 ${rows.length} 筆本卷紀錄（最近 30 筆作答中）。`:'最近 30 筆作答中，尚未找到這份試卷的紀錄。';$('recordList').innerHTML=rows.map(r=>`<div class="record-row"><strong>${escape(r.studentName)}・${escape(r.percent)} 分</strong><br>${escape(r.finishedAt||r.createdAt)}<br>未得滿分題號：${escape(r.wrongQuestions==='none'?'無':r.wrongQuestions||'未記錄')}</div>`).join('');}catch(error){$('recordStatus').textContent=`查詢失敗：${error.message}，請稍後重試。`;}finally{$('queryRecords').disabled=false;}});
render();restore();
