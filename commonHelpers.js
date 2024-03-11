import{S as m,i as u}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const f=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),o=document.querySelector(".js-search-form"),l=document.querySelector(".gallery");let c="";console.log(o);o.addEventListener("submit",d);function d(a){a.preventDefault(),l.innerHTML="",c=o.elements.query.value.trim(),h(c).then(e=>{const n=L(e);l.insertAdjacentHTML("beforeend",n),f.refresh()}).catch(e=>{console.error("Error:",e)}),o.reset()}const g="41952140-5e618661129c37e138516e154",y="https://pixabay.com/api/",p=document.querySelector(".loader");function h(a){const e={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0},n=new URLSearchParams(e);return p.style.display="block",fetch(`${y}?${n}`).then(t=>{if(!t.ok)throw new Error(`Error! Status: ${t.status}`);return t.json()}).then(t=>(p.style.display="none",t.hits.length===0&&u.error({timeout:3e3,position:"topRight",message:"There are no images matching your search query. Please, enter something else!"}),t)).catch(t=>{console.error("Error fetching data!",t)})}function L(a){return a.hits.map(e=>`<div class="gallery-item">
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
        </div>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
