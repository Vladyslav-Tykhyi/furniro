(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(i){if(i.ep)return;i.ep=!0;const t=a(i);fetch(i.href,t)}})();const e="/furniro/assets/pagination-BcXqGTYQ.png",n=document.querySelector(".products-list"),y=[{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5},{image:e,title:"Syltherine",description:"Stylish cafe chair",price:25e5}];function u(l){return l.map(({image:c,title:a,description:s,price:i})=>`
 <li class="products-list-item overlay-card">
        <div class="overlay-wrapper">
          <picture>
            <source
              srcset="
                ./img/pagination/pagination.png    1x,
                ./img/pagination/pagination@2x.png 2x
              "
              media="(max-width:320px)"
            />
            <img
              src="${c}"
              alt="Furniro-products"
              class="furniture-right-img"
            />
          </picture>
          <div class="products-item-dscrp">
            <h3 class="products-dscrp-title">${a}</h3>
            <p class="products-dscrp-text">${s}</p>
            <p class="products-dscrp-price">Rp ${i}</p>
          </div>
          <div class="overlay-block">
            <button class="overlay-btn shadow-inset-center" type="button">
              Add to cart
            </button>
            <ul class="overlay-list">
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#"
                  ><svg width="16" height="16" class="overlay-icon">
                    <use href="./img/icons.svg#icon-share"></use>
                  </svg>
                  Share</a
                >
              </li>
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#">
                  <svg width="14" height="14" class="overlay-icon">
                    <use href="./img/icons.svg#icon-arrows"></use>
                  </svg>
                  Compare</a
                >
              </li>
              <li class="overlay-item pulsate-fwd">
                <a class="overlay-item-text" href="#">
                  <svg width="16" height="16" class="overlay-icon">
                    <use href="./img/icons.svg#icon-heart"></use>
                  </svg>
                  Like</a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
  `).join("")}const r=document.querySelector(".pagination-btn");let h=0;const p=4,d=y.length;function f(){const l=Array.from(n.children),c=d-l.length;if(c<=0){r.disabled=!0,r.style.backgroundColor="red",r.style.color="#fff",r.textContent="There are no more products";return}const a=Math.min(p,c),s=h*p,i=s+a,t=y.slice(s,i);n.insertAdjacentHTML("beforeend",u(t)),h++,d-n.children.length===0&&(r.disabled=!0,r.style.backgroundColor="red",r.style.color="#fff",r.textContent="No more products available.")}r.addEventListener("click",f);
//# sourceMappingURL=index.js.map
