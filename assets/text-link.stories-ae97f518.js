import{j as a}from"./jsx-runtime-29545a09.js";import{W as i}from"./text-link-f6341058.js";import{S as v}from"./Zoom-ae7be2de.js";const S={component:i,title:"Components/Text Links",argTypes:{linkText:{control:"text",description:"Specify a text  to be added to your link",defaultValue:"body text"},className:{control:"text",description:"Specify an optional className to be added to your link"},variant:{control:{type:!1},description:"Specify the kind of link you want to create"},target:{control:{type:"radio"},options:["_blank","_self","_parent","_top"]},fontWeight:{control:{type:"radio"},options:["normal","bold"]},iconPosition:{control:{type:!1},options:["left","right"]},renderIcon:{control:{type:!1}},children:{control:{type:!1}},size:{control:{type:"radio"},options:["lg","md","sm","xs"]}},args:{fontWeight:"normal"}},e={args:{children:a("span",{children:"Body Link"})},argTypes:{size:{control:{type:"radio"},options:["lg","md","sm"]}}},z=()=>a(i,{variant:"text",href:"#",children:"Text Link"}),o=z.bind({});o.argTypes={size:{control:{type:"radio"},options:["lg","md","sm"]}};const n=()=>a(i,{href:"#",variant:"icon",renderIcon:a(v,{}),children:"Icon Link"});n.argTypes={size:{control:{type:"radio"},options:["lg","md"]}};const r={args:{children:"Caret Link",variant:"caret",iconPosition:"right"},argTypes:{iconPosition:{control:"radio"},size:{control:{type:"radio"},options:["lg","md"]}}},t={args:{children:"Accordion Link",variant:"list"},argTypes:{size:{control:{type:"radio"},options:["lg","md","sm"]}}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <span>Body Link</span>
  },
  argTypes: {
    size: {
      control: {
        type: 'radio'
      },
      options: ['lg', 'md', 'sm']
    }
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <WagTextLink variant="text" href="#">
    Text Link
  </WagTextLink>`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,y,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => <WagTextLink href="#" variant="icon" renderIcon={<AvatarAltIcon />}>
    Icon Link
  </WagTextLink>`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var u,f,L;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Caret Link',
    variant: 'caret',
    iconPosition: 'right'
  },
  argTypes: {
    iconPosition: {
      control: 'radio'
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['lg', 'md']
    }
  }
}`,...(L=(f=r.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var x,T,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Accordion Link',
    variant: 'list'
  },
  argTypes: {
    size: {
      control: {
        type: 'radio'
      },
      options: ['lg', 'md', 'sm']
    }
  }
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const _=["Default","textLink","iconLink","caretLink","listLink"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:_,caretLink:r,default:S,iconLink:n,listLink:t,textLink:o},Symbol.toStringTag,{value:"Module"}));export{e as D,I as T,r as c,n as i,t as l,o as t};
//# sourceMappingURL=text-link.stories-ae97f518.js.map
