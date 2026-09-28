/* Transcribed from the supplied 109 建國中學 3B first examination.
   The first two PDF pages are questions; answer pages are not served. */
(function(root) {
  const m = s => `\\(${s}\\)`;
  const questions = [
    { section:'單選', number:1, points:6, stem:`試問有多少個實數 ${m('x')} 滿足 ${m('\\frac{\\pi}{2}\\le x\\le\\frac{3\\pi}{2}')} 且 ${m('\\cos x^\\circ\\le\\cos x')}？`, options:['0 個','1 個','2 個','4 個','無窮多個'], answer:'A', solution:`在這個範圍，${m('\\cos x\\le0')}；但角度 ${m('x^\\circ')} 約介於 1.57° 與 4.71°，故 ${m('\\cos x^\\circ>0')}，沒有符合的實數。` },
    { section:'單選', number:2, points:6, stem:`如圖，兩同心圓的半徑分別是 3 和 5，且弧 ${m('\\widehat{AB}')} 的長度是 5，求陰影部分的面積。`, figure:'rings', alt:'兩同心圓，半徑 3、5，外圓弧 AB 長 5，陰影為兩扇形之差。', options:['8','16',m('4\\pi'),m('8\\pi'),m('\\frac{20\\pi}{3}')], answer:'A', solution:`圓心角為 ${m('5/5=1')} 弳。陰影面積 ${m('\\frac12(5^2-3^2)\\times1=8')}。` },
    { section:'單選', number:3, points:6, stem:'牆上有一時鐘，其半徑為 50 公分。若早上 8 點整小瑛起床，則小瑛發現時針與分針重合時，是經過幾分鐘後？', options:['43 分鐘',m('\\frac{480}{11}')+' 分鐘','44 分鐘',m('\\frac{490}{11}')+' 分鐘','45 分鐘'], answer:'B', solution:`設經過 ${m('t')} 分鐘，則 ${m('240+\\frac t2=6t')}，所以 ${m('t=\\frac{480}{11}')}。` },
    { section:'單選', number:4, points:6, stem:`化簡 ${m('\\sqrt{1+\\sin340^\\circ}-\\sqrt{1-\\sin340^\\circ}')} 之值。`, options:[m('2\\cos10^\\circ'),m('2\\sin10^\\circ'),m('-2\\cos10^\\circ'),m('-2\\sin10^\\circ'),'以上皆非'], answer:'D', solution:`利用 ${m('1\\pm\\sin340^\\circ=(\\sin170^\\circ\\pm\\cos170^\\circ)^2')}，原式為 ${m('|\\sin10^\\circ-\\cos10^\\circ|-|\\sin10^\\circ+\\cos10^\\circ|=-2\\sin10^\\circ')}。` },
    { section:'多選', number:1, points:11, stem:`如圖，以邊長為 4 的正三角形 ${m('ABC')} 之每邊為直徑作三個半圓，兩兩分別交於 ${m('D,E,F')} 點。試選出正確的選項。`, figure:'semicircles', alt:'正三角形 ABC 內三個半圓兩兩交於 D、E、F，陰影為中央曲邊三角形。', options:[`弧 ${m('\\widehat{AF}')} 長是 ${m('\\frac\\pi3')}`,`扇形 ${m('AFE')} 的面積是 ${m('\\frac{2\\pi}{3}')}`,`${m('\\triangle DEF')} 的面積是 ${m('\\sqrt3')}`,`套色區域的周長是 ${m('\\pi')}`,`套色區域的面積是 ${m('2\\pi-2\\sqrt3')}`], answer:'BCE', solution:`半徑為 2，相關圓心角為 ${m('\\pi/3')}。弧 AF 長 ${m('2\\pi/3')}；扇形面積 ${m('2\\pi/3')}；△DEF 為邊長 2 的正三角形，面積 ${m('\\sqrt3')}。套色區域周長 ${m('2\\pi')}，面積 ${m('3(2\\pi/3-\\sqrt3)+\\sqrt3=2\\pi-2\\sqrt3')}。` },
    { section:'多選', number:2, points:11, stem:`如圖為三角函數 ${m('y=3\\sin(ax-b)')} 的部分圖形，其中 ${m('a>0')}，下列敘述哪些正確？`, figure:'sine', alt:'函數在 B(0,-3) 取谷值，在 x=π/3 取峰值 3，於 π/6、π/2 與 C 處穿過 x 軸。', options:[m('B(0,-3)'),m('b=\\frac\\pi6'),m('C(\\frac{5\\pi}{6},0)'),`y 的週期為 ${m('\\frac{2\\pi}{3}')}`,`其圖形可由 ${m('y=3\\sin3x')} 向右平移 ${m('\\frac\\pi6')} 而得`], answer:'ACDE', solution:`週期為 ${m('2\\pi/3')}，所以 ${m('a=3')}。由 B 得 ${m('b=\\pi/2+2k\\pi')}。因此 C 為 ${m('(5\\pi/6,0)')}，且 ${m('3\\sin[3(x-\\pi/6)]=3\\sin(3x-\\pi/2)')}。` },
    { section:'填充', number:1, points:6, stem:`如圖，${m('\\overline{AB}=20')}，以 AB 為直徑的半圓，C 為弧 AB 的中點。今以 B 為圓心、AB 為半徑作一圓弧，與直線 BC 交於 D 點，求灰色部分的面積。`, figure:'area', alt:'AB 為半圓直徑，C 為弧中點，D 在 BC 延長線上且 BD=BA；陰影含 AD 與 AC 間、CB 弓形。', fields:['面積'], expected:['50*pi-100'], display:m('50\\pi-100'), solution:`弓形 AC 與弓形 BC 面積相等，故所求為扇形 ABD 減去三角形 ABC：${m('\\frac12\\times20^2\\times\\frac\\pi4-\\frac12\\times(10\\sqrt2)^2=50\\pi-100')}。` },
    { section:'填充', number:2, points:6, stem:`已知扇形的圓心角為 ${m('2\\theta')}，半徑為 ${m('R')}，其內切圓半徑為 ${m('r')}，求 ${m('r')}。`, fields:['r 的式子（使用 R、theta）'], expected:['R*sin(theta)/(1+sin(theta))'], symbolic:true, display:m('\\frac{R\\sin\\theta}{1+\\sin\\theta}'), solution:`內切圓圓心位於角平分線上，由直角三角形得 ${m('r/(R-r)=\\sin\\theta')}，解得 ${m('r=R\\sin\\theta/(1+\\sin\\theta)')}。` },
    { section:'填充', number:3, points:6, stem:`如圖，直圓錐底面直徑 ${m('\\overline{BC}=4')}，且 ${m('\\overline{AB}=12')}。若一隻螞蟻由 C 點沿錐面繞一圈到 D 點，已知 ${m('\\overline{AD}=6')}，求最短路徑長。`, figure:'cone', alt:'圓錐頂點 A，底面直徑 BC=4，母線 AB=AC=12，D 在 AC 上，AD=6。', fields:['最短路徑長'], expected:['6*sqrt(3)'], display:m('6\\sqrt3'), solution:`展開圖扇形弧長為 ${m('4\\pi')}，圓心角為 ${m('4\\pi/12=\\pi/3')}。由餘弦定理，最短距離為 ${m('\\sqrt{12^2+6^2-2\\times12\\times6\\cos(\\pi/3)}=6\\sqrt3')}。` },
    { section:'填充', number:4, points:6, stem:`將 ${m('y=\\sin x')} 水平伸縮為 ${m('1/3')} 倍，再向左平移 1 單位，再鉛直伸縮為 2 倍，得到 ${m('y=a\\sin(bx+c)+d')}。求實數序組 ${m('(a,b,c,d)')}。`, fields:['a','b','c','d'], expected:['2','3','3','0'], tuple:true, display:m('(2,3,3,0)'), solution:`依序得到 ${m('\\sin3x')}、${m('\\sin[3(x+1)]')}、${m('2\\sin(3x+3)')}，所以 ${m('(a,b,c,d)=(2,3,3,0)')}。` },
    { section:'填充', number:5, points:6, stem:`設 ${m('0\\le x\\le2\\pi')}，若 ${m('\\sin\\frac x2\\ge\\frac12')}，求 x 的範圍（填入上下界，包含端點）。`, fields:['下界','上界'], expected:['pi/3','5*pi/3'], interval:true, display:m('\\frac\\pi3\\le x\\le\\frac{5\\pi}{3}'), solution:`由 ${m('0\\le x/2\\le\\pi')} 與 ${m('\\sin(x/2)\\ge1/2')}，得 ${m('\\pi/6\\le x/2\\le5\\pi/6')}，故 ${m('\\pi/3\\le x\\le5\\pi/3')}。` },
    { section:'填充', number:6, points:6, stem:`方程式 ${m('12\\sin x=x')} 共有多少個實數解？`, fields:['實數解個數'], expected:['7'], display:'7', solution:`等同求 ${m('y=\\sin x')} 與 ${m('y=x/12')} 的交點。正根只可能出現在 (0,π)、(2π,3π)，分別有 1、2 個；負根由奇函數對稱亦有 3 個，再加 x=0，共 7 個。` },
    { section:'填充', number:7, points:6, stem:'有一輪子，半徑 50 公分，讓它在地上滾動 200 公分，則輪子繞軸轉動幾度？（度以下四捨五入）', fields:['角度（度）'], expected:['229'], display:'229°', solution:`由弧長公式得 ${m('\\theta=200/50=4')} 弳，換算 ${m('4\\times180/\\pi\\approx229.18^\\circ')}，四捨五入為 229°。` },
    { section:'填充', number:8, points:6, stem:'皮帶傳動是利用張緊在圓輪上的皮帶進行運動或動力傳遞的一種機械傳動。已知大小兩圓輪的半徑分別為 2 公尺與 4 公尺，兩圓心相距 12 公尺，以皮帶交叉環繞兩輪，求皮帶長度。', figure:'belt', alt:'半徑 4 與 2 的兩圓輪，圓心距 12，以交叉皮帶連接。', fields:['皮帶長（公尺）'], expected:['8*pi+12*sqrt(3)'], display:m('8\\pi+12\\sqrt3'), solution:`公內切線長為 ${m('\\sqrt{12^2-(4+2)^2}=6\\sqrt3')}，共有兩段。兩輪的包覆角均為 ${m('4\\pi/3')}，弧長和為 ${m('(4+2)\\times4\\pi/3=8\\pi')}。總長 ${m('8\\pi+12\\sqrt3')}。` },
    { section:'填充', number:9, points:6, stem:`比較 ${m('a=\\sin3,\\ b=\\sin4,\\ c=\\sin5,\\ d=\\sin6,\\ e=\\sin7')} 的大小（由大到小）。`, fields:['由大到小，例如 a>b>c>d>e'], expected:['e>a>d>b>c'], order:true, display:'e > a > d > b > c', solution:'a≈0.141，b≈−0.757，c≈−0.959，d≈−0.279，e≈0.657，因此 e > a > d > b > c。' }
  ];
  // A bounded arithmetic parser: no eval, arbitrary names, assignments or JS.
  function calculate(source, variables={}) {
    let s=String(source).normalize('NFKC').toLowerCase().replace(/[−–]/g,'-').replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/π/g,'pi').replace(/θ/g,'theta').replace(/√/g,'sqrt').replace(/\s+/g,'');
    if (!s || s.length>160) throw Error('請輸入數字或算式');
    const tokens=s.match(/(?:\d+(?:\.\d*)?|\.\d+)|sqrt|sin|cos|theta|pi|r|[()+\-*/^]/g)||[];
    if(tokens.join('')!==s) throw Error('算式格式無法辨識');
    let p=0;
    function atom(){const t=tokens[p++];if(t==='('){const n=expression();if(tokens[p++]!==')')throw Error('括號不成對');return n;}if(t==='sqrt'||t==='sin'||t==='cos')return Math[t](atom());if(t==='pi')return Math.PI;if(t==='r'||t==='theta'){if(!Object.hasOwn(variables,t))throw Error('此題不使用變數');return variables[t];}if(t&&/^(\d|\.)/.test(t))return Number(t);throw Error('算式格式無法辨識');}
    function power(){let n=atom();if(tokens[p]==='^'){p++;n=n**unary();}return n;}
    function unary(){if(tokens[p]==='+'){p++;return unary();}if(tokens[p]==='-'){p++;return -unary();}return power();}
    function term(){let n=unary();while(p<tokens.length){const t=tokens[p];if(t==='*'||t==='/'){p++;const v=unary();n=t==='*'?n*v:n/v;}else if(t==='('||/^(sqrt|sin|cos|theta|pi|r|\d|\.)/.test(t)){n*=unary();}else break;}return n;}
    function expression(){let n=term();while(tokens[p]==='+'||tokens[p]==='-'){const t=tokens[p++],v=term();n=t==='+'?n+v:n-v;}return n;}
    const value=expression();if(p!==tokens.length||!Number.isFinite(value))throw Error('請檢查算式與分母');return value;
  }
  const close=(a,b)=>Math.abs(a-b)<=1e-8*Math.max(1,Math.abs(b));
  function assess(q,values){
    if(q.options){const actual=[...new Set(values)].sort().join('');const diff='ABCDE'.split('').filter(x=>actual.includes(x)!==q.answer.includes(x)).length;const score=q.section==='多選'?(actual?Math.max(0,11-3*diff):0):(actual===q.answer?6:0);return {score,correct:score===q.points};}
    if(values.every(v=>!v.trim()))return {score:0,correct:false};
    if(q.order){let s=values[0].normalize('NFKC').toLowerCase().replace(/\s/g,'');if(/^[a-e](<[a-e]){4}$/.test(s))s=s.split('<').reverse().join('>');if(!/^[a-e](>[a-e]){4}$/.test(s)||new Set(s.split('>')).size!==5)throw Error('請用 > 排列五個字母，例如 a>b>c>d>e');const correct=s===q.expected[0];return{score:correct?6:0,correct};}
    if(q.tuple && values.every(v=>v.trim())){
      const [a,b,c,d]=values.map(v=>calculate(v));
      const correct=[.13,.57,1.11,1.93,2.71,4.37].every(x=>close(a*Math.sin(b*x+c)+d,2*Math.sin(3*x+3)));
      return {score:correct?6:0,correct};
    }
    let correct=true;
    // Check every supplied field even if an earlier value is wrong.
    values.forEach((v,i)=>{if(!v.trim()){correct=false;return;}const samples=q.symbolic?[{r:2.3,theta:.31},{r:7,theta:.73},{r:13.7,theta:1.17},{r:4.8,theta:.51}]:[{}];for(const sample of samples){const a=calculate(v,sample),b=calculate(q.expected[i],sample);if(!close(a,b))correct=false;}});
    return {score:correct?6:0,correct};
  }
  const api={title:'建國中學 109 上・高二數學 3B 第一次月考',id:'ck109-3b-first-v1',questions,calculate,assess};
  if(typeof module!=='undefined')module.exports=api;else root.CkExam=api;
})(typeof window==='undefined'?globalThis:window);
