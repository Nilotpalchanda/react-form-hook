"use strict";(self.webpackChunkreact_form=self.webpackChunkreact_form||[]).push([[772],{772:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var i=a(555),r=a(43),t=a(858),l=a(941),n=a(309),d=a(839),c=a(579);const o=()=>{var e;const[s,a]=r.useState({}),[o,m]=r.useState(!1),{start:h,complete:u}=(0,d.zX)({color:"#1cdbbcd9",height:6,onLoaderFinished:function(){m(!0)}});r.useEffect((()=>{document.title="Health Insurance Enrollment Form with Yup"}),[]);const v={firstName:"",lastName:"",dob:"",email:"",insurancePlan:"",mailingAddress:[{streetAddress:"",city:"",region:"",postalCode:""}]},{register:b,handleSubmit:p,control:x,reset:j,formState:{errors:g,isValid:f,isSubmitting:N}}=(0,t.mN)({defaultValues:(0,i.A)({},v),resolver:(0,l.t)(n.s4)}),{fields:y,append:w,remove:A}=(0,t.jz)({control:x,name:"mailingAddress"});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ".concat((null===(e=Object.keys(s))||void 0===e?void 0:e.length)>0&&f&&!N?"health-form-with-result":"health-form"),children:[(0,c.jsx)("h1",{className:"",children:"Health Insurance Enrollment Form"}),(0,c.jsx)("form",{onSubmit:p((async function(e){try{h(),await new Promise((e=>setTimeout(e,1e3))),u(),a(e),j((0,i.A)({},v))}catch(s){console.error("Health form onsubmit issue :::",s)}})),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsxs)("div",{className:"mb-3 row",children:[(0,c.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"Employee name"}),(0,c.jsxs)("div",{className:"col-6",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.firstName?"is-invalid":""),id:"firstName",placeholder:"First name"},b("firstName"))),g.firstName&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.firstName.message})]}),(0,c.jsxs)("div",{className:"col-6",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.lastName?"is-invalid":""),id:"lastName",placeholder:"Last name"},b("lastName"))),g.lastName&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.lastName.message})]})]}),(0,c.jsx)("div",{className:"mb-3 row",children:(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("label",{htmlFor:"dob",className:"form-label",children:"Date of Birth"}),(0,c.jsx)("input",(0,i.A)({type:"date",className:"form-control ".concat(g.dob?"is-invalid":""),id:"dob"},b("dob",{valueAsDate:!0}))),g.dob&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.dob.message})]})}),(0,c.jsxs)("div",{className:"mb-3 row",children:[y.map(((e,s)=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"col-11 mt-2",children:[(0,c.jsx)("label",{htmlFor:"streetAddress",className:"form-label",children:"Mailing address"}),(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.streetAddress?"is-invalid":""),id:"streetAddress",placeholder:"Street Address"},b("mailingAddress.".concat(s,".streetAddress")))),g.streetAddress&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.streetAddress.message})]}),(0,c.jsxs)("div",{className:"row mt-2",children:[(0,c.jsxs)("div",{className:"col-4",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.city?"is-invalid":""),id:"city",placeholder:"City"},b("mailingAddress.".concat(s,".city")))),g.city&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.city.message})]}),(0,c.jsxs)("div",{className:"col-4",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.region?"is-invalid":""),id:"region",placeholder:"Region"},b("mailingAddress.".concat(s,".region")))),g.region&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.region.message})]}),(0,c.jsxs)("div",{className:"col-4",children:[(0,c.jsx)("input",(0,i.A)({type:"text",className:"form-control ".concat(g.postalCode?"is-invalid":""),id:"postalCode",placeholder:"Postal Code"},b("mailingAddress.".concat(s,".postalCode")))),g.postalCode&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.postalCode.message})]})]})]},e.id),(0,c.jsx)("div",{className:"col-1 action-btn",children:s>0&&(0,c.jsx)("button",{type:"button",class:"btn btn-default btn-sm",onClick:()=>A(s),children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[(0,c.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),(0,c.jsx)("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})]})})})]}))),(0,c.jsx)("div",{className:"mailing-adress-actions",children:(0,c.jsx)("button",{type:"button",class:"btn btn-default btn-sm",onClick:()=>w({streetAddress:"",city:"",region:"",postalCode:""}),children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-house-add",viewBox:"0 0 16 16",children:[(0,c.jsx)("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"}),(0,c.jsx)("path",{d:"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5"})]})})})]}),(0,c.jsx)("div",{className:"mb-3 row",children:(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),(0,c.jsx)("input",(0,i.A)({type:"email",className:"form-control ".concat(g.email?"is-invalid":""),id:"email",placeholder:"abc@domain.com"},b("email"))),g.email&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.email.message})]})}),(0,c.jsx)("div",{className:"mb-3 row",children:(0,c.jsxs)("div",{className:"col-12",children:[(0,c.jsx)("label",{htmlFor:"insurancePlan",className:"form-label",children:"Insurance plan"}),(0,c.jsxs)("div",{class:"form-check",children:[(0,c.jsx)("input",(0,i.A)({type:"radio",class:"form-check-input",id:"validationFormCheck2",value:"Insurance Plan 1"},b("insurancePlan"))),(0,c.jsx)("label",{class:"form-check-label",for:"validationFormCheck2",children:"Insurance Plan 1"})]}),(0,c.jsxs)("div",{class:"form-check",children:[(0,c.jsx)("input",(0,i.A)({type:"radio",class:"form-check-input",id:"validationFormCheck2",value:"Insurance Plan 2"},b("insurancePlan"))),(0,c.jsx)("label",{class:"form-check-label",for:"validationFormCheck2",children:"Insurance Plan 2"})]}),g.insurancePlan&&(0,c.jsx)("div",{className:"invalid-feedback",children:g.insurancePlan.message})]})}),(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12",children:(0,c.jsx)("button",{type:"submit",className:" submit-hf ".concat(f?"btn btn-primary":"btn btn-secondary"),disabled:!f,children:N?"Submitting....":"Submit"})})})]})})]}),!N&&o&&(0,c.jsxs)("div",{className:"container bg-body rounded shadow-lg mt-4 pt-4 pb-4 heath-form-data",children:[(0,c.jsx)("h1",{children:"Form Data"}),(0,c.jsx)("pre",{children:JSON.stringify(s,null,2)})]})]})}},309:(e,s,a)=>{a.d(s,{Z2:()=>t,lE:()=>d,mJ:()=>l,s4:()=>n});var i=a(899),r=a(665);const t=i.Ik().shape({emailId:i.Yj().email().required("Email is required"),password:i.Yj().required("Password is required").matches(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits")}),l=r.z.object({fullName:r.z.string().nonempty("Full Name is required"),emailId:r.z.string().email("Invalid Email").nonempty("Email is required").regex(/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/,"Invalid Email"),phoneNumber:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(10,"Value should be more than 10 digits").nonempty("Phone Number is required"),password:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required"),confirmPassword:r.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required")}).refine((e=>e.password===e.confirmPassword),{message:"Passwords don't match",path:["confirmPassword"]}),n=i.Ik().shape({firstName:i.Yj().required("First name is required"),lastName:i.Yj().required("Last name is required"),dob:i.p6().required("Date of Birth is required"),email:i.Yj().email("Invalid email address").required("Email address is required"),insurancePlan:i.Yj().required("Insurance plan is required"),mailingAddress:i.YO().of(i.Ik().shape({streetAddress:i.Yj().required("Street Address is required"),city:i.Yj().required("City is required"),region:i.Yj().required("Region is required"),postalCode:i.Yj().required("Postal Code is required").matches(/^[0-9]+$/,"Must be only digits")}))}),d=r.z.object({firstName:r.z.string().min(4,"Please enter a valid First name").nonempty("First Name is required"),lastName:r.z.string().min(4,"Please enter a valid Last name").nonempty("Last Name is required"),email:r.z.string().email("Invalid Email").nonempty("Email is required"),phone:r.z.string().regex(/^\d{10}$/,"Phone number must be 10 digits"),address:r.z.string().min(5,"Please enter a valid address").nonempty("Address is required"),city:r.z.string().min(4,"Please enter a valid city").nonempty("City is required")})},941:(e,s,a)=>{a.d(s,{t:()=>t});var i=a(847),r=a(858);function t(e,s,a){return void 0===s&&(s={}),void 0===a&&(a={}),function(t,l,n){try{return Promise.resolve(function(r,d){try{var c=(s.context,Promise.resolve(e["sync"===a.mode?"validateSync":"validate"](t,Object.assign({abortEarly:!1},s,{context:l}))).then((function(e){return n.shouldUseNativeValidation&&(0,i.w)({},n),{values:a.raw?t:e,errors:{}}})))}catch(o){return d(o)}return c&&c.then?c.then(void 0,d):c}(0,(function(e){if(!e.inner)throw e;return{values:{},errors:(0,i.H)((s=e,a=!n.shouldUseNativeValidation&&"all"===n.criteriaMode,(s.inner||[]).reduce((function(e,s){if(e[s.path]||(e[s.path]={message:s.message,type:s.type}),a){var i=e[s.path].types,t=i&&i[s.type];e[s.path]=(0,r.Gb)(s.path,a,e,s.type,t?[].concat(t,s.message):s.message)}return e}),{})),n)};var s,a})))}catch(d){return Promise.reject(d)}}}}}]);
//# sourceMappingURL=772.6823abca.chunk.js.map