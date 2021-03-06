# cdk8s-redis-sts  
![Release](https://github.com/opencdk8s/cdk8s-redis-sts/workflows/Release/badge.svg?branch=development)
[![npm version](https://badge.fury.io/js/%40opencdk8s%2Fcdk8s-redis-sts.svg)](https://badge.fury.io/js/%40opencdk8s%2Fcdk8s-redis-sts)
[![PyPI version](https://badge.fury.io/py/cdk8s-redis-sts.svg)](https://badge.fury.io/py/cdk8s-redis-sts)
![npm](https://img.shields.io/npm/dt/@opencdk8s/cdk8s-redis-sts?label=npm&color=green) 
![PyPi](https://img.shields.io/pypi/dm/cdk8s-redis-sts?label=pypi&color=green) 

Create a Replicated Redis Statefulset on Kubernetes, powered by the [cdk8s project](https://cdk8s.io) 🚀

## Disclaimer 

This construct is under heavy development, and breaking changes will be introduced very often. Please don't forget to version lock your code if you are using this construct.

## Overview

**cdk8s-redis-sts** is a [cdk8s](https://cdk8s.io) library.

```typescript
import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { MyRedis } from '@opencdk8s/cdk8s-redis-sts';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);
    new MyRedis(this, 'dev', {
        image: 'redis',
        namespace: 'databases',
        volumeSize: '10Gi',
        replicas: 2,
        createStorageClass: true,
        volumeProvisioner: 'kubernetes.io/aws-ebs',
        storageClassName: "io1-slow",
        storageClassParams: {
          type: 'io1',
          fsType: 'ext4',
          iopsPerGB: "10",
        },
    });
    }
}

const app = new App();
new MyChart(app, 'dev');
app.synth();
```

Then the Kubernetes manifests created by `cdk8s synth` command will have Kubernetes resources such as `Statefulset`, `ConfigMap` and `Service` as follows.

<details>
<summary>manifest.k8s.yaml</summary>

```yaml
allowVolumeExpansion: true
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: io1-slow
parameters:
  fsType: ext4
  iopsPerGB: "10"
  type: io1
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Retain
---
apiVersion: v1
data:
  master.conf: |-
    
    bind 0.0.0.0
    daemonize no
    port 6379
    tcp-backlog 511
    timeout 0
    tcp-keepalive 300
    supervised no
  slave.conf: |-
    
    slaveof dev 6379
kind: ConfigMap
metadata:
  name: dev-redis-conf
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: dev
  name: dev
  namespace: databases
spec:
  ports:
    - port: 6379
      targetPort: 6379
  selector:
    app: dev
  type: ClusterIP
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app: dev
  name: dev
  namespace: databases
spec:
  replicas: 2
  selector:
    matchLabels:
      app: dev
  serviceName: dev
  template:
    metadata:
      labels:
        app: dev
    spec:
      containers:
        - command:
            - bash
            - -c
            - |-
              [[ `hostname` =~ -([0-9]+)$ ]] || exit 1
              ordinal=${BASH_REMATCH[1]}
              if [[ $ordinal -eq 0 ]]; then
              redis-server /mnt/redis/master.conf
              else
              redis-server /mnt/redis/slave.conf
              fi
          env: []
          image: redis
          name: redis
          ports:
            - containerPort: 6379
          resources:
            limits:
              cpu: 400m
              memory: 512Mi
            requests:
              cpu: 200m
              memory: 256Mi
          volumeMounts:
            - mountPath: /data
              name: dev
            - mountPath: /mnt/redis/
              name: dev-redis-conf
      terminationGracePeriodSeconds: 10
      volumes:
        - configMap:
            name: dev-redis-conf
          name: dev-redis-conf
  volumeClaimTemplates:
    - metadata:
        name: dev
        namespace: databases
      spec:
        accessModes:
          - ReadWriteOnce
        resources:
          requests:
            storage: 10Gi
        storageClassName: io1-slow
```

</details>

## Installation

### TypeScript

Use `yarn` or `npm` to install.

```sh
$ npm install @opencdk8s/cdk8s-redis-sts
```

```sh
$ yarn add @opencdk8s/cdk8s-redis-sts
```

### Python

```sh
$ pip install cdk8s-redis-sts
```

## Contribution

1. Fork ([link](https://github.com/opencdk8s/cdk8s-redis-sts/fork))
2. Bootstrap the repo:
  
    ```bash
    npx projen   # generates package.json 
    yarn install # installs dependencies
    ```
3. Development scripts:
   |Command|Description
   |-|-
   |`yarn compile`|Compiles typescript => javascript
   |`yarn watch`|Watch & compile
   |`yarn test`|Run unit test & linter through jest
   |`yarn test -u`|Update jest snapshots
   |`yarn run package`|Creates a `dist` with packages for all languages.
   |`yarn build`|Compile + test + package
   |`yarn bump`|Bump version (with changelog) based on [conventional commits]
   |`yarn release`|Bump + push to `master`
4. Create a feature branch
5. Commit your changes
6. Rebase your local changes against the master branch
7. Create a new Pull Request (use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for the title please)

## Licence

[Apache License, Version 2.0](./LICENSE)

## Author

[Hunter-Thompson](https://github.com/Hunter-Thompson)
