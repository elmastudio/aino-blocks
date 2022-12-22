(()=>{var e,l={5875:(e,l,a)=>{"use strict";const n=window.wp.blocks,o=window.wp.i18n,t=window.wp.element,{SVG:_}=wp.components,i=(0,t.createElement)(_,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,t.createElement)("path",{fill:"#5b53ff",d:"M20.298 4.033v15.933c-3.691 0.46-4.578-3.983-8.298-3.983s-4.607 4.443-8.298 3.983v-15.933c3.691-0.46 4.578 3.983 8.298 3.983s4.607-4.443 8.298-3.983z"}));var s=a(4184),c=a.n(s);const r=window.wp.components,b=window.wp.blockEditor,u=JSON.parse('{"u2":"ainoblocks/flexbox"}');(0,n.registerBlockType)(u.u2,{icon:i,edit:function(e){let{attributes:l,setAttributes:a,className:n,onSelect:_}=e;const{align:i,flexDirectionDesktop:s,flexDirectionTablet:u,flexDirectionMobile:p,flexWrapDesktop:v,flexWrapTablet:k,flexWrapMobile:m,justifyContentDesktop:f,justifyContentTablet:d,justifyContentMobile:g,alignItemsDesktop:h,alignItemsTablet:x,alignItemsMobile:w,alignContentDesktop:C,alignContentTablet:y,alignContentMobile:E,shadowName:D,position:j,gap:S}=l,T=[{value:"direction__row__d",label:(0,o.__)("row","ainoblocks")},{value:"direction__rowrev__d",label:(0,o.__)("row-reverse","ainoblocks")},{value:"direction__col__d",label:(0,o.__)("column","ainoblocks")},{value:"direction__colrev__d",label:(0,o.__)("column-reverse","ainoblocks")}],M=[{value:"direction__row__t",label:(0,o.__)("row","ainoblocks")},{value:"direction__rowrev__t",label:(0,o.__)("row-reverse","ainoblocks")},{value:"direction__col__t",label:(0,o.__)("column","ainoblocks")},{value:"direction__colrev__t",label:(0,o.__)("column-reverse","ainoblocks")}],A=[{value:"direction__row__m",label:(0,o.__)("row","ainoblocks")},{value:"direction__rowrev__m",label:(0,o.__)("row-reverse","ainoblocks")},{value:"direction__col__m",label:(0,o.__)("column","ainoblocks")},{value:"direction__colrev__m",label:(0,o.__)("column-reverse","ainoblocks")}],O=[{value:"nowrap__d",label:(0,o.__)("nowrap","ainoblocks")},{value:"wrap__d",label:(0,o.__)("wrap","ainoblocks")},{value:"wraprev__d",label:(0,o.__)("wrap-reverse","ainoblocks")}],P=[{value:"nowrap__t",label:(0,o.__)("nowrap","ainoblocks")},{value:"wrap__t",label:(0,o.__)("wrap","ainoblocks")},{value:"wraprev__t",label:(0,o.__)("wrap-reverse","ainoblocks")}],I=[{value:"nowrap__m",label:(0,o.__)("nowrap","ainoblocks")},{value:"wrap__m",label:(0,o.__)("wrap","ainoblocks")},{value:"wraprev__m",label:(0,o.__)("wrap-reverse","ainoblocks")}],N=[{value:"justify__flexstart__d",label:(0,o.__)("flex-start","ainoblocks")},{value:"justify__flexend__d",label:(0,o.__)("flex-end","ainoblocks")},{value:"justify__center__d",label:(0,o.__)("center","ainoblocks")},{value:"justify__between__d",label:(0,o.__)("space-between","ainoblocks")},{value:"justify__around__d",label:(0,o.__)("space-around","ainoblocks")},{value:"justify__evenly__d",label:(0,o.__)("space-evenly","ainoblocks")}],F=[{value:"justify__flexstart__t",label:(0,o.__)("flex-start","ainoblocks")},{value:"justify__flexend__t",label:(0,o.__)("flex-end","ainoblocks")},{value:"justify__center__t",label:(0,o.__)("center","ainoblocks")},{value:"justify__between__t",label:(0,o.__)("space-between","ainoblocks")},{value:"justify__around__t",label:(0,o.__)("space-around","ainoblocks")},{value:"justify__evenly__t",label:(0,o.__)("space-evenly","ainoblocks")}],W=[{value:"justify__flexstart__m",label:(0,o.__)("flex-start","ainoblocks")},{value:"justify__flexend__m",label:(0,o.__)("flex-end","ainoblocks")},{value:"justify__center__m",label:(0,o.__)("center","ainoblocks")},{value:"justify__between__m",label:(0,o.__)("space-between","ainoblocks")},{value:"justify__around__m",label:(0,o.__)("space-around","ainoblocks")},{value:"justify__evenly__m",label:(0,o.__)("space-evenly","ainoblocks")}],B=[{value:"align-items__stretch__d",label:(0,o.__)("stretch","ainoblocks")},{value:"align-items__flexstart__d",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-items__flexend__d",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-items__center__d",label:(0,o.__)("center","ainoblocks")},{value:"align-items__baseline__d",label:(0,o.__)("baseline","ainoblocks")}],J=[{value:"align-items__stretch__t",label:(0,o.__)("stretch","ainoblocks")},{value:"align-items__flexstart__t",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-items__flexend__t",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-items__center__t",label:(0,o.__)("center","ainoblocks")},{value:"align-items__baseline__t",label:(0,o.__)("baseline","ainoblocks")}],G=[{value:"align-items__stretch__m",label:(0,o.__)("stretch","ainoblocks")},{value:"align-items__flexstart__m",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-items__flexend__m",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-items__center__m",label:(0,o.__)("center","ainoblocks")},{value:"align-items__baseline__m",label:(0,o.__)("baseline","ainoblocks")}],L=[{value:"align-cont__stretch__d",label:(0,o.__)("stretch","ainoblocks")},{value:"align-cont__flexstart__d",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-cont__flexend__d",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-cont__center__d",label:(0,o.__)("center","ainoblocks")},{value:"align-cont__between__d",label:(0,o.__)("space-between","ainoblocks")},{value:"align-cont__around__d",label:(0,o.__)("space-around","ainoblocks")},{value:"align-cont__evenly__d",label:(0,o.__)("space-evenly","ainoblocks")}],X=[{value:"align-cont__stretch__t",label:(0,o.__)("stretch","ainoblocks")},{value:"align-cont__flexstart__t",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-cont__flexend__t",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-cont__center__t",label:(0,o.__)("center","ainoblocks")},{value:"align-cont__between__t",label:(0,o.__)("space-between","ainoblocks")},{value:"align-cont__around__t",label:(0,o.__)("space-around","ainoblocks")},{value:"align-cont__evenly__t",label:(0,o.__)("space-evenly","ainoblocks")}],z=[{value:"align-cont__stretch__m",label:(0,o.__)("stretch","ainoblocks")},{value:"align-cont__flexstart__m",label:(0,o.__)("flex-start","ainoblocks")},{value:"align-cont__flexend__m",label:(0,o.__)("flex-end","ainoblocks")},{value:"align-cont__center__m",label:(0,o.__)("center","ainoblocks")},{value:"align-cont__between__m",label:(0,o.__)("space-between","ainoblocks")},{value:"align-cont__around__m",label:(0,o.__)("space-around","ainoblocks")},{value:"align-cont__evenly__m",label:(0,o.__)("space-evenly","ainoblocks")}],U=[{value:"shadow-none",label:(0,o.__)("none","ainoblocks")},{value:"shadow-a",label:(0,o.__)("small","ainoblocks")},{value:"shadow-b",label:(0,o.__)("large","ainoblocks")}],V=[{value:"pos-none",label:(0,o.__)("none","ainoblocks")},{value:"pos-tl",label:(0,o.__)("top left","ainoblocks")},{value:"pos-tr",label:(0,o.__)("top right","ainoblocks")},{value:"pos-bl",label:(0,o.__)("bottom left","ainoblocks")},{value:"pos-br",label:(0,o.__)("bottom right","ainoblocks")}],q=[{value:"gap-none",label:(0,o.__)("none","ainoblocks")},{value:"gap-s",label:(0,o.__)("S (16px)","ainoblocks")},{value:"gap-m",label:(0,o.__)("M (24px)","ainoblocks")},{value:"gap-l",label:(0,o.__)("L (32px)","ainoblocks")},{value:"gap-xl",label:(0,o.__)("XL (48px)","ainoblocks")},{value:"gap-xxl",label:(0,o.__)("XXL (64px)","ainoblocks")}],H=c()(n,s,u,p,v,k,m,f,d,g,h,x,w,C,y,E,D,i,j,S,{}),K=(0,b.useBlockProps)({className:H}),Q=(0,b.useInnerBlocksProps)(K,{});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(b.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,o.__)("Flexbox Properties","ainoblocks"),initialOpen:!0},(0,t.createElement)("p",null,(0,t.createElement)("em",null,(0,o.__)("Use Preview for Desktop, Tablet and Mobile view.","ainoblocks"))),(0,t.createElement)(r.TabPanel,{className:"aino-device-panel",activeClass:"is-active",initialTabName:"desktop",onSelect:_,tabs:[{name:"desktop",title:"Desktop",className:"device-d"},{name:"tablet",title:"Tablet",className:"device-t"},{name:"mobile",title:"Mobile",className:"device-m"}]},(e=>{switch(e.name){case"desktop":return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Direction","ainoblocks"),help:(0,o.__)("Establishes the main-axis, thus defining the direction flex items are placed in the flex container.","ainoblocks"),value:s,options:T,onChange:e=>a({flexDirectionDesktop:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Wrap","ainoblocks"),help:(0,o.__)("Allow items to wrap as needed.","ainoblocks"),value:v,options:O,onChange:e=>a({flexWrapDesktop:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Justify Content","ainoblocks"),help:(0,o.__)("Define the alignment along the main axis.","ainoblocks"),value:f,options:N,onChange:e=>a({justifyContentDesktop:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Items","ainoblocks"),help:(0,o.__)("Defines how items are laid out along the cross axis on the current line. ","ainoblocks"),value:h,options:B,onChange:e=>a({alignItemsDesktop:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Content","ainoblocks"),help:(0,o.__)("Align the flex container’s lines within when there is extra space in the cross-axis.","ainoblocks"),value:C,options:L,onChange:e=>a({alignContentDesktop:e})}));case"tablet":return[(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Direction","ainoblocks"),help:(0,o.__)("Establishes the main-axis, thus defining the direction flex items are placed in the flex container.","ainoblocks"),value:u,options:M,onChange:e=>a({flexDirectionTablet:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Wrap","ainoblocks"),help:(0,o.__)("Allow items to wrap as needed.","ainoblocks"),value:k,options:P,onChange:e=>a({flexWrapTablet:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Justify Content","ainoblocks"),help:(0,o.__)("Define the alignment along the main axis.","ainoblocks"),value:d,options:F,onChange:e=>a({justifyContentTablet:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Items","ainoblocks"),help:(0,o.__)("Defines how items are laid out along the cross axis on the current line. ","ainoblocks"),value:x,options:J,onChange:e=>a({alignItemsTablet:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Content","ainoblocks"),help:(0,o.__)("Align the flex container’s lines within when there is extra space in the cross-axis.","ainoblocks"),value:y,options:X,onChange:e=>a({alignContentTablet:e})}))];case"mobile":return[(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Direction","ainoblocks"),help:(0,o.__)("Establishes the main-axis, thus defining the direction flex items are placed in the flex container.","ainoblocks"),value:p,options:A,onChange:e=>a({flexDirectionMobile:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Flex Wrap","ainoblocks"),help:(0,o.__)("Allow items to wrap as needed.","ainoblocks"),value:m,options:I,onChange:e=>a({flexWrapMobile:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Justify Content","ainoblocks"),help:(0,o.__)("Define the alignment along the main axis.","ainoblocks"),value:g,options:W,onChange:e=>a({justifyContentMobile:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Items","ainoblocks"),help:(0,o.__)("Defines how items are laid out along the cross axis on the current line. ","ainoblocks"),value:w,options:G,onChange:e=>a({alignItemsMobile:e})}),(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Align Content","ainoblocks"),help:(0,o.__)("Align the flex container’s lines within when there is extra space in the cross-axis.","ainoblocks"),value:E,options:z,onChange:e=>a({alignContentMobile:e})}))]}}))),(0,t.createElement)(r.PanelBody,{title:(0,o.__)("Gap","ainoblocks")},(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Gap","ainoblocks"),value:S,options:q,onChange:e=>a({gap:e})})),(0,t.createElement)(r.PanelBody,{title:(0,o.__)("Absolute Positioning","ainoblocks"),description:(0,o.__)("Specify the positioning for the Flexbox container.","ainoblocks"),initialOpen:!1},(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Absolute Positioning","ainoblocks"),value:j,options:V,onChange:e=>a({position:e})})),(0,t.createElement)(r.PanelBody,{title:(0,o.__)("Shadow","ainoblocks"),initialOpen:!1},(0,t.createElement)(r.SelectControl,{label:(0,o.__)("Shadow","ainoblocks"),value:D,options:U,onChange:e=>a({shadowName:e})}))),(0,t.createElement)("div",Q))},save:function(e){let{attributes:l}=e;const{align:a,flexDirectionDesktop:n,flexDirectionTablet:o,flexDirectionMobile:_,flexWrapDesktop:i,flexWrapTablet:s,flexWrapMobile:r,justifyContentDesktop:u,justifyContentTablet:p,justifyContentMobile:v,alignItemsDesktop:k,alignItemsTablet:m,alignItemsMobile:f,alignContentDesktop:d,alignContentTablet:g,alignContentMobile:h,shadowName:x,position:w,gap:C}=l,y=c()(c(),n,o,_,i,s,r,u,p,v,k,m,f,d,g,h,x,a,w,C,{}),E=b.useBlockProps.save({className:y}),D=b.useInnerBlocksProps.save(E);return(0,t.createElement)("div",D)}})},4184:(e,l)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],l=0;l<arguments.length;l++){var a=arguments[l];if(a){var t=typeof a;if("string"===t||"number"===t)e.push(a);else if(Array.isArray(a)){if(a.length){var _=o.apply(null,a);_&&e.push(_)}}else if("object"===t)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(l,[]))||(e.exports=a)}()}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var t=a[e]={exports:{}};return l[e](t,t.exports,n),t.exports}n.m=l,e=[],n.O=(l,a,o,t)=>{if(!a){var _=1/0;for(r=0;r<e.length;r++){for(var[a,o,t]=e[r],i=!0,s=0;s<a.length;s++)(!1&t||_>=t)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(i=!1,t<_&&(_=t));if(i){e.splice(r--,1);var c=o();void 0!==c&&(l=c)}}return l}t=t||0;for(var r=e.length;r>0&&e[r-1][2]>t;r--)e[r]=e[r-1];e[r]=[a,o,t]},n.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return n.d(l,{a:l}),l},n.d=(e,l)=>{for(var a in l)n.o(l,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={564:0,838:0};n.O.j=l=>0===e[l];var l=(l,a)=>{var o,t,[_,i,s]=a,c=0;if(_.some((l=>0!==e[l]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var r=s(n)}for(l&&l(a);c<_.length;c++)t=_[c],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(r)},a=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var o=n.O(void 0,[838],(()=>n(5875)));o=n.O(o)})();