(self.webpackChunkreact_form=self.webpackChunkreact_form||[]).push([[173],{173:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>W});var s=t(555),r=t(43),a=t(858),i=t(211),l=t(554);function o(e){return n=>!!n.type&&n.type.tabsRole===e}const c=o("Tab"),d=o("TabList"),u=o("TabPanel");function m(e,n){return r.Children.map(e,(e=>null===e?null:function(e){return c(e)||d(e)||u(e)}(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,Object.assign({},e.props,{children:m(e.props.children,n)})):e))}function f(e,n){return r.Children.forEach(e,(e=>{null!==e&&(c(e)||u(e)?n(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(d(e)&&n(e),f(e.props.children,n)))}))}function b(e,n,t){let s,r=0,a=0,i=!1;const l=[];return f(e[n],(e=>{d(e)&&(e.props&&e.props.children&&"object"===typeof e.props.children&&f(e.props.children,(e=>l.push(e))),i&&(s=new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.")),i=!0),c(e)?(i&&-1!==l.indexOf(e)||(s=new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components have to be inside the 'TabList' component.")),r++):u(e)&&a++})),s||r===a||(s=new Error("There should be an equal number of 'Tab' and 'TabPanel' in `".concat(t,"`. ")+"Received ".concat(r," 'Tab' and ").concat(a," 'TabPanel'."))),s}function h(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=h(e[n]))&&(s&&(s+=" "),s+=t)}else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}const p=function(){for(var e,n,t=0,s="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=h(e))&&(s&&(s+=" "),s+=n);return s};function y(e){let n=0;return f(e,(e=>{c(e)&&n++})),n}const x=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys","disableLeftRightKeys"];function N(e){return e&&"getAttribute"in e}function j(e){return N(e)&&e.getAttribute("data-rttab")}function g(e){return N(e)&&"true"===e.getAttribute("aria-disabled")}let v;const w={className:"react-tabs",focus:!1},C={children:b},E=e=>{(0,l.checkPropTypes)(C,e,"prop","UncontrolledTabs");let n=(0,r.useRef)([]),t=(0,r.useRef)([]);const s=(0,r.useRef)();function a(n,t){if(n<0||n>=f())return;const{onSelect:s,selectedIndex:r}=e;s(n,r,t)}function i(e){const n=f();for(let t=e+1;t<n;t++)if(!g(b(t)))return t;for(let t=0;t<e;t++)if(!g(b(t)))return t;return e}function o(e){let n=e;for(;n--;)if(!g(b(n)))return n;for(n=f();n-- >e;)if(!g(b(n)))return n;return e}function f(){const{children:n}=e;return y(n)}function b(e){return n.current["tabs-".concat(e)]}function h(e){let n=e.target;do{if(N(n)){if(g(n))return;return void a([].slice.call(n.parentNode.children).filter(j).indexOf(n),e)}}while(null!=(n=n.parentNode))}function N(e){if(!j(e))return!1;let n=e.parentElement;do{if(n===s.current)return!0;if(n.getAttribute("data-rttabs"))break;n=n.parentElement}while(n);return!1}const E=Object.assign({},w,e),{className:T,domRef:P}=E,I=function(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.includes(s))continue;t[s]=e[s]}return t}(E,x);return r.createElement("div",Object.assign({},I,{className:p(T),onClick:h,onKeyDown:function(n){const{direction:t,disableUpDownKeys:s,disableLeftRightKeys:r}=e;if(N(n.target)){let{selectedIndex:l}=e,c=!1,d=!1;"Space"!==n.code&&32!==n.keyCode&&"Enter"!==n.code&&13!==n.keyCode||(c=!0,d=!1,h(n)),(r||37!==n.keyCode&&"ArrowLeft"!==n.code)&&(s||38!==n.keyCode&&"ArrowUp"!==n.code)?(r||39!==n.keyCode&&"ArrowRight"!==n.code)&&(s||40!==n.keyCode&&"ArrowDown"!==n.code)?35===n.keyCode||"End"===n.code?(l=function(){let e=f();for(;e--;)if(!g(b(e)))return e;return null}(),c=!0,d=!0):36!==n.keyCode&&"Home"!==n.code||(l=function(){const e=f();for(let n=0;n<e;n++)if(!g(b(n)))return n;return null}(),c=!0,d=!0):(l="rtl"===t?o(l):i(l),c=!0,d=!0):(l="rtl"===t?i(l):o(l),c=!0,d=!0),c&&n.preventDefault(),d&&a(l,n)}},ref:e=>{s.current=e,P&&P(e)},"data-rttabs":!0}),function(){let s=0;const{children:a,disabledTabClassName:i,focus:l,forceRenderTabPanel:o,selectedIndex:h,selectedTabClassName:p,selectedTabPanelClassName:y,environment:x}=e;t.current=t.current||[];let N=t.current.length-f();const j=(0,r.useId)();for(;N++<0;)t.current.push("".concat(j).concat(t.current.length));return m(a,(e=>{let a=e;if(d(e)){let s=0,o=!1;null==v&&function(e){const n=e||("undefined"!==typeof window?window:void 0);try{v=!("undefined"===typeof n||!n.document||!n.document.activeElement)}catch(t){v=!1}}(x);const d=x||("undefined"!==typeof window?window:void 0);v&&d&&(o=r.Children.toArray(e.props.children).filter(c).some(((e,n)=>d.document.activeElement===b(n)))),a=(0,r.cloneElement)(e,{children:m(e.props.children,(e=>{const a="tabs-".concat(s),c=h===s,d={tabRef:e=>{n.current[a]=e},id:t.current[s],selected:c,focus:c&&(l||o)};return p&&(d.selectedClassName=p),i&&(d.disabledClassName=i),s++,(0,r.cloneElement)(e,d)}))})}else if(u(e)){const n={id:t.current[s],selected:h===s};o&&(n.forceRender=o),y&&(n.selectedClassName=y),s++,a=(0,r.cloneElement)(e,n)}return a}))}())},T=["children","defaultFocus","defaultIndex","focusTabOnClick","onSelect"];const P={children:b,onSelect:function(e,n,t,s,r){const a=e[n],i=r||n;let l=null;return a&&"function"!==typeof a?l=new Error("Invalid ".concat(s," `").concat(i,"` of type `").concat(typeof a,"` supplied ")+"to `".concat(t,"`, expected `function`.")):null!=e.selectedIndex&&null==a&&(l=new Error("The ".concat(s," `").concat(i,"` is marked as required in `").concat(t,"`, but ")+"its value is `undefined` or `null`.\n`onSelect` is required when `selectedIndex` is also set. Not doing so will make the tabs not do anything, as `selectedIndex` indicates that you want to handle the selected tab yourself.\nIf you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.")),l},selectedIndex:function(e,n,t,s,r){const a=e[n],i=r||n;let l=null;if(null!=a&&"number"!==typeof a)l=new Error("Invalid ".concat(s," `").concat(i,"` of type `").concat(typeof a,"` supplied to ")+"`".concat(t,"`, expected `number`."));else if(null!=e.defaultIndex&&null!=a)return new Error("The ".concat(s," `").concat(i,"` cannot be used together with `defaultIndex` ")+"in `".concat(t,"`.\n")+"Either remove `".concat(i,"` to let `").concat(t,"` handle the selected ")+"tab internally or remove `defaultIndex` to handle it yourself.");return l}},I={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},k=e=>{(0,l.checkPropTypes)(P,e,"prop","Tabs");const n=Object.assign({},I,e),{children:t,defaultFocus:s,defaultIndex:a,focusTabOnClick:i,onSelect:o}=n,c=function(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.includes(s))continue;t[s]=e[s]}return t}(n,T),[d,u]=(0,r.useState)(s),[m]=(0,r.useState)((e=>null===e.selectedIndex?1:0)(c)),[f,b]=(0,r.useState)(1===m?a||0:null);if((0,r.useEffect)((()=>{u(!1)}),[]),1===m){const e=y(t);(0,r.useEffect)((()=>{if(null!=f){const n=Math.max(0,e-1);b(Math.min(f,n))}}),[e])}let h=Object.assign({},e,c);return h.focus=d,h.onSelect=(e,n,t)=>{"function"===typeof o&&!1===o(e,n,t)||(i&&u(!0),1===m&&b(e))},null!=f&&(h.selectedIndex=f),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,r.createElement(E,h,t)};k.tabsRole="Tabs";const q=k,O=["children","className"];const R={className:"react-tabs__tab-list"},S=e=>{const n=Object.assign({},R,e),{children:t,className:s}=n,a=function(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.includes(s))continue;t[s]=e[s]}return t}(n,O);return r.createElement("ul",Object.assign({},a,{className:p(s),role:"tablist"}),t)};S.tabsRole="TabList";const A=S,F=["children","className","disabled","disabledClassName","focus","id","selected","selectedClassName","tabIndex","tabRef"];const L="react-tabs__tab",_={className:L,disabledClassName:"".concat(L,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(L,"--selected")},z=e=>{let n=(0,r.useRef)();const t=Object.assign({},_,e),{children:s,className:a,disabled:i,disabledClassName:l,focus:o,id:c,selected:d,selectedClassName:u,tabIndex:m,tabRef:f}=t,b=function(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.includes(s))continue;t[s]=e[s]}return t}(t,F);return(0,r.useEffect)((()=>{d&&o&&n.current.focus()}),[d,o]),r.createElement("li",Object.assign({},b,{className:p(a,{[u]:d,[l]:i}),ref:e=>{n.current=e,f&&f(e)},role:"tab",id:"tab".concat(c),"aria-selected":d?"true":"false","aria-disabled":i?"true":"false","aria-controls":"panel".concat(c),tabIndex:m||(d?"0":null),"data-rttab":!0}),s)};z.tabsRole="Tab";const Y=z,D=["children","className","forceRender","id","selected","selectedClassName"];const U="react-tabs__tab-panel",V={className:U,forceRender:!1,selectedClassName:"".concat(U,"--selected")},K=e=>{const n=Object.assign({},V,e),{children:t,className:s,forceRender:a,id:i,selected:l,selectedClassName:o}=n,c=function(e,n){if(null==e)return{};var t={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(n.includes(s))continue;t[s]=e[s]}return t}(n,D);return r.createElement("div",Object.assign({},c,{className:p(s,{[o]:l}),role:"tabpanel",id:"panel".concat(i),"aria-labelledby":"tab".concat(i)}),a||l?t:null)};K.tabsRole="TabPanel";const M=K;var $=t(309),B=t(839),H=t(579);const W=()=>{var e;const[n,t]=(0,r.useState)(0),[l,o]=r.useState({}),[c,d]=r.useState(!1),{start:u,complete:m}=(0,B.zX)({color:"#1cdbbcd9",height:6,onLoaderFinished:function(){d(!0)}});r.useEffect((()=>{document.title="Tab form with zod"}),[]);const{register:f,handleSubmit:b,formState:{errors:h,isValid:p,isSubmitting:y},getValues:x,reset:N}=(0,a.mN)({resolver:(0,i.u)($.lE),mode:"onChange"});async function j(e){u(),await new Promise((e=>setTimeout(e,1e3))),m(),o(e),N()}function g(){n<3&&t(n+1)}function v(){n>0&&t(n-1)}return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("div",{className:"container bg-body rounded shadow-lg multi-tab-container",children:(0,H.jsxs)(q,{onSelect:function(e){t(e)},selectedIndex:n,children:[(0,H.jsxs)(A,{children:[(0,H.jsx)(Y,{children:"Personal Info"}),(0,H.jsx)(Y,{children:"Contact"}),(0,H.jsx)(Y,{children:"Address"}),(0,H.jsx)(Y,{children:"Summary"})]}),(0,H.jsxs)(M,{children:[(0,H.jsx)("h3",{children:"Personal Info"}),(0,H.jsxs)("form",{onSubmit:b(j),children:[(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"First Name:"}),(0,H.jsx)("input",(0,s.A)({type:"text",className:"form-control ".concat(h.firstName?"is-invalid":""),id:"firstName"},f("firstName"))),h.firstName&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.firstName.message})]}),(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"lastName",className:"form-label",children:"Last Name:"}),(0,H.jsx)("input",(0,s.A)({type:"text",className:"form-control ".concat(h.lastName?"is-invalid":""),id:"lastName"},f("lastName"))),h.lastName&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.lastName.message})]}),(0,H.jsx)("button",{type:"button",onClick:g,className:"btn btn-primary tab-form-submit",children:"Next"})]})]}),(0,H.jsxs)(M,{children:[(0,H.jsx)("h3",{children:"Contact"}),(0,H.jsxs)("form",{onSubmit:b(j),children:[(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email:"}),(0,H.jsx)("input",(0,s.A)({type:"email",className:"form-control ".concat(h.email?"is-invalid":""),id:"email"},f("email"))),h.email&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.email.message})]}),(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"phone",className:"form-label",children:"Phone:"}),(0,H.jsx)("input",(0,s.A)({type:"text",className:"form-control ".concat(h.phone?"is-invalid":""),id:"phone"},f("phone"))),h.phone&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.phone.message})]}),(0,H.jsx)("button",{type:"button",onClick:v,className:"btn btn-secondary",style:{marginRight:"10px"},children:"Back"}),(0,H.jsx)("button",{type:"button",onClick:g,className:"btn btn-primary tab-form-submit",children:"Next"})]})]}),(0,H.jsxs)(M,{children:[(0,H.jsx)("h3",{children:"Address"}),(0,H.jsxs)("form",{onSubmit:b(j),children:[(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"address",className:"form-label",children:"Address:"}),(0,H.jsx)("textarea",(0,s.A)({className:"form-control ".concat(h.address?"is-invalid":""),id:"address",rows:"3"},f("address"))),h.address&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.address.message})]}),(0,H.jsxs)("div",{className:"mb-3",children:[(0,H.jsx)("label",{htmlFor:"city",className:"form-label",children:"City:"}),(0,H.jsx)("input",(0,s.A)({type:"text",className:"form-control ".concat(h.city?"is-invalid":""),id:"city"},f("city"))),h.city&&(0,H.jsx)("div",{className:"invalid-feedback",children:h.city.message})]}),(0,H.jsx)("button",{type:"button",onClick:v,className:"btn btn-secondary",style:{marginRight:"10px"},children:"Back"}),(0,H.jsx)("button",{type:"button",onClick:g,className:"btn btn-primary tab-form-submit",children:"Next"})]})]}),(0,H.jsxs)(M,{children:[(0,H.jsx)("h3",{children:"Summary"}),(0,H.jsxs)("div",{children:[(0,H.jsx)("h4",{children:"Personal Info"}),(0,H.jsxs)("p",{children:["First Name: ",x("firstName")]}),(0,H.jsxs)("p",{children:["Last Name: ",x("lastName")]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("h4",{children:"Contact"}),(0,H.jsxs)("p",{children:["Email: ",x("email")]}),(0,H.jsxs)("p",{children:["Phone: ",x("phone")]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("h4",{children:"Address"}),(0,H.jsxs)("p",{children:["Address: ",x("address")]}),(0,H.jsxs)("p",{children:["City: ",x("city")]})]}),(0,H.jsxs)("form",{onSubmit:b(j),children:[(0,H.jsx)("button",{type:"submit",className:"tab-form-submit ".concat(p?"btn btn-primary":"btn btn-secondary"),disabled:!p,children:y?"Sumitting....":"Submit"}),!p&&(0,H.jsx)("p",{className:"error-message",children:"*** Submit button is disabled due to form has errors or blank fields."})]})]})]})}),(null===(e=Object.keys(l))||void 0===e?void 0:e.length)>0&&!y&&c&&(0,H.jsxs)("div",{className:"container bg-body rounded shadow-lg mt-4 pt-4 pb-4 tab-form-data",children:[(0,H.jsx)("h1",{children:"Form Data"}),(0,H.jsx)("pre",{children:JSON.stringify(l,null,2)})]})]})}},309:(e,n,t)=>{"use strict";t.d(n,{Z2:()=>a,lE:()=>o,mJ:()=>i,s4:()=>l});var s=t(899),r=t(665);const a=s.Ik().shape({emailId:s.Yj().email().required("Email is required"),password:s.Yj().required("Password is required").matches(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits")}),i=r.z.object({fullName:r.z.string().nonempty("Full Name is required"),emailId:r.z.string().email("Invalid Email").nonempty("Email is required").regex(/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/,"Invalid Email"),phoneNumber:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(10,"Value should be more than 10 digits").nonempty("Phone Number is required"),password:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required"),confirmPassword:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required")}).refine((e=>e.password===e.confirmPassword),{message:"Passwords don't match",path:["confirmPassword"]}),l=s.Ik().shape({firstName:s.Yj().required("First name is required"),lastName:s.Yj().required("Last name is required"),dob:s.p6().required("Date of Birth is required"),email:s.Yj().email("Invalid email address").required("Email address is required"),insurancePlan:s.Yj().required("Insurance plan is required"),mailingAddress:s.YO().of(s.Ik().shape({streetAddress:s.Yj().required("Street Address is required"),city:s.Yj().required("City is required"),region:s.Yj().required("Region is required"),postalCode:s.Yj().required("Postal Code is required")}))}),o=r.z.object({firstName:r.z.string().min(4,"Please enter a valid First name").nonempty("First Name is required"),lastName:r.z.string().min(4,"Please enter a valid Last name").nonempty("Last Name is required"),email:r.z.string().email("Invalid Email").nonempty("Email is required"),phone:r.z.string().regex(/^\d{10}$/,"Phone number must be 10 digits"),address:r.z.string().min(5,"Please enter a valid address").nonempty("Address is required"),city:r.z.string().min(4,"Please enter a valid city").nonempty("City is required")})},497:(e,n,t)=>{"use strict";var s=t(218);function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,a,i){if(i!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:r};return t.PropTypes=t,t}},554:(e,n,t)=>{e.exports=t(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},211:(e,n,t)=>{"use strict";t.d(n,{u:()=>i});var s=t(847),r=t(858),a=function(e,n){for(var t={};e.length;){var s=e[0],a=s.code,i=s.message,l=s.path.join(".");if(!t[l])if("unionErrors"in s){var o=s.unionErrors[0].errors[0];t[l]={message:o.message,type:o.code}}else t[l]={message:i,type:a};if("unionErrors"in s&&s.unionErrors.forEach((function(n){return n.errors.forEach((function(n){return e.push(n)}))})),n){var c=t[l].types,d=c&&c[s.code];t[l]=(0,r.Gb)(l,n,t,a,d?[].concat(d,s.message):s.message)}e.shift()}return t},i=function(e,n,t){return void 0===t&&(t={}),function(r,i,l){try{return Promise.resolve(function(a,i){try{var o=Promise.resolve(e["sync"===t.mode?"parse":"parseAsync"](r,n)).then((function(e){return l.shouldUseNativeValidation&&(0,s.w)({},l),{errors:{},values:t.raw?r:e}}))}catch(c){return i(c)}return o&&o.then?o.then(void 0,i):o}(0,(function(e){if(function(e){return Array.isArray(null==e?void 0:e.errors)}(e))return{values:{},errors:(0,s.H)(a(e.errors,!l.shouldUseNativeValidation&&"all"===l.criteriaMode),l)};throw e})))}catch(o){return Promise.reject(o)}}}}}]);
//# sourceMappingURL=173.77557dc5.chunk.js.map