"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9196],{9196:(O,h,a)=>{a.r(h),a.d(h,{Tab2PageModule:()=>Z});var s=a(7765),m=a(9808),r=a(2382),T=a(581),u=a(2026),f=a(5518),M=a(6815),b=a(2322),v=a(6731),p=a(4854),e=a(1223);const I=function(t){return{fadeIn:t}},y=[{path:"",component:(()=>{class t{constructor(){this.date=(new Date).toISOString(),this.showAnimation=!1}ionViewWillEnter(){const n=(new Date).toISOString();console.debug("la fecha de hoy",n),this.changeDate(n)}changeDate(n){console.debug("la fecha seleccionada",n);const c=localStorage.getItem(n),P=JSON.parse(c);if(P)this.selectedPhase=p.I.get(P.data[0].moonPhase.closest.text),this.selectImg(this.selectedPhase),this.showAnimation=!0,this.removeAnimation();else{const g=new Date(n);g.setHours(0,0,0,0),fetch(`https://api.stormglass.io/v2/astronomy/point?lat=35.51725&lng=58.308743&start=${g.toISOString()}&end=${g.toISOString()}`,{headers:{Authorization:"57a2b6b0-0b2d-11ec-8a89-0242ac130002-57a2b728-0b2d-11ec-8a89-0242ac130002"}}).then(l=>l.json()).then(l=>{if(l.errors)return;const A=JSON.stringify(l);localStorage.setItem(n,A),this.selectedPhase=p.I.get(l.data[0].moonPhase.closest.text),this.selectImg(this.selectedPhase),this.showAnimation=!0,this.removeAnimation()})}}selectImg(n){switch(n){case"Luna llena":default:this.selectedPhaseImg=f.Z;break;case"Cuarto menguante":this.selectedPhaseImg=v.Z;break;case"Cuarto creciente":this.selectedPhaseImg=M.Z;break;case"Luna nueva":this.selectedPhaseImg=b.Z}}removeAnimation(){setTimeout(()=>{this.showAnimation=!1},3e3)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab2"]],decls:10,vars:8,consts:[[3,"fullscreen"],[1,"app-background","search-content"],[1,"moon-phase",3,"ngClass"],[1,"moon-phase-name"],[1,"phase-img",3,"src","hidden"],[1,"day-picker"],["size","cover","placeholder","Elegir fecha","cancelText","cancelar","doneText","Confirmar","displayFormat","DD/MMM/YYYY","presentation","date",3,"ngModel","ngModelChange"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-content",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"ion-label",3),e._uU(4),e.qZA(),e._UZ(5,"ion-img",4),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"ion-label"),e._uU(8,"Seleccionar Fecha"),e.qZA(),e.TgZ(9,"ion-datetime",6),e.NdJ("ngModelChange",function(c){return o.date=c})("ngModelChange",function(c){return o.changeDate(c)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("ngClass",e.VKq(6,I,o.showAnimation)),e.xp6(2),e.Oqu(o.selectedPhase),e.xp6(1),e.Q6J("src",o.selectedPhaseImg)("hidden",!o.selectedPhaseImg),e.xp6(4),e.Q6J("ngModel",o.date))},directives:[s.W2,m.mk,s.Q$,s.Xz,s.x4,s.QI,r.JJ,r.On],styles:[".moon-phase[_ngcontent-%COMP%]{display:grid;place-items:center;height:200px}.moon-phase-name[_ngcontent-%COMP%]{color:#fff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:10px;font-size:22px}.phase-img[_ngcontent-%COMP%]{height:150px;width:150px}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn[_ngcontent-%COMP%]{animation-name:fadeIn;animation-duration:3s;animation-fill-mode:both}.day-picker[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;align-items:center}.day-picker[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{background-color:#fff;padding:10px;font-size:20px;font-weight:600;width:100%}.search-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(y)],u.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Pc,m.ez,r.u5,T.e,C]]}),t})()}}]);