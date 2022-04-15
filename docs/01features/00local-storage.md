---
sidebar_position: 1
---

# Local Storage

Local Storage is one of modules of HwameiStor which is a cloud native local storage system. it aims to provision high performance persistent LVM volume with local access to applications.

![Architecture of Local Storage](../images/localstor.png)

Supported local volume kinds: `LVM`。

Supported disk types: `HDD`、`SSD`、`NVMe`。

## Applicable scenarios

HwameiStor provisions two kind of local volumes, LVM and Disk. As a component of HwameiStor, Local Storage provisions two types of local LVM volumes, HA and non-HA.

For the non-HA local LVM volume, it's the best data persistent solution for the following use cases:

- **Database** with HA capability, such as MongoDB, etc.
- **Messaging system** with HA capability, such as Kafka, RabbitMQ, etc.
- **Key-value store** with HA capability, such as Redis, etc.
- Others with HA capability

For the HA local LVM volume, it's the best data persistent solution for the following use cases:

- **Database**, such as MySQL, PostgreSQL, etc.
- Other applications which requires the data HA feature.

## Usage With Helm Chart

Local Storage is a component of HwameiStor and must work with Local Disk Manager module. It's suggested to install by [helm-charts](../02installation/01helm-chart.md).

## Usage With Independent Installation

Developer can start using local-storage With [independent-installation](../02installation/02install.md). This is for developing or test, and will deploy local-storage from github repo. Please install the Local Disk Manager firstly.

## Roadmap

[Roadmap](https://github.com/hwameistor/local-storage/blob/main/doc/roadmap_zh.md) provides release plan about local storage and its features.

## Feedback

If any question, submit your feedback and issue via [Issues](https://github.com/hwameistor/local-storage/issues).