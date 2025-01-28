"use strict";(self.webpackChunkreact_form=self.webpackChunkreact_form||[]).push([[115],{115:(e,r,s)=>{s.r(r),s.d(r,{default:()=>c});var i=s(555),a=s(43),t=s(858),n=s(250),o=s(211),d=s(309),l=s(839),m=s(579);function u(e){let{type:r,name:s,placeholder:a,headerLabelText:n}=e;const{register:o,formState:{errors:d}}=(0,t.xW)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",(0,i.A)({type:r,className:"form-control ".concat(d[s]?"is-invalid":""),id:s,placeholder:a},o(s))),d[s]&&(0,m.jsx)("div",{class:"invalid-feedback",children:d[s].message}),(0,m.jsx)("label",{htmlFor:"floatingInput",children:n})]})}const c=()=>{var e;const[r,s]=a.useState({}),c=(0,n.Zp)(),h=(0,n.zy)(),{start:g,complete:p}=(0,l.zX)({color:"#1cdbbcd9",height:6});a.useEffect((()=>{document.title="React Forms Hook Signup","/dashboard/5"===h.pathname?(document.getElementsByTagName("body")[0].style.display="inherit",document.getElementsByTagName("body")[0].style.paddingTop="40px"):document.getElementsByTagName("body")[0].style.display="flex"}),[h.pathname]);const f=(0,t.mN)({resolver:(0,o.u)(d.mJ)});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("main",{className:"form-signin text-center bg-body rounded shadow-lg",children:(0,m.jsx)(t.Op,(0,i.A)((0,i.A)({},f),{},{children:(0,m.jsxs)("form",{onSubmit:f.handleSubmit((async function(e){try{if(g(),await new Promise((e=>setTimeout(e,1e3))),p(),"/dashboard/5"===h.pathname)return void s(e);c("/"),localStorage.setItem("loginDetails",JSON.stringify({data:e}))}catch(r){console.error("Signup onsubmit error",r)}})),children:[(0,m.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Sign up"}),(0,m.jsx)("div",{className:"form-floating mb-2",children:(0,m.jsx)(u,{type:"text",name:"fullName",placeholder:"Full Name",headerLabelText:"Full Name"})}),(0,m.jsx)("div",{className:"form-floating mb-2",children:(0,m.jsx)(u,{type:"email",name:"emailId",placeholder:"name@example.com",headerLabelText:"Email address"})}),(0,m.jsx)("div",{className:"form-floating mb-2",children:(0,m.jsx)(u,{type:"text",name:"phoneNumber",placeholder:"Phone Number",headerLabelText:"Phone Number"})}),(0,m.jsx)("div",{className:"form-floating mb-2",children:(0,m.jsx)(u,{type:"password",name:"password",placeholder:"Password",headerLabelText:"Password"})}),(0,m.jsx)("div",{className:"form-floating",children:(0,m.jsx)(u,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",headerLabelText:"Confirm Password"})}),(0,m.jsx)("button",{className:"w-100 btn btn-lg btn-primary sign-up-button mt-2",type:"submit",children:f.formState.isSubmitting?"Loading....":"Sign Up"})]})}))}),(null===(e=Object.keys(r))||void 0===e?void 0:e.length)>0&&!f.formState.isSubmitting&&(0,m.jsxs)("div",{className:"form-signin container bg-body rounded shadow-lg mt-4 pt-4 pb-4",style:{marginBottom:"5rem"},children:[(0,m.jsx)("h1",{children:"Form Data"}),(0,m.jsx)("pre",{children:JSON.stringify(r,null,2)})]})]})}},309:(e,r,s)=>{s.d(r,{Z2:()=>t,lE:()=>d,mJ:()=>n,s4:()=>o});var i=s(899),a=s(665);const t=i.Ik().shape({emailId:i.Yj().email().required("Email is required"),password:i.Yj().required("Password is required").matches(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits")}),n=a.z.object({fullName:a.z.string().nonempty("Full Name is required"),emailId:a.z.string().email("Invalid Email").nonempty("Email is required").regex(/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/,"Invalid Email"),phoneNumber:a.z.string().regex(/^[0-9]+$/,"Must be only digits").min(10,"Value should be more than 10 digits").nonempty("Phone Number is required"),password:a.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required"),confirmPassword:a.z.string().regex(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").nonempty("Password is required")}).refine((e=>e.password===e.confirmPassword),{message:"Passwords don't match",path:["confirmPassword"]}),o=i.Ik().shape({firstName:i.Yj().required("First name is required"),lastName:i.Yj().required("Last name is required"),dob:i.p6().required("Date of Birth is required"),email:i.Yj().email("Invalid email address").required("Email address is required"),insurancePlan:i.Yj().required("Insurance plan is required"),mailingAddress:i.YO().of(i.Ik().shape({streetAddress:i.Yj().required("Street Address is required"),city:i.Yj().required("City is required"),region:i.Yj().required("Region is required"),postalCode:i.Yj().required("Postal Code is required").matches(/^[0-9]+$/,"Must be only digits")}))}),d=a.z.object({firstName:a.z.string().min(4,"Please enter a valid First name").nonempty("First Name is required"),lastName:a.z.string().min(4,"Please enter a valid Last name").nonempty("Last Name is required"),email:a.z.string().email("Invalid Email").nonempty("Email is required"),phone:a.z.string().regex(/^\d{10}$/,"Phone number must be 10 digits"),address:a.z.string().min(5,"Please enter a valid address").nonempty("Address is required"),city:a.z.string().min(4,"Please enter a valid city").nonempty("City is required")})},211:(e,r,s)=>{s.d(r,{u:()=>n});var i=s(847),a=s(858),t=function(e,r){for(var s={};e.length;){var i=e[0],t=i.code,n=i.message,o=i.path.join(".");if(!s[o])if("unionErrors"in i){var d=i.unionErrors[0].errors[0];s[o]={message:d.message,type:d.code}}else s[o]={message:n,type:t};if("unionErrors"in i&&i.unionErrors.forEach((function(r){return r.errors.forEach((function(r){return e.push(r)}))})),r){var l=s[o].types,m=l&&l[i.code];s[o]=(0,a.Gb)(o,r,s,t,m?[].concat(m,i.message):i.message)}e.shift()}return s},n=function(e,r,s){return void 0===s&&(s={}),function(a,n,o){try{return Promise.resolve(function(t,n){try{var d=Promise.resolve(e["sync"===s.mode?"parse":"parseAsync"](a,r)).then((function(e){return o.shouldUseNativeValidation&&(0,i.w)({},o),{errors:{},values:s.raw?a:e}}))}catch(l){return n(l)}return d&&d.then?d.then(void 0,n):d}(0,(function(e){if(function(e){return Array.isArray(null==e?void 0:e.errors)}(e))return{values:{},errors:(0,i.H)(t(e.errors,!o.shouldUseNativeValidation&&"all"===o.criteriaMode),o)};throw e})))}catch(d){return Promise.reject(d)}}}}}]);
//# sourceMappingURL=115.e6459a31.chunk.js.map