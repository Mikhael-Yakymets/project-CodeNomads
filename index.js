import{A as g,S as E,N as k,K as I,P as T,a as S,i as q}from"./assets/vendor-C7Wj0Ldb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const M=document.querySelector(".header-nav-list"),V=document.querySelector(".header-nav-menu-btn"),G=document.querySelectorAll('.header-nav-list a[href^="#"]'),P=document.querySelector(".mobile-menu"),W=document.querySelector(".mobile-menu-close-btn"),_=document.querySelector(".header-burger-btn"),j=document.querySelectorAll('.mobile-nav-list a[href^="#"]'),$=document.querySelector(".order-project-btn");V.addEventListener("click",C);W.addEventListener("click",m);_.addEventListener("click",H);function C(){M.classList.toggle("visualy-hidden")}G.forEach(e=>{e.addEventListener("click",()=>{M.classList.add("visualy-hidden")})});function H(){P.classList.add("is-open"),document.body.classList.add("no-scroll")}function m(){P.classList.remove("is-open"),document.body.classList.remove("no-scroll")}j.forEach(e=>{e.addEventListener("click",()=>{m()})});$.addEventListener("click",()=>{m()});document.addEventListener("DOMContentLoaded",()=>{new g("#accordion-about",{duration:300,showMultiple:!1,openOnInit:[0]})});new E(".swiper",{modules:[k,I],loop:!0,slidesPerView:2,speed:800,navigation:{nextEl:".swiper-skills-button-next"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},keyboard:{enabled:!0,onlyInViewport:!0}});document.querySelector(".swiper-skills-button-next").addEventListener("click",()=>{document.querySelector(".swiper-skills-button-next").blur()});new g(".accordion-container");const w=document.querySelector(".cover-wrapper"),b=document.querySelectorAll(".cover-list"),F=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?b.forEach((i,n)=>{i.classList.add("animate",`list-${n+1}`)}):b.forEach((i,n)=>{i.classList.remove("animate",`list-${n+1}`)})})},{threshold:.3});w&&F.observe(w);document.addEventListener("DOMContentLoaded",function(){new E(".swiper",{modules:[k,T],watchOverflow:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),B()});async function B(e){try{const i=(await S.get("https://portfolio-js.b.goit.study/api/reviews")).data,n=document.querySelector(".swiper-wrapper"),r=i.map(o=>`
        <div class="swiper-slide">
            <img class="review-img" src="${o.avatar_url}" alt="${o.author}" />
            <p class="review-name">${o.author}</p>
            <p class="review-text">${o.review}</p>  
        </div>
      `).join("");n.insertAdjacentHTML("beforeend",r)}catch(t){console.log("Error loading reviews:",t);const i=document.querySelector(".swiper-wrapper");i.innerHTML='<div class="reviews-error">Failed to load reviews. Please try again later.</div>';const n=document.querySelector(".reviews-error");new IntersectionObserver((o,a)=>{o.forEach(f=>{f.isIntersecting&&(q.error({position:"topRight",message:"Failed to load reviews. Please try again later."}),a.unobserve(f.target))})},{threshold:.5}).observe(n)}}const u=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-input"),c=document.querySelector(".work-together-message"),d=document.querySelector(".work-together-success-input"),l=document.querySelector(".work-together-error-input"),x=document.querySelector(".work-together-error-message"),D=document.querySelector(".work-together-close-button"),v=document.querySelector(".work-together-backdrop"),K=document.querySelector(".work-together-modal-title"),X=document.querySelector(".work-together-modal-text"),h=document.querySelector(".work-together-email-link"),L=document.querySelector(".work-together-phone-link");let p=!1;s.addEventListener("blur",()=>{p=!0,A()});function A(){!p&&s.value.trim()!==""&&(p=!0);const e=s.value.trim()==="",t=s.validity.valid;if(e){l.style.display="none",d.style.display="none",s.classList.remove("input-border-error","input-border-success");return}t?(l.style.display="none",d.style.display="block",s.classList.remove("input-border-error"),s.classList.add("input-border-success")):(l.style.display="block",d.style.display="none",s.classList.add("input-border-error"),s.classList.remove("input-border-success"))}s.addEventListener("input",A);function R(){let t=c.value;t.length>40&&(c.value=t.slice(0,40)+"...")}c.addEventListener("input",R);function O(e,t){e.addEventListener("input",()=>{e.value.trim()!==""&&(t.style.display="none",e.classList.remove("input-border-error"))})}O(s,l);O(c,x);function N(){s.classList.remove("input-border-success"),s.classList.remove("input-border-error"),c.classList.remove("input-border-error"),l.style.display="none",d.style.display="none"}u.addEventListener("submit",e=>{if(e.preventDefault(),s.value.trim()===""&&(l.style.display="block",l.textContent="the field must be filled",s.classList.add("input-border-error")),c.value.trim()===""){x.style.display="block",c.classList.add("input-border-error");return}s.value.trim()!==""&&c.value.trim()!==""&&S.post("https://portfolio-js.b.goit.study/api/requests",{email:s.value,comment:c.value}).then(t=>{v.classList.add("backdrop-opened"),document.body.style.overflow="hidden",K.textContent=t.data.title,X.textContent=t.data.message,u.reset()}).catch(t=>{q.error({title:"Error",message:t.response.data.error||"Something went wrong",position:"center"})}).finally(()=>{N()})});function y(){setTimeout(()=>{v.classList.remove("backdrop-opened"),document.body.style.overflow="auto",document.activeElement&&document.activeElement.blur()},150),u.reset(),N()}D.addEventListener("click",y);window.addEventListener("keydown",e=>{e.code==="Escape"&&y()});v.addEventListener("click",e=>{e.target===e.currentTarget&&y()});h.addEventListener("click",()=>{h.blur()});L.addEventListener("click",()=>{L.blur()});
//# sourceMappingURL=index.js.map
