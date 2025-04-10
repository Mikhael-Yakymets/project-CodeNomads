import{A as P,S as y,N as b,K as M,P as D,a as x,i as A}from"./assets/vendor-DsZOKCTy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const u=document.querySelector(".header-nav-list"),I=document.querySelector(".header-nav-menu-btn"),F=document.querySelectorAll('.header-nav-list a[href^="#"]'),T=document.querySelector(".mobile-menu"),$=document.querySelector(".mobile-menu-close-btn"),B=document.querySelector(".header-burger-btn"),K=document.querySelectorAll('.mobile-nav-list a[href^="#"]'),z=document.querySelector(".order-project-btn");I.addEventListener("click",H);$.addEventListener("click",h);B.addEventListener("click",R);function H(){u.classList.toggle("visualy-hidden"),u.classList.contains("visualy-hidden")?document.removeEventListener("click",v):document.addEventListener("click",v)}F.forEach(e=>{e.addEventListener("click",()=>{u.classList.add("visualy-hidden"),document.removeEventListener("click",v)})});function v(e){!u.contains(e.target)&&!I.contains(e.target)&&(u.classList.add("visualy-hidden"),document.removeEventListener("click",v))}function R(){T.classList.add("is-open"),document.body.classList.add("no-scroll")}function h(){T.classList.remove("is-open"),document.body.classList.remove("no-scroll")}K.forEach(e=>{e.addEventListener("click",()=>{h()})});z.addEventListener("click",()=>{h()});function G(e,t){const n=window.pageYOffset,o=document.querySelector(e).offsetTop-n;let r=null;function c(l){r||(r=l);const k=l-r,W=Math.min(k/t,1);window.scrollTo(0,n+o*p(W)),k<t&&requestAnimationFrame(c)}function p(l){return l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2}requestAnimationFrame(c)}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),G(this.getAttribute("href"),1700)})});document.addEventListener("DOMContentLoaded",()=>{new P("#accordion-about",{duration:300,showMultiple:!1,openOnInit:[0]})});document.addEventListener("DOMContentLoaded",()=>{new y(".my-skill-swiper",{modules:[b,M],loop:!0,speed:800,simulateTouch:!0,allowTouchMove:!0,grabCursor:!0,slidesPerView:2,navigation:{nextEl:".swiper-skills-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})});document.querySelector(".swiper-skills-button-next").addEventListener("click",()=>{document.querySelector(".swiper-skills-button-next").blur()});new y(".swiper-projects",{direction:"horizontal",loop:!1,speed:800,slidesPerView:1,spaceBetween:30,modules:[b,M],navigation:{nextEl:".next-button-js-prj",prevEl:".prev-button-js-prj"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1},grabCursor:!0,simulateTouch:!0,allowTouchMove:!0});const Q=document.querySelector(".accordion-container-faq");new P(Q,{showMultiple:!0,onOpen:e=>console.log("Open!",e)});const E=document.querySelector(".cover-wrapper"),S=document.querySelectorAll(".cover-list"),U=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?S.forEach((n,i)=>{n.classList.add("animate",`list-${i+1}`)}):S.forEach((n,i)=>{n.classList.remove("animate",`list-${i+1}`)})})},{threshold:.3});E&&U.observe(E);document.addEventListener("DOMContentLoaded",function(){new y(".reviews-swiper",{modules:[b,D],watchOverflow:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2},1440:{slidesPerView:4}}}),Y()});async function Y(e){try{const n=(await x.get("https://portfolio-js.b.goit.study/api/reviews")).data,i=document.querySelector(".reviews-swiper .swiper-wrapper"),o=n.map(r=>`
        <div class="swiper-slide">
            <img class="review-img" src="${r.avatar_url}" alt="${r.author}" />
            <p class="review-name">${r.author}</p>
            <p class="review-text">${r.review}</p>  
        </div>
      `).join("");i.insertAdjacentHTML("beforeend",o)}catch(t){console.log("Error loading reviews:",t);const n=document.querySelector(".swiper-wrapper");n.innerHTML='<div class="reviews-error">Failed to load reviews. Please try again later.</div>';const i=document.querySelector(".reviews-error");new IntersectionObserver((r,c)=>{r.forEach(p=>{p.isIntersecting&&(A.error({position:"topRight",message:"Failed to load reviews. Please try again later."}),c.unobserve(p.target))})},{threshold:.5}).observe(i)}}const f=document.querySelector(".work-together-form"),s=document.querySelector(".work-together-input"),d=document.querySelector(".work-together-message"),m=document.querySelector(".work-together-success-input"),a=document.querySelector(".work-together-error-input"),j=document.querySelector(".work-together-error-message"),_=document.querySelector(".work-together-close-button"),g=document.querySelector(".work-together-backdrop"),J=document.querySelector(".work-together-modal-title"),X=document.querySelector(".work-together-modal-text"),q=document.querySelector(".work-together-email-link"),O=document.querySelector(".work-together-phone-link");let w=!1;s.addEventListener("blur",()=>{w=!0,V()});function V(){!w&&s.value.trim()!==""&&(w=!0);const e=s.value.trim()==="",t=s.validity.valid;if(e){a.style.display="none",m.style.display="none",s.classList.remove("input-border-error","input-border-success");return}t?(a.style.display="none",m.style.display="block",s.classList.remove("input-border-error"),s.classList.add("input-border-success")):(a.style.display="block",m.style.display="none",s.classList.add("input-border-error"),s.classList.remove("input-border-success"))}s.addEventListener("input",V);function N(e,t){e.addEventListener("input",()=>{e.value.trim()!==""&&(t.style.display="none",e.classList.remove("input-border-error"))})}N(s,a);N(d,j);function C(){s.classList.remove("input-border-success"),s.classList.remove("input-border-error"),d.classList.remove("input-border-error"),a.style.display="none",m.style.display="none"}f.addEventListener("submit",e=>{if(e.preventDefault(),s.value.trim()===""&&(a.style.display="block",a.textContent="the field must be filled",s.classList.add("input-border-error")),d.value.trim()===""){j.style.display="block",d.classList.add("input-border-error");return}s.value.trim()!==""&&d.value.trim()!==""&&x.post("https://portfolio-js.b.goit.study/api/requests",{email:s.value,comment:d.value}).then(t=>{g.classList.add("backdrop-opened"),document.body.style.overflow="hidden",J.textContent=t.data.title,X.textContent=t.data.message,f.reset()}).catch(t=>{A.error({title:"Error",message:t.response.data.error||"Something went wrong",position:"center"})}).finally(()=>{C()})});function L(){setTimeout(()=>{g.classList.remove("backdrop-opened"),document.body.style.overflow="auto",document.activeElement&&document.activeElement.blur()},150),f.reset(),C()}_.addEventListener("click",L);window.addEventListener("keydown",e=>{e.code==="Escape"&&L()});g.addEventListener("click",e=>{e.target===e.currentTarget&&L()});q.addEventListener("click",()=>{q.blur()});O.addEventListener("click",()=>{O.blur()});
//# sourceMappingURL=index.js.map
