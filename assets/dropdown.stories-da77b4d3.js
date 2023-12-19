import{a as d,j as o,F as We}from"./jsx-runtime-29545a09.js";import{r as pe}from"./index-76fb7be0.js";import{c as T,g as ke}from"./_commonjsHelpers-de833af9.js";import{c as te}from"./index-f78a4f82.js";import{d as Ae,e as Pe,f as re}from"./Zoom-ae7be2de.js";import{s as He}from"./settings-96eae654.js";var N={exports:{}};N.exports;(function(a,u){var p=9007199254740991,y="[object Arguments]",v="[object Function]",M="[object GeneratorFunction]",l="[object Map]",i="[object Object]",O="[object Promise]",w="[object Set]",V="[object WeakMap]",j="[object DataView]",x=/[\\^$.*+?()[\]{}|]/g,q=/^\[object .+?Constructor\]$/,I=typeof T=="object"&&T&&T.Object===Object&&T,F=typeof self=="object"&&self&&self.Object===Object&&self,c=I||F||Function("return this")(),C=u&&!u.nodeType&&u,$=C&&!0&&a&&!a.nodeType&&a,W=$&&$.exports===C;function n(e,t){return e==null?void 0:e[t]}function k(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function ge(e,t){return function(s){return e(t(s))}}var me=Function.prototype,E=Object.prototype,A=c["__core-js_shared__"],K=function(){var e=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),J=me.toString,P=E.hasOwnProperty,D=E.toString,he=RegExp("^"+J.call(P).replace(x,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),X=W?c.Buffer:void 0,Q=E.propertyIsEnumerable,be=X?X.isBuffer:void 0,ye=ge(Object.keys,Object),H=_(c,"DataView"),B=_(c,"Map"),L=_(c,"Promise"),z=_(c,"Set"),G=_(c,"WeakMap"),ve=!Q.call({valueOf:1},"valueOf"),we=g(H),_e=g(B),Se=g(L),Oe=g(z),Ve=g(G);function je(e){return D.call(e)}function xe(e){if(!Z(e)||Ce(e))return!1;var t=Y(e)||k(e)?he:q;return t.test(g(e))}function _(e,t){var s=n(e,t);return xe(s)?s:void 0}var f=je;(H&&f(new H(new ArrayBuffer(1)))!=j||B&&f(new B)!=l||L&&f(L.resolve())!=O||z&&f(new z)!=w||G&&f(new G)!=V)&&(f=function(e){var t=D.call(e),s=t==i?e.constructor:void 0,ee=s?g(s):void 0;if(ee)switch(ee){case we:return j;case _e:return l;case Se:return O;case Oe:return w;case Ve:return V}return t});function Ce(e){return!!K&&K in e}function $e(e){var t=e&&e.constructor,s=typeof t=="function"&&t.prototype||E;return e===s}function g(e){if(e!=null){try{return J.call(e)}catch{}try{return e+""}catch{}}return""}function Ee(e){return Te(e)&&P.call(e,"callee")&&(!Q.call(e,"callee")||D.call(e)==y)}var De=Array.isArray;function U(e){return e!=null&&qe(e.length)&&!Y(e)}function Te(e){return Ie(e)&&U(e)}var Ne=be||Fe;function Me(e){if(U(e)&&(De(e)||typeof e=="string"||typeof e.splice=="function"||Ne(e)||Ee(e)))return!e.length;var t=f(e);if(t==l||t==w)return!e.size;if(ve||$e(e))return!ye(e).length;for(var s in e)if(P.call(e,s))return!1;return!0}function Y(e){var t=Z(e)?D.call(e):"";return t==v||t==M}function qe(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=p}function Z(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Ie(e){return!!e&&typeof e=="object"}function Fe(){return!1}a.exports=Me})(N,N.exports);var Be=N.exports;const S=ke(Be),{prefix:r}=He,Le=({id:a,options:u,selectedValue:p,label:y="Input field",onChange:v,required:M,errors:l,warnings:i,helperMessage:O,className:w,...V})=>{const[j,x]=pe.useState(!1),q=()=>x(!0),I=()=>x(!1),F=n=>{v(n)},c=te(w,`${r}--dropdown__formelement-container`,{[`${r}--dropdown--warning`]:S(l)&&!S(i),[`${r}--dropdown--error`]:!S(l)}),C=n=>n?d("div",{className:`${r}--dropdown__helpertext--error`,children:[o(Pe,{fill:"error",size:"md"}),o("span",{className:`${r}--dropdown__messagetext--error`,children:n})]}):null,$=n=>n?d("div",{className:`${r}--dropdown__helpertext--warning`,children:[o(re,{fill:"warning",size:"md"}),o("span",{className:`${r}--dropdown__messagetext--warning`,children:i==null?void 0:i[0]})]}):null,W=n=>n?d("div",{className:`${r}--dropdown__helpertext--info`,children:[o(re,{fill:"info",size:"md"}),n&&o("span",{className:`${r}--dropdown__messagetext--info`,children:n})]}):null;return d("div",{className:c,children:[d("div",{className:te(`${r}--dropdown-container`,{"{prefix}--dropdown--focussed":j}),onFocus:q,onBlur:I,children:[o("label",{className:`${r}--dropdown__label${S(p)?"":"--selected"}`,htmlFor:"select-input",children:M?d(We,{children:[o("span",{className:`${r}--dropdown--required`,children:"*"})," ",y]}):y+"(optional)"}),d("div",{className:`${r}--dropdown`,children:[d("select",{id:a,className:`${r}--dropdown${S(p)?"__select":"--selected"}`,value:p||"",onChange:F,"aria-describedby":`${a}-${r}--dropdown__helpertext`,"data-testid":`${a}-select-input`,...V,children:[o("option",{value:"",children:"Select"},0),u.map((n,k)=>o("option",{value:n.value,children:n.label},k+1))]}),o("div",{className:`${r}--dropdown__icon-container`,children:o(Ae,{size:"md"})})]})]}),d("div",{id:`${a}-${r}--dropdown__helpertext`,className:`${r}--dropdown__helpertext`,children:[C(l==null?void 0:l[0]),$(i==null?void 0:i[0]),W(O)]})]})},fe=Le;try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Input field"},description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},errors:{defaultValue:null,description:"",name:"errors",required:!1,type:{name:"string[]"}},warnings:{defaultValue:null,description:"",name:"warnings",required:!1,type:{name:"string[]"}},helperMessage:{defaultValue:null,description:"",name:"helperMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const ze={title:"Components/Dropdown",component:fe,argTypes:{id:{control:"text"},options:{control:"array",type:{name:"string"},defaultValue:[]},selectedValue:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},message:{control:"text"}}},R=a=>{const[u,p]=pe.useState(a.selectedValue);return o(fe,{...a,selectedValue:u,onChange:v=>{p(v.target.value)}})},m=R.bind({});m.args={id:"select-input",options:[{value:"Option 1",label:"Option 1"},{value:"Option 2",label:"Option 2"},{value:"Option 3",label:"Option 3"}],selectedValue:"Option 1",label:"Input field",required:!0,helperMessage:"Helper message text"};const h=R.bind({});h.args={id:"select-input",options:[{value:"Option 1",label:"Option 1"},{value:"Option 2",label:"Option 2"},{value:"Option 3",label:"Option 3"}],selectedValue:"",label:"Input field",required:!0,helperMessage:"Helper message text",warnings:["Warning message text"]};const b=R.bind({});b.args={id:"select-input",options:[{value:"Option 1",label:"Option 1"},{value:"Option 2",label:"Option 2"},{value:"Option 3",label:"Option 3"}],selectedValue:"",label:"Input field",required:!0,helperMessage:"Helper message text",warnings:["Warning message text"],errors:["Error message text"]};var ne,ae,oe;m.parameters={...m.parameters,docs:{...(ne=m.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return <WagDropdown {...args} selectedValue={selectedValue} onChange={handleDropdownChange} />;
}`,...(oe=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,le,ie;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return <WagDropdown {...args} selectedValue={selectedValue} onChange={handleDropdownChange} />;
}`,...(ie=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return <WagDropdown {...args} selectedValue={selectedValue} onChange={handleDropdownChange} />;
}`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Ge=["Default","Warning","Error"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Error:b,Warning:h,__namedExportsOrder:Ge,default:ze},Symbol.toStringTag,{value:"Module"}));export{Ye as D,b as E,h as W,m as a};
//# sourceMappingURL=dropdown.stories-da77b4d3.js.map