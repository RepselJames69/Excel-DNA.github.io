"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[8431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"FSharp Type Inference"},o=void 0,l={unversionedId:"archive/guides/fsharp-type-inference",id:"archive/guides/fsharp-type-inference",title:"FSharp Type Inference",description:"When creating UDFs with F#, the flexible type inference might lead to function signatures that are not supported by Excel-DNA, or lead to unexpected results.",source:"@site/docs/archive/guides/fsharp-type-inference.md",sourceDirName:"archive/guides",slug:"/archive/guides/fsharp-type-inference",permalink:"/TestDocs/docs/archive/guides/fsharp-type-inference",draft:!1,tags:[],version:"current",frontMatter:{title:"FSharp Type Inference"},sidebar:"tutorialSidebar",previous:{title:"FSharp Standalone Assemblies",permalink:"/TestDocs/docs/archive/guides/fsharp-standalone-assemblies"},next:{title:"Installing Your Add-in",permalink:"/TestDocs/docs/archive/guides/installing-your-add-in"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When creating UDFs with F#, the flexible type inference might lead to function signatures that are not supported by Excel-DNA, or lead to unexpected results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let MakeTwo x = 2\n")),(0,a.kt)("p",null,"This doesn't work (the UDF doesn't get registered) since the inferred type is ",(0,a.kt)("em",{parentName:"p"},"'a -> int"),", so is generic over the argument. This is equivalent to the C# signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"public int MakeTwo<T>(T input) = { return 2; }\n")),(0,a.kt)("p",null,"However, the following, with explicit typing,  does work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let MakeTwo (x : float) = 2\n")),(0,a.kt)("p",null,"This would apply to any function that is generic over its input. Another example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let AddString x y = x.ToString() + y.ToString()\n")),(0,a.kt)("p",null,"which is of the type a' -> b' -> string and doesn't get exposed as an UDF either."),(0,a.kt)("p",null,"Adding explicit types removes the generic parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let AddString (x:obj) (y:obj) = x.ToString() + y.ToString()\n")),(0,a.kt)("p",null,"Even the simple example in the distribution can be a concern:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let Add x y = x + y\n")),(0,a.kt)("p",null,"F# infers this function to be of the type int -> int -> int, and if called in Excel as =Add(2.5,3.5) then this function will return 7 not 6."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-fsharp"},"let Add (x:float) (y:float) = x + y\n")))}u.isMDXComponent=!0}}]);