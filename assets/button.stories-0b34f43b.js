import{j as n,a as _,F as w}from"./jsx-runtime-29545a09.js";import{S as M}from"./Zoom-ae7be2de.js";import{R as x}from"./index-76fb7be0.js";import{P as e}from"./index-8d47fad6.js";import{c as ue}from"./index-f78a4f82.js";import{u as pe}from"./usePrefix-8bc448ba.js";const de=["primary","secondary"],b=x.forwardRef(function({as:d,children:m,className:S,disabled:y=!1,hasIconOnly:W=!1,href:f,iconDescription:B,kind:r="primary",onBlur:I,onClick:O,onFocus:T,onMouseEnter:g,onMouseLeave:k,renderIcon:P,size:fe,tabIndex:ne,tooltipAlignment:ge="center",tooltipPosition:he="top",type:re="button",...oe},ae){const h=pe(),se=ue(S,{[`${h}--btn`]:!0,[`${h}--btn--${r}`]:r,[`${h}--btn--disabled`]:y,[`${h}--btn--icon-only`]:W}),ie={tabIndex:ne,className:se,ref:ae},ce=P?n(P,{"aria-label":B,className:`${h}--btn__icon`,"aria-hidden":"true"}):null,C=P?n(P,{}):null;let A="button",N={disabled:y,type:re};const le={href:f};return f&&!y&&(A="a",N=le),m=C||m,x.createElement(A,{onMouseEnter:g,onMouseLeave:k,onFocus:T,onBlur:I,onClick:O,...oe,...ie,...N},m,ce)});b.displayName="Button";b.propTypes={as:e.oneOfType([e.func,e.string,e.elementType]),children:e.node,className:e.string,disabled:e.bool,hasIconOnly:e.bool,href:e.string,iconDescription:t=>t.renderIcon&&!t.children&&!t.iconDescription?new Error("renderIcon property specified without also providing an iconDescription property."):null,kind:e.oneOf(de),onBlur:e.func,onClick:e.func,onFocus:e.func,onMouseEnter:e.func,onMouseLeave:e.func,renderIcon:e.oneOfType([e.func,e.object]),role:e.string,tabIndex:e.number,tooltipAlignment:e.oneOf(["start","center","end"]),tooltipPosition:e.oneOf(["top","right","bottom","left"]),type:e.oneOf(["button","reset","submit"])};try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{hasIconOnly:{defaultValue:null,description:"Specify if the button is an icon-only button",name:"hasIconOnly",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Optionally specify an href for your Button to become an `<a>` element",name:"href",required:!1,type:{name:"string"}},iconDescription:{defaultValue:null,description:"If specifying the `renderIcon` prop, provide a description for that icon that can\nbe read by screen readers",name:"iconDescription",required:!1,type:{name:"string"}},kind:{defaultValue:null,description:"Specify the kind of Button you want to create",name:"kind",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},renderIcon:{defaultValue:null,description:`Optional prop to allow overriding the icon rendering.
Can be a React component class`,name:"renderIcon",required:!1,type:{name:"React.ElementType"}},tooltipAlignment:{defaultValue:null,description:`Specify the alignment of the tooltip to the icon-only button.
Can be one of: start, center, or end.`,name:"tooltipAlignment",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"center"'},{value:'"end"'}]}},tooltipPosition:{defaultValue:null,description:`Specify the direction of the tooltip for icon-only buttons.
Can be either top, right, bottom, or left.`,name:"tooltipPosition",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"React.ElementType"}}}}}catch{}const v=x.forwardRef(({children:t,secondaryLabel:d,variant:m="primary",className:S,onClick:y,type:W="button",hasIconOnly:f,iconPosition:B="",renderIcon:r,href:I,...O},T)=>{const g=_(w,{children:[t,d&&n("span",{children:d})]});return n(b,{onClick:y,className:S,kind:m,type:W,hasIconOnly:f,iconDescription:"",href:I||"",...O,ref:T,isdisabled:"true",children:(()=>r?f?r:!B||B==="left"?_(w,{children:[r,g]}):_(w,{children:[g,r]}):g)()})});v.defaultProps={secondaryLabel:"",className:"",variant:"primary"};v.displayName="WagButton";const me={component:v,title:"Components/Button",argTypes:{secondaryLabel:{control:"text",description:"hiii"},variant:{control:{type:"select",options:["primary","secondary"]},description:"hiii"},className:{control:"text"},type:{control:{type:"select",options:["button","reset","submit"]}},children:{control:{type:!1}},onClick:{control:{type:!1}},hasIconOnly:{control:{type:!1}},iconPosition:{control:{type:!1},options:["left","right",""]},renderIcon:{control:!1},href:{control:"false"}}},c=({children:t,...d})=>n(v,{...d,children:t}),l=c.bind({});l.args={type:"button",variant:"primary",children:"Primary"};const u=c.bind({});u.args={type:"button",children:"Secondary",variant:"secondary"};const p=c.bind({});p.args={type:"button",variant:"primary",children:"Show More",secondaryLabel:"(123)"};const o=c.bind({});o.args={iconPosition:"right",children:"With Icon",renderIcon:n(M,{})};o.argTypes={iconPosition:{control:{type:"select"},renderIcon:n(M,{})}};const a=c.bind({});a.args={variant:"primary",children:"With Icon",hasIconOnly:!0,renderIcon:n(M,{})};a.argTypes={hasIconOnly:{control:{type:"boolean"}}};const s=c.bind({});s.args={type:"button",variant:"primary",children:"Click Me",href:"http://www.google.com"};s.argTypes={href:{control:{type:"text"}}};const i=c.bind({});i.args={type:"button",variant:"secondary",children:"Click Me",href:"http://www.google.com"};i.argTypes={href:{control:{type:"text"}}};var q,V,L;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var R,j,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var $,E,F;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var z,K,G;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(G=(K=o.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var H,J,Q;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(Q=(J=a.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(Y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`({
  children,
  ...args
}: MyButtonProps) => {
  return <WagButton {...args}>{children}</WagButton>;
}`,...(te=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const ye=["primary","secondary","buttonWithSecondaryText","buttonWithIcon","iconButton","buttonAsLinkPrimary","buttonAsLinkSecondary"],Ie=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:ye,buttonAsLinkPrimary:s,buttonAsLinkSecondary:i,buttonWithIcon:o,buttonWithSecondaryText:p,default:me,iconButton:a,primary:l,secondary:u},Symbol.toStringTag,{value:"Module"}));export{Ie as B,o as a,p as b,s as c,i as d,a as i,l as p,u as s};
//# sourceMappingURL=button.stories-0b34f43b.js.map
