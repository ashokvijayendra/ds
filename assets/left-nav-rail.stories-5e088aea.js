import{j as u,a as M}from"./jsx-runtime-29545a09.js";import{u as I}from"./usePrefix-8bc448ba.js";import{_ as P}from"./_rollupPluginBabelHelpers-98964cd2.js";import{r as d,R as i}from"./index-76fb7be0.js";import{c as S}from"./index-f78a4f82.js";import{P as n}from"./index-8d47fad6.js";import{c as we,d as ye,m as K,E as de,T as _e,a as Ee,o as O}from"./index-1e774139.js";import{d as xe}from"./Zoom-ae7be2de.js";import{W as Se}from"./text-link-f6341058.js";const be=e=>d.useCallback(a=>{e.forEach(t=>{typeof t=="function"?t(a):t!=null&&(t.current=a)})},e);function Le(e,a){const t=d.useRef(null);d.useEffect(()=>{t.current=a},[a]),d.useEffect(()=>{function s(r){t.current&&t.current(r)}return window.addEventListener(e,s),()=>{window.removeEventListener(e,s)}},[e])}function ae(e){const[a,t]=d.useState(e),s=d.useRef(null),r=d.useCallback(function(l){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(window.clearTimeout(s.current??void 0),s.current=null,m===0){t(l);return}s.current=window.setTimeout(()=>{t(l),s.current=null},m)},[]);return d.useEffect(()=>()=>{window.clearTimeout(s.current??void 0)},[]),[a,r]}var Te=16;function E(e){return"".concat(e/Te,"rem")}var Re={sm:{width:E(320),columns:4,margin:"0"},md:{width:E(672),columns:8,margin:E(16)},lg:{width:E(1056),columns:16,margin:E(16)},xlg:{width:E(1312),columns:16,margin:E(16)},max:{width:E(1584),columns:16,margin:E(24)}};function Ie(e){const[a,t]=d.useState(()=>we?window.matchMedia(e).matches:!1);return d.useEffect(()=>{function s(l){t(l.matches)}const r=window.matchMedia(e);return r.addEventListener?r.addEventListener("change",s):r.addListener(s),t(r.matches),()=>{r.addEventListener?r.removeEventListener("change",s):r.removeListener(s)}},[e]),a}function Ce(e){const a=Object.keys(e),t=s=>function(r,l,m){for(var f=arguments.length,c=new Array(f>3?f-3:0),p=3;p<f;p++)c[p-3]=arguments[p];return s(r,l,m,...c)};return a.reduce((s,r)=>({...s,[r]:t(e[r])}),{})}const Me=Ce({"aria-label":n.string,"aria-labelledby":n.string});function $e(e,a){let{element:t,as:s,isSideNavExpanded:r,...l}=e;const m=s??t??"a";return i.createElement(m,P({ref:a},l))}const G=d.forwardRef($e),We={as:n.elementType,element:ye(n.elementType),isSideNavExpanded:n.bool};G.displayName="Link";G.propTypes=We;const oe=["SideNavFooter","SideNavHeader","SideNavItems","SideNavMenu","SideNavLink"],ce=d.createContext({});function Ae(e,a){let{expanded:t,defaultExpanded:s=!1,isChildOfHeader:r=!0,"aria-label":l,"aria-labelledby":m,children:f,onToggle:c,className:p,href:x,isFixedNav:N=!1,isRail:h,isPersistent:g=!0,addFocusListeners:L=!0,addMouseListeners:T=!0,onOverlayClick:V,onSideNavBlur:C,enterDelayMs:k=100,...D}=e;const w=I(),{current:q}=d.useRef(t!==void 0),[me,F]=ae(s),[H,z]=ae(s),_=q?t:me,B=d.useRef(null),fe=be([B,a]),R=function(o){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!_;q||F(y,k),c&&c(o,y),(q||h)&&z(y,k)},pe={"aria-label":l,"aria-labelledby":m},ve=S(p,{[`${w}--side-nav`]:!0,[`${w}--side-nav--expanded`]:_||H,[`${w}--side-nav--collapsed`]:!_&&N,[`${w}--side-nav--rail`]:h,[`${w}--side-nav--ux`]:r,[`${w}--side-nav--hidden`]:!g}),he=S({[`${w}--side-nav__overlay`]:!0,[`${w}--side-nav__overlay-active`]:_||H});let ee=f;ee=i.Children.map(f,o=>{var te,ne;const y=q&&H||_;if(d.isValidElement(o)){const j=o;return i.cloneElement(j,{...oe.includes(((te=j.type)==null?void 0:te.displayName)??((ne=j.type)==null?void 0:ne.name))?{isSideNavExpanded:y}:{}})}return o});const b={};L&&(b.onFocus=o=>{!o.currentTarget.contains(o.relatedTarget)&&h&&R(o,!0)},b.onBlur=o=>{o.currentTarget.contains(o.relatedTarget)||R(o,!1),!o.currentTarget.contains(o.relatedTarget)&&_&&!N&&C&&C()},b.onKeyDown=o=>{K(o,de)&&(R(o,!1),x&&(window.location.href=x))}),T&&h&&(b.onMouseEnter=()=>{R(!0,!0)},b.onMouseLeave=()=>{F(!1),z(!1),R(!1,!1)},b.onClick=()=>{F(!0),z(!0),R(!0,!0)}),Le("keydown",o=>{const y=document.activeElement;K(o,_e)&&_&&!N&&B.current&&(y!=null&&y.classList.contains(`${w}--header__menu-toggle`))&&!y.closest("nav")&&B.current.focus()});const Ne=`(min-width: ${Re.lg.width})`,ge=Ie(Ne);return i.createElement(ce.Provider,{value:{isRail:h}},N?null:i.createElement("div",{className:he,onClick:V}),i.createElement("nav",P({tabIndex:-1,ref:fe,className:`${w}--side-nav__navigation ${ve}`,inert:!h&&(_||ge?void 0:-1)},pe,b,D),ee))}const X=i.forwardRef(Ae);X.displayName="SideNav";X.propTypes={...Me,addFocusListeners:n.bool,addMouseListeners:n.bool,className:n.string,defaultExpanded:n.bool,enterDelayMs:n.number,expanded:n.bool,href:n.string,isChildOfHeader:n.bool,isFixedNav:n.bool,isPersistent:n.bool,isRail:n.bool,onOverlayClick:n.func,onSideNavBlur:n.func,onToggle:n.func};const Q=e=>{let{children:a,className:t,small:s=!1}=e;const r=I(),l=S({[`${r}--side-nav__icon`]:!0,[`${r}--side-nav__icon--small`]:s,[t]:!!t});return i.createElement("div",{className:l},a)};Q.propTypes={children:n.node.isRequired,className:n.string,small:n.bool};const Y=e=>{let{className:a,children:t,isSideNavExpanded:s}=e;const r=I(),l=S([`${r}--side-nav__items`],a),m=i.Children.map(t,f=>{var c;if(i.isValidElement(f))return i.cloneElement(f,{...oe.includes((c=f.type)==null?void 0:c.displayName)?{isSideNavExpanded:s}:{}})});return i.createElement("ul",{className:l},m)};Y.displayName="SideNavItems";Y.propTypes={children:n.node.isRequired,className:n.string,isSideNavExpanded:n.bool};var ke=Y;function ue(e){let{className:a,children:t,...s}=e;const r=I(),l=S(`${r}--side-nav__link-text`,a);return i.createElement("span",P({},s,{className:l}),t)}ue.propTypes={children:n.node.isRequired,className:n.string};var se;const A=i.forwardRef(function(a,t){let{className:s,children:r,defaultExpanded:l=!1,isActive:m=!1,large:f=!1,renderIcon:c,isSideNavExpanded:p,tabIndex:x,title:N}=a;const h=d.useContext(ce),g=I(),[L,T]=d.useState(l),[V,C]=d.useState(l),k=S({[`${g}--side-nav__item`]:!0,[`${g}--side-nav__item--active`]:m||qe(r)&&!L,[`${g}--side-nav__item--icon`]:c,[`${g}--side-nav__item--large`]:f,[s]:!!s});return p===!1&&L===!0?(T(!1),C(!0)):p===!0&&V===!0&&(T(!0),C(!1)),i.createElement("li",{className:k,onKeyDown:D=>{K(D,de)&&T(!1)}},i.createElement("button",{"aria-expanded":L,className:`${g}--side-nav__submenu`,onClick:()=>{T(!L)},ref:t,type:"button",tabIndex:x===void 0?!p&&!h?-1:0:x},c&&i.createElement(Q,null,i.createElement(c,null)),i.createElement("span",{className:`${g}--side-nav__submenu-title`,title:N},N),i.createElement(Q,{className:`${g}--side-nav__submenu-chevron`,small:!0},se||(se=i.createElement(Ee,{size:20})))),i.createElement("ul",{className:`${g}--side-nav__menu`},r))});A.displayName="SideNavMenu";A.propTypes={children:n.node,className:n.string,defaultExpanded:n.bool,isActive:n.bool,isSideNavExpanded:n.bool,large:n.bool,renderIcon:n.oneOfType([n.func,n.object]),tabIndex:n.number,title:n.string.isRequired};function qe(e){if(Array.isArray(e))return e.some(a=>{if(!i.isValidElement(a))return!1;const t=a.props;return!!(t.isActive===!0||t["aria-current"])});if(i.isValidElement(e)){const a=e.props;if(a.isActive===!0||a["aria-current"])return!0}return!1}const Z=i.forwardRef(function(a,t){const s=I(),{children:r,className:l,isActive:m,...f}=a,c=S(`${s}--side-nav__menu-item`,l),p=S({[`${s}--side-nav__link`]:!0,[`${s}--side-nav__link--current`]:m});return i.createElement("li",{className:c},i.createElement(G,P({},f,{className:p,ref:t}),i.createElement(ue,null,r)))});Z.displayName="SideNavMenuItem";Z.propTypes={children:n.node,className:n.string,isActive:n.bool};var Pe=Z;const J=d.forwardRef((e,a)=>{const t=O(e,["isFixedNav","expanded","isChildOfHeader"]);return u(X,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,...t,ref:a,children:e.children})});try{J.displayName="WagLeftNavRail",J.__docgenInfo={description:"",displayName:"WagLeftNavRail",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}A.propTypes={...A.propTypes,title:n.any};const U=e=>{const a=O(e,["isSideNavExpanded"]);return u(ke,{...a,children:e.children})},W=e=>{const a=d.useId(),t=d.useRef(null),[s,r]=d.useState(!1),l=O(e,["defaultExpanded","isActive","large","isSideNavExpanded"]),[m,f]=d.useState({width:window.innerWidth,height:window.innerHeight}),c=l.id||a,p=()=>{console.log("window.innerWidth",window.innerWidth),f({width:window.innerWidth,height:window.innerHeight})};return d.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]),d.useEffect(()=>{var x,N,h;!s&&t.current&&((h=(N=(x=t.current)==null?void 0:x.parentNode)==null?void 0:N.querySelector("ul"))==null||h.setAttribute("aria-labelledby",c),r(!0))},[s,c]),u(A,{defaultExpanded:m.width>767,renderIcon:()=>u(Oe,{}),ref:t,...l,title:M("span",{id:c,children:[" ",l.title," "]}),children:e.children})},v=e=>{const a=O(e,["isActive"]);return u(Pe,{href:"https://www.walgreens.com/",...a,children:e.children})},Oe=()=>u(xe,{size:"md"});try{U.displayName="WagSideNavItems",U.__docgenInfo={description:"",displayName:"WagSideNavItems",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{W.displayName="WagSideNavMenu",W.__docgenInfo={description:"",displayName:"WagSideNavMenu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}try{v.displayName="WagSideNavMenuItem",v.__docgenInfo={description:"",displayName:"WagSideNavMenuItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const Ve={title:"Components/Left Nav Rail",argTypes:{className:{control:"text"}}},De={render:e=>u(J,{"aria-label":"Side navigation",children:M(U,{id:"twodddd",children:[M(W,{id:"someuniqueid",title:"Menu 0",children:[u(v,{href:"https://www.walgreens.com/",children:"L0 menu item1"}),u(v,{href:"https://www.walgreens.com/",children:"L0 menu item2"}),u(v,{href:"https://www.walgreens.com/",children:"L0 menu item3"}),u(v,{as:"span",children:u(Se,{fontWeight:"bold",variant:"caret",iconPosition:"right",href:"http://shop.all.com","aria-expanded":!1,"aria-describedby":"someuniqueid",children:"Shop more"})})]}),M(W,{id:"someuniqueid",title:"L0 menu2",children:[u(v,{href:"https://www.walgreens.com/",children:"L0 menu item"}),u(v,{"aria-current":"page",as:"span",href:"https://www.walgreens.com/",className:"current-page",children:"This is current page"}),u(v,{href:"https://www.walgreens.com/",children:"L0 menu item"})]}),M(W,{title:"L0 menu",children:[u(v,{href:"https://www.walgreens.com/",children:"L0 menu item"}),u(v,{href:"https://www.walgreens.com/",children:"L0 menu item"}),u(v,{href:"https://www.walgreens.com/",children:"L0 menu item"})]})]})})},$=De;var re,ie,le;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:"Template",...(le=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Fe=["Default"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Default:$,__namedExportsOrder:Fe,default:Ve},Symbol.toStringTag,{value:"Module"}));export{$ as D,Xe as L};
//# sourceMappingURL=left-nav-rail.stories-5e088aea.js.map
