---
sidebar_position: 4
sidebar_label: "Documentation - Scenarios"
---

# Applicable scenarios

HwameiStor provisions two kind of local volumes, LVM and Disk.

As a component of HwameiStor, Local Storage provisions two types of local LVM volumes, HA and non-HA.

For the non-HA local LVM volume, it's the best data persistent solution for the following use cases:

- **Database** with HA capability, such as MongoDB, etc.
- **Messaging system** with HA capability, such as Kafka, RabbitMQ, etc.
- **Key-value store** with HA capability, such as Redis, etc.
- Others with HA capability

For the HA local LVM volume, it's the best data persistent solution for the following use cases:

- **Database**, such as MySQL, PostgreSQL, etc.
- Other applications which requires the data HA feature.

# **Hot backup**

Intra-node hot backup: Raid 5 guarantee, which can tolerate a set of disk failure.

Control flow is independent of data flow to ensure the stability of data access.

`<img src="images/ioflow.png" alt="IO 数据流" style="zoom:67%;" />`
Inter-node hot backup: Raid 5 + active/standby protection.

The dce-storage, a dedicated network logical interface for HA, is planned to synchronize storage traffic between nodes. Synchronously replicate data across nodes to guarantee hot backup of data.

`<img src="images/ha.png" alt="跨节点热备份" style="zoom:70%;" />`
# **Data rebalance**

Balanced placement of data in the cluster is achieved through data volume migration technology. Move data online to nodes with more storage space.

`<img src="images/balance.png" alt="数据再平衡" style="zoom:1000%;" />`
**Volume type change**

In order to support some special scenarios, a single-replica volume is allowed to be changed to multiple replicas, and inter-node hot backup is supported.

`<img src="images/volumechange.png" alt="数据卷类型变更" style="zoom:60%;" />`
