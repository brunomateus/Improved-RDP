import{c as M,h as ae,a as at,b as nt,d as $e,e as ot,Q as it,f as rt}from"./QBtn.3a8f3fb2.js";import{c as v,h as k,r as z,k as He,o as j,l as U,n as ke,m as Z,g as R,p as ge,i as Se,q as P,t as ne,w as q,u as I,v as lt,x as K,y as de,z as Be,A as fe,B as ye,C as ve,D as ut,E as st,G as Ve,H as ct,I as G,a as dt,d as Fe,J as ee,K as be,L as $,f as _,M as ft,N as te,O as we,P as vt,Q as ht,R as mt,S as pt,F as gt,U as yt}from"./index.fd638cee.js";import{c as bt,u as wt,a as qt,b as Ct,d as kt,e as St,f as zt,g as Tt,h as J,i as Lt,j as _t,k as xt,l as $t,m as he,Q as Bt,n as Ee,o as qe,p as Et}from"./QItem.206eca57.js";var Ot=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const i=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:i.value},ae(o.default))}}),Pt=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const i=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:i.value,role:"toolbar"},ae(o.default))}});function Qt(){const e=z(!He.value);return e.value===!1&&j(()=>{e.value=!0}),{isHydrated:e}}const Ae=typeof ResizeObserver!="undefined",Oe=Ae===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ce=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let i=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),u){const{offsetWidth:c,offsetHeight:l}=u;(c!==t.width||l!==t.height)&&(t={width:c,height:l},o("resize",t))}}const{proxy:f}=R();if(f.trigger=a,Ae===!0){let c;const l=r=>{u=f.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):r!==!0&&Z(()=>{l(!0)})};return j(()=>{l()}),U(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),ke}else{let r=function(){i!==null&&(clearTimeout(i),i=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,ge.passive),l=void 0)},w=function(){r(),u&&u.contentDocument&&(l=u.contentDocument.defaultView,l.addEventListener("resize",a,ge.passive),s())};const{isHydrated:c}=Qt();let l;return j(()=>{Z(()=>{u=f.$el,u&&w()})}),U(r),()=>{if(c.value===!0)return k("object",{class:"q--avoid-card-border",style:Oe.style,tabindex:-1,type:"text/html",data:Oe.url,"aria-hidden":"true",onLoad:w})}}}}),Dt=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=R(),t=Se(ne,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=z(parseInt(e.heightHint,10)),s=z(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||u.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?a.value:0;const d=a.value-t.scroll.value.position;return d>0?d:0}),l=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),b=v(()=>{const d=t.rows.value.top,T={};return d[0]==="l"&&t.left.space===!0&&(T[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(T[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function h(d,T){t.update("header",d,T)}function m(d,T){d.value!==T&&(d.value=T)}function B({height:d}){m(a,d),h("size",d)}function S(d){r.value===!0&&m(s,!0),i("focusin",d)}q(()=>e.modelValue,d=>{h("space",d),m(s,!0),t.animate()}),q(c,d=>{h("offset",d)}),q(()=>e.reveal,d=>{d===!1&&m(s,e.modelValue)}),q(s,d=>{t.animate(),i("reveal",d)}),q(t.scroll,d=>{e.reveal===!0&&m(s,d.direction==="up"||d.position<=e.revealOffset||d.position-d.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",c.value),U(()=>{t.instances.header===y&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const d=at(o.default,[]);return e.elevated===!0&&d.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),d.push(k(Ce,{debounce:0,onResize:B})),k("header",{class:w.value,style:b.value,onFocusin:S},d)}}});const ze={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Mt=Object.keys(ze);ze.all=!0;function Pe(e){const o={};for(const i of Mt)e[i]===!0&&(o[i]=!0);return Object.keys(o).length===0?ze:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Ht=["INPUT","TEXTAREA"];function Qe(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&Ht.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function me(e,o,i){const u=ye(e);let t,a=u.left-o.event.x,s=u.top-o.event.y,f=Math.abs(a),c=Math.abs(s);const l=o.direction;l.horizontal===!0&&l.vertical!==!0?t=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?t=s<0?"up":"down":l.up===!0&&s<0?(t="up",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.down===!0&&s>0?(t="down",f>c&&(l.left===!0&&a<0?t="left":l.right===!0&&a>0&&(t="right"))):l.left===!0&&a<0?(t="left",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down"))):l.right===!0&&a>0&&(t="right",f<c&&(l.up===!0&&s<0?t="up":l.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&i===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(u.left-=a,f=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:u,direction:t,isFirst:o.event.isFirst,isFinal:i===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:a,y:s},delta:{x:u.left-o.event.lastX,y:u.top-o.event.lastY}}}}let Vt=0;var pe=nt({name:"touch-pan",beforeMount(e,{value:o,modifiers:i}){if(i.mouse!==!0&&I.has.touch!==!0)return;function u(a,s){i.mouse===!0&&s===!0?ut(a):(i.stop===!0&&fe(a),i.prevent===!0&&Be(a))}const t={uid:"qvtp_"+Vt++,handler:o,modifiers:i,direction:Pe(i),noop:ke,mouseStart(a){Qe(a,t)&&lt(a)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Qe(a,t)){const s=a.target;K(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(I.is.firefox===!0&&de(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Be(l),a.cancelBubble===!0&&fe(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:l}}fe(a)}const{left:f,top:c}=ye(a);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(a){if(t.event===void 0)return;const s=ye(a),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=a;const l=t.event.mouse===!0,r=()=>{u(a,l);let h;i.preserveCursor!==!0&&i.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),bt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),l===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:h,synthetic:m}=me(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||l===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(a);return}const w=Math.abs(f),b=Math.abs(c);w!==b&&(t.direction.horizontal===!0&&w>b||t.direction.vertical===!0&&w<b||t.direction.up===!0&&w<b&&c<0||t.direction.down===!0&&w<b&&c>0||t.direction.left===!0&&w>b&&f<0||t.direction.right===!0&&w>b&&f>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ve(t,"temp"),I.is.firefox===!0&&de(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(me(a===void 0?t.lastEvt:a,t).payload);const{payload:f}=me(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}I.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const i=e.__qtouchpan;i!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&i.end(),i.handler=o.value),i.direction=Pe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ve(o,"main"),ve(o,"temp"),I.is.firefox===!0&&de(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});const De=150;var Ft=M({name:"QDrawer",inheritAttrs:!1,props:{...wt,...qt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ct,"onLayout","miniState"],setup(e,{slots:o,emit:i,attrs:u}){const t=R(),{proxy:{$q:a}}=t,s=kt(e,a),{preventBodyScroll:f}=Lt(),{registerTimeout:c,removeTimeout:l}=St(),r=Se(ne,P);if(r===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,b=null,h;const m=z(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=v(()=>e.mini===!0&&m.value!==!0),S=v(()=>B.value===!0?e.miniWidth:e.width),y=z(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),d=v(()=>e.persistent!==!0&&(m.value===!0||Re.value===!0));function T(n,p){if(H(),n!==!1&&r.animate(),E(0),m.value===!0){const L=r.instances[X.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),Q(1),r.isContainer.value!==!0&&f(!0)}else Q(0),n!==!1&&ue(!1);c(()=>{n!==!1&&ue(!0),p!==!0&&i("show",n)},De)}function g(n,p){W(),n!==!1&&r.animate(),Q(0),E(F.value*S.value),se(),p!==!0?c(()=>{i("hide",n)},De):l()}const{show:C,hide:x}=zt({showing:y,hideOnRouteChange:d,handleShow:T,handleHide:g}),{addToHistory:H,removeFromHistory:W}=Tt(y,x,d),V={belowBreakpoint:m,hide:x},O=v(()=>e.side==="right"),F=v(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),Te=z(0),A=z(!1),oe=z(!1),Le=z(S.value*F.value),X=v(()=>O.value===!0?"left":"right"),ie=v(()=>y.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),re=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(O.value?"R":"L")!==-1||a.platform.is.ios===!0&&r.isContainer.value===!0),N=v(()=>e.overlay===!1&&y.value===!0&&m.value===!1),Re=v(()=>e.overlay===!0&&y.value===!0&&m.value===!1),We=v(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&A.value===!1?" hidden":"")),Ne=v(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),_e=v(()=>O.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Ie=v(()=>O.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),je=v(()=>{const n={};return r.header.space===!0&&_e.value===!1&&(re.value===!0?n.top=`${r.header.offset}px`:r.header.space===!0&&(n.top=`${r.header.size}px`)),r.footer.space===!0&&Ie.value===!1&&(re.value===!0?n.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(n.bottom=`${r.footer.size}px`)),n}),Ue=v(()=>{const n={width:`${S.value}px`,transform:`translateX(${Le.value}px)`};return m.value===!0?n:Object.assign(n,je.value)}),Xe=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ye=v(()=>`q-drawer q-drawer--${e.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(re.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(_e.value===!0?" q-drawer--top-padding":""))),Ke=v(()=>{const n=a.lang.rtl===!0?e.side:X.value;return[[pe,et,void 0,{[n]:!0,mouse:!0}]]}),Ge=v(()=>{const n=a.lang.rtl===!0?X.value:e.side;return[[pe,xe,void 0,{[n]:!0,mouse:!0}]]}),Je=v(()=>{const n=a.lang.rtl===!0?X.value:e.side;return[[pe,xe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function le(){tt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(m,n=>{n===!0?(w=y.value,y.value===!0&&x(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(E(0),Q(0),se()):C(!1))}),q(()=>e.side,(n,p)=>{r.instances[p]===V&&(r.instances[p]=void 0,r[p].space=!1,r[p].offset=0),r.instances[n]=V,r[n].size=S.value,r[n].space=N.value,r[n].offset=ie.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&le()}),q(()=>e.behavior+e.breakpoint,le),q(r.isContainer,n=>{y.value===!0&&f(n!==!0),n===!0&&le()}),q(r.scrollbarWidth,()=>{E(y.value===!0?0:void 0)}),q(ie,n=>{D("offset",n)}),q(N,n=>{i("onLayout",n),D("space",n)}),q(O,()=>{E()}),q(S,n=>{E(),ce(e.miniToOverlay,n)}),q(()=>e.miniToOverlay,n=>{ce(n,S.value)}),q(()=>a.lang.rtl,()=>{E()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ze(),r.animate())}),q(B,n=>{i("miniState",n)});function E(n){n===void 0?Z(()=>{n=y.value===!0?0:S.value,E(F.value*n)}):(r.isContainer.value===!0&&O.value===!0&&(m.value===!0||Math.abs(n)===S.value)&&(n+=F.value*r.scrollbarWidth.value),Le.value=n)}function Q(n){Te.value=n}function ue(n){const p=n===!0?"remove":r.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function Ze(){b!==null&&clearTimeout(b),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,b=setTimeout(()=>{b=null,oe.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function et(n){if(y.value!==!1)return;const p=S.value,L=J(n.distance.x,0,p);if(n.isFinal===!0){L>=Math.min(75,p)===!0?C():(r.animate(),Q(0),E(F.value*p)),A.value=!1;return}E((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(p-L,0):Math.min(0,L-p)),Q(J(L/p,0,1)),n.isFirst===!0&&(A.value=!0)}function xe(n){if(y.value!==!0)return;const p=S.value,L=n.direction===e.side,Y=(a.lang.rtl===!0?L!==!0:L)?J(n.distance.x,0,p):0;if(n.isFinal===!0){Math.abs(Y)<Math.min(75,p)===!0?(r.animate(),Q(1),E(0)):x(),A.value=!1;return}E(F.value*Y),Q(J(1-Y/p,0,1)),n.isFirst===!0&&(A.value=!0)}function se(){f(!1),ue(!0)}function D(n,p){r.update(e.side,n,p)}function tt(n,p){n.value!==p&&(n.value=p)}function ce(n,p){D("size",n===!0?e.miniWidth:p)}return r.instances[e.side]=V,ce(e.miniToOverlay,S.value),D("space",N.value),D("offset",ie.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),j(()=>{i("onLayout",N.value),i("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(y.value===!0?T:g)(!1,!0)};if(r.totalWidth.value!==0){Z(n);return}h=q(r.totalWidth,()=>{h(),h=void 0,y.value===!1&&e.showIfAbove===!0&&m.value===!1?C(!1):n()})}),U(()=>{h!==void 0&&h(),b!==null&&(clearTimeout(b),b=null),y.value===!0&&se(),r.instances[e.side]===V&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(st(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ke.value)),n.push($e("div",{ref:"backdrop",class:We.value,style:Ne.value,"aria-hidden":"true",onClick:x},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Je.value)));const p=B.value===!0&&o.mini!==void 0,L=[k("div",{...u,key:""+p,class:[Xe.value,u.class]},p===!0?o.mini():ae(o.default))];return e.elevated===!0&&y.value===!0&&L.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push($e("aside",{ref:"content",class:Ye.value,style:Ue.value},L,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ge.value)),k("div",{class:"q-drawer-container"},n)}}}),At=M({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:i}}=R(),u=Se(ne,P);if(u===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ve(ct,!0);const t=v(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>k("div",{class:"q-page-container",style:t.value},ae(o.default))}});const{passive:Me}=ge,Rt=["both","horizontal","vertical"];var Wt=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Rt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;q(()=>e.scrollTarget,()=>{c(),f()});function s(){u!==null&&u();const w=Math.max(0,xt(t)),b=$t(t),h={top:w-i.position.top,left:b-i.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";i.position={top:w,left:b},i.directionChanged=i.direction!==m,i.delta=h,i.directionChanged===!0&&(i.direction=m,i.inflectionPoint=i.position),o("scroll",{...i})}function f(){t=_t(a,e.scrollTarget),t.addEventListener("scroll",l,Me),l(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",l,Me),t=void 0)}function l(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[b,h]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{h(b),u=null}}}const{proxy:r}=R();return q(()=>r.$q.lang.rtl,s),j(()=>{a=r.$el.parentNode,f()}),U(()=>{u!==null&&u(),c()}),Object.assign(r,{trigger:l,getPosition:()=>i}),ke}}),Nt=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:i}){const{proxy:{$q:u}}=R(),t=z(null),a=z(u.screen.height),s=z(e.container===!0?0:u.screen.width),f=z({position:0,direction:"down",inflectionPoint:0}),c=z(0),l=z(He.value===!0?0:he()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),b=v(()=>l.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),h=v(()=>l.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function m(g){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};f.value=C,e.onScroll!==void 0&&i("scroll",C)}}function B(g){const{height:C,width:x}=g;let H=!1;a.value!==C&&(H=!0,a.value=C,e.onScrollHeight!==void 0&&i("scrollHeight",C),y()),s.value!==x&&(H=!0,s.value=x),H===!0&&e.onResize!==void 0&&i("resize",g)}function S({height:g}){c.value!==g&&(c.value=g,y())}function y(){if(e.container===!0){const g=a.value>c.value?he():0;l.value!==g&&(l.value=g)}}let d=null;const T={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:l,totalWidth:v(()=>s.value+l.value),rows:v(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:G({size:0,offset:0,space:!1}),right:G({size:300,offset:0,space:!1}),footer:G({size:0,offset:0,space:!1}),left:G({size:300,offset:0,space:!1}),scroll:f,animate(){d!==null?clearTimeout(d):document.body.classList.add("q-body--layout-animate"),d=setTimeout(()=>{d=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,C,x){T[g][C]=x}};if(Ve(ne,T),he()>0){let x=function(){g=null,C.classList.remove("hide-scrollbar")},H=function(){if(g===null){if(C.scrollHeight>u.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(x,300)},W=function(V){g!==null&&V==="remove"&&(clearTimeout(g),x()),window[`${V}EventListener`]("resize",H)},g=null;const C=document.body;q(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),dt(()=>{W("remove")})}return()=>{const g=ot(o.default,[k(Wt,{onScroll:m}),k(Ce,{onResize:B})]),C=k("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Ce,{onResize:S}),k("div",{class:"absolute-full",style:b.value},[k("div",{class:"scroll",style:h.value},[C])])]):C}}});const It=Fe({name:"EssentialLink",__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(o,i)=>(ee(),be(Bt,{clickable:"",tag:"a",target:"_blank",href:o.link},{default:$(()=>[o.icon?(ee(),be(Ee,{key:0,avatar:""},{default:$(()=>[_(it,{name:o.icon},null,8,["name"])]),_:1})):ft("",!0),_(Ee,null,{default:$(()=>[_(qe,null,{default:$(()=>[te(we(o.title),1)]),_:1}),_(qe,{caption:""},{default:$(()=>[te(we(o.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}}),Kt=Fe({name:"MainLayout",__name:"MainLayout",setup(e){const o=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],i=z(!1);function u(){i.value=!i.value}return(t,a)=>{const s=vt("router-view");return ee(),be(Nt,{view:"lHh Lpr lFf"},{default:$(()=>[_(Dt,{elevated:""},{default:$(()=>[_(Pt,null,{default:$(()=>[_(rt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),_(Ot,null,{default:$(()=>[te(" Improved RDP ")]),_:1}),ht("div",null,"Quasar v"+we(t.$q.version),1)]),_:1})]),_:1}),_(Ft,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=f=>i.value=f),"show-if-above":"",bordered:""},{default:$(()=>[_(Et,null,{default:$(()=>[_(qe,{header:""},{default:$(()=>[te(" Essential Links ")]),_:1}),(ee(),mt(gt,null,pt(o,f=>_(It,yt({key:f.title},f),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),_(At,null,{default:$(()=>[_(s)]),_:1})]),_:1})}}});export{Kt as default};