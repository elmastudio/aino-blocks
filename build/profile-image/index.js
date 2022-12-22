(()=>{var e,t={3125:(e,t,l)=>{"use strict";const a=window.wp.blocks,n=window.wp.element,{SVG:r}=wp.components,i=(0,n.createElement)(r,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,n.createElement)("path",{fill:"#5b53ff",d:"M16.894 7.536c0-2.682-2.177-4.855-4.863-4.855s-4.863 2.174-4.863 4.855c0 1.839 1.024 3.438 2.534 4.263l-2.596 9.52h9.774l-2.587-9.487c1.545-0.814 2.6-2.431 2.6-4.296z"}));function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}var s=l(4184),c=l.n(s);const m={};m.upload=(0,n.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"}),(0,n.createElement)("path",{d:"m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"}),(0,n.createElement)("path",{d:"m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"}),(0,n.createElement)("path",{d:"m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"})),m.swap=(0,n.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m39.66 76.422h36.762v-36.781h-36.762zm4.6211-32.141h27.5v27.5h-27.5z"}),(0,n.createElement)("path",{d:"m36.801 55.719h-8.582v-27.5h27.5v9.2031h4.6406v-13.844h-36.781v36.762h13.223z"}),(0,n.createElement)("path",{d:"m90.18 42.781c-3-16.801-16.02-29.922-33-32.961-2.3789-0.42187-4.7812-0.64062-7.1797-0.64062v4.6211c2.1211 0 4.2617 0.17969 6.3594 0.55859 14.781 2.6406 26.18 13.898 29.121 28.398l-5.6602 0.003907 8.0781 14 8.0781-14h-5.7969z"}),(0,n.createElement)("path",{d:"m14.52 57.219h5.6602l-8.0781-13.98-8.0781 14h5.8008c3 16.801 16.039 29.941 33 32.961 2.375 0.40234 4.7773 0.64062 7.1758 0.64062v-4.6406c-2.1016 0-4.2617-0.19922-6.3594-0.57812-14.781-2.6406-26.18-13.883-29.121-28.402z"})),m.remove=(0,n.createElement)("svg",{width:"20px",height:"20px",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"m50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z"}));const p=m,d=window.wp.components,h=window.wp.blockEditor,g=window.wp.i18n,u=JSON.parse('{"u2":"ainoblocks/profile-image"}');(0,a.registerBlockType)(u.u2,{icon:i,edit:function(e){let{attributes:t,setAttributes:l,className:a,isSelected:r}=e;const{imgID:i,imgURL:s,imgAlt:m,imgSize:u,imgRadius:v,borderWidth:w}=t,b=[{value:"img-s",label:(0,g.__)("small","ainoblocks")},{value:"img-l",label:(0,g.__)("large","ainoblocks")}],f=c()(a,u,{}),x="img-l"===u?{width:"calc(144px + "+w+"px * 2)",padding:w?w+"px":void 0,borderRadius:v+"%"}:{width:"calc(40px + "+w+"px * 2)",padding:w?w+"px":void 0,borderRadius:v+"%"},E=(0,h.useBlockProps)({className:f,style:x});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(h.InspectorControls,null,(0,n.createElement)(d.PanelBody,{title:(0,g.__)("Profile Image Settings","ainoblocks")},(0,n.createElement)(d.RangeControl,{label:(0,g.__)("Image Radius","ainoblocks"),value:v,onChange:e=>l({imgRadius:e}),min:0,max:100}),(0,n.createElement)(d.SelectControl,{label:(0,g.__)("Image Size","ainoblocks"),value:u,options:b,onChange:e=>l({imgSize:e})}),(0,n.createElement)(d.RangeControl,{label:(0,g.__)("Border Width","ainoblocks"),value:w,initialPosition:0,min:0,max:100,allowReset:!1,onChange:e=>l({borderWidth:e})}))),i?(0,n.createElement)("div",null,(0,n.createElement)("img",o({},E,{src:s,alt:m})),r?(0,n.createElement)(d.Button,{className:"remove-image",onClick:()=>{l({imgID:null,imgURL:null,imgAlt:null})}},p.remove):null):(0,n.createElement)(h.MediaUploadCheck,null,(0,n.createElement)(h.MediaUpload,{onSelect:e=>{l({imgID:e.id,imgURL:e.url,imgAlt:e.alt})},type:"image",value:i,render:e=>{let{open:t}=e;return(0,n.createElement)(d.Button,{className:"button button-large",onClick:t},p.upload,(0,g.__)(" Upload Image","ainoblocks"))}})))},save:function(e){let{attributes:t}=e;const{imgURL:l,imgAlt:a,imgSize:r,imgRadius:i,borderWidth:s}=t,m=c()(c(),r,{}),p="img-l"===r?{width:"calc(144px + "+s+"px * 2)",padding:s?s+"px":void 0,borderRadius:i+"%"}:{width:"calc(40px + "+s+"px * 2)",padding:s?s+"px":void 0,borderRadius:i+"%"},d=h.useBlockProps.save({className:m,style:p});return(0,n.createElement)("img",o({},d,{src:l,alt:a}))}})},4184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var i=n.apply(null,l);i&&e.push(i)}}else if("object"===r)if(l.toString===Object.prototype.toString)for(var o in l)a.call(l,o)&&l[o]&&e.push(o);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var i=1/0;for(m=0;m<e.length;m++){for(var[l,n,r]=e[m],o=!0,s=0;s<l.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(o=!1,r<i&&(i=r));if(o){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={30:0,290:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[i,o,s]=l,c=0;if(i.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var m=s(a)}for(t&&t(l);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},l=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[290],(()=>a(3125)));n=a.O(n)})();