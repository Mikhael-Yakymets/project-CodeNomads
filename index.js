import{A as b,S as A,N as P,P as N,a as L,i as E}from"./assets/vendor-ynsVIJYe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const S=document.querySelector(".header-nav-list"),x=document.querySelector(".header-nav-menu-btn"),I=document.querySelectorAll('.header-nav-list a[href^="#"]');x.addEventListener("click",T);function T(){S.classList.toggle("visualy-hidden")}I.forEach(e=>{e.addEventListener("click",()=>{S.classList.add("visualy-hidden")})});document.addEventListener("DOMContentLoaded",()=>{new b("#accordion-about",{duration:300,showMultiple:!1,openOnInit:[0]})});const G=document.querySelector(".accordion-container"),_=new b(G,{showMultiple:!0,onOpen:e=>console.log("Open!",e)}),C=accContainer.querySelectorAll(".close-accordion-btn");[...C].map((e,t)=>{e.addEventListener("click",()=>_.close(t))});const y=document.querySelector(".cover-wrapper"),w=document.querySelectorAll(".cover-list"),$=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?w.forEach((i,n)=>{i.classList.add("animate",`list-${n+1}`)}):w.forEach((i,n)=>{i.classList.remove("animate",`list-${n+1}`)})})},{threshold:.3});y&&$.observe(y);document.addEventListener("DOMContentLoaded",function(){new A(".swiper",{modules:[P,N],watchOverflow:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),H()});async function H(e){try{const i=(await L.get("https://portfolio-js.b.goit.study/api/reviews")).data,n=document.querySelector(".swiper-wrapper"),r=i.map(o=>`
        <div class="swiper-slide">
            <img class="review-img" src="${o.avatar_url}" alt="${o.author}" />
            <p class="review-name">${o.author}</p>
            <p class="review-text">${o.review}</p>  
        </div>
      `).join("");n.insertAdjacentHTML("beforeend",r)}catch(t){console.log("Error loading reviews:",t);const i=document.querySelector(".swiper-wrapper");i.innerHTML='<div class="reviews-error">Failed to load reviews. Please try again later.</div>';const n=document.querySelector(".reviews-error");new IntersectionObserver((o,l)=>{o.forEach(f=>{f.isIntersecting&&(E.error({position:"topRight",message:"Failed to load reviews. Please try again later."}),l.unobserve(f.target))})},{threshold:.5}).observe(n)}}const u=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-input"),c=document.querySelector(".work-together-message"),d=document.querySelector(".work-together-success-input"),a=document.querySelector(".work-together-error-input"),k=document.querySelector(".work-together-error-message"),j=document.querySelector(".work-together-close-button"),m=document.querySelector(".work-together-backdrop"),F=document.querySelector(".work-together-modal-title"),V=document.querySelector(".work-together-modal-text"),h=document.querySelector(".work-together-email-link"),g=document.querySelector(".work-together-phone-link");let p=!1;s.addEventListener("blur",()=>{p=!0,q()});function q(){!p&&s.value.trim()!==""&&(p=!0);const e=s.value.trim()==="",t=s.validity.valid;if(e){a.style.display="none",d.style.display="none",s.classList.remove("input-border-error","input-border-success");return}t?(a.style.display="none",d.style.display="block",s.classList.remove("input-border-error"),s.classList.add("input-border-success")):(a.style.display="block",d.style.display="none",s.classList.add("input-border-error"),s.classList.remove("input-border-success"))}s.addEventListener("input",q);function D(){let t=c.value;t.length>40&&(c.value=t.slice(0,40)+"...")}c.addEventListener("input",D);function M(e,t){e.addEventListener("input",()=>{e.value.trim()!==""&&(t.style.display="none",e.classList.remove("input-border-error"))})}M(s,a);M(c,k);function O(){s.classList.remove("input-border-success"),s.classList.remove("input-border-error"),c.classList.remove("input-border-error"),a.style.display="none",d.style.display="none"}u.addEventListener("submit",e=>{if(e.preventDefault(),s.value.trim()===""&&(a.style.display="block",a.textContent="the field must be filled",s.classList.add("input-border-error")),c.value.trim()===""){k.style.display="block",c.classList.add("input-border-error");return}s.value.trim()!==""&&c.value.trim()!==""&&L.post("https://portfolio-js.b.goit.study/api/requests",{email:s.value,comment:c.value}).then(t=>{m.classList.add("backdrop-opened"),document.body.style.overflow="hidden",F.textContent=t.data.title,V.textContent=t.data.message,u.reset()}).catch(t=>{E.error({title:"Error",message:t.response.data.error||"Something went wrong",position:"center"})}).finally(()=>{O()})});function v(){setTimeout(()=>{m.classList.remove("backdrop-opened"),document.body.overflow="auto"},150),u.reset(),O()}j.addEventListener("click",v);window.addEventListener("keydown",e=>{e.code==="Escape"&&v()});m.addEventListener("click",e=>{e.target===e.currentTarget&&v()});h.addEventListener("click",()=>{h.blur()});g.addEventListener("click",()=>{g.blur()});
//# sourceMappingURL=index.js.map
