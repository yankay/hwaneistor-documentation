"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8392],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},c="\u901a\u8fc7 Helm Chart \u90e8\u7f72",s={unversionedId:"02installation/01helm-chart",id:"02installation/01helm-chart",title:"\u901a\u8fc7 Helm Chart \u90e8\u7f72",description:"\u672c\u5730\u78c1\u76d8\u662f HwameiStor \u7684\u4e00\u90e8\u5206\uff0c\u5fc5\u987b\u4e0e\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668\u4e00\u8d77\u5de5\u4f5c\uff0c\u5efa\u8bae\u7528\u6237\u901a\u8fc7 helm-charts \u90e8\u7f72\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/02installation/01helm-chart.md",sourceDirName:"02installation",slug:"/02installation/01helm-chart",permalink:"/cn/docs/02installation/01helm-chart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02installation/01helm-chart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/cn/docs/02installation/00prepare"},next:{title:"\u72ec\u7acb\u5b89\u88c5\u90e8\u7f72",permalink:"/cn/docs/02installation/02install"}},p={},m=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u901a\u8fc7-helm-chart-\u90e8\u7f72"},"\u901a\u8fc7 Helm Chart \u90e8\u7f72"),(0,o.kt)("p",null,"\u672c\u5730\u78c1\u76d8\u662f HwameiStor \u7684\u4e00\u90e8\u5206\uff0c\u5fc5\u987b\u4e0e\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668\u4e00\u8d77\u5de5\u4f5c\uff0c\u5efa\u8bae\u7528\u6237\u901a\u8fc7 helm-charts \u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u6b64\u529f\u80fd\u4e3a alpha \u7248\u672c\uff0c\u5982\u6709\u53d8\u66f4\uff0c\u6055\u4e0d\u53e6\u884c\u901a\u77e5\u3002\u6240\u6709\u4ee3\u7801\u6309\u539f\u6837\u63d0\u4f9b\uff0c\u4e0d\u4f5c\u4efb\u4f55\u4fdd\u8bc1\u3002Alpha \u529f\u80fd\u4e0d\u53d7\u6b63\u5f0f\u53d1\u884c\u7248\u672c\u529f\u80fd\u7684 SLA \u8981\u6c42\u7ea6\u675f\u3002"),(0,o.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c 1 \u6b65\uff1a"),"\u5b89\u88c5 HwameiStor"),(0,o.kt)("p",null,"\u5fc5\u987b\u5148\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u624d\u80fd\u4f7f\u7528 chart\uff0c\u8bf7\u53c2\u9605 Helm ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/hwameistor/helm-charts.git \n$ cd helm-charts/charts \n$ helm install hwameistor -n hwameistor --create-namespace --generate-name\n")),(0,o.kt)("p",null,"\u6216"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm repo add hwameistor http://hwameistor.io/helm-charts \n$ helm install hwameistor/hwameistor -n hwameistor --create-namespace --generate-name\n")),(0,o.kt)("p",null,"\u7136\u540e\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"helm search repo hwameistor")," \u6765\u67e5\u770b chart\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c 2 \u6b65\uff1a"),"\u5728\u8282\u70b9\u4e0a\u542f\u7528 HwameiStor"),(0,o.kt)("p",null,"Helm chart \u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u5bf9\u5e94\u8282\u70b9\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u7528 HwameiStor\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kubectl label node <node-name> "lvm.hwameistor.io/enable=true"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c 3 \u6b65\uff1a"),"\u5728\u8282\u70b9\u4e0a\u6309\u7c7b\u578b Claim \u78c1\u76d8"),(0,o.kt)("p",null,"\u901a\u8fc7\u7533\u8bf7 LocalDiskClaim \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4e3a\u672c\u5730\u78c1\u76d8\u7533\u8bf7\u78c1\u76d8\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"cat > ./local-disk-claim.yaml <<- EOF\napiVersion: hwameistor.io/v1alpha1\nkind: LocalDiskClaim\nmetadata:\n  name: <anyname>\n  namespace: hwameistor\nspec:\n  nodeName: <node-name>\n  description:\n    diskType: <HDD or SSD or NVMe>\nEOF\n")),(0,o.kt)("p",null,"\u606d\u559c\uff01\u73b0\u5728 HwameiStor \u5df2\u90e8\u7f72\u5230\u60a8\u7684\u96c6\u7fa4\u4e0a\u3002"))}h.isMDXComponent=!0}}]);