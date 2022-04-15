---
sidebar_position: 3
---

# HwameiStor Scheduler

The Scheduler is one of important components of the HwameiStor. It is to automatically schedule the Pod to the correct node which has the associated HwameiStor volume. With the scheduler, the Pod doesn't have to has the NodeAffinity or NodeSelector field to select the node. A scheduler will work for both LVM and Disk volumes.

**Installation**

The Scheduler should be deployed with the HA mode in the cluster, which is a best practice for the production.

**Deploy by Helm Chart**

Scheduler must work with Local Storage and Local Disk Manager. It's suggested to install by [Helm Chart](../02installation/01helm-chart.md).

**Deploy by YAML (For Developing)**

```bash
$ kubectl apply -f deploy/scheduler.yaml
```
