(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[19],{486:function(e,t,c){"use strict";var s=c(496),r=c.n(s),a=c(21),n=c(497).a(),l=c(30),i=c(273);const o=r.a.create({baseURL:a.a,timeout:6e4}),j="/auth/login";o.interceptors.request.use((e=>{const t=localStorage.getItem(l.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(n.push(j),window.location.reload()),e}),(e=>{i.a.error({message:"Error"}),Promise.reject(e)})),o.interceptors.response.use((e=>e.data),(e=>{let t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(l.b),n.push(j),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),i.a.error(t),Promise.reject(e)}));t.a=o},488:function(e,t,c){"use strict";c.d(t,"d",(function(){return r})),c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return l}));c(0);var s=c(5);const r=()=>Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsx)("path",{d:"M537.016,909.264c-7.034,0-14.006-2.372-19.671-6.97L18.508,496.986C11.232,491.055,7,482.161,7,472.781\r c0-9.374,4.232-18.267,11.508-24.204L517.345,43.272c9.318-7.551,22.258-9.104,33.064-3.959\r c10.871,5.175,17.785,16.135,17.785,28.162v219.277c243.388,16.107,436.483,219.246,436.483,466.625v62.353\r c0,12.18-7.097,23.235-18.147,28.314c-11.054,5.119-24.054,3.292-33.311-4.626l-52.55-45.027\r c-93.318-79.986-210.359-126.841-332.476-133.66v217.36c0,12.022-6.914,22.986-17.785,28.158\r C546.146,908.262,541.58,909.268,537.016,909.264L537.016,909.264z M125.715,472.781L506.65,782.309V614.776\r c0-15.697,12.702-28.401,28.399-28.401c134.946,0,265.707,48.367,368.18,136.193l0.972,0.834\r c-2.664-201.286-167.231-364.213-369.148-364.213c-15.699,0-28.4-12.704-28.4-28.399V163.258\r C506.65,163.258,125.715,472.781,125.715,472.781L125.715,472.781z"})}),a=()=>Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(s.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(s.jsx)("g",{id:"Connected_Home_1_",children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(s.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(s.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(s.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(s.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})}),n=()=>Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(s.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(s.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})}),l=()=>Object(s.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#E5E1E5",d:"M163.033,1011.756L2.746,191.353c-4.863-24.879,11.365-48.991,36.245-53.852l124.042-24.234l194.642-42.82\r l279.663,941.308H163.033V1011.756z"})}),Object(s.jsx)("path",{fill:"#99E6FC",d:"M163.033,680.979L68.355,196.393l94.678-18.501l143.802-23.615l62.994,584.599L163.033,680.979z"}),Object(s.jsxs)("g",{id:"XMLID_159_",children:[Object(s.jsx)("g",{children:Object(s.jsx)("path",{fill:"#F9F7F8",d:"M1014.357,64.9v957.461c0,25.351-20.549,45.899-45.899,45.899H208.93\r c-25.351,0-45.901-20.549-45.901-45.899V64.9c0-25.35,20.551-45.9,45.901-45.9h759.528C993.809,19,1014.357,39.551,1014.357,64.9\r z"})}),Object(s.jsx)("path",{fill:"#EFEDEF",d:"M574.473,971.206c-90.848,0-164.495-73.646-164.495-164.493V19H208.93\r c-25.351,0-45.901,20.551-45.901,45.9v957.461c0,25.351,20.551,45.899,45.901,45.899h759.528\r c25.351,0,45.899-20.549,45.899-45.899v-51.155H574.473z"}),Object(s.jsx)("path",{fill:"#FEC165",d:"M950.933,737.554V234.861c0-7.122-5.774-12.896-12.897-12.896H239.354c-7.12,0-12.896,5.774-12.896,12.896\r v502.692H950.933z"}),Object(s.jsx)("path",{fill:"#FDB441",d:"M409.978,221.965H239.354c-7.12,0-12.896,5.774-12.896,12.896v502.692h183.52V221.965z"}),Object(s.jsx)("circle",{fill:"#FEE903",cx:"588.693",cy:"600.309",r:"246.948"}),Object(s.jsx)("path",{fill:"#F4D902",d:"M409.978,770.729V429.889c-42.274,44.316-68.229,104.339-68.229,170.419\r C341.748,666.391,367.703,726.41,409.978,770.729z"}),Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{fill:"#99E6FC",d:"M902.813,668.316c-57.591-25.393-122.604-28.267-182.203-8.034l-51.163,17.336\r c-52.369,17.759-109.135,17.759-161.505,0l-51.163-17.336c-59.602-20.232-124.611-17.358-182.182,8.034l-48.142,21.226v105.269\r l80.12,33.354h599.658l44.699-33.354V689.542L902.813,668.316z"}),Object(s.jsx)("path",{fill:"#62DBFB",d:"M409.978,828.165V649.264c-45.72-6.239-92.605,0.184-135.379,19.053l-48.141,21.226v105.269\r l80.119,33.354H409.978z"}),Object(s.jsx)("path",{fill:"#62DBFB",d:"M950.933,794.811v61.709c0,5.452-4.424,9.878-9.879,9.878H236.332c-5.453,0-9.877-4.426-9.877-9.878\r v-61.709l48.142-21.229c57.57-25.39,122.58-28.268,182.182-8.055l51.163,17.358c52.37,17.759,109.136,17.759,161.505,0\r l51.163-17.358c59.6-20.213,124.612-17.335,182.203,8.055L950.933,794.811z"}),Object(s.jsx)("path",{fill:"#01D0FB",d:"M236.332,866.397h184.86c-7.214-18.51-11.215-38.625-11.215-59.685v-52.188\r c-45.72-6.231-92.605,0.192-135.379,19.061l-48.141,21.226v61.71c-0.003,5.451,4.421,9.875,9.874,9.875V866.397z"})]})]})]})})},489:function(e,t,c){"use strict";var s=c(0),r=c.n(s),a=c(508),n=c(5);const l=r.a.forwardRef(((e,t)=>Object(n.jsx)(a.a,{component:e.svg,className:e.className})));t.a=l},490:function(e,t,c){"use strict";var s=c(486);const r={login:function(e){return Object(s.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(s.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=r},502:function(e,t,c){"use strict";var s=c(0),r=c(38),a=c(509),n=c(104),l=c(648),i=c(646),o=c(456),j=c(471),d=c(625),h=c(488),b=c(489),m=c(56),u=c(490),x=c(43),O=c(506),p=c(5);const g=e=>{let t=Object(x.g)();const{otherSignIn:c,showForgetPassword:r,hideAuthMessage:m,onForgetPasswordClick:g,showLoading:f,extra:v,loading:w,showMessage:C,message:y,authenticated:F,showAuthMessage:N,token:M,redirect:z,allowRedirect:E}=e;Object(s.useEffect)((()=>{null!==M&&E&&t.push(z),C&&setTimeout((()=>{m()}),3e3)}));const L=Object(p.jsxs)("div",{children:[Object(p.jsx)(a.a,{children:Object(p.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(p.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(p.jsx)(n.a,{onClick:()=>{f()},className:"mr-2",disabled:w,icon:Object(p.jsx)(b.a,{svg:h.b}),children:"Google"}),Object(p.jsx)(n.a,{onClick:()=>{f()},icon:Object(p.jsx)(b.a,{svg:h.a}),disabled:w,children:"Facebook"})]})]});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:C?1:0,marginBottom:C?20:0},children:Object(p.jsx)(l.a,{type:"error",showIcon:!0,message:y})}),Object(p.jsxs)(i.a,{layout:"vertical",name:"login-form",onFinish:e=>{f();u.a.login(e).then((e=>{F("fakeToken")})).then((e=>{N(e)}))},children:[Object(p.jsx)(i.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(p.jsx)(o.a,{prefix:Object(p.jsx)(j.a,{className:"text-primary"})})}),Object(p.jsx)(i.a.Item,{name:"password",label:Object(p.jsxs)("div",{className:""+(r?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(p.jsx)("span",{children:"Password"}),r&&Object(p.jsx)("span",{onClick:()=>g,className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(p.jsx)(o.a.Password,{prefix:Object(p.jsx)(d.a,{className:"text-primary"})})}),Object(p.jsx)(i.a.Item,{children:Object(p.jsx)(n.a,{type:"primary",htmlType:"submit",block:!0,loading:w,children:"Sign In"})}),c?L:null,v]})]})};g.defaultProps={otherSignIn:!0,showForgetPassword:!1};const f={showAuthMessage:m.c,showLoading:m.d,hideAuthMessage:m.b,authenticated:m.a};t.a=Object(r.b)((e=>{let{auth:t}=e;const{loading:c,message:s,showMessage:r,token:a,redirect:n}=t;return{loading:c,message:s,showMessage:r,token:a,redirect:n}}),f)(g)},508:function(e,t,c){"use strict";var s=c(1),r=c(3),a=c(20),n=c(0),l=c(6),i=c.n(l),o=c(127),j=c(66),d=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],h=n.forwardRef((function(e,t){var c=e.className,l=e.component,h=e.viewBox,b=e.spin,m=e.rotate,u=e.tabIndex,x=e.onClick,O=e.children,p=Object(a.a)(e,d);Object(j.g)(Boolean(l||O),"Should have `component` prop or `children`."),Object(j.f)();var g=n.useContext(o.a),f=g.prefixCls,v=void 0===f?"anticon":f,w=g.rootClassName,C=i()(w,v,c),y=i()(Object(r.a)({},"".concat(v,"-spin"),!!b)),F=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,N=Object(s.a)(Object(s.a)({},j.e),{},{className:y,style:F,viewBox:h});h||delete N.viewBox;var M=u;return void 0===M&&x&&(M=-1),n.createElement("span",Object(s.a)(Object(s.a)({role:"img"},p),{},{ref:t,tabIndex:M,onClick:x,className:C}),l?n.createElement(l,Object(s.a)({},N),O):O?(Object(j.g)(Boolean(h)||1===n.Children.count(O)&&n.isValidElement(O)&&"use"===n.Children.only(O).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",Object(s.a)(Object(s.a)({},N),{},{viewBox:h}),O)):null)}));h.displayName="AntdIcon",t.a=h},509:function(e,t,c){"use strict";var s=c(4),r=c(3),a=c(0),n=c(6),l=c.n(n),i=c(77),o=function(e,t){var c={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(c[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(c[s[r]]=e[s[r]])}return c};t.a=function(e){return a.createElement(i.a,null,(function(t){var c,n=t.getPrefixCls,i=t.direction,j=e.prefixCls,d=e.type,h=void 0===d?"horizontal":d,b=e.orientation,m=void 0===b?"center":b,u=e.className,x=e.children,O=e.dashed,p=e.plain,g=o(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=n("divider",j),v=m.length>0?"-".concat(m):m,w=!!x,C=l()(f,"".concat(f,"-").concat(h),(c={},Object(r.a)(c,"".concat(f,"-with-text"),w),Object(r.a)(c,"".concat(f,"-with-text").concat(v),w),Object(r.a)(c,"".concat(f,"-dashed"),!!O),Object(r.a)(c,"".concat(f,"-plain"),!!p),Object(r.a)(c,"".concat(f,"-rtl"),"rtl"===i),c),u);return a.createElement("div",Object(s.a)({className:C},g,{role:"separator"}),x&&a.createElement("span",{className:"".concat(f,"-inner-text")},x))}))}},638:function(e,t,c){"use strict";c.r(t);c(0);var s=c(502),r=c(493),a=c(494),n=c(38),l=c(5);const i={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=e=>{const t=Object(n.c)((e=>e.theme.currentTheme));return Object(l.jsx)("div",{className:"h-100 "+("light"===t?"bg-white":""),children:Object(l.jsxs)(r.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(l.jsx)(a.a,{xs:20,sm:20,md:24,lg:16,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(r.a,{justify:"center",children:Object(l.jsxs)(a.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)("a",{href:"/auth/register-2",children:"Sign Up"})]}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(s.a,{...e})})]})})})}),Object(l.jsx)(a.a,{xs:0,sm:0,md:0,lg:8,children:Object(l.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:i,children:[Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(l.jsx)(r.a,{justify:"center",children:Object(l.jsxs)(a.a,{xs:0,sm:0,md:0,lg:20,children:[Object(l.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-18.png",alt:""}),Object(l.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(l.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(l.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Term & Conditions"}),Object(l.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(l.jsx)("a",{className:"text-white",href:"/#",onClick:e=>e.preventDefault(),children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=19.837346c6.chunk.js.map