"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),c=new RegExp(s.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),o=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),o=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,i=!1,c=!1;for(let l=0;l<e.length;l++){const o=e[l];s&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,c=i,i=!0,l++):i&&c&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),c=i,i=!1,s=!0):(s=n(o)===o&&r(o)!==o,c=i,i=r(o)===o&&n(o)!==o)}return e})(e,s,o)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(c.lastIndex=0,l.lastIndex=0,e.replace(c,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return D},_:function(){return c},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var n=a(7294),r=(a(3204),a(5697)),s=a.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,a,n,r){return void 0===r&&(r={}),i({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,s,c,l){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=n,o.height=r,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),l&&(o.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const m=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=c(e,m);return n.createElement(n.Fragment,null,n.createElement(p,i({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:l}=e,o=c(e,b);return n.createElement("img",i({},o,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=c(e,h);const l=s.sizes||(null==t?void 0:t.sizes),o=n.createElement(w,i({},s,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),o):o};var y;w.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},f.displayName="Picture",f.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const x=["fallback"],v=function(e){let{fallback:t}=e,a=c(e,x);return t?n.createElement(f,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},a))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(y=f.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(f,i({},e)),n.createElement("noscript",null,n.createElement(f,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=f.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],N=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),i=3;i<n;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:s().object.isRequired,alt:C},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],$=new Set;let O,I;const z=function(e){let{as:t="div",image:r,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:b}=e,h=c(e,_);const{width:w,height:f,layout:y}=r,x=o(w,f,y),{style:v,className:E}=x,k=c(x,T),S=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(y,w,f);return(0,n.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void $.add(N);if(I&&$.has(N))return;let t,n;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;S.current&&(S.current.innerHTML=a(i({isLoading:!0,isLoaded:$.has(N),image:r},h)),$.has(N)||(t=requestAnimationFrame((()=>{S.current&&(n=c(S.current,N,$,s,p,g,b))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{$.has(N)&&I&&(S.current.innerHTML=I(i({isLoading:$.has(N),isLoaded:$.has(N),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,i({},k,{style:i({},v,s,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(z,e):null}));j.propTypes=L,j.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:r,__error:s}=t,l=c(t,q);return s&&console.warn(s),r?n.createElement(e,i({image:r},l)):(console.warn("Image not loaded",a),null)}}const M=R((function(e){let{as:t="div",className:a,class:r,style:s,image:l,loading:m="lazy",imgClassName:p,imgStyle:b,backgroundColor:h,objectFit:w,objectPosition:f}=e,y=c(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),b=i({objectFit:w,objectPosition:f,backgroundColor:h},b);const{width:x,height:C,layout:L,images:_,placeholder:T,backgroundColor:$}=l,O=o(x,C,L),{style:I,className:z}=O,j=c(O,S),q={fallback:void 0,sources:[]};return _.fallback&&(q.fallback=i({},_.fallback,{srcSet:_.fallback.srcSet?N(_.fallback.srcSet):void 0})),_.sources&&(q.sources=_.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),n.createElement(t,i({},j,{style:i({},I,s,{backgroundColor:h}),className:`${z}${a?` ${a}`:""}`}),n.createElement(g,{layout:L,width:x,height:C},n.createElement(v,i({},u(T,!1,L,x,C,$,w,f))),n.createElement(E,i({"data-gatsby-image-ssr":"",className:p},y,d("eager"===m,!1,q,m,b)))))})),P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},A=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};M.displayName="StaticImage",M.propTypes=F;const D=R(j);D.displayName="StaticImage",D.propTypes=F},5592:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(1883),s=a(8032);var i=e=>{let{siteTitle:t}=e;return n.createElement("header",null,n.createElement("div",{className:"bg-backgroundSecondary drop-shadow-lg px-5"},n.createElement("div",{className:"container flex items-center justify-between"},n.createElement("div",{className:"flex items-center"},n.createElement(s.S,{src:"../images/logo.png",alt:"logo",className:"h-16 w-16",__imageData:a(2625)}),n.createElement("h3",{className:"text-2xl font-semibold text-white"},"Nexster")),n.createElement("div",{className:"flex items-center gap-x-6"},n.createElement("a",{href:"https://nexster.xyz/login",target:"_blank"},n.createElement("div",{className:"hover:border-2 text-white py-1 px-5 rounded-lg"},"Sign In")),n.createElement("a",{href:"https://nexster.xyz/account/reg-link",target:"_blank"},n.createElement("div",{className:"border-2 bg-white hover:bg-transparent hover:text-white py-1 px-5 rounded-lg"},"Sign Up"))))))};var c=e=>{var t;let{children:c}=e;const l=(0,r.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement(i,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.createElement("div",null,n.createElement("main",null,c),n.createElement("footer",{className:"bg-backgroundPrimary text-slate-300 pt-20 pb-5 px-5"},n.createElement("div",{className:"container max-w-[1400px]"},n.createElement("h5",{className:"text-xl"},"Nexster is the first ever social networking platform built by a Sri Lankan community."),n.createElement("h6",{className:"text-xl mt-10"},"Do you want to be a witness to a remarkable journey."),n.createElement("div",{className:"flex items-center mt-10 text-xl"},n.createElement("p",null,"Get in touch"),n.createElement("a",{className:" ml-10",href:"https://www.linkedin.com/company/nexster-org",target:"_blank"},n.createElement(s.S,{quality:100,src:"../images/linkedin.png",alt:"linkedin",className:"h-8 w-8",__imageData:a(8532)})),n.createElement("a",{className:"ml-10",href:"https://www.youtube.com/@NexsterOrg",target:"_blank"},n.createElement(s.S,{quality:100,src:"../images/yt.png",alt:"youtube",className:"h-8 w-8",__imageData:a(2451)})),n.createElement("a",{className:"ml-10",href:"https://github.com/NexsterOrg",target:"_blank"},n.createElement(s.S,{quality:100,src:"../images/github.png",alt:"youtube",className:"h-8 w-8",__imageData:a(3731)})))),n.createElement("p",{className:"text-center mt-10"},"© ",(new Date).getFullYear()," · Nexster Community"))))}},9357:function(e,t,a){var n=a(7294),r=a(1883);t.Z=function(e){var t,a;let{description:s,title:i,children:c}=e;const{site:l}=(0,r.useStaticQuery)("63159454"),o=s||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,d?`${d}`:i),n.createElement("meta",{name:"description",content:o}),n.createElement("meta",{property:"og:title",content:i}),n.createElement("meta",{property:"og:description",content:o}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=l.siteMetadata)||void 0===a?void 0:a.author)||""}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:description",content:o}),c)}},2625:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/nexster-web/static/f105c519c50a5d251627a9a61e93061b/a33f3/logo.png","srcSet":"/nexster-web/static/f105c519c50a5d251627a9a61e93061b/53a73/logo.png 182w,\\n/nexster-web/static/f105c519c50a5d251627a9a61e93061b/4d573/logo.png 365w,\\n/nexster-web/static/f105c519c50a5d251627a9a61e93061b/a33f3/logo.png 729w","sizes":"(min-width: 729px) 729px, 100vw"},"sources":[{"srcSet":"/nexster-web/static/f105c519c50a5d251627a9a61e93061b/4c0eb/logo.webp 182w,\\n/nexster-web/static/f105c519c50a5d251627a9a61e93061b/ed676/logo.webp 365w,\\n/nexster-web/static/f105c519c50a5d251627a9a61e93061b/41c27/logo.webp 729w","type":"image/webp","sizes":"(min-width: 729px) 729px, 100vw"}]},"width":729,"height":732}')},3731:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/d3bc0/github.png","srcSet":"/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/858a8/github.png 58w,\\n/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/14502/github.png 115w,\\n/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/d3bc0/github.png 230w","sizes":"(min-width: 230px) 230px, 100vw"},"sources":[{"srcSet":"/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/f916c/github.webp 58w,\\n/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/3cb62/github.webp 115w,\\n/nexster-web/static/1dee40f2668d5c719eafa2c89296f5e7/807ad/github.webp 230w","type":"image/webp","sizes":"(min-width: 230px) 230px, 100vw"}]},"width":230,"height":225.00000000000003}')},8532:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#2868b8","images":{"fallback":{"src":"/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/99973/linkedin.png","srcSet":"/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/ca919/linkedin.png 159w,\\n/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/ff848/linkedin.png 318w,\\n/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/99973/linkedin.png 635w","sizes":"(min-width: 635px) 635px, 100vw"},"sources":[{"srcSet":"/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/d825e/linkedin.webp 159w,\\n/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/d491d/linkedin.webp 318w,\\n/nexster-web/static/1b18d461ce75c75fdb4d7b6ec08b3e65/5e843/linkedin.webp 635w","type":"image/webp","sizes":"(min-width: 635px) 635px, 100vw"}]},"width":635,"height":540}')},2451:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/13fc6/yt.png","srcSet":"/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/81032/yt.png 750w,\\n/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/c5e9c/yt.png 1500w,\\n/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/13fc6/yt.png 3000w","sizes":"(min-width: 3000px) 3000px, 100vw"},"sources":[{"srcSet":"/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/c5e11/yt.webp 750w,\\n/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/f77da/yt.webp 1500w,\\n/nexster-web/static/bdb36e5a6861d6461b88d6cbcb628513/cf4ae/yt.webp 3000w","type":"image/webp","sizes":"(min-width: 3000px) 3000px, 100vw"}]},"width":3000,"height":2000}')}}]);
//# sourceMappingURL=commons-99225fd6975cbda2010b.js.map