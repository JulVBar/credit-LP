!function(){var e,t={6397:function(e,t,n){"use strict";var r=function(){document.body.onload=function(){document.body.style.overflow="hidden",setTimeout((function(){var e=document.querySelector(".preloader");e&&!e.classList.contains("done")&&(e.classList.add("done"),document.body.style.overflow="",document.querySelector(".algorithm").classList.add("start-animation"))}),2e3)}};function i(){var e=document.querySelector(".algorithm"),t=document.querySelector(".line-up-mask"),n=document.querySelector(".line-down-mask");window.addEventListener("scroll",(function(){var r=window.pageYOffset,i=(null==e?void 0:e.offsetTop)-500,o=(null==e?void 0:e.offsetHeight)+i;r>i&&r<o&&(null==t||t.classList.add("animation-line-dash-start"),null==n||n.classList.add("animation-line-dash-start"))}))}var o=i;var s=function(){var e=document.querySelectorAll(".case-item"),t=0;setInterval((function(){e.forEach((function(e){e.classList.remove("animate")})),t<4?(e[t].classList.add("animate"),t++):t=0}),6e3)};var a=function(){new Swiper(".example-swiper",{slidesPerView:3,spaceBetween:30,loop:!0,speed:500,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".example-swiper-button-next",prevEl:".example-swiper-button-prev"}}),new Swiper(".review-swiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,speed:500,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".review-swiper-button-next",prevEl:".review-swiper-button-prev"}})};var u=function(){var e=0;function t(e){var t=document.getElementsByClassName("order-form-tab");t[e].style.display="block",0==e?document.getElementById("prevBtn").classList.add("disabled"):document.getElementById("prevBtn").classList.remove("disabled"),e==t.length-1?(document.getElementById("nextBtnSpan").innerHTML="Оформить",document.getElementById("nextBtnArrow").style.display="none"):document.getElementById("nextBtnSpan").innerHTML="Далее",function(e){var t,n=document.getElementsByClassName("order-form-step");for(t=0;t<n.length;t++)n[t].className=n[t].className.replace(" active","");n[e].className+=" active"}(e)}function n(n){var r=document.getElementsByClassName("order-form-tab");return!(1==n&&!function(){var t,n,r,i=!0;for(t=document.getElementsByClassName("order-form-tab"),n=t[e].getElementsByTagName("input"),r=0;r<n.length;r++)""==n[r].value&&(n[r].className+=" invalid",i=!1);i&&(document.getElementsByClassName("order-form-step")[e].className+=" finish");return i}())&&(r[e].style.display="none",(e+=n)>=r.length?(document.getElementById("orderForm").submit(),!1):void t(e))}t(e),document.getElementById("prevBtn").addEventListener("click",(function(){n(-1)})),document.getElementById("nextBtn").addEventListener("click",(function(){n(1)}))};var c=function(){var e=document.getElementById("orderRange"),t=document.getElementById("orderSumm");t.value=25e4,e.oninput=function(){t.value=this.value},t.oninput=function(){e.value=this.value},document.getElementById("orderSelect").addEventListener("change",(function(){var e=this.value;console.log(e)}))};var g=function(){var e=document.querySelector(".ham"),t=document.querySelector(".burger-menu");e&&e.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("active"),t.classList.contains("active")?document.body.style.overflow="hidden":document.body.style.overflow=""}))};var l=function(){var e=document.querySelector(".btn-to-top");e&&(window.addEventListener("scroll",(function(){0!==window.pageYOffset?e.classList.add("active"):e.classList.remove("active")})),null==e||e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})))};window.addEventListener("DOMContentLoaded",(function(){r(),o(),s(),a(),u(),c(),g(),l()}));p(n(7274)),p(n(9003)),p(n(1389)),p(n(824)),p(n(2331)),p(n(2844)),p(n(7613));function p(e){var t={};return e.keys().map((function(n,r){t[n.replace("./","")]=e(n)})),t}},2872:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/benefit/clock.gif"},6326:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/benefit/coins.gif"},4486:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/benefit/free.gif"},3641:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/benefit/sofa.gif"},75:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section1.svg"},6766:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section2.svg"},9115:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section3.svg"},8697:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section4.svg"},2312:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section5.svg"},7594:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section6.svg"},6099:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section7.svg"},8734:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/section8.svg"},9184:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/bg/wave-1.svg"},8957:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/car.jpg"},5588:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/chain.jpg"},4766:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/iphone.png"},4577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/moto.jpg"},4051:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/notebook.jpg"},7164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/example-slider/watch.jpg"},2643:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/figure-bg/dollar-v1.svg"},5235:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/figure-bg/dollar-v2.svg"},9731:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/figure-bg/dollar-v3.svg"},8179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/logo.svg"},8394:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/owl.svg"},5763:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (1).png"},9374:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (10).png"},3631:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (11).png"},80:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (12).png"},3404:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (13).png"},8288:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (14).png"},9884:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (15).png"},2383:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (16).png"},7577:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (2).png"},1943:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (3).png"},2433:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (4).png"},3009:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (5).png"},587:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (6).png"},2576:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (7).png"},1050:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (8).png"},9617:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg (9).png"},5209:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/partners/pngegg.png"},6761:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/testimonials/testimonial-photo-1.jpg"},5327:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/testimonials/testimonial-photo-2.jpg"},3663:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/testimonials/testimonial-photo-3.jpg"},6009:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/testimonials/testimonial-photo-4.jpg"},1758:function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/testimonials/testimonial-photo-5.jpg"},2844:function(e,t,n){var r={"./clock.gif":2872,"./coins.gif":6326,"./free.gif":4486,"./sofa.gif":3641};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=2844},1389:function(e,t,n){var r={"./section1.svg":75,"./section2.svg":6766,"./section3.svg":9115,"./section4.svg":8697,"./section5.svg":2312,"./section6.svg":7594,"./section7.svg":6099,"./section8.svg":8734,"./wave-1.svg":9184};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=1389},9003:function(e,t,n){var r={"./car.jpg":8957,"./chain.jpg":5588,"./iphone.png":4766,"./moto.jpg":4577,"./notebook.jpg":4051,"./watch.jpg":7164};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=9003},824:function(e,t,n){var r={"./dollar-v1.svg":2643,"./dollar-v2.svg":5235,"./dollar-v3.svg":9731};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=824},7613:function(e,t,n){var r={"./pngegg (1).png":5763,"./pngegg (10).png":9374,"./pngegg (11).png":3631,"./pngegg (12).png":80,"./pngegg (13).png":3404,"./pngegg (14).png":8288,"./pngegg (15).png":9884,"./pngegg (16).png":2383,"./pngegg (2).png":7577,"./pngegg (3).png":1943,"./pngegg (4).png":2433,"./pngegg (5).png":3009,"./pngegg (6).png":587,"./pngegg (7).png":2576,"./pngegg (8).png":1050,"./pngegg (9).png":9617,"./pngegg.png":5209};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=7613},2331:function(e,t,n){var r={"./testimonial-photo-1.jpg":6761,"./testimonial-photo-2.jpg":5327,"./testimonial-photo-3.jpg":3663,"./testimonial-photo-4.jpg":6009,"./testimonial-photo-5.jpg":1758};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=2331},7274:function(e,t,n){var r={"./logo.svg":8179,"./owl.svg":8394};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=7274}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var s=1/0;for(g=0;g<e.length;g++){n=e[g][0],i=e[g][1],o=e[g][2];for(var a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(g--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var g=e.length;g>0&&e[g-1][2]>o;g--)e[g]=e[g-1];e[g]=[n,i,o]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,s=n[0],a=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(u)var g=u(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(g)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[202],(function(){return r(1202)}));var i=r.O(void 0,[202],(function(){return r(6397)}));i=r.O(i)}();