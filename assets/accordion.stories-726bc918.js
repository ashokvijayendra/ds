import{a as A,j as i}from"./jsx-runtime-29545a09.js";import{c as C}from"./index-f78a4f82.js";import{s as k}from"./settings-96eae654.js";import{r as l,R as s}from"./index-76fb7be0.js";import{u as F}from"./usePrefix-8bc448ba.js";import{_ as T}from"./_rollupPluginBabelHelpers-98964cd2.js";import{P as a}from"./index-8d47fad6.js";import{c as ie,C as oe,d as ne,m as ae,E as se,o as re}from"./index-1e774139.js";import{d as ce}from"./Zoom-ae7be2de.js";const H=l.createContext({disabled:!1}),le=e=>{let{disabled:t,children:o}=e;return s.createElement(H.Provider,{value:{disabled:t}},o)};function B(e){let{align:t="end",children:o,className:n,disabled:m=!1,isFlush:u=!1,size:r,...y}=e;const c=F(),p=C(`${c}--accordion`,n,{[`${c}--accordion--${t}`]:t,[`${c}--accordion--${r}`]:r,[`${c}--layout--size-${r}`]:r,[`${c}--accordion--flush`]:u&&t!=="start"});return s.createElement(le,{disabled:m},s.createElement("ul",T({className:p},y),o))}B.propTypes={align:a.oneOf(["start","end"]),children:a.node,className:a.string,disabled:a.bool,isFlush:a.bool,size:a.oneOf(["sm","md","lg"])};const U=l.createContext(null);function K(e){let{as:t,children:o,dir:n="auto",...m}=e;const u=l.useContext(U),r={},y=t??"span",c={...u};if(!u)r.dir=n,c.direction=n;else{const{direction:p,getTextDirection:q}=u;if(q&&q.current){const g=de(o),f=q.current(g);p!==f?(r.dir=f,c.direction=f):p==="auto"&&(r.dir=f)}else p!==n?(r.dir=n,c.direction=n):p==="auto"&&(r.dir=n)}return s.createElement(U.Provider,{value:c},s.createElement(y,T({},m,r),o))}K.propTypes={as:a.oneOfType([a.func,a.string,a.elementType]),children:a.node.isRequired,dir:a.oneOf(["ltr","rtl","auto"])};function de(e){var o;if(typeof e=="string")return e;const t=(o=s.Children.map(e,n=>typeof n=="string"?n:null))==null?void 0:o.filter(n=>n!==null);return(t==null?void 0:t.length)===1?t[0]:t}function me(){let e=0;return function(){return++e}}const ue=s.createContext(null);function pe(){return s.useContext(ue)}const v=me(),ge=ie?l.useLayoutEffect:l.useEffect;let $=!1;function fe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"id";const t=pe(),[o,n]=l.useState(()=>$?`${t?`${t}-`:""}${e}-${v()}`:null);return ge(()=>{o===null&&n(`${t?`${t}-`:""}${e}-${v()}`)},[v]),l.useEffect(()=>{$===!1&&($=!0)},[]),typeof s.useId=="function"?be(t,e):o}function be(e,t){const o=s.useId();return`${e?`${e}-`:""}${t}-${o}`}const he=e=>s.createElement("button",T({type:"button"},e));function M(e){let{children:t,className:o="",open:n=!1,onHeadingClick:m,renderExpando:u=he,renderToggle:r,title:y="title",disabled:c,handleAnimationEnd:p,...q}=e;const[g,f]=l.useState(n),[G,J]=l.useState(n),[S,I]=l.useState(""),Q=l.useContext(H),w=typeof c=="boolean"?c:Q.disabled,E=fe("accordion-item"),b=F(),X=C({[`${b}--accordion__item`]:!0,[`${b}--accordion__item--active`]:g,[`${b}--accordion__item--${S}`]:S,[`${b}--accordion__item--disabled`]:w,[o]:!!o}),Y=r||u;n!==G&&(I(g?"collapsing":"expanding"),f(n),J(n));function Z(N){const L=!g;I(g?"collapsing":"expanding"),f(L),m&&m({isOpen:L,event:N})}function ee(N){g&&ae(N,se)&&f(!1)}function te(N){p&&p(N),I("")}return s.createElement("li",T({className:X},q,{onAnimationEnd:te}),s.createElement(Y,{disabled:w,"aria-controls":E,"aria-expanded":g,className:`${b}--accordion__heading`,onClick:Z,onKeyDown:ee,type:"button"},s.createElement(oe,{className:`${b}--accordion__arrow`}),s.createElement(K,{as:"div",className:`${b}--accordion__title`},y)),s.createElement("div",{id:E,className:`${b}--accordion__content`},t))}M.propTypes={children:a.node,className:a.string,disabled:a.bool,onClick:a.func,onHeadingClick:a.func,open:a.bool,renderExpando:ne(a.func),renderToggle:a.func,title:a.node};const{prefix:O}=k,W=({className:e,titleType:t,titleText:o,children:n,...m})=>{const u=C(`${O}--accordion__header`,{[`${O}--accordion__header--${t}`]:t});return A("div",{className:e,...m,children:[o?i("div",{className:u,children:o}):null,n]})};try{accordion.displayName="accordion",accordion.__docgenInfo={description:"",displayName:"accordion",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},titleType:{defaultValue:null,description:"",name:"titleType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"standard"'},{value:'"large"'}]}},titleText:{defaultValue:null,description:"",name:"titleText",required:!1,type:{name:"ReactNode"}}}}}catch{}const{prefix:xe}=k,ye=["size","isFlush","align"],_=e=>{const t=re(e,ye);return i(B,{...t,children:e.children})},qe=e=>{const o=l.Children.toArray(e.children).slice(1);return A("button",{...e,children:[i(ce,{size:"md",className:`${xe}--accordion__togglearrow`}),o]})},d=e=>i(M,{renderToggle:qe,...e,children:e.children});try{_.displayName="WagAccordion",_.__docgenInfo={description:"",displayName:"WagAccordion",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{d.displayName="WagAccordionItem",d.__docgenInfo={description:"",displayName:"WagAccordionItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}const Ne={component:W,title:"Components/Accordion",argTypes:{className:{control:"text",description:"Specify an optional className to be applied to the container node ```string```"},titleType:{control:{type:"radio"},options:["standard","large","none"],defaultValue:"standard",description:"Specify an optional className to be applied to the container node ```string```",table:{defaultValue:{summary:"none"}}},titleText:{control:"text",if:{arg:"titleType",neq:"none"},description:"Specify an optional className to be applied to the container node ```string```",table:{defaultValue:{summary:""}}}}},_e=({className:e,titleType:t,titleText:o})=>i(W,{className:e,titleType:t,titleText:i("h2",{className:"wag--title--l--semibold",children:o}),children:A(_,{children:[i(d,{open:!0,title:i("h3",{className:"wag--body--m--bold",children:"Section 1 title"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),i(d,{title:i("h3",{className:"wag--body--m--bold",children:"Section 1 title"}),"aria-describedby":"dasdfas",children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}),i(d,{title:i("h3",{className:"wag--body--m--bold",children:"Section 1 title"}),children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}),i(d,{title:i("h3",{className:"wag--body--m--bold",children:"Section 1 title"}),children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})}),Ae=({className:e,titleType:t,titleText:o})=>i(W,{className:e,titleType:t,titleText:i("h2",{className:"wag--title--m--semibold",children:o}),children:A(_,{children:[i(d,{open:!0,title:i("h3",{className:"wag--body--s",children:"Section 1 title"}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),i(d,{title:i("h3",{className:"wag--body--s",children:"Section 1 title"}),children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}),i(d,{title:i("h3",{className:"wag--body--s",children:"Section 1 title"}),children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}),i(d,{title:i("h3",{className:"wag--body--s",children:"Section 1 title"}),children:i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})}),h=_e.bind({});h.args={titleType:"standard",titleText:"Accordion Title",className:"some-class-name"};const x=Ae.bind({});x.args={titleType:"standard",titleText:"Accordion Title",className:"some-class-name"};var P,D,V;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`({
  className,
  titleType,
  titleText
}) => {
  return <WagAccordionContainer className={className} titleType={titleType} titleText={<h2 className='wag--title--l--semibold'>{titleText}</h2>}>
      <WagAccordion>  
        <WagAccordionItem open={true} title={<h3 className='wag--body--m--bold'>Section 1 title</h3>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--m--bold'>Section 1 title</h3>} aria-describedby="dasdfas">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--m--bold'>Section 1 title</h3>}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--m--bold'>Section 1 title</h3>}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
      </WagAccordion>
    </WagAccordionContainer>;
}`,...(V=(D=h.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,z,j;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`({
  className,
  titleType,
  titleText
}) => {
  return <WagAccordionContainer className={className} titleType={titleType} titleText={<h2 className='wag--title--m--semibold'>{titleText}</h2>}>
      <WagAccordion>
        <WagAccordionItem open={true} title={<h3 className='wag--body--s'>Section 1 title</h3>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--s'>Section 1 title</h3>}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--s'>Section 1 title</h3>}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
        <WagAccordionItem title={<h3 className='wag--body--s'>Section 1 title</h3>}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </WagAccordionItem>
      </WagAccordion>
    </WagAccordionContainer>;
}`,...(j=(z=x.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const Te=["Default","titlefont"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:Te,default:Ne,titlefont:x},Symbol.toStringTag,{value:"Module"}));export{Oe as A,h as D};
//# sourceMappingURL=accordion.stories-726bc918.js.map
