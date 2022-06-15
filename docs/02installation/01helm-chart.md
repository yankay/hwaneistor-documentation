---
sidebar_position: 2
---

# Deploy by Helm Chart

Local Storage is a component of HwameiStor and must work with Local Disk Manager module. It's suggested to install by helm-charts.

This functionality is in alpha and is subject to change. The code is provided as-is with no warranties. Alpha features are not subject to the support SLA of official GA features.

## Procedure

**Step 1: **Install HwameiStor

[Helm](https://helm.sh/) must be installed to use the charts. Please refer to Helm's [documentation](https://helm.sh/docs/) to get started.


```bash
$ helm repo add hwameistor http://hwameistor.io/helm-charts 
$ helm install hwameistor/hwameistor -n hwameistor --create-namespace --generate-name
```

You can then run `helm search repo hwameistor` to see the charts.

**Step 2: **Enable HwameiStor on Node

Once the Helm charts was installed. You should enable HwameiStor on specific nodes as follows:

```bash
$ kubectl label node <node-name> "lvm.hwameistor.io/enable=true"
```

**Step 3: **Claim Disk by Type on Node

Then claim disk for your local-storage by apply LocalDiskClaim CR:

```yaml
cat > ./local-disk-claim.yaml <<- EOF
apiVersion: hwameistor.io/v1alpha1
kind: LocalDiskClaim
metadata:
  name: <anyname>
  namespace: hwameistor
spec:
  nodeName: <node-name>
  description:
    diskType: <HDD or SSD or NVMe>
EOF
```

Congratulations! HwameiStor is now deployed on your cluster.