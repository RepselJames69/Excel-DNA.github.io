"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[2838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={layout:"page",title:"Excel-DNA Performance"},i=void 0,l={unversionedId:"archive/exceldna-performance",id:"archive/exceldna-performance",title:"Excel-DNA Performance",description:"With Excel-DNA you can create high-performance UDFs by using a restricted set of types, and taking responsibility for ensuring that exceptions are not leaked. Otherwise, ExcelDna is designed be flexible and make it easy to expose your functions safely - these extensions perform well but are not tuned for high-performance interop.",source:"@site/docs/archive/exceldna-performance.md",sourceDirName:"archive",slug:"/archive/exceldna-performance",permalink:"/TestDocs/docs/archive/exceldna-performance",draft:!1,tags:[],version:"current",frontMatter:{layout:"page",title:"Excel-DNA Performance"},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Excel-DNA",permalink:"/TestDocs/docs/archive/getting-started"}},c={},s=[{value:"Excel-DNA optimization policy",id:"excel-dna-optimization-policy",level:2},{value:"Computing a million cells",id:"computing-a-million-cells",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With Excel-DNA you can create high-performance UDFs by using a restricted set of types, and taking responsibility for ensuring that exceptions are not leaked. Otherwise, ExcelDna is designed be flexible and make it easy to expose your functions safely - these extensions perform well but are not tuned for high-performance interop."),(0,r.kt)("p",null,"The best performing UDFs will have ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"double[,]")," as the parameter and return types, and be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"IsExceptionSafe=true")," (and IsThreadSafe=true for Excel 2007), in which case ExcelDna will not wrap your function call in an exception handler. In these cases there is no marshaling code invoked on the managed side, and Excel does the type conversion and error handling as needed. If your function throws an unhandled exception, Excel will crash fatally. For such functions, the only per call overhead is the unmanaged -> managed transition, which is less than 100 CPU instructions. On my fairly slow computer (Excel 2007), Excel is happy to make more than 300 000 calls per second to a simple ExcelDna function (I used CalcCircum from the Xll SDK Example, which multiplies the input number by a constant). With the example C add-in (the no-overhead 'native' case) Excel makes closer to 1 000 000 calls per second to the .xll."),(0,r.kt)("p",null,"Of course, as the code in your UDF becomes significant, this transition overhead of a few microseconds becomes less important, and the performance of you JITted managed code dominates. (You should expect the performance of managed code to be excellent, but numerical and array-intensive routines might need to be profiled and tuned aggressively, ultimately being maybe 10% slower than C++.)"),(0,r.kt)("p",null,"If an exported function is not marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"IsExceptionSafe=true"),", then an exception handler is created, and the return value is explicitly marshaled (the return type is effectively object, to allow an error value to be returned). With the additional overhead of the wrapper and marshaling the return value, the simple function recalculates at about 150 000 calls per second."),(0,r.kt)("p",null,"Any other data types force a managed code marshaling for each value. The overhead now includes a function call to the marshaling code, memory allocation and a copy of the data to or from the managed heap. For strings under Excel pre-2007 this includes a text encoding/decoding, in Excel 2007 at least a copy of the string."),(0,r.kt)("h2",{id:"excel-dna-optimization-policy"},"Excel-DNA optimization policy"),(0,r.kt)("p",null,"I will maintain a fast, performance-sensitive path for functions (exception-safe or not) where all parameter and return types are among the following :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Double")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Double[,]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object"),"\n(object return values should be one of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Double")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object[,]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExcelError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExcelEmpty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExcelMissing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExcelReference"),"\n)")))),(0,r.kt)("p",null,"For other data types (like the other types currently supported) and method extensions, I will focus on the ease with which extensions can be added and the availability and usability of more powerful features. In upcoming versions I want to add more type conversions, and include the ability to add your own type converters and function wrappers."),(0,r.kt)("h2",{id:"computing-a-million-cells"},"Computing a million cells"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"double")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," Not ExcelDna - native C .xll (+/- 1s == +/- 1 000 000 /s)\n",(0,r.kt)("inlineCode",{parentName:"p"},"double")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," ExcelDna fastest - marked ExceptionSafe (< 3s == 300 000 /s)\n",(0,r.kt)("inlineCode",{parentName:"p"},"double")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," ExcelDna - not marked ExceptionSafe (< 6s == 150 000 /s)\n",(0,r.kt)("inlineCode",{parentName:"p"},"object")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," passing in doubles (< 8s == 120 000 /s)\n",(0,r.kt)("inlineCode",{parentName:"p"},"object")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," passing in doubles, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"input.ToString()")," (< 9s == 110 000 /s)"),(0,r.kt)("p",null,"Multi-threaded recalculation"),(0,r.kt)("p",null,"Under Excel 2007 you can also add IsThreadSafe=true to your function. This can give your sheets a dramatic boost that I leave for you to discover ;-)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[ExcelFunction(IsExceptionSafe=true, IsThreadSafe=true)]\npublic static double CalcCircumDna(double val)\n{\n    return val * 6.283185308;\n}\n")))}d.isMDXComponent=!0}}]);