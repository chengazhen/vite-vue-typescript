import{f as w,n,p as f,A as h,o as _,b as g,w as m,J as x,L as b,M as l,N as k,T as I,O as T,P as y}from"./vendor.dc807024.js";import{_ as S}from"./index.d8832274.js";const B=o=>(T("data-v-6fe59e9c"),o=o(),y(),o),M=B(()=>l("svg",{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg",class:"Icon Icon--backToTopArrow","aria-hidden":"true",style:{height:"16px",width:"16px"}},[l("path",{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"})],-1)),H=[M],L=w({props:{customStyle:{default(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},backPosition:{default:0},transitionName:{default:"fade"},visibilityHeight:{default:400}},setup(o){const i=o,r=n(!1),t=n(0),c=n(!1),u=()=>{if(t.value)return;const e=window.pageYOffset;let a=0;c.value=!0,t.value=window.setInterval(()=>{console.log(234234324,t.value);const s=Math.floor(p(10*a,e,-e,500));s<=i.backPosition?(window.scrollTo(0,i.backPosition),window.clearInterval(t.value),t.value=0,c.value=!1):window.scrollTo(0,s),a++},16.7)},p=(e,a,s,v)=>(e/=v/2)<1?s/2*e*e+a:-s/2*(--e*(e-2)-1)+a,d=()=>{r.value=window.pageYOffset>i.visibilityHeight};return f(()=>{window.addEventListener("scroll",d)}),h(()=>{window.removeEventListener("scroll",d),t.value&&window.clearInterval(t.value)}),(e,a)=>(_(),g(I,{name:o.transitionName},{default:m(()=>[x(l("div",{style:k(i.customStyle),class:"back-to-ceiling",onClick:u},H,4),[[b,r.value]])]),_:1},8,["name"]))}});var P=S(L,[["__scopeId","data-v-6fe59e9c"]]);export{P as B};