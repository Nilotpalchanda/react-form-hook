"use strict";(self.webpackChunkreact_form=self.webpackChunkreact_form||[]).push([[886],{886:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(555),i=a(43),d=a(250),t=a(858),r=a(941),n=a(899),o=a(579);const m=n.Ik().shape({emailId:n.Yj().email().required("Email is required"),password:n.Yj().matches(/^[0-9]+$/,"Must be only digits").min(5,"Value should be more than 5 digits").required("Password is required")}),c=()=>{var e;const[s,a]=i.useState({}),[n,c]=i.useState(!0),[h,u]=i.useState({}),p=(0,d.Zp)(),g=(0,d.zy)();i.useEffect((()=>{document.title="React Forms Hook Login",document.getElementsByTagName("body")[0].style.display="flex";let e=localStorage.getItem("loginDetails");a(JSON.parse(e))}),[]);const{register:b,handleSubmit:f,formState:{errors:j}}=(0,t.mN)({resolver:(0,r.t)(m)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("main",{className:"form-signin text-center bg-body rounded shadow-lg",children:(0,o.jsxs)("form",{onSubmit:f((function(e){"/dashboard/3"!==g.pathname?s&&e.emailId===s.data.emailId&&e.password===s.data.password?p("/dashboard",{state:{userName:s.data.fullName,emailId:s.data.emailId}}):c(!1):u(e)})),children:[(0,o.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"Login"}),(0,o.jsxs)("div",{className:"form-floating mb-2",children:[(0,o.jsx)("input",(0,l.A)({type:"email",className:"form-control ".concat(j.emailId?"is-invalid":""),id:"emailId",placeholder:"name@example.com"},b("emailId"))),j.emailId&&(0,o.jsx)("div",{class:"invalid-feedback",children:j.emailId.message}),(0,o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),(0,o.jsxs)("div",{className:"form-floating mb-2",children:[(0,o.jsx)("input",(0,l.A)({type:"password",className:"form-control m-0 ".concat(j.password?"is-invalid":""),id:"password",placeholder:"Password"},b("password"))),j.password&&(0,o.jsx)("div",{class:"invalid-feedback",children:j.password.message}),(0,o.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]}),(0,o.jsx)("button",{className:"w-100 btn btn-lg  login-button ",type:"submit",children:"Sign in"}),!n&&(0,o.jsxs)("p",{className:"has-account",children:["You dont have account with us. Please",(0,o.jsx)(d.N_,{to:"/signup",children:"Sign up"})]})]})}),(null===(e=Object.keys(h))||void 0===e?void 0:e.length)>0&&(0,o.jsxs)("div",{className:"form-signin container bg-body rounded shadow-lg mt-4 pt-4 pb-4 ",children:[(0,o.jsx)("h1",{children:"Form Data"}),(0,o.jsx)("pre",{children:JSON.stringify(h,null,2)})]})]})}}}]);
//# sourceMappingURL=886.8cf41f02.chunk.js.map