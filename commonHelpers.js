import{i as m,S as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();function f(o){return o.hits.map(e=>`<div class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              </a>
              <div class="gallery-item-info">
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                      </span>    
                  </p>
              </div>
          </div>`).join("")}const d="41952140-5e618661129c37e138516e154",h="https://pixabay.com/api/",l=document.querySelector(".loader");function g(o){const e={key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0},a=new URLSearchParams(e);return l.style.display="block",fetch(`${h}?${a}`).then(t=>{if(!t.ok)throw new Error(`Error! Status: ${t.status}`);return t.json()}).then(t=>(l.style.display="none",t.hits.length===0&&m.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),t)).catch(t=>{console.error("Error fetching data!",t)})}const y="hello world";console.log(y);const L=new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),i=document.querySelector(".search-form"),c=document.querySelector(".gallery");let p="";i.addEventListener("submit",b);function b(o){o.preventDefault(),c.innerHTML="",p=i.elements.searchWord.value.trim(),g(p).then(e=>{const a=f(e);c.insertAdjacentHTML("beforeend",a),L.refresh()}).catch(e=>{console.error("Error:",e)}),i.reset()}
//# sourceMappingURL=commonHelpers.js.map
