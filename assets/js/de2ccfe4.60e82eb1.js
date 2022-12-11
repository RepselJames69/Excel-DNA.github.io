"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[2523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={layout:"page",title:"Excel-DNA Reference: Wrapper SDK API, COM interface, Ribbon, Custom Task Panes, COM server support"},i=void 0,o={type:"mdx",permalink:"/TestDocs/reference-various",source:"@site/src/pages/reference-various.md",title:"Excel-DNA Reference: Wrapper SDK API, COM interface, Ribbon, Custom Task Panes, COM server support",description:"Wrapper for the Excel 97 / Excel 2007 SDK API",frontMatter:{layout:"page",title:"Excel-DNA Reference: Wrapper SDK API, COM interface, Ribbon, Custom Task Panes, COM server support"}},s=[{value:"Wrapper for the Excel 97 / Excel 2007 SDK API",id:"wrapper-for-the-excel-97--excel-2007-sdk-api",level:2},{value:"Excel COM interface access",id:"excel-com-interface-access",level:2},{value:"Ribbon",id:"ribbon",level:2},{value:"Custom Task Panes",id:"custom-task-panes",level:2},{value:"COM Server support",id:"com-server-support",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wrapper-for-the-excel-97--excel-2007-sdk-api"},"Wrapper for the Excel 97 / Excel 2007 SDK API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XlCall")," class: ",(0,a.kt)("inlineCode",{parentName:"li"},"XlCall.Excel")," wraps ",(0,a.kt)("inlineCode",{parentName:"li"},"Excel4"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"Excel12")," (but easy to call), also constants for all the API functions and commands."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XlCallException"),": is thrown when the call to Excel fails."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"XlCall.TryExcel"),": does not throw exception on fail, but returns an ",(0,a.kt)("inlineCode",{parentName:"li"},"XlCallReturn")," enum value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelDna.Integration.Integration"),": contains the static method ",(0,a.kt)("inlineCode",{parentName:"li"},"RegisterMethods")," which allow dynamic registration of methods.")),(0,a.kt)("h2",{id:"excel-com-interface-access"},"Excel COM interface access"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ExcelDna.Integration.ExcelDnaUtils.Application")," returns the Excel Application COM object."),(0,a.kt)("p",null,"From VB this can be used late-bound quite easily."),(0,a.kt)("p",null,"From C# 4 late-binding through the ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic")," type is recommended."),(0,a.kt)("h2",{id:"ribbon"},"Ribbon"),(0,a.kt)("p",null,"To support the Excel 2007 / 2010 Ribbon interface, the addin (in a .dna file or ",(0,a.kt)("inlineCode",{parentName:"p"},"ExternalLibrary"),") must contain at least one public class that is a direct subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelDna.Integration.CustomUI.ExcelRibbon"),"."),(0,a.kt)("p",null,"This class can also implement ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelDna.Integration.IExcelAddIn"),", but need not."),(0,a.kt)("p",null,"For each such class, ExcelDna will dynamically register and load a COM add-in in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AutoOpen")," call (after calling all the ",(0,a.kt)("inlineCode",{parentName:"p"},"IExcelAddin.AutoOpen")," methods). This will trigger the loading of the Ribbon UI, and Excel calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelRibbon.GetCustomUI")," method. This is a virtual method, with a default implementation that retrieves the ribbon xml from the .dna file. An add-in can override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"GetCustomUI")," method to explicitly return an xml appropriate string. All callback methods that the Ribbon calls must be implemented as public methods in the class derived from ExcelRibbon."),(0,a.kt)("p",null,"My goal for the multi-version ",(0,a.kt)("inlineCode",{parentName:"p"},"customUI")," support is to allow you to create a single add-in that contains UI customization for each version. The idea is not to make a unified customization layer - the add-in could contain different code for different versions."),(0,a.kt)("h2",{id:"custom-task-panes"},"Custom Task Panes"),(0,a.kt)("p",null,"Support under ",(0,a.kt)("inlineCode",{parentName:"p"},"ExcelDna.Integration.CustomUI"),"."),(0,a.kt)("p",null,"The CustomTaskPane class defines the interfaces related to CTP's."),(0,a.kt)("p",null,"A CTP must contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"UserControl")," (derived from ",(0,a.kt)("inlineCode",{parentName:"p"},"System.Windows.Forms.UserControl"),")."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomTaskPane")," containing an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"MyUserControl")," by calling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var myCTP = CustomTaskPaneFactory.CreateCustomTaskPane(typeof(MyUserControl), myTitle);\n")),(0,a.kt)("h2",{id:"com-server-support"},"COM Server support"),(0,a.kt)("p",null,"COM visible classes in ExternalLibrary tags marked ",(0,a.kt)("inlineCode",{parentName:"p"},'ComServer="true"'),", and COM visible classes that implement ",(0,a.kt)("inlineCode",{parentName:"p"},"IRtdServer")," can be activated through the .xll directly. Even if the add-in is not loaded in Excel, such objects can be created in VBA."),(0,a.kt)("p",null,"These classes are (persistently) registered by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"regsvr32 <MyAddin>.xll")," or by ",(0,a.kt)("inlineCode",{parentName:"p"},"ComServer.DllRegisterServer()"),", and unregistered by ",(0,a.kt)("inlineCode",{parentName:"p"},"regsvr32 /u <MyAddin>.xll")," or by ",(0,a.kt)("inlineCode",{parentName:"p"},"ComServer.DllUnregisterServer()"),"."),(0,a.kt)("p",null,"Such classes can be accessed directly as RTD servers or from VBA using ",(0,a.kt)("inlineCode",{parentName:"p"},'CreateObject("MyServer.ItsProgId")'),", and will be loaded in the add-in's AppDomain. (The add-in need not be loaded for registered classes to be accessed through COM.)"),(0,a.kt)("p",null,"A type library (.tlb) can be created for the assembly using tlbexp.exe, and will be registered if available. If the assembly is packed in the .xll, the type library will be packed too."))}p.isMDXComponent=!0}}]);