"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[2450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Excel-DNA version 1.1",date:"2020-06-29 18:53:00 -0000",authors:"govert",tags:["release"]},l=void 0,s={permalink:"/TestDocs/blog/2020/06/29/excel-dna-version-1.1",source:"@site/blog/2020-06-29-excel-dna-version-1.1.md",title:"Excel-DNA version 1.1",description:"Excel-DNA version 1.1 is now available on NuGet and as a direct download from GitHub. The easiest way to install is with Visual Studio\u2019s NuGet package manager (package ExcelDna.AddIn) \u2013 a \u2018ReadMe\u2019 file with further instructions will then be displayed. From the Package Manager Console:",date:"2020-06-29T18:53:00.000Z",formattedDate:"June 29, 2020",tags:[{label:"release",permalink:"/TestDocs/blog/tags/release"}],readingTime:.945,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Excel-DNA version 1.1",date:"2020-06-29 18:53:00 -0000",authors:"govert",tags:["release"]},prevItem:{title:"Update v 1.5 / Sponsors / Roadmap",permalink:"/TestDocs/blog/2021/07/15/update-v1.5-sponsors-roadmap"},nextItem:{title:"Getting started (or: Why Are You Still Using VBA?)",permalink:"/TestDocs/blog/2019/08/11/getting-started-or-why-are-you-still-using-vba"}},i={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Excel-DNA version 1.1 is now available on ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/ExcelDna.AddIn/"},"NuGet")," and as a direct ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Excel-DNA/ExcelDna/releases"},"download from GitHub"),". The easiest way to install is with Visual Studio\u2019s NuGet package manager (package ExcelDna.AddIn) \u2013 a \u2018ReadMe\u2019 file with further instructions will then be displayed. From the Package Manager Console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Install-Package ExcelDna.AddIn\n")),(0,a.kt)("p",null,"Excel-DNA 1.1 is expected to be the final version to support older .NET (<4.5) and Excel (<2007) releases."),(0,a.kt)("p",null,"Excel-DNA version 1.1 implements workarounds for two recent changes in Excel behaviour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RTD servers based on ExcelRtdServer, and streaming functions based on IExcelObservable stopped updating after recent (early 2020) Excel updates."),(0,a.kt)("li",{parentName:"ul"},"When loaded into an elevated Excel process (running As Administrator) the on-demand COM registration (used for ribbon and CTP loading) started failing (mid 2020).")),(0,a.kt)("p",null,"The update also introduces strong-naming of the Excel-DNA assemblies (thanks to @augustoproiete)"),(0,a.kt)("p",null,"Please post any issues you run into to the Google group (",(0,a.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/exceldna"},"https://groups.google.com/forum/#!forum/exceldna"),")"),(0,a.kt)("p",null,"To make a donation to the project, or to arrange for a corporate support agreement that lets you steer the future of Excel-DNA, please visit the ",(0,a.kt)("a",{parentName:"p",href:"/#support"},"Excel-DNA Support")," page."),(0,a.kt)("p",null,"Thank you for your continued support and enthusiasm towards the Excel-DNA project!"))}u.isMDXComponent=!0}}]);