(()=>{"use strict";var t,e,n=document.querySelector(".price__old"),r=document.querySelector(".price__new"),o=document.querySelector(".timer__number"),c=document.querySelector(".slider__container"),u=(document.querySelectorAll(".slider__image"),document.querySelector(".slider-buttons__button_number_0")),i=document.querySelector(".slider-buttons__button_number_1"),l=document.querySelector(".slider-buttons__button_number_2"),s=document.querySelector(".slider-buttons__button_number_3"),d=document.querySelectorAll(".slider-buttons__list-item"),a=document.querySelector(".buy-section__form");n.textContent="R 250.00",r.textContent="R 160.00",t=300,e=setInterval((function(){var n=Math.floor(t/3600),r=Math.floor(t%3600/60),c=Math.floor(t%60),u=String(n).padStart(2,"0"),i=String(r).padStart(2,"0"),l=String(c).padStart(2,"0");o.textContent="".concat(u,".").concat(i,".").concat(l),-1==--t&&clearInterval(e)}),1e3);var _=0;function m(t){d[_].classList.remove("slider-buttons__list-item_opacity"),_=t,c.style.transform="translateX(-".concat(100*_,"%)"),d[t].classList.add("slider-buttons__list-item_opacity")}d[0].classList.add("slider-buttons__list-item_opacity"),u.addEventListener("click",(function(){return m(0)})),i.addEventListener("click",(function(){return m(1)})),l.addEventListener("click",(function(){return m(2)})),s.addEventListener("click",(function(){return m(3)})),a.addEventListener("submit",(function(t){return function(t){t.preventDefault(),window.location.href="https://youtube.com"}(t)}))})();