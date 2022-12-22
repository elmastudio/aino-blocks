(()=>{var e,l={7872:(e,l,a)=>{"use strict";const t=window.wp.blocks,n=window.wp.i18n,o=window.wp.element;var i=a(4184),r=a.n(i);const s=window.wp.blockEditor,_=[{attributes:{flexOrder:{type:"number"},flexBasis:{type:"number"},flexGrow:{type:"number"},flexShrink:{type:"boolean",default:!1},alignSelfDesktop:{type:"string",default:"auto"},alignSelfTablet:{type:"string",default:"auto"},alignSelfMobile:{type:"string",default:"auto"}},save(e){const{flexOrder:l,flexGrow:a,flexShrink:t,flexBasis:n,alignSelfDesktop:i,alignSelfTablet:_,alignSelfMobile:c}=e,b=r()(r(),i,_,c,{}),u={order:l||void 0,flexGrow:a||void 0,flexBasis:(Number.isFinite(n)?n+"%":n)||void 0,flexShrink:t?"0":void 0},f=s.useBlockProps.save({className:b,style:u});return(0,o.createElement)("div",f,(0,o.createElement)(s.InnerBlocks.Content,null))}}],{SVG:c}=wp.components,b=(0,o.createElement)(c,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,o.createElement)("path",{fill:"#5b53ff",d:"M3.234 17.803c0 0 4.425-2.003 8.766-0.399 4.85 1.792 8.766 0.327 8.766 0.327v-11.079c0 0-3.915 1.463-8.765-0.328-4.342-1.603-8.767 0.41-8.767 0.41v11.069z"})),u=window.wp.components,f=JSON.parse('{"u2":"ainoblocks/flex-item"}');(0,t.registerBlockType)(f.u2,{icon:b,edit:function(e){let{attributes:l,setAttributes:a,className:t,onSelect:i}=e;const{flexOrder:_,flexGrow:c,flexShrink:b,flexBasis:f,alignSelfDesktop:v,alignSelfTablet:g,alignSelfMobile:d}=l,m=(0,u.__experimentalUseCustomUnits)({availableUnits:(0,s.useSetting)("spacing.units")||["%","px","em","rem","vw"]}),p=Number.isFinite(f)?f+"%":f,k=[{value:"align__auto__d",label:(0,n.__)("auto","ainoblocks")},{value:"align__flexstart__d",label:(0,n.__)("flex-start","ainoblocks")},{value:"align__ flexend__d",label:(0,n.__)(" flex-end","ainoblocks")},{value:"align__center__d",label:(0,n.__)("center","ainoblocks")},{value:"align__baseline__d",label:(0,n.__)("baseline","ainoblocks")},{value:"align__stretch__d",label:(0,n.__)("stretch","ainoblocks")}],x=[{value:"align__auto__t",label:(0,n.__)("auto","ainoblocks")},{value:"align__flexstart__t",label:(0,n.__)("flex-start","ainoblocks")},{value:"align__ flexend__t",label:(0,n.__)(" flex-end","ainoblocks")},{value:"align__center__t",label:(0,n.__)("center","ainoblocks")},{value:"align__baseline__t",label:(0,n.__)("baseline","ainoblocks")},{value:"align__stretch__t",label:(0,n.__)("stretch","ainoblocks")}],h=[{value:"align__auto__m",label:(0,n.__)("auto","ainoblocks")},{value:"align__flexstart__m",label:(0,n.__)("flex-start","ainoblocks")},{value:"align__ flexend__m",label:(0,n.__)(" flex-end","ainoblocks")},{value:"align__center__m",label:(0,n.__)("center","ainoblocks")},{value:"align__baseline__m",label:(0,n.__)("baseline","ainoblocks")},{value:"align__stretch__m",label:(0,n.__)("stretch","ainoblocks")}],w=r()(t,v,g,d,{}),S={order:_||void 0,flexGrow:c||void 0,flexBasis:p||void 0,flexShrink:b?"0":void 0},y=(0,s.useBlockProps)({className:w,style:S}),E=(0,s.useInnerBlocksProps)(y,{});return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.InspectorControls,null,(0,o.createElement)(u.PanelBody,{title:(0,n.__)("Flex Item settings","ainoblocks")},(0,o.createElement)(u.RangeControl,{label:(0,n.__)("Flex order","ainoblocks"),value:_,onChange:e=>a({flexOrder:e}),min:0,max:100,allowReset:!0,initialPosition:0}),(0,o.createElement)(u.RangeControl,{label:(0,n.__)("Flex grow","ainoblocks"),value:c,onChange:e=>a({flexGrow:e}),min:0,max:100,allowReset:!0,initialPosition:0}),(0,o.createElement)(u.__experimentalUnitControl,{label:(0,n.__)("Flex basis"),labelPosition:"edge",__unstableInputWidth:"80px",value:f||"",onChange:e=>a({flexBasis:e}),units:m}),(0,o.createElement)(u.ToggleControl,{label:(0,n.__)("Flex Shrink","ainoblocks"),checked:!!b,onChange:()=>a({flexShrink:!b}),help:b?(0,n.__)("Icon is set to zero.","ainoblocks"):(0,n.__)("Toggle to set flex shrink to zero.","ainoblocks")})),(0,o.createElement)(u.PanelBody,{title:(0,n.__)("Item Alignment","ainoblocks")},(0,o.createElement)(u.TabPanel,{className:"aino-device-panel",activeClass:"is-active",initialTabName:"desktop",onSelect:i,tabs:[{name:"desktop",title:"Desktop",className:"device-d"},{name:"tablet",title:"Tablet",className:"device-t"},{name:"mobile",title:"Mobile",className:"device-m"}]},(e=>{switch(e.name){case"desktop":return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.SelectControl,{label:(0,n.__)("Align Self","ainoblocks"),value:v,options:k,onChange:e=>a({alignSelfDesktop:e})}));case"tablet":return[(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.SelectControl,{label:(0,n.__)("Align Self","ainoblocks"),value:g,options:x,onChange:e=>a({alignSelfTablet:e})}))];case"mobile":return[(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u.SelectControl,{label:(0,n.__)("Align Self","ainoblocks"),value:d,options:h,onChange:e=>a({alignSelfMobile:e})}))]}})))),(0,o.createElement)("div",E))},save:function(e){let{attributes:l}=e;const{flexOrder:a,flexGrow:t,flexShrink:n,flexBasis:i,alignSelfDesktop:_,alignSelfTablet:c,alignSelfMobile:b}=l,u=r()(r(),_,c,b,{}),f={order:a||void 0,flexGrow:t||void 0,flexBasis:(Number.isFinite(i)?i+"%":i)||void 0,flexShrink:n?"0":void 0},v=s.useBlockProps.save({className:u,style:f}),g=s.useInnerBlocksProps.save(v);return(0,o.createElement)("div",g)},deprecated:_})},4184:(e,l)=>{var a;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],l=0;l<arguments.length;l++){var a=arguments[l];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var r in a)t.call(a,r)&&a[r]&&e.push(r);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(l,[]))||(e.exports=a)}()}},a={};function t(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return l[e](o,o.exports,t),o.exports}t.m=l,e=[],t.O=(l,a,n,o)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,n,o]=e[c],r=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((e=>t.O[e](a[s])))?a.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(c--,1);var _=n();void 0!==_&&(l=_)}}return l}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,n,o]},t.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},t.d=(e,l)=>{for(var a in l)t.o(l,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={629:0,905:0};t.O.j=l=>0===e[l];var l=(l,a)=>{var n,o,[i,r,s]=a,_=0;if(i.some((l=>0!==e[l]))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(s)var c=s(t)}for(l&&l(a);_<i.length;_++)o=i[_],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},a=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var n=t.O(void 0,[905],(()=>t(7872)));n=t.O(n)})();