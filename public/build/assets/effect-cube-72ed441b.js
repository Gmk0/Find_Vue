import{e as A,d as y}from"./autoplay-6e70b757.js";function D(E){let{swiper:e,extendParams:P,on:z}=E;P({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const S=(t,a,r)=>{let s=r?t.querySelector(".swiper-slide-shadow-left"):t.querySelector(".swiper-slide-shadow-top"),l=r?t.querySelector(".swiper-slide-shadow-right"):t.querySelector(".swiper-slide-shadow-bottom");s||(s=y("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"left":"top"}`.split(" ")),t.append(s)),l||(l=y("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"right":"bottom"}`.split(" ")),t.append(l)),s&&(s.style.opacity=Math.max(-a,0)),l&&(l.style.opacity=Math.max(a,0))};A({effect:"cube",swiper:e,on:z,setTranslate:()=>{const{el:t,wrapperEl:a,slides:r,width:s,height:l,rtlTranslate:g,size:o,browser:$}=e,c=e.params.cubeEffect,h=e.isHorizontal(),q=e.virtual&&e.params.virtual.enabled;let u=0,i;c.shadow&&(h?(i=e.wrapperEl.querySelector(".swiper-cube-shadow"),i||(i=y("div","swiper-cube-shadow"),e.wrapperEl.append(i)),i.style.height=`${s}px`):(i=t.querySelector(".swiper-cube-shadow"),i||(i=y("div","swiper-cube-shadow"),t.append(i))));for(let w=0;w<r.length;w+=1){const m=r[w];let d=w;q&&(d=parseInt(m.getAttribute("data-swiper-slide-index"),10));let n=d*90,f=Math.floor(n/360);g&&(n=-n,f=Math.floor(-n/360));const b=Math.max(Math.min(m.progress,1),-1);let p=0,v=0,x=0;d%4===0?(p=-f*4*o,x=0):(d-1)%4===0?(p=0,x=-f*4*o):(d-2)%4===0?(p=o+f*4*o,x=o):(d-3)%4===0&&(p=-o,x=3*o+o*4*f),g&&(p=-p),h||(v=p,p=0);const T=`rotateX(${h?0:-n}deg) rotateY(${h?n:0}deg) translate3d(${p}px, ${v}px, ${x}px)`;b<=1&&b>-1&&(u=d*90+b*90,g&&(u=-d*90-b*90)),m.style.transform=T,c.slideShadows&&S(m,b,h)}if(a.style.transformOrigin=`50% 50% -${o/2}px`,a.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(h)i.style.transform=`translate3d(0px, ${s/2+c.shadowOffset}px, ${-s/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const w=Math.abs(u)-Math.floor(Math.abs(u)/90)*90,m=1.5-(Math.sin(w*2*Math.PI/360)/2+Math.cos(w*2*Math.PI/360)/2),d=c.shadowScale,n=c.shadowScale/m,f=c.shadowOffset;i.style.transform=`scale3d(${d}, 1, ${n}) translate3d(0px, ${l/2+f}px, ${-l/2/n}px) rotateX(-90deg)`}const M=($.isSafari||$.isWebView)&&$.needPerspectiveFix?-o/2:0;a.style.transform=`translate3d(0px,0,${M}px) rotateX(${e.isHorizontal()?0:u}deg) rotateY(${e.isHorizontal()?-u:0}deg)`,a.style.setProperty("--swiper-cube-translate-z",`${M}px`)},setTransition:t=>{const{el:a,slides:r}=e;if(r.forEach(s=>{s.style.transitionDuration=`${t}ms`,s.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l=>{l.style.transitionDuration=`${t}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const s=a.querySelector(".swiper-cube-shadow");s&&(s.style.transitionDuration=`${t}ms`)}},recreateShadows:()=>{const t=e.isHorizontal();e.slides.forEach(a=>{const r=Math.max(Math.min(a.progress,1),-1);S(a,r,t)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}export{D as E};
