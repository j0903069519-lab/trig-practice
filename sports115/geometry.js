'use strict';
// A unit grid viewed from (-6,-6) to (6,6). Clip the shaded half-plane
// against the square first so vertical lines and either orientation work.
function coordinateFigure(spec) {
  if (!spec) return '';
  const bounds=[[-6,-6],[6,-6],[6,6],[-6,6]];
  const pixel=([x,y])=>[90+12*x,90-12*y];
  const line=(p,q,style)=>{
    const [x,y]=pixel(p),[u,v]=pixel(q);
    return `<line x1="${x}" y1="${y}" x2="${u}" y2="${v}" ${style}/>`;
  };
  let abc=spec.boundary;
  if (spec.points) {
    const [[x,y],[u,v]]=spec.points;
    abc=[v-y,x-u,v*x-y*u];
  }
  const [a,b,c]=abc;
  const value=([x,y])=>a*x+b*y-c;
  const intersections=[],polygon=[];
  for(let i=0;i<4;i++){
    const p=bounds[i], q=bounds[(i+1)%4], f=value(p), g=value(q);
    if ((spec.less?f:-f)<=0) polygon.push(p);
    if (f===0) intersections.push(p);
    if (f*g<0) {
      const z=[p[0]+(q[0]-p[0])*f/(f-g),p[1]+(q[1]-p[1])*f/(f-g)];
      polygon.push(z); intersections.push(z);
    }
  }
  const label=spec.points?'直線通過 '+spec.points.map(p=>'('+p.join(',')+')').join(' 與 '):
    `邊界 ${a}x + (${b})y = ${c}，${spec.closed?'實線':'虛線'}`+
    ('less' in spec ? (spec.less?'，陰影位於左式較小的一側':'，陰影位於左式較大的一側'):'');
  let picture='';
  if ('less' in spec) picture+=`<polygon points="${polygon.map(p=>pixel(p).join(',')).join(' ')}" fill="#bdbdbd"/>`;
  for(let i=-6;i<=6;i++){
    const style=i===0?'stroke="#545454" stroke-width="1.3"':'stroke="#b5b5b5" stroke-width=".55"';
    picture+=line([i,-6],[i,6],style)+line([-6,i],[6,i],style);
  }
  if(intersections.length>=2) picture+=line(intersections[0],intersections[1],
    'stroke="#111" stroke-width="2.5" '+(spec.closed===false?'stroke-dasharray="5 3"':''));
  for(const p of spec.points||[]){
    const [x,y]=pixel(p);picture+=`<circle cx="${x}" cy="${y}" r="2.9" fill="#111"/>`;
  }
  return `<svg class="coordinate-figure" viewBox="0 0 180 180" role="img" aria-label="${label}"><rect width="180" height="180" fill="white"/>${picture}<g fill="#222" font-size="10"><text x="166" y="94">x</text><text x="94" y="14">y</text><text x="79" y="103">O</text><text x="100" y="103">1</text><text x="80" y="79">1</text></g></svg>`;
}
