import{S,N as q,P,a as g,i as b}from"./assets/vendor-zjFSmZqu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L=document.querySelector(".header-nav-list"),O=document.querySelector(".header-nav-menu-btn"),x=document.querySelectorAll('.header-nav-list a[href^="#"]');O.addEventListener("click",N);function N(){L.classList.toggle("visualy-hidden")}x.forEach(o=>{o.addEventListener("click",()=>{L.classList.add("visualy-hidden")})});const m=document.querySelector(".cover-wrapper"),v=document.querySelectorAll(".cover-list"),M=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?v.forEach((n,s)=>{n.classList.add("animate",`list-${s+1}`)}):v.forEach((n,s)=>{n.classList.remove("animate",`list-${s+1}`)})})},{threshold:.3});m&&M.observe(m);document.addEventListener("DOMContentLoaded",function(){new S(".swiper",{modules:[q,P],watchOverflow:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},slidesPerView:1,breakpoints:{768:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}}),I()});async function I(o){try{const n=(await g.get("https://portfolio-js.b.goit.study/api/reviews")).data,s=document.querySelector(".swiper-wrapper"),e=n.map(t=>`
        <div class="swiper-slide">
            <img class="review-img" src="${t.avatar_url}" alt="${t.author}" />
            <p class="review-name">${t.author}</p>
            <p class="review-text">${t.review}</p>  
        </div>
      `).join("");s.insertAdjacentHTML("beforeend",e)}catch(r){console.log("Error loading reviews:",r);const n=document.querySelector(".swiper-wrapper");n.innerHTML='<div class="reviews-error">Failed to load reviews. Please try again later.</div>';const s=document.querySelector(".reviews-error");new IntersectionObserver((t,c)=>{t.forEach(p=>{p.isIntersecting&&(b.error({position:"topRight",message:"Failed to load reviews. Please try again later."}),c.unobserve(p.target))})},{threshold:.5}).observe(s)}}const f=document.querySelector(".work-together-form"),i=document.querySelector(".work-together-input"),l=document.querySelector(".work-together-message"),a=document.querySelector(".work-together-error-input"),y=document.querySelector(".work-together-error-message"),T=document.querySelector(".work-together-close-button"),d=document.querySelector(".work-together-backdrop"),$=document.querySelector(".work-together-modal-title"),A=document.querySelector(".work-together-modal-text"),w=document.querySelector(".email-link"),h=document.querySelector(".phone-link");let k=!1;i.addEventListener("blur",()=>{k=!0,E()});function E(){k&&(i.validity.valid?a.style.display="none":a.style.display="block")}i.addEventListener("input",E);f.addEventListener("submit",o=>{o.preventDefault(),i.value.trim()===""&&(a.style.display="block",a.textContent="the field must be filled"),l.value.trim()===""?y.style.display="block":y.style.display="none",i.value.trim()!==""&&l.value.trim()!==""&&g.post("https://portfolio-js.b.goit.study/api/requests",{email:i.value,comment:l.value}).then(r=>{d.classList.add("backdrop-opened"),document.body.style.overflow="hidden",$.textContent=r.data.title,A.textContent=r.data.message,f.reset()}).catch(r=>{b.error({title:"Error",message:r.message,position:"center"})})});function u(){setTimeout(()=>{d.classList.remove("backdrop-opened"),document.body.overflow="auto"},150)}T.addEventListener("click",u);window.addEventListener("keydown",o=>{o.code==="Escape"&&u()});d.addEventListener("click",o=>{o.target===o.currentTarget&&u()});w.addEventListener("click",()=>{w.blur()});h.addEventListener("click",()=>{h.blur()});
//# sourceMappingURL=index.js.map
