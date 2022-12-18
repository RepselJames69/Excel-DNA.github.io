"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[5118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Excel-DNA version 1.0",date:"2019-03-17 21:08:00 -0000",authors:"govert",tags:["release"]},l=void 0,i={permalink:"/TestDocs/blog/2019/03/17/excel-dna-version-1.0",source:"@site/blog/2019-03-17-excel-dna-version-1.0.md",title:"Excel-DNA version 1.0",description:"Excel-DNA version 1.0 is now available on NuGet and as a direct download from GitHub. The easiest way to install is with Visual Studio\u2019s NuGet package manager (package ExcelDna.AddIn) \u2013 a \u2018ReadMe\u2019 file with further instructions will then be displayed. From the Package Manager Console:",date:"2019-03-17T21:08:00.000Z",formattedDate:"March 17, 2019",tags:[{label:"release",permalink:"/TestDocs/blog/tags/release"}],readingTime:1.2,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel-DNA version 1.0",date:"2019-03-17 21:08:00 -0000",authors:"govert",tags:["release"]},prevItem:{title:"Getting started (or: Why Are You Still Using VBA?)",permalink:"/TestDocs/blog/2019/08/11/getting-started-or-why-are-you-still-using-vba"},nextItem:{title:"Develop Excel Conference \u2013 London, 18 October 2018",permalink:"/TestDocs/blog/2018/09/21/develop-excel-conference"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Excel-DNA version 1.0 is now available on ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/ExcelDna.AddIn/"},"NuGet")," and as a direct ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/releases"},"download from GitHub"),". The easiest way to install is with Visual Studio\u2019s NuGet package manager (package ExcelDna.AddIn) \u2013 a \u2018ReadMe\u2019 file with further instructions will then be displayed. From the Package Manager Console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Install-Package ExcelDna.AddIn\n")),(0,a.kt)("p",null,"The Excel-DNA 1.0.x series (this version with minor fixes) will be the final version to support older .NET (<4.0) and Excel (<2007) releases."),(0,a.kt)("p",null,"Version 1.0 is essentially the same as the long-overdue version 0.35. The update includes a number of bug fixes as well as improvements to the build-time Visual Studio integration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve build tasks \u2013 more reliable clean-up and debugger detection"),(0,a.kt)("li",{parentName:"ul"},"Improve RTD and async QueueAsMacro reliability"),(0,a.kt)("li",{parentName:"ul"},"Improve install process of ExcelDna.AddIn NuGet package (now requires NuGet 2.5) (thanks to @caioproiete)"),(0,a.kt)("li",{parentName:"ul"},"Change how ExcelDnaUtil.Application works in Protected View \u2013 try harder but don\u2019t cache"),(0,a.kt)("li",{parentName:"ul"},"Call UnhandledExceptionHandler for macros (ExcelCommands) too"),(0,a.kt)("li",{parentName:"ul"},"Add XML schema for .dna file (thanks to @caioproiete)"),(0,a.kt)("li",{parentName:"ul"},"Add option to pack .pdb files (thanks to @lanfeust69)"),(0,a.kt)("li",{parentName:"ul"},"Fix exception handling from native async functions (thanks to @ittegrat)")),(0,a.kt)("p",null,"Please post any issues you run into to the Google group (",(0,a.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/exceldna"},"https://groups.google.com/forum/#!forum/exceldna"),")"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To make a donation to the project, or to arrange for a corporate support agreement that lets you influence the future of Excel-DNA, please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://excel-dna.net/support/"},"Excel-DNA Support")," page."),(0,a.kt)("p",null,"Thank you for your continued support and enthusiasm towards the Excel-DNA project!"))}p.isMDXComponent=!0}}]);