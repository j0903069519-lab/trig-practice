'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const KEY = 'df-sports115-v1';
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt = n => Number(n).toLocaleString('zh-TW', {maximumFractionDigits:1});
  const storage = {get(k, fallback) {try {return JSON.parse(localStorage.getItem(KEY+k)) ?? fallback;} catch {return fallback;}},set(k,v) {try {localStorage.setItem(KEY+k,JSON.stringify(v));return true;} catch {return false;}}};
  const uuid = () => crypto.randomUUID();
  const device = storage.get('-device',null) || uuid()+uuid(); storage.set('-device',device);
  let bank, sessions = storage.get('-sessions',{}), mode='paper', paperId='A', typeId=1, session, onlyWrong=false;
  let sendBusy=false, history=storage.get('-history',[]), sendStatuses=storage.get('-send',{});
  const API = (window.SPORTS_CONFIG?.API_BASE || '').replace(/\/$/,'');
  function math(el) {if(window.renderMathInElement) renderMathInElement(el,{delimiters:[{left:'$',right:'$',display:false}],throwOnError:false,strict:'ignore',trust:false});}
  function announce(s) {$('notice').textContent=s; $('notice').hidden=!s;}
  function student() {return {className:$('className').value.trim(),seatNumber:$('seatNumber').value.trim(),studentName:$('studentName').value.trim()};}
  function question(id) {return bank.papers.flatMap(p=>p.questions).find(q=>q.id===id);}
  function questions() {return session.ids.map(question);}
  function sessionKey() {return mode==='paper' ? 'paper-'+paperId : mode==='type' ? 'type-'+typeId : 'retry';}
  function score(q, selected) {const expected=new Set(q.answer), actual=new Set(selected||''); if(!actual.size) return 0; if(!q.multi) return selected===q.answer ? 40 : 0; let errors=0; for(const v of 'ABCDE') if(expected.has(v)!==actual.has(v)) errors++; return Math.max(0,40-errors*16);}
  function grading(s=session) {let units=0,full=0,partial=0,wrong=[];const items=s.ids.map(id=>{const q=question(id), selected=s.answers[id]||'',points=score(q,selected); units+=points; if(points===40) full++; else {wrong.push(id); if(points>0)partial++;}return {id,number:q.number,typeId:q.typeId,selected,points:points/10,full:points===40};});return {points:units/10,max:s.ids.length*4,full,partial,wrong,items};}
  function persist() {sessions[sessionKey()]=session;const saved=storage.set('-sessions',sessions);$('draftStatus').textContent=saved ? (session.graded?'本次答案已鎖定':'已保存在這台裝置') : '裝置空間不足，請勿關閉頁面';}
  function newSession(ids,title) {return {version:bank.version,attemptId:uuid(),ids,title,answers:{},graded:false,startedAt:new Date().toISOString()};}
  function randomItems(items,n) {const a=[...items];for(let i=a.length-1;i>0;i--){const r=new Uint32Array(1);crypto.getRandomValues(r);const j=r[0]%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a.slice(0,n);}
  function selectSession(fresh=false) {
    const saved=sessions[sessionKey()];
    if(!fresh&&saved?.version===bank.version&&saved.ids.every(id=>question(id))) session=saved;
    else if(mode==='paper') {const p=bank.papers.find(p=>p.id===paperId);session=newSession(p.questions.map(q=>q.id),p.title);}
    else if(mode==='type') {const type=bank.types.find(x=>x.id===typeId);session=newSession(randomItems(bank.papers.flatMap(p=>p.questions).filter(q=>q.typeId===typeId),5).map(q=>q.id),type.title+'・5 題補強');}
    onlyWrong=false;announce('');persist();render();
  }
  function navigate(modeValue) {mode=modeValue;selectSession();storage.set('-view',{mode,paperId,typeId});}
  function numberLine(d) {if(!d)return '';const L=100,R=320;const inside=d.mode==='inside';return `<svg class="number-line" viewBox="0 0 430 92" role="img" aria-label="${esc(`${d.left} 到 ${d.right}，${inside?'取中間':'取兩側'}，${d.closed?'包含':'不含'}端點`)}"><line x1="22" y1="43" x2="408" y2="43" stroke="#879a91" stroke-width="1.5"/><path d="M408 43l-8-4v8z" fill="#879a91"/>${inside?`<line x1="${L}" y1="43" x2="${R}" y2="43" stroke="#0f766e" stroke-width="5"/>`:`<path d="M24 43H${L}M${R} 43H401" stroke="#0f766e" stroke-width="5" fill="none"/>`}${[L,R].map((x,i)=>`<circle cx="${x}" cy="43" r="5" stroke="#0f766e" stroke-width="2" fill="${d.closed?'#0f766e':'white'}"/><text x="${x}" y="72" text-anchor="middle" fill="#244f47" font-size="14">${esc(i?d.right:d.left)}</text>`).join('')}</svg>`;}
  function solution(q) {return `<details class="solution"><summary><span>看完整詳解</span><small>${q.steps.length} 步・逐項判斷</small></summary><div class="solution-body"><div class="solution-concept"><b>先抓住這個觀念</b>${esc(q.hint)}</div>${q.steps.map((s,i)=>`<div class="step"><span class="step-index">${i+1}</span><div><h4>${esc(s.title)}</h4><p>${esc(s.text)}</p></div></div>`).join('')}${numberLine(q.diagram)}<h3>${q.multi?'每個選項分開看':'核對每個選項'}</h3>${q.options.map(o=>`<div class="option-analysis"><b>${o.id}</b><span class="${o.correct?'truth':'false'}">${o.correct?'正確':'錯誤'}</span><div>${esc(o.text)}<br>${esc(o.why)}</div></div>`).join('')}<h3>別在這裡失分</h3><div class="pitfalls">${q.tips.map(t=>`<p>${esc(t)}</p>`).join('')}</div></div></details>`;}
  function renderQuestion(q,index) {
    const selected=session.answers[q.id]||'',points=score(q,selected),state=session.graded?(points===40?'is-correct':points>0?'is-partial':'is-wrong'):'';
    const long=q.multi||q.options.some(o=>o.text.length>65);
    return `<article class="question ${state} ${long?'long-options':''}" id="question-${q.id}" data-id="${q.id}" ${session.graded&&onlyWrong&&points===40?'hidden':''}><div class="q-head"><div class="q-number"><b>${index+1}</b><span>${esc(q.title)}</span></div><span class="q-type">${q.multi?'多選題':'單選題'}・4 分</span></div><p class="stem">${esc(q.stem)}</p><div class="options" role="group" aria-label="第 ${index+1} 題選項">${q.options.map(o=>`<label class="option ${session.graded&&o.correct?'correct-option':''} ${session.graded&&selected.includes(o.id)&&!o.correct?'wrong-choice':''}"><input type="${q.multi?'checkbox':'radio'}" name="answer-${q.id}" value="${o.id}" aria-label="第 ${index+1} 題選項 ${o.id}" ${selected.includes(o.id)?'checked':''} ${session.graded?'disabled':''}><span class="option-letter">${o.id}</span><span class="option-content">${esc(o.text)}</span></label>`).join('')}</div>${session.graded?`<div class="feedback ${points===40?'':points>0?'partial':'bad'}"><div><strong>${points===40?'答對了':points>0?'部分答對，再看看漏選或錯選的地方':'跟著詳解再想一次'}</strong><div class="answer-meta">你的答案：${selected||'未作答'}　正確答案：${q.answer}</div></div><span>${fmt(points/10)} / 4 分</span></div>${solution(q)}`:`<details class="hint"><summary>需要提示？先看觀念</summary><p>${esc(q.hint)}</p></details>`}</article>`;
  }
  function render() {
    $('paperTab').classList.toggle('active',mode==='paper');$('typeTab').classList.toggle('active',mode!=='paper');$('paperTab').setAttribute('aria-selected',String(mode==='paper'));$('typeTab').setAttribute('aria-selected',String(mode!=='paper'));
    $('paperPicker').hidden=mode!=='paper';$('typePicker').hidden=mode!=='type';$('leaderboardPanel').hidden=mode!=='paper';
    $('modeCaption').textContent=mode==='paper'?'完整考卷':mode==='type'?'一次專心練一種題型':'錯題重練';$('sessionTitle').textContent=session.title;
    $('resetButton').textContent=mode==='type'?'重新出題':'重新作答';$('quizForm').innerHTML=questions().map(renderQuestion).join('');math($('quizForm'));
    $('quizTools').hidden=!session.graded;$('gradeButton').disabled=session.graded;$('gradeButton').innerHTML=session.graded?'已完成批改':'送出批改 <span aria-hidden="true">→</span>';
    $('wrongFilter').setAttribute('aria-pressed',String(onlyWrong));$('expandAll').textContent='展開全部詳解';updateProgress();renderResult();if(mode==='paper')loadLeaderboard();
  }
  function updateProgress() {const count=session.ids.filter(id=>session.answers[id]?.length).length,total=session.ids.length;const result=session.graded?grading():null;$('progressText').textContent=`已答 ${count} / ${total} 題`;$('progressFill').style.width=`${count/total*100}%`;$('bottomProgress').textContent=session.graded?'批改完成・可以看詳解':count===total?'全部作答完成':`還有 ${total-count} 題未作答`;$('bottomHint').textContent=session.graded?'看完詳解後，可以重練未得滿分的題目。':'做完後一起批改，也可以先看觀念提示。';$('headerScore').textContent=session.graded?`${fmt(result.points)} / ${result.max} 分`:`${count} / ${total} 題`;$('questionNav').innerHTML=questions().map((q,i)=>{const p=result?score(q,session.answers[q.id]):null;return `<button type="button" data-jump="${q.id}" class="${p!==null?(p===40?'answered':p>0?'partial':'wrong'):session.answers[q.id]?'answered':''}" aria-label="跳到第 ${i+1} 題${p!==null?(p===40?'，滿分':p>0?'，部分給分':'，未得分'):session.answers[q.id]?'，已答':'，未答'}">${i+1}</button>`;}).join('');}
  function renderResult() {
    $('resultPanel').hidden=!session.graded;if(!session.graded)return;
    const r=grading();$('retryWrong').disabled=!r.wrong.length;$('wrongFilter').disabled=!r.wrong.length;
    const status=sendStatuses[session.attemptId]||{state:'local'};
    const msg=mode==='paper'?status.state==='sent'?'已送達老師端':status.state==='sending'?'正在送出成績…':status.state==='error'?'尚未送達：作答已保留，可重試':'成績已保存在本機，準備送出':'補強練習已保存在這台裝置';
    $('resultPanel').innerHTML=`<div class="result-top"><div><p class="eyebrow">${esc(session.title)}・批改結果</p><h2>${r.wrong.length?'把還沒懂的地方補起來。':'這份練習，全部掌握了。'}</h2></div><div class="result-score">${fmt(r.points)}<small>/ ${r.max}</small></div></div><p class="result-meta">全對 ${r.full} 題${r.partial?`・部分得分 ${r.partial} 題`:''}・未得滿分 ${r.wrong.length} 題</p><p class="result-message">${r.wrong.length?'下方已標示正確選項。展開詳解，先看計算步驟，再核對你選的選項。':'每題都有完整詳解，也可以核對自己的解法。'}</p><div class="send-row"><span role="status">${esc(msg)}</span>${mode==='paper'&&status.state!=='sent'?`<button id="resendButton" type="button" ${sendBusy?'disabled':''}>${status.state==='error'?'重試送出':'送出成績'}</button>`:''}<button id="downloadAttempt" type="button">下載本次作答</button></div>`;
    $('resendButton')?.addEventListener('click',()=>sendAttempt(session));$('downloadAttempt').addEventListener('click',downloadAttempt);
  }
  async function api(path,options={}) {const headers={'Content-Type':'application/json','Authorization':`Bearer ${device}`,...options.headers};const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),12000);try {const res=await fetch(API+path,{...options,headers,signal:controller.signal});let data;try {data=await res.json();}catch {throw Error('成績服務暫時無法使用');}if(!res.ok)throw Error(data.error||'成績服務暫時無法使用');return data;}finally{clearTimeout(timer);}}
  async function sendAttempt(s) {
    if(sendBusy||sendStatuses[s.attemptId]?.state==='sent')return;
    const record=history.find(r=>r.attemptId===s.attemptId);if(!record||record.mode!=='paper')return;
    sendBusy=true;sendStatuses[s.attemptId]={state:'sending'};renderResult();
    try {const res=await api('/api/attempts',{method:'POST',body:JSON.stringify({attemptId:s.attemptId,version:bank.version,paperId:record.paperId,student:record.student,answers:record.answers,startedAt:record.startedAt,finishedAt:record.finishedAt})});sendStatuses[s.attemptId]={state:'sent',serverId:res.id};record.sent=true;storage.set('-history',history);if(s.attemptId===session.attemptId)loadLeaderboard();}
    catch(e){sendStatuses[s.attemptId]={state:'error'};}
    finally {sendBusy=false;storage.set('-send',sendStatuses);if(s.attemptId===session.attemptId)renderResult();}
  }
  async function loadLeaderboard() {const id=paperId;try {const res=await api('/api/leaderboard?paper='+encodeURIComponent(id));if(mode!=='paper'||paperId!==id)return;$('leaderboardContent').innerHTML=res.records.length?`<ol class="rank-list">${res.records.map((r,i)=>`<li><span>${i+1}. ${esc(r.className)}・${esc(r.seatNumber)} 號</span><strong>${fmt(r.score)} 分</strong></li>`).join('')}</ol>`:'這份練習卷還沒有成績，完成後就會出現在這裡。';}catch{if(mode==='paper'&&paperId===id)$('leaderboardContent').textContent='排行榜暫時無法連線；你仍然可以作答、批改和閱讀詳解。';}}
  function grade() {
    if(session.graded)return;
    if(mode==='paper'&&!$('studentForm').reportValidity()) {$('studentForm').scrollIntoView({behavior:'smooth',block:'center'});return;}
    const unanswered=session.ids.filter(id=>!session.answers[id]);if(unanswered.length&&!confirm(`還有 ${unanswered.length} 題未作答，未答會得 0 分。確定交卷嗎？`))return;
    session.graded=true;session.finishedAt=new Date().toISOString();session.student=student();const result=grading();const record={attemptId:session.attemptId,mode,paperId:mode==='paper'?paperId:null,title:session.title,ids:[...session.ids],answers:{...session.answers},student:{...session.student},startedAt:session.startedAt,finishedAt:session.finishedAt,score:result.points,max:result.max,wrong:result.wrong};
    if(!history.some(r=>r.attemptId===record.attemptId)){history.unshift(record);history=history.slice(0,300);storage.set('-history',history);}persist();render();$('resultPanel').scrollIntoView({behavior:'smooth',block:'start'});if(mode==='paper')sendAttempt(session);
  }
  function saveStudent() {const s=student();storage.set('-student',s);$('studentStatus').textContent=s.className&&s.seatNumber&&s.studentName?'資料已記住':'練習卷交卷前需填寫';}
  function downloadFile(text,name,type='text/plain;charset=utf-8') {const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function downloadAttempt() {const r=grading();const lines=[session.title,`${session.student?.className||''} ${session.student?.seatNumber||''} 號 ${session.student?.studentName||''}`,`得分：${fmt(r.points)} / ${r.max}`,`時間：${session.finishedAt}`,...r.items.map((item,i)=>{const q=question(item.id);return `第 ${i+1} 題 ${q.title}：作答 ${item.selected||'未答'}，正解 ${q.answer}，${fmt(item.points)} 分`;})];downloadFile(lines.join('\n'),session.title+'-作答紀錄.txt');}
  async function showRecords() {
    const dialog=$('recordsDialog');dialog.showModal();$('recordsContent').innerHTML='<p class="empty">讀取紀錄中…</p>';let records=[...history];let remote=false;
    try {const res=await api('/api/records');remote=true;for(const r of res.records) if(!records.some(v=>v.attemptId===r.attemptId))records.push({...r,title:`練習卷 ${r.paperId}`,max:100,mode:'paper',sent:true});}catch{}
    records.sort((a,b)=>new Date(b.finishedAt)-new Date(a.finishedAt));
    $('recordsContent').innerHTML=(!remote?'<p class="empty">目前顯示本機紀錄；老師端連線恢復後可再查詢。</p>':'')+(records.length?records.map(r=>`<div class="record"><div class="record-top"><strong>${esc(r.title)}</strong><strong>${fmt(r.score)} / ${r.max}</strong></div><p>${esc(new Date(r.finishedAt).toLocaleString('zh-TW',{timeZone:'Asia/Taipei'}))}・${r.mode==='paper'?(sendStatuses[r.attemptId]?.state==='sent'||r.sent?'已送達老師端':'本機保存，尚未送達'):'補強練習'}</p><p>${r.wrong?.length?`未得滿分 ${r.wrong.length} 題`:'全部答對'}</p>${r.mode==='paper'&&!r.sent&&sendStatuses[r.attemptId]?.state!=='sent'?`<button type="button" data-retry-record="${esc(r.attemptId)}">補送這筆紀錄</button>`:''}</div>`).join(''):'<p class="empty">還沒有紀錄，先完成一次練習。</p>');
  }
  function retryWrong() {const r=grading();if(!r.wrong.length)return;const title=session.title+'・錯題重練';mode='retry';session=newSession(r.wrong,title);onlyWrong=false;persist();render();$('workspace').scrollIntoView({behavior:'smooth',block:'start'});}
  async function start() {
    try {const res=await fetch('bank.json');if(!res.ok)throw Error();bank=await res.json();}
    catch {$('quizForm').innerHTML='<p class="notice">題庫載入失敗，請重新整理頁面。</p>';return;}
    const s=storage.get('-student',{});for(const id of ['className','seatNumber','studentName'])$(id).value=s[id]||'';saveStudent();
    $('paperSelect').innerHTML=bank.papers.map(p=>`<option value="${p.id}">${p.title}</option>`).join('');const groups=[...new Set(bank.types.map(t=>t.category))];$('typeSelect').innerHTML=groups.map(c=>`<optgroup label="${esc(c)}">${bank.types.filter(t=>t.category===c).map(t=>`<option value="${t.id}">${t.id}. ${esc(t.title)}</option>`).join('')}</optgroup>`).join('');
    const savedView=storage.get('-view',{});if(bank.papers.some(p=>p.id===savedView.paperId))paperId=savedView.paperId;if(bank.types.some(t=>t.id===savedView.typeId))typeId=savedView.typeId;mode=savedView.mode==='type'?'type':'paper';$('paperSelect').value=paperId;$('typeSelect').value=typeId;selectSession();
    $('studentForm').addEventListener('input',saveStudent);$('studentForm').addEventListener('submit',e=>e.preventDefault());$('quizForm').addEventListener('submit',e=>e.preventDefault());
    $('paperTab').addEventListener('click',()=>navigate('paper'));$('typeTab').addEventListener('click',()=>navigate('type'));
    $('paperSelect').addEventListener('change',()=>{paperId=$('paperSelect').value;navigate('paper');});$('typeSelect').addEventListener('change',()=>{typeId=Number($('typeSelect').value);navigate('type');});
    $('resetButton').addEventListener('click',()=>{if(!session.graded&&Object.keys(session.answers).length&&!confirm('這次尚未交卷。確定清除本次作答並重新開始嗎？'))return;if(mode==='retry'){session=newSession([...session.ids],session.title);onlyWrong=false;persist();render();}else selectSession(true);});
    $('quizForm').addEventListener('change',e=>{if(session.graded||!e.target.matches('input'))return;const article=e.target.closest('[data-id]');const checked=[...article.querySelectorAll('input:checked')].map(el=>el.value).sort().join('');if(checked)session.answers[article.dataset.id]=checked;else delete session.answers[article.dataset.id];persist();updateProgress();});
    $('questionNav').addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(!b)return;const el=$('question-'+b.dataset.jump);if(el.hidden){onlyWrong=false;$('wrongFilter').setAttribute('aria-pressed','false');document.querySelectorAll('.question').forEach(q=>q.hidden=false);}el.scrollIntoView({behavior:'smooth',block:'start'});});
    $('gradeButton').addEventListener('click',grade);$('wrongFilter').addEventListener('click',()=>{onlyWrong=!onlyWrong;document.querySelectorAll('.question').forEach(el=>el.hidden=onlyWrong&&score(question(el.dataset.id),session.answers[el.dataset.id])===40);$('wrongFilter').setAttribute('aria-pressed',String(onlyWrong));});
    $('expandAll').addEventListener('click',()=>{const all=[...document.querySelectorAll('.solution')];const open=all.some(el=>!el.open);all.forEach(el=>el.open=open);$('expandAll').textContent=open?'收合全部詳解':'展開全部詳解';});$('retryWrong').addEventListener('click',retryWrong);
    $('refreshLeaderboard').addEventListener('click',loadLeaderboard);$('recordsButton').addEventListener('click',showRecords);$('closeRecords').addEventListener('click',()=>$('recordsDialog').close());$('recordsContent').addEventListener('click',async e=>{const b=e.target.closest('[data-retry-record]');if(!b)return;const r=history.find(x=>x.attemptId===b.dataset.retryRecord);b.disabled=true;await sendAttempt(r);showRecords();});
    window.addEventListener('online',()=>{if(session.graded&&mode==='paper')sendAttempt(session);});
    // A small public test seam exposes pure scoring only; it contains no server credentials.
    window.SportsPractice={score,version:bank.version};
  }
  start();
})();
