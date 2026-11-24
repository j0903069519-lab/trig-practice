'use strict';
function bindQuestionPager(surface,previous,next,move) {
  previous.addEventListener('click',()=>move(-1));
  next.addEventListener('click',()=>move(1));
  document.addEventListener('keydown',e=>{
    if(e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey ||
      document.querySelector('dialog[open]') ||
      e.target.closest('textarea,select,input:not([type=radio]),[contenteditable=true]'))return;
    if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
      e.preventDefault();move(e.key==='ArrowLeft'?-1:1);
    }
  });
  let start=null;
  surface.addEventListener('touchstart',e=>{
    start=e.touches.length===1&&!e.target.closest('textarea,[data-grid],input:not([type=radio]),select')?e.touches[0]:null;
  },{passive:true});
  surface.addEventListener('touchcancel',()=>{start=null;});
  surface.addEventListener('touchend',e=>{
    const end=e.changedTouches[0],origin=start;start=null;
    if(!origin||!end||end.identifier!==origin.identifier)return;
    const dx=end.clientX-origin.clientX,dy=end.clientY-origin.clientY;
    if(Math.abs(dx)<48||Math.abs(dx)<1.6*Math.abs(dy))return;
    if(e.cancelable)e.preventDefault();
    move(dx<0?1:-1);
  },{passive:false});
}
function alignQuestionPager() {
  const bar=document.getElementById('questionPager');
  const header=document.querySelector('.topbar');
  const y=scrollY+bar.getBoundingClientRect().top-header.getBoundingClientRect().height-5;
  window.scrollTo({top:Math.max(0,y),behavior:'instant'});
}
