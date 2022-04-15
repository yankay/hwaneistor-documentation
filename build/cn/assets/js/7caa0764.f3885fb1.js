"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2611],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,v=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},107:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={sidebar_position:6},i=void 0,p={unversionedId:"04concepts/05lvm",id:"04concepts/05lvm",title:"05lvm",description:"LVM \u5168\u79f0\u4e3a Logical Volume Manager\uff0c\u5373\u903b\u8f91\u5377\u7ba1\u7406\u5668\uff0c\u5728\u78c1\u76d8\u5206\u533a\u548c\u6587\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u903b\u8f91\u5c42\uff0c\u4e3a\u6587\u4ef6\u7cfb\u7edf\u5c4f\u853d\u4e0b\u5c42\u78c1\u76d8\u5206\u533a\u5e03\u5c40\u63d0\u4f9b\u4e00\u4e2a\u62bd\u8c61\u7684\u76d8\u5377\uff0c\u5728\u76d8\u5377\u4e0a\u5efa\u7acb\u6587\u4ef6\u7cfb\u7edf\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/04concepts/05lvm.md",sourceDirName:"04concepts",slug:"/04concepts/05lvm",permalink:"/cn/docs/04concepts/05lvm",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04concepts/05lvm.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"04volume",permalink:"/cn/docs/04concepts/04volume"},next:{title:"06pvc",permalink:"/cn/docs/04concepts/06pvc"}},u={},s=[{value:"LVM \u4e3b\u8981\u6784\u6210",id:"lvm-\u4e3b\u8981\u6784\u6210",level:2},{value:"LVM \u4f18\u70b9",id:"lvm-\u4f18\u70b9",level:2},{value:"\u4f7f\u7528 LVM \u7684\u57fa\u672c\u6b65\u9aa4",id:"\u4f7f\u7528-lvm-\u7684\u57fa\u672c\u6b65\u9aa4",level:2},{value:"LV \u6269\u5bb9",id:"lv-\u6269\u5bb9",level:2},{value:"VG \u6269\u5bb9",id:"vg-\u6269\u5bb9",level:2},{value:"LV \u5feb\u7167",id:"lv-\u5feb\u7167",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lvm"},"LVM"),(0,a.kt)("p",null,"LVM \u5168\u79f0\u4e3a Logical Volume Manager\uff0c\u5373\u903b\u8f91\u5377\u7ba1\u7406\u5668\uff0c\u5728\u78c1\u76d8\u5206\u533a\u548c\u6587\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u903b\u8f91\u5c42\uff0c\u4e3a\u6587\u4ef6\u7cfb\u7edf\u5c4f\u853d\u4e0b\u5c42\u78c1\u76d8\u5206\u533a\u5e03\u5c40\u63d0\u4f9b\u4e00\u4e2a\u62bd\u8c61\u7684\u76d8\u5377\uff0c\u5728\u76d8\u5377\u4e0a\u5efa\u7acb\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,"\u5229\u7528 LVM \u53ef\u4ee5\u5728\u78c1\u76d8\u4e0d\u7528\u91cd\u65b0\u5206\u533a\u7684\u60c5\u51b5\u4e0b\u52a8\u6001\u8c03\u6574\u6587\u4ef6\u7cfb\u7edf\u7684\u5927\u5c0f\uff0c\u5e76\u4e14\u5229\u7528 LVM \u7ba1\u7406\u7684\u6587\u4ef6\u7cfb\u7edf\u53ef\u4ee5\u8de8\u8d8a\u78c1\u76d8\u3002\u5f53\u670d\u52a1\u5668\u6dfb\u52a0\u4e86\u65b0\u7684\u78c1\u76d8\u540e\uff0c\u7ba1\u7406\u5458\u4e0d\u5fc5\u5c06\u539f\u6709\u7684\u6587\u4ef6\u79fb\u52a8\u5230\u65b0\u7684\u78c1\u76d8\u4e0a\uff0c\u800c\u662f\u901a\u8fc7 LVM \u76f4\u63a5\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\u8de8\u8d8a\u78c1\u76d8\u3002\u4e5f\u5c31\u662f\u901a\u8fc7\u5c06\u5e95\u5c42\u7684\u7269\u7406\u786c\u76d8\u5c01\u88c5\u8d77\u6765\uff0c\u7136\u540e\u4ee5\u903b\u8f91\u5377\u7684\u65b9\u5f0f\u5448\u73b0\u7ed9\u4e0a\u5c42\u5e94\u7528\u3002"),(0,a.kt)("p",null,"LVM \u901a\u8fc7\u5bf9\u5e95\u5c42\u7684\u786c\u76d8\u8fdb\u884c\u5c01\u88c5\uff0c\u5f53\u6211\u4eec\u5bf9\u5e95\u5c42\u7684\u7269\u7406\u786c\u76d8\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u4e0d\u518d\u662f\u9488\u5bf9\u5206\u533a\u8fdb\u884c\u64cd\u4f5c\uff0c\u800c\u662f\u901a\u8fc7\u4e00\u4e2a\u53eb\u505a\u903b\u8f91\u5377\u7684\u4e1c\u897f\u5bf9\u5176\u8fdb\u884c\u5e95\u5c42\u7684\u78c1\u76d8\u7ba1\u7406\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"lvm-\u4e3b\u8981\u6784\u6210"},"LVM \u4e3b\u8981\u6784\u6210"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7269\u7406\u5b58\u50a8\u4ecb\u8d28 (PM, physical media)"),"\uff1aLVM \u5b58\u50a8\u4ecb\u8d28\u53ef\u4ee5\u662f\u5206\u533a\u3001\u78c1\u76d8\u3001RAID \u9635\u5217\u6216 SAN \u78c1\u76d8\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7269\u7406\u5377 (PV, physical volume)\uff1a"),"\u7269\u7406\u5377\u662f LVM \u7684\u57fa\u672c\u5b58\u50a8\u903b\u8f91\u5757\uff0c\u4f46\u4e0e\u57fa\u672c\u7684\u7269\u7406\u5b58\u50a8\u4ecb\u8d28\uff08\u5982\u5206\u533a\u3001 \u78c1\u76d8\u7b49\uff09\u6bd4\u8f83\uff0c\u5374\u5305\u542b\u6709\u4e0e LVM \u76f8\u5173\u7684\u7ba1\u7406\u53c2\u6570\uff0c\u521b\u5efa\u7269\u7406\u5377\u53ef\u4ee5\u7528\u78c1\u76d8\u5206\u533a\uff0c\u4e5f\u53ef\u4ee5\u7528\u78c1\u76d8\u672c\u8eab\u3002\u78c1\u76d8\u8bbe\u5907\u5fc5\u987b\u521d\u59cb\u5316\u4e3a LVM \u7269\u7406\u5377\uff0c\u624d\u80fd\u4e0e LVM \u7ed3\u5408\u4f7f\u7528\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5377\u7ec4 (VG, Volume Group)\uff1a"),"LVM \u5377\u7ec4\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u7269\u7406\u5377\u7ec4\u6210\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u903b\u8f91\u5377 (LV, logical volume)\uff1a"),"LV \u5efa\u7acb\u5728 VG \u4e4b\u4e0a\uff0c\u53ef\u4ee5\u5728 LV \u4e4b\u4e0a\u5efa\u7acb\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7269\u7406\u8303\u56f4 (PE, physical extents)\uff1a"),"PV \u7269\u7406\u5377\u4e2d\u53ef\u4ee5\u5206\u914d\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\uff0cPE \u7684\u5927\u5c0f\u662f\u53ef\u4ee5\u6307\u5b9a\u7684\uff0c\u9ed8\u8ba4\u4e3a 4MB\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u903b\u8f91\u8303\u56f4 (LE, logical extents)\uff1a"),"LV \u903b\u8f91\u5377\u4e2d\u53ef\u4ee5\u5206\u914d\u7684\u6700\u5c0f\u5b58\u50a8\u5355\u5143\uff0c\u5728\u540c\u4e00\u4e2a\u5377\u7ec4\u4e2d\uff0cLE \u7684\u5927\u5c0f\u4e0e PE \u662f\u76f8\u540c\u7684\uff0c \u5e76\u4e14\u4e00\u4e00\u5bf9\u5e94\u3002"),(0,a.kt)("h2",{id:"lvm-\u4f18\u70b9"},"LVM \u4f18\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5377\u7ec4\uff0c\u4f7f\u591a\u4e2a\u786c\u76d8\u7a7a\u95f4\u770b\u8d77\u6765\u50cf\u662f\u4e00\u4e2a\u5927\u7684\u786c\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u903b\u8f91\u5377\uff0c\u53ef\u4ee5\u8de8\u591a\u4e2a\u786c\u76d8\u7a7a\u95f4\u7684\u5206\u533a sdb1 sdb2 sdc1 sdd2 sdf"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u903b\u8f91\u5377\uff0c\u53ef\u4ee5\u5728\u7a7a\u95f4\u4e0d\u8db3\u65f6\u52a8\u6001\u8c03\u6574\u5b83\u7684\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u8c03\u6574\u903b\u8f91\u5377\u5927\u5c0f\u65f6\uff0c\u4e0d\u9700\u8981\u8003\u8651\u903b\u8f91\u5377\u5728\u786c\u76d8\u4e0a\u7684\u4f4d\u7f6e\uff0c\u4e0d\u7528\u62c5\u5fc3\u6ca1\u6709\u53ef\u7528\u7684\u8fde\u7eed\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728\u7ebf\u5bf9 LV\u3001VG \u8fdb\u884c\u521b\u5efa\u3001\u5220\u9664\u3001\u8c03\u6574\u5927\u5c0f\u7b49\u64cd\u4f5c\uff0cLVM \u4e0a\u7684\u6587\u4ef6\u7cfb\u7edf\u4e5f\u9700\u8981\u91cd\u65b0\u8c03\u6574\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u521b\u5efa\u5feb\u7167\uff0c\u53ef\u4ee5\u7528\u6765\u4fdd\u5b58\u6587\u4ef6\u7cfb\u7edf\u7684\u5907\u4efd"),(0,a.kt)("li",{parentName:"ul"},"RAID + LVM \u7ed3\u5408\u4f7f\u7528\uff1aLVM \u662f\u8f6f\u4ef6\u7684\u5377\u7ba1\u7406\u65b9\u5f0f\uff0c\u800c RAID \u662f\u78c1\u76d8\u7ba1\u7406\u7684\u65b9\u6cd5\u3002\u5bf9\u4e8e\u91cd\u8981\u7684\u6570\u636e\uff0c\u4f7f\u7528 RAID \u6765\u4fdd\u62a4\u7269\u7406\u78c1\u76d8\u4e0d\u4f1a\u56e0\u4e3a\u6545\u969c\u800c\u4e2d\u65ad\u4e1a\u52a1\uff0c\u518d\u7528 LVM \u6765\u5b9e\u73b0\u5bf9\u5377\u7684\u826f\u6027\u7ba1\u7406\uff0c\u66f4\u597d\u5730\u5229\u7528\u78c1\u76d8\u8d44\u6e90\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528-lvm-\u7684\u57fa\u672c\u6b65\u9aa4"},"\u4f7f\u7528 LVM \u7684\u57fa\u672c\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7269\u7406\u78c1\u76d8\u88ab\u683c\u5f0f\u5316\u4e3a PV\uff0c\u5373\u7a7a\u95f4\u88ab\u5212\u5206\u4e3a\u4e00\u4e2a\u4e2a\u7684 PE\u3002PV \u5305\u542b\u591a\u4e2a PE\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u7684 PV \u52a0\u5165\u5230\u540c\u4e00\u4e2a VG \u4e2d\uff0c\u5373\u4e0d\u540c PV \u7684 PE \u5168\u90e8\u8fdb\u5165\u5230 VG \u7684 PE \u6c60\u5185\u3002VG \u5305\u542b\u591a\u4e2a PV\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 VG \u4e2d\u521b\u5efa LV \u903b\u8f91\u5377\uff0c\u8fd9\u4e2a\u521b\u5efa\u8fc7\u7a0b\u57fa\u4e8e PE\uff0c\u6240\u4ee5\u7ec4\u6210 LV \u7684 PE \u53ef\u80fd\u6765\u81ea\u4e0d\u540c\u7684\u7269\u7406\u78c1\u76d8\u3002LV \u57fa\u4e8e PE \u521b\u5efa\u3002"),(0,a.kt)("li",{parentName:"ol"},"LV \u76f4\u63a5\u53ef\u4ee5\u683c\u5f0f\u5316\u540e\u6302\u8f7d\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"LV \u7684\u6269\u7f29\u5b9e\u9645\u4e0a\u5c31\u662f\u589e\u52a0\u6216\u51cf\u5c11\u7ec4\u6210\u8be5 LV \u7684 PE \u6570\u91cf\uff0c\u5176\u8fc7\u7a0b\u4e0d\u4f1a\u4e22\u5931\u539f\u59cb\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u683c\u5f0f\u5316 LV\uff0c\u5e76\u6302\u8f7d\u4f7f\u7528\u3002")),(0,a.kt)("h2",{id:"lv-\u6269\u5bb9"},"LV \u6269\u5bb9"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u786e\u5b9a\u662f\u5426\u6709\u53ef\u7528\u7684\u6269\u5bb9\u7a7a\u95f4\uff0c\u56e0\u4e3a\u7a7a\u95f4\u662f\u4ece VG \u91cc\u9762\u521b\u5efa\u7684\uff0c\u5e76\u4e14 LV \u4e0d\u80fd\u8de8 VG \u6269\u5bb9\u3002\u82e5 VG \u6ca1\u6709\u4e86\u5bb9\u91cf\uff0c\u9700\u8981\u5148\u6269 VG\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vgs\nVG #PV #LV #SN Attr VSize VFree\nvg-sdb1 1 8 1 wz--n- <16.00g <5.39g\n$ lvextend -L +100M  -r /dev/vg-sdb1/lv-sdb1     #\u5c06 /dev/vg-sdb1/lv-sdb \u6269\u5bb9 100M\n")),(0,a.kt)("h2",{id:"vg-\u6269\u5bb9"},"VG \u6269\u5bb9"),(0,a.kt)("p",null,"\u5982\u679c VG \u5377\u7ec4\u4e2d\u7684\u7a7a\u95f4\u4e0d\u591f\u4e86\uff0c\u9700\u8981\u6dfb\u52a0\u65b0\u7684\u78c1\u76d8\uff0c\u4f9d\u6b21\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$  pvcreate /dev/sdc\n$  vgextend vg-sdb1 /dev/sdb3\n")),(0,a.kt)("h2",{id:"lv-\u5feb\u7167"},"LV \u5feb\u7167"),(0,a.kt)("p",null,"LVM \u673a\u5236\u63d0\u4f9b\u4e86\u5bf9 LV \u505a\u5feb\u7167\u7684\u529f\u80fd\uff0c\u4ee5\u6b64\u6765\u83b7\u5f97\u6587\u4ef6\u7cfb\u7edf\u7684\u72b6\u6001\u4e00\u81f4\u6027\u5907\u4efd\u3002LVM \u91c7\u7528\u5199\u65f6\u590d\u5236\u6280\u672f (Copy-On-Write, COW)\uff0c\u4e0d\u7528\u505c\u6b62\u670d\u52a1\u6216\u5c06\u903b\u8f91\u5377\u8bbe\u4e3a\u53ea\u8bfb\u5c31\u53ef\u4ee5\u8fdb\u884c\u5907\u4efd\uff0c\u4f7f\u7528 LVM \u5feb\u7167\u529f\u80fd\u65e2\u53ef\u4ee5\u83b7\u5f97\u4e00\u81f4\u5907\u4efd\uff0c\u53c8\u4e0d\u4f1a\u5f71\u54cd\u670d\u52a1\u5668\u7684\u53ef\u7528\u6027\u3002"),(0,a.kt)("p",null,"LVM \u91c7\u7528\u7684\u5199\u65f6\u590d\u5236\uff0c\u662f\u6307\u521b\u5efa LVM \u5feb\u7167\u65f6\uff0c\u4ec5\u590d\u5236\u539f\u59cb\u5377\u4e2d\u6570\u636e\u7684\u5143\u6570\u636e\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e5f\u5c31\u662f\u5728\u521b\u5efa LVM \u903b\u8f91\u5377\u65f6\uff0c\u5e76\u4e0d\u4f1a\u53d1\u751f\u6570\u636e\u7684\u7269\u7406\u590d\u5236\u3002\u518d\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ec5\u590d\u5236\u5143\u6570\u636e\uff0c\u4e0d\u590d\u5236\u7269\u7406\u6570\u636e\uff0c\u56e0\u6b64\u5feb\u7167\u7684\u521b\u5efa\u51e0\u4e4e\u662f\u5b9e\u65f6\u7684\u3002\u5f53\u539f\u59cb\u5377\u4e0a\u6267\u884c\u5199\u5165\u64cd\u4f5c\u65f6\uff0c\u5feb\u7167\u4f1a\u8ddf\u8e2a\u539f\u59cb\u5377\u4e2d\u5757\u7684\u53d8\u66f4\uff0c\u8fd9\u65f6\u539f\u59cb\u5377\u4e0a\u5c06\u8981\u53d8\u66f4\u7684\u6570\u636e\u4f1a\u5728\u53d8\u66f4\u4e4b\u524d\u62f7\u8d1d\u5230\u5feb\u7167\u9884\u7559\u7684\u7a7a\u95f4\u3002"))}d.isMDXComponent=!0}}]);