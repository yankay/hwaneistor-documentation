"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"\u4e0b\u4e00\u4e2a","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"HwameiStor \u4ecb\u7ecd","href":"/cn/docs/intro","docId":"intro"},{"type":"category","label":"\u6587\u6863 - \u529f\u80fd","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u672c\u5730\u5b58\u50a8","href":"/cn/docs/01features/00local-storage","docId":"01features/00local-storage"},{"type":"link","label":"\u672c\u5730\u6570\u636e\u76d8\u7ba1\u7406 (LDM)","href":"/cn/docs/01features/01local-disk-manager","docId":"01features/01local-disk-manager"},{"type":"link","label":"\u8c03\u5ea6\u5668","href":"/cn/docs/01features/02scheduler","docId":"01features/02scheduler"},{"type":"link","label":"DRDB \u5b89\u88c5\u5668","href":"/cn/docs/01features/03DRBD","docId":"01features/03DRBD"}]},{"type":"category","label":"\u6587\u6863 - \u5b89\u88c5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u51c6\u5907\u5de5\u4f5c","href":"/cn/docs/02installation/00prepare","docId":"02installation/00prepare"},{"type":"link","label":"\u901a\u8fc7 Helm Chart \u90e8\u7f72","href":"/cn/docs/02installation/01helm-chart","docId":"02installation/01helm-chart"},{"type":"link","label":"\u72ec\u7acb\u5b89\u88c5\u90e8\u7f72","href":"/cn/docs/02installation/02install","docId":"02installation/02install"}]},{"type":"link","label":"\u6587\u6863 - \u573a\u666f","href":"/cn/docs/03scenarios","docId":"03scenarios"},{"type":"category","label":"\u6587\u6863 - \u57fa\u672c\u6982\u5ff5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"00k8s-store","href":"/cn/docs/04concepts/00k8s-store","docId":"04concepts/00k8s-store"},{"type":"link","label":"01cas","href":"/cn/docs/04concepts/01cas","docId":"04concepts/01cas"},{"type":"link","label":"02csi","href":"/cn/docs/04concepts/02csi","docId":"04concepts/02csi"},{"type":"link","label":"03crd","href":"/cn/docs/04concepts/03crd","docId":"04concepts/03crd"},{"type":"link","label":"04volume","href":"/cn/docs/04concepts/04volume","docId":"04concepts/04volume"},{"type":"link","label":"05lvm","href":"/cn/docs/04concepts/05lvm","docId":"04concepts/05lvm"},{"type":"link","label":"06pvc","href":"/cn/docs/04concepts/06pvc","docId":"04concepts/06pvc"}]},{"type":"link","label":"\u6587\u6863 - \u793e\u533a","href":"/cn/docs/05community","docId":"05community"}]},"docs":{"01features/00local-storage":{"id":"01features/00local-storage","title":"\u672c\u5730\u5b58\u50a8","description":"\u672c\u5730\u5b58\u50a8\u662f HwameiStor \u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u5b83\u65e8\u5728\u4e3a\u5e94\u7528\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u672c\u5730\u6301\u4e45\u5316 LVM \u5b58\u50a8\u5377\u3002","sidebar":"tutorialSidebar"},"01features/01local-disk-manager":{"id":"01features/01local-disk-manager","title":"\u672c\u5730\u6570\u636e\u76d8\u7ba1\u7406 (LDM)","description":"\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668 (Local Disk Manager, LDM) \u662f HwameiStor \u7cfb\u7edf\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u6a21\u5757\u3002LDM \u65e8\u5728\u7b80\u5316\u7ba1\u7406\u8282\u70b9\u4e0a\u7684\u78c1\u76d8\u3002\u5b83\u5c06\u78c1\u76d8\u62bd\u8c61\u6210\u4e00\u79cd\u53ef\u4ee5\u88ab\u7ba1\u7406\u548c\u76d1\u63a7\u7684\u8d44\u6e90\u3002\u5b83\u672c\u8eab\u662f\u4e00\u79cd DaemonSet \u5bf9\u8c61\uff0c\u96c6\u7fa4\u4e2d\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4f1a\u8fd0\u884c\u8be5\u670d\u52a1\uff0c\u901a\u8fc7\u8be5\u670d\u52a1\u68c0\u6d4b\u5b58\u5728\u7684\u78c1\u76d8\u5e76\u5c06\u5176\u8f6c\u6362\u6210\u76f8\u5e94\u7684 LocalDisk \u8d44\u6e90\u3002","sidebar":"tutorialSidebar"},"01features/02scheduler":{"id":"01features/02scheduler","title":"\u8c03\u5ea6\u5668","description":"\u8c03\u5ea6\u5668\u662f HwameiStor \u7684\u91cd\u8981\u7ec4\u4ef6\u4e4b\u4e00\u3002\u5b83\u81ea\u52a8\u5c06 Pod \u8c03\u5ea6\u5230\u914d\u6709 HwameiStor \u5b58\u50a8\u5377\u7684\u6b63\u786e\u8282\u70b9\u3002\u4f7f\u7528\u8c03\u5ea6\u5668\u540e\uff0cPod \u4e0d\u5fc5\u518d\u4f7f\u7528 NodeAffinity \u6216 NodeSelector \u5b57\u6bb5\u6765\u9009\u62e9\u8282\u70b9\u3002\u8c03\u5ea6\u5668\u80fd\u5904\u7406 LVM \u548c Disk \u5b58\u50a8\u5377\u3002","sidebar":"tutorialSidebar"},"01features/03DRBD":{"id":"01features/03DRBD","title":"DRDB \u5b89\u88c5\u5668","description":"DRBD (Distributed Replicated Block Device) \u901a\u8fc7 Linux \u5185\u6838\u6a21\u5757\u548c\u76f8\u5173\u811a\u672c\u6784\u6210\uff0c\u7528\u4ee5\u6784\u5efa\u9ad8\u53ef\u7528\u6027\u7684\u96c6\u7fa4\u3002\u5176\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7\u7f51\u7edc\u6765\u955c\u50cf\u6574\u4e2a\u8bbe\u5907\uff0c\u53ef\u4ee5\u628a\u5b83\u770b\u4f5c\u662f\u4e00\u79cd\u7f51\u7edc RAID\u3002","sidebar":"tutorialSidebar"},"02installation/00prepare":{"id":"02installation/00prepare","title":"\u51c6\u5907\u5de5\u4f5c","description":"HwameiStor \u672c\u5730\u78c1\u76d8\u662f\u4e91\u539f\u751f\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\uff0c\u5e94\u90e8\u7f72\u5728 Kubernetes \u96c6\u7fa4\u6216\u4ee5 Kubernetes \u4e3a\u5185\u6838\u7684\u5bb9\u5668\u5e73\u53f0\u4e2d\uff0c\u6574\u4e2a\u96c6\u7fa4\u5e94\u6ee1\u8db3\u4e0b\u5217\u6761\u4ef6\uff1a","sidebar":"tutorialSidebar"},"02installation/01helm-chart":{"id":"02installation/01helm-chart","title":"\u901a\u8fc7 Helm Chart \u90e8\u7f72","description":"\u672c\u5730\u78c1\u76d8\u662f HwameiStor \u7684\u4e00\u90e8\u5206\uff0c\u5fc5\u987b\u4e0e\u672c\u5730\u78c1\u76d8\u7ba1\u7406\u5668\u4e00\u8d77\u5de5\u4f5c\uff0c\u5efa\u8bae\u7528\u6237\u901a\u8fc7 helm-charts \u90e8\u7f72\u3002","sidebar":"tutorialSidebar"},"02installation/02install":{"id":"02installation/02install","title":"\u72ec\u7acb\u5b89\u88c5\u90e8\u7f72","description":"\u672c\u9875\u8bf4\u660e\u5982\u4f55\u5728 Kubernetes \u8282\u70b9\u72ec\u7acb\u5b89\u88c5\u90e8\u7f72 HwaweiStor \u672c\u5730\u5b58\u50a8\u3002","sidebar":"tutorialSidebar"},"03scenarios":{"id":"03scenarios","title":"\u9002\u7528\u573a\u666f","description":"HwameiStor \u63d0\u4f9b\u4e24\u79cd\u672c\u5730\u6570\u636e\u5377\uff1aLVM\u3001Disk\u3002","sidebar":"tutorialSidebar"},"04concepts/00k8s-store":{"id":"04concepts/00k8s-store","title":"00k8s-store","description":"Kubernetes \u4e3a\u5bb9\u5668\u5e73\u53f0\uff08\u6216\u96c6\u7fa4\u7ba1\u7406\u5458\uff09\u548c\u5e94\u7528\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u4e9b\u589e\u5f3a\u7279\u6027\u4ee5\u652f\u6301\u8fd0\u884c\u6709\u72b6\u6001\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u8fd9\u4e9b\u7279\u6027\u786e\u4fdd\u4e86\u53ea\u8981\u8c03\u5ea6\u5bb9\u5668\uff08\u5305\u62ec\u5377\u7684\u4f9b\u5e94/\u521b\u5efa\u3001\u9644\u52a0\u3001\u6302\u8f7d\u3001\u89e3\u9664\u6302\u8f7d\u3001\u62c6\u5206\u548c\u5220\u9664\uff09\u3001\u5b58\u50a8\u5bb9\u91cf\u7ba1\u7406\uff08\u5bb9\u5668\u4e34\u65f6\u5b58\u50a8\u4f7f\u7528\u7387\u3001\u5377\u6269\u7f29\u5bb9\u7b49\uff09\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u6587\u4ef6\u548c\u5757\u5b58\u50a8\uff08\u4e34\u65f6\u5b58\u50a8\u6216\u6301\u4e45\u5316\u5b58\u50a8\u3001\u672c\u5730\u5b58\u50a8\u6216\u8fdc\u7a0b\u5b58\u50a8\uff09\uff0c\u8fd9\u4f1a\u5f71\u54cd\u57fa\u4e8e\u5b58\u50a8\u7684\u5bb9\u5668\u8c03\u5ea6\uff08\u6570\u636e\u91cd\u529b\u3001\u53ef\u7528\u6027\u7b49\uff09\u548c\u5feb\u7167\u7b49\u5e38\u89c4\u5b58\u50a8\u64cd\u4f5c\u3002","sidebar":"tutorialSidebar"},"04concepts/01cas":{"id":"04concepts/01cas","title":"01cas","description":"\u5bb9\u5668\u9644\u52a0\u5b58\u50a8 (Container Attached Storage, CAS) \u662f\u4e00\u79cd\u7531 Kubernetes \u7f16\u6392\u7684\u57fa\u4e8e\u5fae\u670d\u52a1\u5b58\u50a8\u63a7\u5236\u5668\u7684\u8f6f\u4ef6\u5b58\u50a8\u4f53\u7cfb\u3002\u5176\u5b58\u50a8\u63a7\u5236\u5668\u4f5c\u4e3a Kubernetes \u96c6\u7fa4\u7684\u4e00\u90e8\u5206\u5728\u5bb9\u5668\u4e2d\u8fdb\u884c\u7ba1\u7406\u548c\u8fd0\u884c\u3002\u8fd9\u5c31\u8ba9 CAS \u5177\u6709\u53ef\u79fb\u690d\u6027\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55 Kubernetes \u5e73\u53f0\u4e0a\u8fd0\u884c\uff0c\u5305\u62ec\u4efb\u4f55\u4e91\u5e73\u53f0\u3001\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u6216\u4f20\u7edf\u5171\u4eab\u5b58\u50a8\u7cfb\u7edf\u3002\u5173\u952e\u7684\u662f\u6570\u636e\u672c\u8eab\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5bb9\u5668\u8bbf\u95ee\uff0c\u800c\u4e0d\u662f\u5b58\u50a8\u5728\u975e\u5e73\u53f0\u5171\u4eab\u7684\u6a2a\u5411\u6269\u5c55\u5b58\u50a8\u7cfb\u7edf\u4e2d\u3002\u7531\u4e8e CAS \u5229\u7528\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u5c06\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u4e0e\u7ed1\u5b9a\u5230\u7269\u7406\u5b58\u50a8\u8bbe\u5907\u7684\u5e94\u7528\u7a0b\u5e8f\u4fdd\u6301\u5bc6\u5207\u5173\u8054\uff0c\u4ece\u800c\u51cf\u5c11\u4e86 I/O \u8bbf\u95ee\u65f6\u95f4\u3002","sidebar":"tutorialSidebar"},"04concepts/02csi":{"id":"04concepts/02csi","title":"02csi","description":"CSI \u5373 Container Storage Interfaces\uff0c\u5bb9\u5668\u5b58\u50a8\u63a5\u53e3\u3002\u76ee\u524d\uff0cKubernetes \u4e2d\u7684\u5b58\u50a8\u5b50\u7cfb\u7edf\u4ecd\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002\u5b58\u50a8\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801\u5728 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u4e2d\u8fdb\u884c\u7ef4\u62a4\uff0c\u8fd9\u5f88\u96be\u6d4b\u8bd5\u3002Kubernetes \u8fd8\u9700\u8981\u6388\u4e88\u5b58\u50a8\u4f9b\u5e94\u5546\u8bb8\u53ef\uff0c\u4fbf\u4e8e\u5c06\u4ee3\u7801\u5d4c\u5165 Kubernetes \u6838\u5fc3\u5b58\u50a8\u5e93\u3002","sidebar":"tutorialSidebar"},"04concepts/03crd":{"id":"04concepts/03crd","title":"03crd","description":"CRD","sidebar":"tutorialSidebar"},"04concepts/04volume":{"id":"04concepts/04volume","title":"04volume","description":"\u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u5728\u78c1\u76d8\u4e0a\u662f\u4e34\u65f6\u5b58\u653e\u7684\uff0c\u8fd9\u7ed9\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u8f83\u91cd\u8981\u7684\u5e94\u7528\u7a0b\u5e8f\u5e26\u6765\u4e00\u4e9b\u95ee\u9898\u3002","sidebar":"tutorialSidebar"},"04concepts/05lvm":{"id":"04concepts/05lvm","title":"05lvm","description":"LVM \u5168\u79f0\u4e3a Logical Volume Manager\uff0c\u5373\u903b\u8f91\u5377\u7ba1\u7406\u5668\uff0c\u5728\u78c1\u76d8\u5206\u533a\u548c\u6587\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u6dfb\u52a0\u4e00\u4e2a\u903b\u8f91\u5c42\uff0c\u4e3a\u6587\u4ef6\u7cfb\u7edf\u5c4f\u853d\u4e0b\u5c42\u78c1\u76d8\u5206\u533a\u5e03\u5c40\u63d0\u4f9b\u4e00\u4e2a\u62bd\u8c61\u7684\u76d8\u5377\uff0c\u5728\u76d8\u5377\u4e0a\u5efa\u7acb\u6587\u4ef6\u7cfb\u7edf\u3002","sidebar":"tutorialSidebar"},"04concepts/06pvc":{"id":"04concepts/06pvc","title":"06pvc","description":"PV\uff08PersistentVolume\uff0c\u6301\u4e45\u5377\uff09\u662f\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u62bd\u8c61\uff0c\u5c06\u5b58\u50a8\u5b9a\u4e49\u4e3a\u4e00\u79cd\u5bb9\u5668\u5e94\u7528\u53ef\u4ee5\u4f7f\u7528\u7684\u8d44\u6e90\u3002PV \u7531\u7ba1\u7406\u5458\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4e0e\u5b58\u50a8\u63d0\u4f9b\u5546\u7684\u5177\u4f53\u5b9e\u73b0\u76f4\u63a5\u76f8\u5173\uff0c\u4f8b\u5982\u6587\u4ef6\u5b58\u50a8\u3001\u5757\u5b58\u50a8\u3001\u5bf9\u8c61\u5b58\u50a8\u6216 DRBD \u7b49\uff0c\u901a\u8fc7\u63d2\u4ef6\u5f0f\u7684\u673a\u5236\u8fdb\u884c\u7ba1\u7406\uff0c\u4f9b\u5e94\u7528\u8bbf\u95ee\u548c\u4f7f\u7528\u3002\u9664 EmptyDir \u7c7b\u578b\u7684\u5b58\u50a8\u5377\uff0cPV \u7684\u751f\u547d\u5468\u671f\u72ec\u7acb\u4e8e\u4f7f\u7528\u5b83\u7684 Pod\u3002","sidebar":"tutorialSidebar"},"05community":{"id":"05community","title":"05community","description":"\u5982\u679c\u60a8\u5bf9 HwameiStor \u4e91\u539f\u751f\u672c\u5730\u5b58\u50a8\u7cfb\u7edf\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6b22\u8fce\u52a0\u5165\u793e\u533a\uff0c\u4e00\u8d77\u5f00\u57a6\u8fd9\u5757\u5c5e\u4e8e\u5f00\u53d1\u8005\u7684\u201c\u5143\u5b87\u5b99\u201d\u65b0\u5929\u5730\uff0c\u6210\u4e3a\u672a\u6765\u884c\u9053\u8005\uff01","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"HwameiStor \u4ecb\u7ecd","description":"HwameiStor \u5c06 HDD\u3001SSD \u548c NVMe \u78c1\u76d8\u5f62\u6210\u672c\u5730\u5b58\u50a8\u8d44\u6e90\u6c60\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u4f7f\u7528 CSI \u67b6\u6784\u63d0\u4f9b\u5206\u5e03\u5f0f\u7684\u672c\u5730\u6570\u636e\u5377\u670d\u52a1\uff0c\u4e3a\u6709\u72b6\u6001\u7684\u4e91\u539f\u751f\u5e94\u7528\u6216\u7ec4\u4ef6\u63d0\u4f9b\u6570\u636e\u6301\u4e45\u5316\u80fd\u529b\u3002","sidebar":"tutorialSidebar"}}}')}}]);