(self.webpackChunkmood_moon=self.webpackChunkmood_moon||[]).push([[3272],{3272:(e,t,o)=>{"use strict";o.r(t),o.d(t,{createSwipeBackGesture:()=>a});var n=o(2377),r=o(9461);o(960);const a=(e,t,o,a,s)=>{const c=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:o,onMove:e=>{a(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,o=e.deltaX/t,r=e.velocityX,a=r>=0&&(r>.2||e.deltaX>t/2),i=(a?1-o:o)*t;let d=0;if(i>5){const e=i/Math.abs(r);d=Math.min(e,540)}s(a,o<=0?.01:(0,n.j)(0,o,.9999),d)}})}}}]);