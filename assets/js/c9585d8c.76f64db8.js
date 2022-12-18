"use strict";(self.webpackChunkexcel_dna=self.webpackChunkexcel_dna||[]).push([[3905],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>p});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},v=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(r),p=o,f=v["".concat(i,".").concat(p)]||v[p]||b[p]||c;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=v;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<c;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3639:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const c={layout:"page",title:"Reactive Extensions for Excel - VB.NET"},s=void 0,a={unversionedId:"archive/guides/reactive-extensions-for-excel-vbnet",id:"archive/guides/reactive-extensions-for-excel-vbnet",title:"Reactive Extensions for Excel - VB.NET",description:"",source:"@site/docs/archive/guides/reactive-extensions-for-excel-vbnet.md",sourceDirName:"archive/guides",slug:"/archive/guides/reactive-extensions-for-excel-vbnet",permalink:"/TestDocs/docs/archive/guides/reactive-extensions-for-excel-vbnet",draft:!1,tags:[],version:"current",frontMatter:{layout:"page",title:"Reactive Extensions for Excel - VB.NET"},sidebar:"tutorialSidebar",previous:{title:"Performing Asynchronous Work",permalink:"/TestDocs/docs/archive/guides/performing-asynchronous-work"},next:{title:"Reactive Extensions for Excel",permalink:"/TestDocs/docs/archive/guides/reactive-extensions-for-excel"}},i={},l=[],u={toc:l};function b(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vb"},"Imports System.Runtime.CompilerServices\nImports ExcelDna.Integration\n\nPublic Module RxExcel\n\n    <Extension()>\n    Public Function ToExcelObservable(Of T)(observable As IObservable(Of T)) As IExcelObservable\n        Return New ExcelObservable(Of T)(observable)\n    End Function\n\n    Public Function Observe(Of T)(functionName As String, parameters As Object, _\n                           observableSource As Func(Of IObservable(Of T))) As Object\n        Return ExcelAsyncUtil.Observe(functionName, parameters,\n                                     Function() observableSource().ToExcelObservable())\n    End Function\nEnd Module\n\nPublic Class ExcelObservable(Of T)\n    Implements IExcelObservable\n\n    ReadOnly _observable As IObservable(Of T)\n\n    Public Sub New(observable As IObservable(Of T))\n        _observable = observable\n    End Sub\n\n    Public Function Subscribe(observer As IExcelObserver) As IDisposable _\n        Implements IExcelObservable.Subscribe\n        Return _observable.Subscribe(Sub(value) observer.OnNext(value),\n            Sub(ex) observer.OnError(ex), Sub() observer.OnCompleted())\n    End Function\nEnd Class\n")))}b.isMDXComponent=!0}}]);