# API Reference

**Classes**

Name|Description
----|-----------
[MyRedis](#opencdk8s-cdk8s-redis-sts-myredis)|*No description*


**Structs**

Name|Description
----|-----------
[ResourceQuantity](#opencdk8s-cdk8s-redis-sts-resourcequantity)|*No description*
[ResourceRequirements](#opencdk8s-cdk8s-redis-sts-resourcerequirements)|*No description*
[StsOpts](#opencdk8s-cdk8s-redis-sts-stsopts)|*No description*



## class MyRedis 🔹 <a id="opencdk8s-cdk8s-redis-sts-myredis"></a>



__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new MyRedis(scope: Construct, name: string, opts: StsOpts)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **opts** (<code>[StsOpts](#opencdk8s-cdk8s-redis-sts-stsopts)</code>)  *No description*
  * **image** (<code>string</code>)  Container image. 
  * **namespace** (<code>string</code>)  namespace. 
  * **env** (<code>Map<string, string></code>)  Environment variables to pass to the pod. __*Optional*__
  * **labels** (<code>Map<string, string></code>)  Additional labels to apply to resources. __*Default*__: none
  * **nodeSelectorParams** (<code>Map<string, string></code>)  nodeSelector params. __*Default*__: undefined
  * **replicas** (<code>number</code>)  *No description* __*Default*__: 1
  * **resources** (<code>[ResourceRequirements](#opencdk8s-cdk8s-redis-sts-resourcerequirements)</code>)  Resources requests for the DB. __*Default*__: Requests = { CPU = 200m, Mem = 256Mi }, Limits = { CPU = 400m, Mem = 512Mi }
  * **storageClassName** (<code>string</code>)  The storage class to use for our PVC. __*Default*__: 'gp2-expandable'
  * **volumeSize** (<code>string</code>)  The Volume size of our DB in string, e.g 10Gi, 20Gi. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**name**🔹 | <code>string</code> | <span></span>
**namespace**🔹 | <code>string</code> | <span></span>



## struct ResourceQuantity 🔹 <a id="opencdk8s-cdk8s-redis-sts-resourcequantity"></a>






Name | Type | Description 
-----|------|-------------
**cpu**?🔹 | <code>string</code> | __*Default*__: no limit
**memory**?🔹 | <code>string</code> | __*Default*__: no limit



## struct ResourceRequirements 🔹 <a id="opencdk8s-cdk8s-redis-sts-resourcerequirements"></a>






Name | Type | Description 
-----|------|-------------
**limits**?🔹 | <code>[ResourceQuantity](#opencdk8s-cdk8s-redis-sts-resourcequantity)</code> | Maximum resources for the web app.<br/>__*Default*__: CPU = 400m, Mem = 512Mi
**requests**?🔹 | <code>[ResourceQuantity](#opencdk8s-cdk8s-redis-sts-resourcequantity)</code> | Required resources for the web app.<br/>__*Default*__: CPU = 200m, Mem = 256Mi



## struct StsOpts 🔹 <a id="opencdk8s-cdk8s-redis-sts-stsopts"></a>






Name | Type | Description 
-----|------|-------------
**image**🔹 | <code>string</code> | Container image.
**namespace**🔹 | <code>string</code> | namespace.
**env**?🔹 | <code>Map<string, string></code> | Environment variables to pass to the pod.<br/>__*Optional*__
**labels**?🔹 | <code>Map<string, string></code> | Additional labels to apply to resources.<br/>__*Default*__: none
**nodeSelectorParams**?🔹 | <code>Map<string, string></code> | nodeSelector params.<br/>__*Default*__: undefined
**replicas**?🔹 | <code>number</code> | __*Default*__: 1
**resources**?🔹 | <code>[ResourceRequirements](#opencdk8s-cdk8s-redis-sts-resourcerequirements)</code> | Resources requests for the DB.<br/>__*Default*__: Requests = { CPU = 200m, Mem = 256Mi }, Limits = { CPU = 400m, Mem = 512Mi }
**storageClassName**?🔹 | <code>string</code> | The storage class to use for our PVC.<br/>__*Default*__: 'gp2-expandable'
**volumeSize**?🔹 | <code>string</code> | The Volume size of our DB in string, e.g 10Gi, 20Gi.<br/>__*Optional*__



