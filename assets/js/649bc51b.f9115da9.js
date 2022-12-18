"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[9199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Add-in spotlight: ACQ for interpolation",date:"2016-06-10 21:23:00 -0000",authors:"govert"},i=void 0,l={permalink:"/TestDocs/blog/2016/06/10/add-in-spotlight-acq-for-interpolation",source:"@site/blog/2016-06-10-add-in-spotlight-acq-for-interpolation.md",title:"Add-in spotlight: ACQ for interpolation",description:"This is the first in an occasional series of posts about interesting Excel-DNA based add-ins.",date:"2016-06-10T21:23:00.000Z",formattedDate:"June 10, 2016",tags:[],readingTime:1.065,hasTruncateMarker:!1,authors:[{name:"Govert van Drimmelen",url:"https://github.com/Excel-DNA",imageURL:"https://avatars.githubusercontent.com/u/414659",key:"govert"}],frontMatter:{title:"Add-in spotlight: ACQ for interpolation",date:"2016-06-10 21:23:00 -0000",authors:"govert"},prevItem:{title:"Excel UDF IntelliSense for Excel-DNA and VBA",permalink:"/TestDocs/blog/2016/11/24/excel-udf-intellisense-for-excel-dna-and-vba"},nextItem:{title:"Excel-DNA version 0.33.8-rc2 available",permalink:"/TestDocs/blog/2015/09/03/excel-dna-version-0-33-8-rc2-available"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the first in an occasional series of posts about interesting Excel-DNA based add-ins."),(0,a.kt)("p",null,"Alex Chirokov's ",(0,a.kt)("strong",{parentName:"p"},"ACQ")," add-in provides a library of interpolation routines for Excel. The add-in includes 1D and 2D interpolators, scatter plot smoothing and a Mersenne Twister random number generator."),(0,a.kt)("p",null,"To have a closer look:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the current release on GitHub: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ratesquant/ACQ/releases"},"https://github.com/ratesquant/ACQ/releases")),(0,a.kt)("li",{parentName:"ul"},"With the main repository on GitHub at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ratesquant/ACQ"},"https://github.com/ratesquant/ACQ")),(0,a.kt)("li",{parentName:"ul"},"A very clear introduction to the library, including some of it's advanced features, is posted on Code Project: ",(0,a.kt)("a",{parentName:"li",href:"http://www.codeproject.com/Articles/1097174/Interpolation-in-Excel-using-Excel-DNA"},"http://www.codeproject.com/Articles/1097174/Interpolation-in-Excel-using-Excel-DNA"))),(0,a.kt)("p",null,"Features I like about the add-in (apart from it using Excel-DNA) include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A liberal open-source license"),(0,a.kt)("li",{parentName:"ul"},"A clear and authoritative implementation of a particular domain"),(0,a.kt)("li",{parentName:"ul"},"Very nice example of using object handles - an interpolator is build from the data, and then used to interpolate many values. ACQ has a clean implementation and great example of this technique."),(0,a.kt)("li",{parentName:"ul"},'All the functions have a common prefix ("',(0,a.kt)("inlineCode",{parentName:"li"},"=acq"),'..."), making them easy to find in the function list, and use with the Excel-DNA IntelliSense extension.')),(0,a.kt)("p",null,"Thank you for publishing a great add-in, Alex."),(0,a.kt)("p",null,"PS: ACQ has a bonus feature that implements a Sudoku solver (and generator)! See the write-up here: ",(0,a.kt)("a",{parentName:"p",href:"http://www.codeproject.com/Articles/1098156/Sudoku-Solver-in-Excel-using-Csharp-and-Excel-DNA"},"Sudoku Solver in Excel using C# and Excel-DNA"),"."))}p.isMDXComponent=!0}}]);