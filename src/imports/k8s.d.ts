import { ApiObject, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration
 */
export declare class KubeMutatingWebhookConfigurationV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeMutatingWebhookConfigurationV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeMutatingWebhookConfigurationV1Beta1Props);
}
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList
 */
export declare class KubeMutatingWebhookConfigurationListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeMutatingWebhookConfigurationListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeMutatingWebhookConfigurationListV1Beta1Props);
}
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration
 */
export declare class KubeValidatingWebhookConfigurationV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeValidatingWebhookConfigurationV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeValidatingWebhookConfigurationV1Beta1Props);
}
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList
 */
export declare class KubeValidatingWebhookConfigurationListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeValidatingWebhookConfigurationListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeValidatingWebhookConfigurationListV1Beta1Props);
}
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevision
 */
export declare class KubeControllerRevision extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevision"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionProps);
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevisionList
 */
export declare class KubeControllerRevisionList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevisionList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionListProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionListProps);
}
/**
 * DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1.DaemonSet
 */
export declare class KubeDaemonSet extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDaemonSetProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDaemonSetProps);
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1.DaemonSetList
 */
export declare class KubeDaemonSetList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDaemonSetListProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDaemonSetListProps);
}
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.Deployment
 */
export declare class KubeDeployment extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.Deployment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDeploymentProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDeploymentProps);
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1.DeploymentList
 */
export declare class KubeDeploymentList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DeploymentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDeploymentListProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDeploymentListProps);
}
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSet
 */
export declare class KubeReplicaSet extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeReplicaSetProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeReplicaSetProps);
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSetList
 */
export declare class KubeReplicaSetList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeReplicaSetListProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeReplicaSetListProps);
}
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1.StatefulSet
 */
export declare class KubeStatefulSet extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeStatefulSetProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeStatefulSetProps);
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1.StatefulSetList
 */
export declare class KubeStatefulSetList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStatefulSetListProps): any;
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStatefulSetListProps);
}
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevision
 */
export declare class KubeControllerRevisionV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevision"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionV1Beta1Props);
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList
 */
export declare class KubeControllerRevisionListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevisionList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionListV1Beta1Props);
}
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.Deployment
 */
export declare class KubeDeploymentV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Deployment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDeploymentV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDeploymentV1Beta1Props);
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.extensions.v1beta1.DeploymentList
 */
export declare class KubeDeploymentListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DeploymentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDeploymentListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDeploymentListV1Beta1Props);
}
/**
 * represents a scaling request for a resource.
 *
 * @schema io.k8s.api.extensions.v1beta1.Scale
 */
export declare class KubeScaleV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Scale"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeScaleV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeScaleV1Beta1Props);
}
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSet
 */
export declare class KubeStatefulSetV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeStatefulSetV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeStatefulSetV1Beta1Props);
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSetList
 */
export declare class KubeStatefulSetListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStatefulSetListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStatefulSetListV1Beta1Props);
}
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevision
 */
export declare class KubeControllerRevisionV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevision"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionV1Beta2Props);
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList
 */
export declare class KubeControllerRevisionListV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevisionList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeControllerRevisionListV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeControllerRevisionListV1Beta2Props);
}
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSet
 */
export declare class KubeDaemonSetV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDaemonSetV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDaemonSetV1Beta2Props);
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSetList
 */
export declare class KubeDaemonSetListV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDaemonSetListV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDaemonSetListV1Beta2Props);
}
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.Deployment
 */
export declare class KubeDeploymentV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Deployment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDeploymentV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDeploymentV1Beta2Props);
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentList
 */
export declare class KubeDeploymentListV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DeploymentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDeploymentListV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDeploymentListV1Beta2Props);
}
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSet
 */
export declare class KubeReplicaSetV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeReplicaSetV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeReplicaSetV1Beta2Props);
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSetList
 */
export declare class KubeReplicaSetListV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeReplicaSetListV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeReplicaSetListV1Beta2Props);
}
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.apps.v1beta2.Scale
 */
export declare class KubeScaleV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Scale"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeScaleV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeScaleV1Beta2Props);
}
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSet
 */
export declare class KubeStatefulSetV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeStatefulSetV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeStatefulSetV1Beta2Props);
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetList
 */
export declare class KubeStatefulSetListV1Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStatefulSetListV1Beta2Props): any;
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStatefulSetListV1Beta2Props);
}
/**
 * AuditSink represents a cluster level audit sink
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink
 */
export declare class KubeAuditSinkV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSink"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSink".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeAuditSinkV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSink" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeAuditSinkV1Alpha1Props);
}
/**
 * AuditSinkList is a list of AuditSink items.
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList
 */
export declare class KubeAuditSinkListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeAuditSinkListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSinkList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeAuditSinkListV1Alpha1Props);
}
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1.TokenReview
 */
export declare class KubeTokenReview extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authentication.v1.TokenReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeTokenReviewProps): any;
    /**
     * Defines a "io.k8s.api.authentication.v1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeTokenReviewProps);
}
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1beta1.TokenReview
 */
export declare class KubeTokenReviewV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authentication.v1beta1.TokenReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1beta1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeTokenReviewV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.authentication.v1beta1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeTokenReviewV1Beta1Props);
}
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview
 */
export declare class KubeLocalSubjectAccessReview extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.LocalSubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeLocalSubjectAccessReviewProps): any;
    /**
     * Defines a "io.k8s.api.authorization.v1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeLocalSubjectAccessReviewProps);
}
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview
 */
export declare class KubeSelfSubjectAccessReview extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSelfSubjectAccessReviewProps): any;
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSelfSubjectAccessReviewProps);
}
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview
 */
export declare class KubeSelfSubjectRulesReview extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectRulesReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSelfSubjectRulesReviewProps): any;
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSelfSubjectRulesReviewProps);
}
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1.SubjectAccessReview
 */
export declare class KubeSubjectAccessReview extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSubjectAccessReviewProps): any;
    /**
     * Defines a "io.k8s.api.authorization.v1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSubjectAccessReviewProps);
}
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview
 */
export declare class KubeLocalSubjectAccessReviewV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeLocalSubjectAccessReviewV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeLocalSubjectAccessReviewV1Beta1Props);
}
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview
 */
export declare class KubeSelfSubjectAccessReviewV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSelfSubjectAccessReviewV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSelfSubjectAccessReviewV1Beta1Props);
}
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview
 */
export declare class KubeSelfSubjectRulesReviewV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSelfSubjectRulesReviewV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSelfSubjectRulesReviewV1Beta1Props);
}
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview
 */
export declare class KubeSubjectAccessReviewV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SubjectAccessReview"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSubjectAccessReviewV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSubjectAccessReviewV1Beta1Props);
}
/**
 * configuration of a horizontal pod autoscaler.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
 */
export declare class KubeHorizontalPodAutoscaler extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeHorizontalPodAutoscalerProps): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeHorizontalPodAutoscalerProps);
}
/**
 * list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList
 */
export declare class KubeHorizontalPodAutoscalerList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeHorizontalPodAutoscalerListProps): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeHorizontalPodAutoscalerListProps);
}
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.autoscaling.v1.Scale
 */
export declare class KubeScale extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.Scale"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeScaleProps): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeScaleProps);
}
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler
 */
export declare class KubeHorizontalPodAutoscalerV2Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeHorizontalPodAutoscalerV2Beta1Props): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeHorizontalPodAutoscalerV2Beta1Props);
}
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList
 */
export declare class KubeHorizontalPodAutoscalerListV2Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeHorizontalPodAutoscalerListV2Beta1Props): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeHorizontalPodAutoscalerListV2Beta1Props);
}
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler
 */
export declare class KubeHorizontalPodAutoscalerV2Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeHorizontalPodAutoscalerV2Beta2Props): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeHorizontalPodAutoscalerV2Beta2Props);
}
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList
 */
export declare class KubeHorizontalPodAutoscalerListV2Beta2 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeHorizontalPodAutoscalerListV2Beta2Props): any;
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeHorizontalPodAutoscalerListV2Beta2Props);
}
/**
 * Job represents the configuration of a single job.
 *
 * @schema io.k8s.api.batch.v1.Job
 */
export declare class KubeJob extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v1.Job"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.Job".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeJobProps): any;
    /**
     * Defines a "io.k8s.api.batch.v1.Job" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeJobProps);
}
/**
 * JobList is a collection of jobs.
 *
 * @schema io.k8s.api.batch.v1.JobList
 */
export declare class KubeJobList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v1.JobList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.JobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeJobListProps): any;
    /**
     * Defines a "io.k8s.api.batch.v1.JobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeJobListProps);
}
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJob
 */
export declare class KubeCronJobV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJob"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeCronJobV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeCronJobV1Beta1Props);
}
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJobList
 */
export declare class KubeCronJobListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJobList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCronJobListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCronJobListV1Beta1Props);
}
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJob
 */
export declare class KubeCronJobV2Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJob"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeCronJobV2Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeCronJobV2Alpha1Props);
}
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJobList
 */
export declare class KubeCronJobListV2Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJobList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCronJobListV2Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCronJobListV2Alpha1Props);
}
/**
 * Describes a certificate signing request
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest
 */
export declare class KubeCertificateSigningRequestV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeCertificateSigningRequestV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequest" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeCertificateSigningRequestV1Beta1Props);
}
/**
 *
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList
 */
export declare class KubeCertificateSigningRequestListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCertificateSigningRequestListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCertificateSigningRequestListV1Beta1Props);
}
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1.Lease
 */
export declare class KubeLease extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.Lease"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeLeaseProps): any;
    /**
     * Defines a "io.k8s.api.coordination.v1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeLeaseProps);
}
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1.LeaseList
 */
export declare class KubeLeaseList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.LeaseList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeLeaseListProps): any;
    /**
     * Defines a "io.k8s.api.coordination.v1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeLeaseListProps);
}
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1beta1.Lease
 */
export declare class KubeLeaseV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.Lease"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeLeaseV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeLeaseV1Beta1Props);
}
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1beta1.LeaseList
 */
export declare class KubeLeaseListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.LeaseList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeLeaseListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeLeaseListV1Beta1Props);
}
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 *
 * @schema io.k8s.api.core.v1.Binding
 */
export declare class KubeBinding extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Binding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Binding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeBindingProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Binding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeBindingProps);
}
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 *
 * @schema io.k8s.api.core.v1.ComponentStatus
 */
export declare class KubeComponentStatus extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatus"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatus".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeComponentStatusProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatus" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeComponentStatusProps);
}
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 *
 * @schema io.k8s.api.core.v1.ComponentStatusList
 */
export declare class KubeComponentStatusList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatusList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatusList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeComponentStatusListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatusList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeComponentStatusListProps);
}
/**
 * ConfigMap holds configuration data for pods to consume.
 *
 * @schema io.k8s.api.core.v1.ConfigMap
 */
export declare class KubeConfigMap extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMap"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMap".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeConfigMapProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMap" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeConfigMapProps);
}
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 *
 * @schema io.k8s.api.core.v1.ConfigMapList
 */
export declare class KubeConfigMapList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMapList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMapList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeConfigMapListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMapList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeConfigMapListProps);
}
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ]
 *
 * @schema io.k8s.api.core.v1.Endpoints
 */
export declare class KubeEndpoints extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Endpoints"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Endpoints".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeEndpointsProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Endpoints" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeEndpointsProps);
}
/**
 * EndpointsList is a list of endpoints.
 *
 * @schema io.k8s.api.core.v1.EndpointsList
 */
export declare class KubeEndpointsList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.EndpointsList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EndpointsList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeEndpointsListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.EndpointsList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeEndpointsListProps);
}
/**
 * Event is a report of an event somewhere in the cluster.
 *
 * @schema io.k8s.api.core.v1.Event
 */
export declare class KubeEvent extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Event"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeEventProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeEventProps);
}
/**
 * EventList is a list of events.
 *
 * @schema io.k8s.api.core.v1.EventList
 */
export declare class KubeEventList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.EventList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeEventListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeEventListProps);
}
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 *
 * @schema io.k8s.api.core.v1.LimitRange
 */
export declare class KubeLimitRange extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRange"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRange".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeLimitRangeProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.LimitRange" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeLimitRangeProps);
}
/**
 * LimitRangeList is a list of LimitRange items.
 *
 * @schema io.k8s.api.core.v1.LimitRangeList
 */
export declare class KubeLimitRangeList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRangeList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRangeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeLimitRangeListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.LimitRangeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeLimitRangeListProps);
}
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 *
 * @schema io.k8s.api.core.v1.Namespace
 */
export declare class KubeNamespace extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Namespace"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Namespace".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeNamespaceProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Namespace" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeNamespaceProps);
}
/**
 * NamespaceList is a list of Namespaces.
 *
 * @schema io.k8s.api.core.v1.NamespaceList
 */
export declare class KubeNamespaceList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.NamespaceList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NamespaceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeNamespaceListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.NamespaceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeNamespaceListProps);
}
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 *
 * @schema io.k8s.api.core.v1.Node
 */
export declare class KubeNode extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Node"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Node".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeNodeProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Node" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeNodeProps);
}
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 *
 * @schema io.k8s.api.core.v1.NodeList
 */
export declare class KubeNodeList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.NodeList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeNodeListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.NodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeNodeListProps);
}
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 *
 * @schema io.k8s.api.core.v1.PersistentVolume
 */
export declare class KubePersistentVolume extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolume"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolume".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePersistentVolumeProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolume" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePersistentVolumeProps);
}
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaim
 */
export declare class KubePersistentVolumeClaim extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaim"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaim".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePersistentVolumeClaimProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaim" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePersistentVolumeClaimProps);
}
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimList
 */
export declare class KubePersistentVolumeClaimList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaimList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaimList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePersistentVolumeClaimListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaimList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePersistentVolumeClaimListProps);
}
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeList
 */
export declare class KubePersistentVolumeList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePersistentVolumeListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePersistentVolumeListProps);
}
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 *
 * @schema io.k8s.api.core.v1.Pod
 */
export declare class KubePod extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Pod"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Pod".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePodProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Pod" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePodProps);
}
/**
 * PodList is a list of Pods.
 *
 * @schema io.k8s.api.core.v1.PodList
 */
export declare class KubePodList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePodListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PodList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePodListProps);
}
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 *
 * @schema io.k8s.api.core.v1.PodTemplate
 */
export declare class KubePodTemplate extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplate"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplate".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePodTemplateProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplate" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePodTemplateProps);
}
/**
 * PodTemplateList is a list of PodTemplates.
 *
 * @schema io.k8s.api.core.v1.PodTemplateList
 */
export declare class KubePodTemplateList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplateList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplateList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePodTemplateListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplateList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePodTemplateListProps);
}
/**
 * ReplicationController represents the configuration of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationController
 */
export declare class KubeReplicationController extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationController"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationController".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeReplicationControllerProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationController" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeReplicationControllerProps);
}
/**
 * ReplicationControllerList is a collection of replication controllers.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerList
 */
export declare class KubeReplicationControllerList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationControllerList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationControllerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeReplicationControllerListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationControllerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeReplicationControllerListProps);
}
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 *
 * @schema io.k8s.api.core.v1.ResourceQuota
 */
export declare class KubeResourceQuota extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuota"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuota".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeResourceQuotaProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuota" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeResourceQuotaProps);
}
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaList
 */
export declare class KubeResourceQuotaList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuotaList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuotaList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeResourceQuotaListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuotaList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeResourceQuotaListProps);
}
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 *
 * @schema io.k8s.api.core.v1.Secret
 */
export declare class KubeSecret extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Secret"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Secret".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeSecretProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Secret" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeSecretProps);
}
/**
 * SecretList is a list of Secret.
 *
 * @schema io.k8s.api.core.v1.SecretList
 */
export declare class KubeSecretList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.SecretList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.SecretList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeSecretListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.SecretList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeSecretListProps);
}
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 *
 * @schema io.k8s.api.core.v1.Service
 */
export declare class KubeService extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.Service"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Service".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeServiceProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.Service" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeServiceProps);
}
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 *
 * @schema io.k8s.api.core.v1.ServiceAccount
 */
export declare class KubeServiceAccount extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccount"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccount".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeServiceAccountProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccount" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeServiceAccountProps);
}
/**
 * ServiceAccountList is a list of ServiceAccount objects
 *
 * @schema io.k8s.api.core.v1.ServiceAccountList
 */
export declare class KubeServiceAccountList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccountList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccountList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeServiceAccountListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccountList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeServiceAccountListProps);
}
/**
 * ServiceList holds a list of services.
 *
 * @schema io.k8s.api.core.v1.ServiceList
 */
export declare class KubeServiceList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeServiceListProps): any;
    /**
     * Defines a "io.k8s.api.core.v1.ServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeServiceListProps);
}
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 *
 * @schema io.k8s.api.events.v1beta1.Event
 */
export declare class KubeEventV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.Event"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeEventV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.events.v1beta1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeEventV1Beta1Props);
}
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1beta1.EventList
 */
export declare class KubeEventListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.EventList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeEventListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.events.v1beta1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeEventListV1Beta1Props);
}
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSet
 */
export declare class KubeDaemonSetV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeDaemonSetV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeDaemonSetV1Beta1Props);
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetList
 */
export declare class KubeDaemonSetListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeDaemonSetListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeDaemonSetListV1Beta1Props);
}
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 *
 * @schema io.k8s.api.networking.v1beta1.Ingress
 */
export declare class KubeIngressV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.Ingress"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.Ingress".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeIngressV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.networking.v1beta1.Ingress" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeIngressV1Beta1Props);
}
/**
 * IngressList is a collection of Ingress.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressList
 */
export declare class KubeIngressListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.IngressList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.IngressList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeIngressListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.networking.v1beta1.IngressList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeIngressListV1Beta1Props);
}
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy
 */
export declare class KubeNetworkPolicyV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicy"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeNetworkPolicyV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeNetworkPolicyV1Beta1Props);
}
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList
 */
export declare class KubeNetworkPolicyListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicyList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeNetworkPolicyListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeNetworkPolicyListV1Beta1Props);
}
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy
 */
export declare class KubePodSecurityPolicyV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicy"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePodSecurityPolicyV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePodSecurityPolicyV1Beta1Props);
}
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList
 */
export declare class KubePodSecurityPolicyListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePodSecurityPolicyListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePodSecurityPolicyListV1Beta1Props);
}
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSet
 */
export declare class KubeReplicaSetV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSet"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeReplicaSetV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeReplicaSetV1Beta1Props);
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList
 */
export declare class KubeReplicaSetListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeReplicaSetListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeReplicaSetListV1Beta1Props);
}
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicy
 */
export declare class KubeNetworkPolicy extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicy"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeNetworkPolicyProps): any;
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeNetworkPolicyProps);
}
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyList
 */
export declare class KubeNetworkPolicyList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicyList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeNetworkPolicyListProps): any;
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeNetworkPolicyListProps);
}
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClass
 */
export declare class KubeRuntimeClassV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRuntimeClassV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRuntimeClassV1Alpha1Props);
}
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassList
 */
export declare class KubeRuntimeClassListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRuntimeClassListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRuntimeClassListV1Alpha1Props);
}
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClass
 */
export declare class KubeRuntimeClassV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRuntimeClassV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRuntimeClassV1Beta1Props);
}
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClassList
 */
export declare class KubeRuntimeClassListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRuntimeClassListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRuntimeClassListV1Beta1Props);
}
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 *
 * @schema io.k8s.api.policy.v1beta1.Eviction
 */
export declare class KubeEvictionV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.Eviction"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.Eviction".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeEvictionV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.policy.v1beta1.Eviction" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeEvictionV1Beta1Props);
}
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget
 */
export declare class KubePodDisruptionBudgetV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudget"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudget".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePodDisruptionBudgetV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudget" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePodDisruptionBudgetV1Beta1Props);
}
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList
 */
export declare class KubePodDisruptionBudgetListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePodDisruptionBudgetListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePodDisruptionBudgetListV1Beta1Props);
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRole
 */
export declare class KubeClusterRole extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRole"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeClusterRoleProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeClusterRoleProps);
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBinding
 */
export declare class KubeClusterRoleBinding extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingProps);
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList
 */
export declare class KubeClusterRoleBindingList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingListProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingListProps);
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleList
 */
export declare class KubeClusterRoleList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleListProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleListProps);
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.Role
 */
export declare class KubeRole extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.Role"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeRoleProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeRoleProps);
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1.RoleBinding
 */
export declare class KubeRoleBinding extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingProps);
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1.RoleBindingList
 */
export declare class KubeRoleBindingList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingListProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingListProps);
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1.RoleList
 */
export declare class KubeRoleList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleListProps): any;
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleListProps);
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRole
 */
export declare class KubeClusterRoleV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRole"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeClusterRoleV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeClusterRoleV1Alpha1Props);
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding
 */
export declare class KubeClusterRoleBindingV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingV1Alpha1Props);
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList
 */
export declare class KubeClusterRoleBindingListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingListV1Alpha1Props);
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList
 */
export declare class KubeClusterRoleListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleListV1Alpha1Props);
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.Role
 */
export declare class KubeRoleV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.Role"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeRoleV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeRoleV1Alpha1Props);
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBinding
 */
export declare class KubeRoleBindingV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingV1Alpha1Props);
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList
 */
export declare class KubeRoleBindingListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingListV1Alpha1Props);
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleList
 */
export declare class KubeRoleListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleListV1Alpha1Props);
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRole
 */
export declare class KubeClusterRoleV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRole"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeClusterRoleV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeClusterRoleV1Beta1Props);
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding
 */
export declare class KubeClusterRoleBindingV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingV1Beta1Props);
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList
 */
export declare class KubeClusterRoleBindingListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleBindingListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleBindingListV1Beta1Props);
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList
 */
export declare class KubeClusterRoleListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeClusterRoleListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeClusterRoleListV1Beta1Props);
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.Role
 */
export declare class KubeRoleV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.Role"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeRoleV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeRoleV1Beta1Props);
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBinding
 */
export declare class KubeRoleBindingV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBinding"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingV1Beta1Props);
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBindingList
 */
export declare class KubeRoleBindingListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBindingList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleBindingListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleBindingListV1Beta1Props);
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleList
 */
export declare class KubeRoleListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeRoleListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeRoleListV1Beta1Props);
}
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClass
 */
export declare class KubePriorityClass extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassProps): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassProps);
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClassList
 */
export declare class KubePriorityClassList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassListProps): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassListProps);
}
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass
 */
export declare class KubePriorityClassV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassV1Alpha1Props);
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList
 */
export declare class KubePriorityClassListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassListV1Alpha1Props);
}
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClass
 */
export declare class KubePriorityClassV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassV1Beta1Props);
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList
 */
export declare class KubePriorityClassListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePriorityClassListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePriorityClassListV1Beta1Props);
}
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPreset
 */
export declare class KubePodPresetV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPreset"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPreset".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubePodPresetV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPreset" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubePodPresetV1Alpha1Props);
}
/**
 * PodPresetList is a list of PodPreset objects.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPresetList
 */
export declare class KubePodPresetListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPresetList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPresetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubePodPresetListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPresetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubePodPresetListV1Alpha1Props);
}
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1.StorageClass
 */
export declare class KubeStorageClass extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStorageClassProps): any;
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStorageClassProps);
}
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1.StorageClassList
 */
export declare class KubeStorageClassList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStorageClassListProps): any;
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStorageClassListProps);
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachment
 */
export declare class KubeVolumeAttachment extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentProps): any;
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentProps);
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachmentList
 */
export declare class KubeVolumeAttachmentList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachmentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentListProps): any;
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentListProps);
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment
 */
export declare class KubeVolumeAttachmentV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentV1Alpha1Props);
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList
 */
export declare class KubeVolumeAttachmentListV1Alpha1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentListV1Alpha1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentListV1Alpha1Props);
}
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriver
 */
export declare class KubeCsiDriverV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriver"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriver".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCsiDriverV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriver" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCsiDriverV1Beta1Props);
}
/**
 * CSIDriverList is a collection of CSIDriver objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriverList
 */
export declare class KubeCsiDriverListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriverList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriverList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCsiDriverListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriverList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCsiDriverListV1Beta1Props);
}
/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINode
 */
export declare class KubeCsiNodeV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINode"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINode".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCsiNodeV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINode" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCsiNodeV1Beta1Props);
}
/**
 * CSINodeList is a collection of CSINode objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeList
 */
export declare class KubeCsiNodeListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINodeList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCsiNodeListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCsiNodeListV1Beta1Props);
}
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClass
 */
export declare class KubeStorageClassV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClass"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStorageClassV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStorageClassV1Beta1Props);
}
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClassList
 */
export declare class KubeStorageClassListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClassList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeStorageClassListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeStorageClassListV1Beta1Props);
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachment
 */
export declare class KubeVolumeAttachmentV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachment"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentV1Beta1Props);
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList
 */
export declare class KubeVolumeAttachmentListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachmentList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeVolumeAttachmentListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeVolumeAttachmentListV1Beta1Props);
}
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition
 */
export declare class KubeCustomResourceDefinitionV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCustomResourceDefinitionV1Beta1Props): any;
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCustomResourceDefinitionV1Beta1Props);
}
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList
 */
export declare class KubeCustomResourceDefinitionListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeCustomResourceDefinitionListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeCustomResourceDefinitionListV1Beta1Props);
}
/**
 * Status is a return value for calls that don't return other objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status
 */
export declare class KubeStatus extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.apimachinery.pkg.apis.meta.v1.Status"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.apimachinery.pkg.apis.meta.v1.Status".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeStatusProps): any;
    /**
     * Defines a "io.k8s.apimachinery.pkg.apis.meta.v1.Status" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeStatusProps);
}
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
 */
export declare class KubeApiService extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeApiServiceProps): any;
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeApiServiceProps);
}
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList
 */
export declare class KubeApiServiceList extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeApiServiceListProps): any;
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeApiServiceListProps);
}
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService
 */
export declare class KubeApiServiceV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props?: KubeApiServiceV1Beta1Props): any;
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props?: KubeApiServiceV1Beta1Props);
}
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList
 */
export declare class KubeApiServiceListV1Beta1 extends ApiObject {
    /**
     * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList"
     */
    static readonly GVK: GroupVersionKind;
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props: KubeApiServiceListV1Beta1Props): any;
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope: Construct, id: string, props: KubeApiServiceListV1Beta1Props);
}
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration
 */
export interface KubeMutatingWebhookConfigurationV1Beta1Props {
    /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration#webhooks
     */
    readonly webhooks?: MutatingWebhook[];
}
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList
 */
export interface KubeMutatingWebhookConfigurationListV1Beta1Props {
    /**
     * List of MutatingWebhookConfiguration.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList#items
     */
    readonly items: KubeMutatingWebhookConfigurationV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration
 */
export interface KubeValidatingWebhookConfigurationV1Beta1Props {
    /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration#webhooks
     */
    readonly webhooks?: ValidatingWebhook[];
}
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList
 */
export interface KubeValidatingWebhookConfigurationListV1Beta1Props {
    /**
     * List of ValidatingWebhookConfiguration.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList#items
     */
    readonly items: KubeValidatingWebhookConfigurationV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevision
 */
export interface KubeControllerRevisionProps {
    /**
     * Data is the serialized representation of the state.
     *
     * @schema io.k8s.api.apps.v1.ControllerRevision#data
     */
    readonly data?: RawExtension;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1.ControllerRevision#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Revision indicates the revision of the state represented by Data.
     *
     * @schema io.k8s.api.apps.v1.ControllerRevision#revision
     */
    readonly revision: number;
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevisionList
 */
export interface KubeControllerRevisionListProps {
    /**
     * Items is the list of ControllerRevisions
     *
     * @schema io.k8s.api.apps.v1.ControllerRevisionList#items
     */
    readonly items: KubeControllerRevisionProps[];
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1.ControllerRevisionList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1.DaemonSet
 */
export interface KubeDaemonSetProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1.DaemonSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.apps.v1.DaemonSet#spec
     */
    readonly spec?: DaemonSetSpec;
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1.DaemonSetList
 */
export interface KubeDaemonSetListProps {
    /**
     * A list of daemon sets.
     *
     * @schema io.k8s.api.apps.v1.DaemonSetList#items
     */
    readonly items: KubeDaemonSetProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1.DaemonSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.Deployment
 */
export interface KubeDeploymentProps {
    /**
     * Standard object metadata.
     *
     * @schema io.k8s.api.apps.v1.Deployment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the Deployment.
     *
     * @schema io.k8s.api.apps.v1.Deployment#spec
     */
    readonly spec?: DeploymentSpec;
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1.DeploymentList
 */
export interface KubeDeploymentListProps {
    /**
     * Items is the list of Deployments.
     *
     * @schema io.k8s.api.apps.v1.DeploymentList#items
     */
    readonly items: KubeDeploymentProps[];
    /**
     * Standard list metadata.
     *
     * @schema io.k8s.api.apps.v1.DeploymentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSet
 */
export interface KubeReplicaSetProps {
    /**
     * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1.ReplicaSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.apps.v1.ReplicaSet#spec
     */
    readonly spec?: ReplicaSetSpec;
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSetList
 */
export interface KubeReplicaSetListProps {
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     *
     * @schema io.k8s.api.apps.v1.ReplicaSetList#items
     */
    readonly items: KubeReplicaSetProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.apps.v1.ReplicaSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1.StatefulSet
 */
export interface KubeStatefulSetProps {
    /**
     * @schema io.k8s.api.apps.v1.StatefulSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the desired identities of pods in this set.
     *
     * @schema io.k8s.api.apps.v1.StatefulSet#spec
     */
    readonly spec?: StatefulSetSpec;
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1.StatefulSetList
 */
export interface KubeStatefulSetListProps {
    /**
     * @schema io.k8s.api.apps.v1.StatefulSetList#items
     */
    readonly items: KubeStatefulSetProps[];
    /**
     * @schema io.k8s.api.apps.v1.StatefulSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevision
 */
export interface KubeControllerRevisionV1Beta1Props {
    /**
     * Data is the serialized representation of the state.
     *
     * @schema io.k8s.api.apps.v1beta1.ControllerRevision#data
     */
    readonly data?: RawExtension;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta1.ControllerRevision#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Revision indicates the revision of the state represented by Data.
     *
     * @schema io.k8s.api.apps.v1beta1.ControllerRevision#revision
     */
    readonly revision: number;
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList
 */
export interface KubeControllerRevisionListV1Beta1Props {
    /**
     * Items is the list of ControllerRevisions
     *
     * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList#items
     */
    readonly items: KubeControllerRevisionV1Beta1Props[];
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.Deployment
 */
export interface KubeDeploymentV1Beta1Props {
    /**
     * Standard object metadata.
     *
     * @schema io.k8s.api.extensions.v1beta1.Deployment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the Deployment.
     *
     * @schema io.k8s.api.extensions.v1beta1.Deployment#spec
     */
    readonly spec?: DeploymentSpec;
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.extensions.v1beta1.DeploymentList
 */
export interface KubeDeploymentListV1Beta1Props {
    /**
     * Items is the list of Deployments.
     *
     * @schema io.k8s.api.extensions.v1beta1.DeploymentList#items
     */
    readonly items: KubeDeploymentV1Beta1Props[];
    /**
     * Standard list metadata.
     *
     * @schema io.k8s.api.extensions.v1beta1.DeploymentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * represents a scaling request for a resource.
 *
 * @schema io.k8s.api.extensions.v1beta1.Scale
 */
export interface KubeScaleV1Beta1Props {
    /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
     *
     * @schema io.k8s.api.extensions.v1beta1.Scale#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.extensions.v1beta1.Scale#spec
     */
    readonly spec?: ScaleSpec;
}
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSet
 */
export interface KubeStatefulSetV1Beta1Props {
    /**
     * @schema io.k8s.api.apps.v1beta1.StatefulSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the desired identities of pods in this set.
     *
     * @schema io.k8s.api.apps.v1beta1.StatefulSet#spec
     */
    readonly spec?: StatefulSetSpec;
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSetList
 */
export interface KubeStatefulSetListV1Beta1Props {
    /**
     * @schema io.k8s.api.apps.v1beta1.StatefulSetList#items
     */
    readonly items: KubeStatefulSetV1Beta1Props[];
    /**
     * @schema io.k8s.api.apps.v1beta1.StatefulSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevision
 */
export interface KubeControllerRevisionV1Beta2Props {
    /**
     * Data is the serialized representation of the state.
     *
     * @schema io.k8s.api.apps.v1beta2.ControllerRevision#data
     */
    readonly data?: RawExtension;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta2.ControllerRevision#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Revision indicates the revision of the state represented by Data.
     *
     * @schema io.k8s.api.apps.v1beta2.ControllerRevision#revision
     */
    readonly revision: number;
}
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList
 */
export interface KubeControllerRevisionListV1Beta2Props {
    /**
     * Items is the list of ControllerRevisions
     *
     * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList#items
     */
    readonly items: KubeControllerRevisionV1Beta2Props[];
    /**
     * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSet
 */
export interface KubeDaemonSetV1Beta2Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta2.DaemonSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.apps.v1beta2.DaemonSet#spec
     */
    readonly spec?: DaemonSetSpec;
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSetList
 */
export interface KubeDaemonSetListV1Beta2Props {
    /**
     * A list of daemon sets.
     *
     * @schema io.k8s.api.apps.v1beta2.DaemonSetList#items
     */
    readonly items: KubeDaemonSetV1Beta2Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta2.DaemonSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.Deployment
 */
export interface KubeDeploymentV1Beta2Props {
    /**
     * Standard object metadata.
     *
     * @schema io.k8s.api.apps.v1beta2.Deployment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the Deployment.
     *
     * @schema io.k8s.api.apps.v1beta2.Deployment#spec
     */
    readonly spec?: DeploymentSpec;
}
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentList
 */
export interface KubeDeploymentListV1Beta2Props {
    /**
     * Items is the list of Deployments.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentList#items
     */
    readonly items: KubeDeploymentV1Beta2Props[];
    /**
     * Standard list metadata.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSet
 */
export interface KubeReplicaSetV1Beta2Props {
    /**
     * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.apps.v1beta2.ReplicaSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.apps.v1beta2.ReplicaSet#spec
     */
    readonly spec?: ReplicaSetSpec;
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSetList
 */
export interface KubeReplicaSetListV1Beta2Props {
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     *
     * @schema io.k8s.api.apps.v1beta2.ReplicaSetList#items
     */
    readonly items: KubeReplicaSetV1Beta2Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.apps.v1beta2.ReplicaSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.apps.v1beta2.Scale
 */
export interface KubeScaleV1Beta2Props {
    /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
     *
     * @schema io.k8s.api.apps.v1beta2.Scale#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.apps.v1beta2.Scale#spec
     */
    readonly spec?: ScaleSpec;
}
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSet
 */
export interface KubeStatefulSetV1Beta2Props {
    /**
     * @schema io.k8s.api.apps.v1beta2.StatefulSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the desired identities of pods in this set.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSet#spec
     */
    readonly spec?: StatefulSetSpec;
}
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetList
 */
export interface KubeStatefulSetListV1Beta2Props {
    /**
     * @schema io.k8s.api.apps.v1beta2.StatefulSetList#items
     */
    readonly items: KubeStatefulSetV1Beta2Props[];
    /**
     * @schema io.k8s.api.apps.v1beta2.StatefulSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * AuditSink represents a cluster level audit sink
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink
 */
export interface KubeAuditSinkV1Alpha1Props {
    /**
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the audit configuration spec
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink#spec
     */
    readonly spec?: AuditSinkSpec;
}
/**
 * AuditSinkList is a list of AuditSink items.
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList
 */
export interface KubeAuditSinkListV1Alpha1Props {
    /**
     * List of audit configurations.
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList#items
     */
    readonly items: KubeAuditSinkV1Alpha1Props[];
    /**
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1.TokenReview
 */
export interface KubeTokenReviewProps {
    /**
     * @schema io.k8s.api.authentication.v1.TokenReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated
     *
     * @schema io.k8s.api.authentication.v1.TokenReview#spec
     */
    readonly spec: TokenReviewSpec;
}
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1beta1.TokenReview
 */
export interface KubeTokenReviewV1Beta1Props {
    /**
     * @schema io.k8s.api.authentication.v1beta1.TokenReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated
     *
     * @schema io.k8s.api.authentication.v1beta1.TokenReview#spec
     */
    readonly spec: TokenReviewSpec;
}
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview
 */
export interface KubeLocalSubjectAccessReviewProps {
    /**
     * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
     *
     * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview#spec
     */
    readonly spec: SubjectAccessReviewSpec;
}
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview
 */
export interface KubeSelfSubjectAccessReviewProps {
    /**
     * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.  user and groups must be empty
     *
     * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview#spec
     */
    readonly spec: SelfSubjectAccessReviewSpec;
}
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview
 */
export interface KubeSelfSubjectRulesReviewProps {
    /**
     * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.
     *
     * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview#spec
     */
    readonly spec: SelfSubjectRulesReviewSpec;
}
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1.SubjectAccessReview
 */
export interface KubeSubjectAccessReviewProps {
    /**
     * @schema io.k8s.api.authorization.v1.SubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated
     *
     * @schema io.k8s.api.authorization.v1.SubjectAccessReview#spec
     */
    readonly spec: SubjectAccessReviewSpec;
}
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview
 */
export interface KubeLocalSubjectAccessReviewV1Beta1Props {
    /**
     * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
     *
     * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview#spec
     */
    readonly spec: SubjectAccessReviewSpec;
}
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview
 */
export interface KubeSelfSubjectAccessReviewV1Beta1Props {
    /**
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.  user and groups must be empty
     *
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview#spec
     */
    readonly spec: SelfSubjectAccessReviewSpec;
}
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview
 */
export interface KubeSelfSubjectRulesReviewV1Beta1Props {
    /**
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated.
     *
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview#spec
     */
    readonly spec: SelfSubjectRulesReviewSpec;
}
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview
 */
export interface KubeSubjectAccessReviewV1Beta1Props {
    /**
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec holds information about the request being evaluated
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview#spec
     */
    readonly spec: SubjectAccessReviewSpec;
}
/**
 * configuration of a horizontal pod autoscaler.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
 */
export interface KubeHorizontalPodAutoscalerProps {
    /**
     * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler#spec
     */
    readonly spec?: HorizontalPodAutoscalerSpec;
}
/**
 * list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList
 */
export interface KubeHorizontalPodAutoscalerListProps {
    /**
     * list of horizontal pod autoscaler objects.
     *
     * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList#items
     */
    readonly items: KubeHorizontalPodAutoscalerProps[];
    /**
     * Standard list metadata.
     *
     * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.autoscaling.v1.Scale
 */
export interface KubeScaleProps {
    /**
     * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
     *
     * @schema io.k8s.api.autoscaling.v1.Scale#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.autoscaling.v1.Scale#spec
     */
    readonly spec?: ScaleSpec;
}
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler
 */
export interface KubeHorizontalPodAutoscalerV2Beta1Props {
    /**
     * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler#spec
     */
    readonly spec?: HorizontalPodAutoscalerSpec;
}
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList
 */
export interface KubeHorizontalPodAutoscalerListV2Beta1Props {
    /**
     * items is the list of horizontal pod autoscaler objects.
     *
     * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList#items
     */
    readonly items: KubeHorizontalPodAutoscalerV2Beta1Props[];
    /**
     * metadata is the standard list metadata.
     *
     * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler
 */
export interface KubeHorizontalPodAutoscalerV2Beta2Props {
    /**
     * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler#spec
     */
    readonly spec?: HorizontalPodAutoscalerSpec;
}
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList
 */
export interface KubeHorizontalPodAutoscalerListV2Beta2Props {
    /**
     * items is the list of horizontal pod autoscaler objects.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList#items
     */
    readonly items: KubeHorizontalPodAutoscalerV2Beta2Props[];
    /**
     * metadata is the standard list metadata.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Job represents the configuration of a single job.
 *
 * @schema io.k8s.api.batch.v1.Job
 */
export interface KubeJobProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v1.Job#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.batch.v1.Job#spec
     */
    readonly spec?: JobSpec;
}
/**
 * JobList is a collection of jobs.
 *
 * @schema io.k8s.api.batch.v1.JobList
 */
export interface KubeJobListProps {
    /**
     * items is the list of Jobs.
     *
     * @schema io.k8s.api.batch.v1.JobList#items
     */
    readonly items: KubeJobProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v1.JobList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJob
 */
export interface KubeCronJobV1Beta1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v1beta1.CronJob#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.batch.v1beta1.CronJob#spec
     */
    readonly spec?: CronJobSpec;
}
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJobList
 */
export interface KubeCronJobListV1Beta1Props {
    /**
     * items is the list of CronJobs.
     *
     * @schema io.k8s.api.batch.v1beta1.CronJobList#items
     */
    readonly items: KubeCronJobV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v1beta1.CronJobList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJob
 */
export interface KubeCronJobV2Alpha1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJob#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJob#spec
     */
    readonly spec?: CronJobSpec;
}
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJobList
 */
export interface KubeCronJobListV2Alpha1Props {
    /**
     * items is the list of CronJobs.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobList#items
     */
    readonly items: KubeCronJobV2Alpha1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Describes a certificate signing request
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest
 */
export interface KubeCertificateSigningRequestV1Beta1Props {
    /**
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The certificate request itself and any additional information.
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest#spec
     */
    readonly spec?: CertificateSigningRequestSpec;
}
/**
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList
 */
export interface KubeCertificateSigningRequestListV1Beta1Props {
    /**
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList#items
     */
    readonly items: KubeCertificateSigningRequestV1Beta1Props[];
    /**
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1.Lease
 */
export interface KubeLeaseProps {
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.coordination.v1.Lease#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.coordination.v1.Lease#spec
     */
    readonly spec?: LeaseSpec;
}
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1.LeaseList
 */
export interface KubeLeaseListProps {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.coordination.v1.LeaseList#items
     */
    readonly items: KubeLeaseProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.coordination.v1.LeaseList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1beta1.Lease
 */
export interface KubeLeaseV1Beta1Props {
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.coordination.v1beta1.Lease#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.coordination.v1beta1.Lease#spec
     */
    readonly spec?: LeaseSpec;
}
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1beta1.LeaseList
 */
export interface KubeLeaseListV1Beta1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseList#items
     */
    readonly items: KubeLeaseV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 *
 * @schema io.k8s.api.core.v1.Binding
 */
export interface KubeBindingProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Binding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The target object that you want to bind to the standard object.
     *
     * @schema io.k8s.api.core.v1.Binding#target
     */
    readonly target: ObjectReference;
}
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 *
 * @schema io.k8s.api.core.v1.ComponentStatus
 */
export interface KubeComponentStatusProps {
    /**
     * List of component conditions observed
     *
     * @schema io.k8s.api.core.v1.ComponentStatus#conditions
     */
    readonly conditions?: ComponentCondition[];
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ComponentStatus#metadata
     */
    readonly metadata?: ObjectMeta;
}
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 *
 * @schema io.k8s.api.core.v1.ComponentStatusList
 */
export interface KubeComponentStatusListProps {
    /**
     * List of ComponentStatus objects.
     *
     * @schema io.k8s.api.core.v1.ComponentStatusList#items
     */
    readonly items: KubeComponentStatusProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ComponentStatusList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ConfigMap holds configuration data for pods to consume.
 *
 * @schema io.k8s.api.core.v1.ConfigMap
 */
export interface KubeConfigMapProps {
    /**
     * BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
     *
     * @schema io.k8s.api.core.v1.ConfigMap#binaryData
     */
    readonly binaryData?: {
        [key: string]: string;
    };
    /**
     * Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
     *
     * @schema io.k8s.api.core.v1.ConfigMap#data
     */
    readonly data?: {
        [key: string]: string;
    };
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ConfigMap#metadata
     */
    readonly metadata?: ObjectMeta;
}
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 *
 * @schema io.k8s.api.core.v1.ConfigMapList
 */
export interface KubeConfigMapListProps {
    /**
     * Items is the list of ConfigMaps.
     *
     * @schema io.k8s.api.core.v1.ConfigMapList#items
     */
    readonly items: KubeConfigMapProps[];
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ConfigMapList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ]
 *
 * @schema io.k8s.api.core.v1.Endpoints
 */
export interface KubeEndpointsProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Endpoints#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
     *
     * @schema io.k8s.api.core.v1.Endpoints#subsets
     */
    readonly subsets?: EndpointSubset[];
}
/**
 * EndpointsList is a list of endpoints.
 *
 * @schema io.k8s.api.core.v1.EndpointsList
 */
export interface KubeEndpointsListProps {
    /**
     * List of endpoints.
     *
     * @schema io.k8s.api.core.v1.EndpointsList#items
     */
    readonly items: KubeEndpointsProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.EndpointsList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Event is a report of an event somewhere in the cluster.
 *
 * @schema io.k8s.api.core.v1.Event
 */
export interface KubeEventProps {
    /**
     * What action was taken/failed regarding to the Regarding object.
     *
     * @schema io.k8s.api.core.v1.Event#action
     */
    readonly action?: string;
    /**
     * The number of times this event has occurred.
     *
     * @schema io.k8s.api.core.v1.Event#count
     */
    readonly count?: number;
    /**
     * Time when this Event was first observed.
     *
     * @schema io.k8s.api.core.v1.Event#eventTime
     */
    readonly eventTime?: Date;
    /**
     * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
     *
     * @schema io.k8s.api.core.v1.Event#firstTimestamp
     */
    readonly firstTimestamp?: Date;
    /**
     * The object that this event is about.
     *
     * @schema io.k8s.api.core.v1.Event#involvedObject
     */
    readonly involvedObject: ObjectReference;
    /**
     * The time at which the most recent occurrence of this event was recorded.
     *
     * @schema io.k8s.api.core.v1.Event#lastTimestamp
     */
    readonly lastTimestamp?: Date;
    /**
     * A human-readable description of the status of this operation.
     *
     * @schema io.k8s.api.core.v1.Event#message
     */
    readonly message?: string;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Event#metadata
     */
    readonly metadata: ObjectMeta;
    /**
     * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
     *
     * @schema io.k8s.api.core.v1.Event#reason
     */
    readonly reason?: string;
    /**
     * Optional secondary object for more complex actions.
     *
     * @schema io.k8s.api.core.v1.Event#related
     */
    readonly related?: ObjectReference;
    /**
     * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
     *
     * @schema io.k8s.api.core.v1.Event#reportingComponent
     */
    readonly reportingComponent?: string;
    /**
     * ID of the controller instance, e.g. `kubelet-xyzf`.
     *
     * @schema io.k8s.api.core.v1.Event#reportingInstance
     */
    readonly reportingInstance?: string;
    /**
     * Data about the Event series this event represents or nil if it's a singleton Event.
     *
     * @schema io.k8s.api.core.v1.Event#series
     */
    readonly series?: EventSeries;
    /**
     * The component reporting this event. Should be a short machine understandable string.
     *
     * @schema io.k8s.api.core.v1.Event#source
     */
    readonly source?: EventSource;
    /**
     * Type of this event (Normal, Warning), new types could be added in the future
     *
     * @schema io.k8s.api.core.v1.Event#type
     */
    readonly type?: string;
}
/**
 * EventList is a list of events.
 *
 * @schema io.k8s.api.core.v1.EventList
 */
export interface KubeEventListProps {
    /**
     * List of events
     *
     * @schema io.k8s.api.core.v1.EventList#items
     */
    readonly items: KubeEventProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.EventList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 *
 * @schema io.k8s.api.core.v1.LimitRange
 */
export interface KubeLimitRangeProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.LimitRange#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.LimitRange#spec
     */
    readonly spec?: LimitRangeSpec;
}
/**
 * LimitRangeList is a list of LimitRange items.
 *
 * @schema io.k8s.api.core.v1.LimitRangeList
 */
export interface KubeLimitRangeListProps {
    /**
     * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     *
     * @schema io.k8s.api.core.v1.LimitRangeList#items
     */
    readonly items: KubeLimitRangeProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.LimitRangeList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 *
 * @schema io.k8s.api.core.v1.Namespace
 */
export interface KubeNamespaceProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Namespace#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.Namespace#spec
     */
    readonly spec?: NamespaceSpec;
}
/**
 * NamespaceList is a list of Namespaces.
 *
 * @schema io.k8s.api.core.v1.NamespaceList
 */
export interface KubeNamespaceListProps {
    /**
     * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     *
     * @schema io.k8s.api.core.v1.NamespaceList#items
     */
    readonly items: KubeNamespaceProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.NamespaceList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 *
 * @schema io.k8s.api.core.v1.Node
 */
export interface KubeNodeProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Node#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.Node#spec
     */
    readonly spec?: NodeSpec;
}
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 *
 * @schema io.k8s.api.core.v1.NodeList
 */
export interface KubeNodeListProps {
    /**
     * List of nodes
     *
     * @schema io.k8s.api.core.v1.NodeList#items
     */
    readonly items: KubeNodeProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.NodeList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 *
 * @schema io.k8s.api.core.v1.PersistentVolume
 */
export interface KubePersistentVolumeProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.PersistentVolume#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
     *
     * @schema io.k8s.api.core.v1.PersistentVolume#spec
     */
    readonly spec?: PersistentVolumeSpec;
}
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaim
 */
export interface KubePersistentVolumeClaimProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaim#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaim#spec
     */
    readonly spec?: PersistentVolumeClaimSpec;
}
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimList
 */
export interface KubePersistentVolumeClaimListProps {
    /**
     * A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimList#items
     */
    readonly items: KubePersistentVolumeClaimProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeList
 */
export interface KubePersistentVolumeListProps {
    /**
     * List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeList#items
     */
    readonly items: KubePersistentVolumeProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 *
 * @schema io.k8s.api.core.v1.Pod
 */
export interface KubePodProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Pod#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.Pod#spec
     */
    readonly spec?: PodSpec;
}
/**
 * PodList is a list of Pods.
 *
 * @schema io.k8s.api.core.v1.PodList
 */
export interface KubePodListProps {
    /**
     * List of pods. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
     *
     * @schema io.k8s.api.core.v1.PodList#items
     */
    readonly items: KubePodProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.PodList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 *
 * @schema io.k8s.api.core.v1.PodTemplate
 */
export interface KubePodTemplateProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.PodTemplate#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Template defines the pods that will be created from this pod template. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.PodTemplate#template
     */
    readonly template?: PodTemplateSpec;
}
/**
 * PodTemplateList is a list of PodTemplates.
 *
 * @schema io.k8s.api.core.v1.PodTemplateList
 */
export interface KubePodTemplateListProps {
    /**
     * List of pod templates
     *
     * @schema io.k8s.api.core.v1.PodTemplateList#items
     */
    readonly items: KubePodTemplateProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.PodTemplateList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ReplicationController represents the configuration of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationController
 */
export interface KubeReplicationControllerProps {
    /**
     * If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ReplicationController#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.ReplicationController#spec
     */
    readonly spec?: ReplicationControllerSpec;
}
/**
 * ReplicationControllerList is a collection of replication controllers.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerList
 */
export interface KubeReplicationControllerListProps {
    /**
     * List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     *
     * @schema io.k8s.api.core.v1.ReplicationControllerList#items
     */
    readonly items: KubeReplicationControllerProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ReplicationControllerList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 *
 * @schema io.k8s.api.core.v1.ResourceQuota
 */
export interface KubeResourceQuotaProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ResourceQuota#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.ResourceQuota#spec
     */
    readonly spec?: ResourceQuotaSpec;
}
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaList
 */
export interface KubeResourceQuotaListProps {
    /**
     * Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     *
     * @schema io.k8s.api.core.v1.ResourceQuotaList#items
     */
    readonly items: KubeResourceQuotaProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ResourceQuotaList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 *
 * @schema io.k8s.api.core.v1.Secret
 */
export interface KubeSecretProps {
    /**
     * Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
     *
     * @schema io.k8s.api.core.v1.Secret#data
     */
    readonly data?: {
        [key: string]: string;
    };
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Secret#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * stringData allows specifying non-binary secret data in string form. It is provided as a write-only convenience method. All keys and values are merged into the data field on write, overwriting any existing values. It is never output when reading from the API.
     *
     * @schema io.k8s.api.core.v1.Secret#stringData
     */
    readonly stringData?: {
        [key: string]: string;
    };
    /**
     * Used to facilitate programmatic handling of secret data.
     *
     * @schema io.k8s.api.core.v1.Secret#type
     */
    readonly type?: string;
}
/**
 * SecretList is a list of Secret.
 *
 * @schema io.k8s.api.core.v1.SecretList
 */
export interface KubeSecretListProps {
    /**
     * Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
     *
     * @schema io.k8s.api.core.v1.SecretList#items
     */
    readonly items: KubeSecretProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.SecretList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 *
 * @schema io.k8s.api.core.v1.Service
 */
export interface KubeServiceProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.Service#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.Service#spec
     */
    readonly spec?: ServiceSpec;
}
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 *
 * @schema io.k8s.api.core.v1.ServiceAccount
 */
export interface KubeServiceAccountProps {
    /**
     * AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
     *
     * @schema io.k8s.api.core.v1.ServiceAccount#automountServiceAccountToken
     */
    readonly automountServiceAccountToken?: boolean;
    /**
     * ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
     *
     * @schema io.k8s.api.core.v1.ServiceAccount#imagePullSecrets
     */
    readonly imagePullSecrets?: LocalObjectReference[];
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.ServiceAccount#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
     *
     * @schema io.k8s.api.core.v1.ServiceAccount#secrets
     */
    readonly secrets?: ObjectReference[];
}
/**
 * ServiceAccountList is a list of ServiceAccount objects
 *
 * @schema io.k8s.api.core.v1.ServiceAccountList
 */
export interface KubeServiceAccountListProps {
    /**
     * List of ServiceAccounts. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
     *
     * @schema io.k8s.api.core.v1.ServiceAccountList#items
     */
    readonly items: KubeServiceAccountProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ServiceAccountList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ServiceList holds a list of services.
 *
 * @schema io.k8s.api.core.v1.ServiceList
 */
export interface KubeServiceListProps {
    /**
     * List of services
     *
     * @schema io.k8s.api.core.v1.ServiceList#items
     */
    readonly items: KubeServiceProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ServiceList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 *
 * @schema io.k8s.api.events.v1beta1.Event
 */
export interface KubeEventV1Beta1Props {
    /**
     * What action was taken/failed regarding to the regarding object.
     *
     * @schema io.k8s.api.events.v1beta1.Event#action
     */
    readonly action?: string;
    /**
     * Deprecated field assuring backward compatibility with core.v1 Event type
     *
     * @schema io.k8s.api.events.v1beta1.Event#deprecatedCount
     */
    readonly deprecatedCount?: number;
    /**
     * Deprecated field assuring backward compatibility with core.v1 Event type
     *
     * @schema io.k8s.api.events.v1beta1.Event#deprecatedFirstTimestamp
     */
    readonly deprecatedFirstTimestamp?: Date;
    /**
     * Deprecated field assuring backward compatibility with core.v1 Event type
     *
     * @schema io.k8s.api.events.v1beta1.Event#deprecatedLastTimestamp
     */
    readonly deprecatedLastTimestamp?: Date;
    /**
     * Deprecated field assuring backward compatibility with core.v1 Event type
     *
     * @schema io.k8s.api.events.v1beta1.Event#deprecatedSource
     */
    readonly deprecatedSource?: EventSource;
    /**
     * Required. Time when this Event was first observed.
     *
     * @schema io.k8s.api.events.v1beta1.Event#eventTime
     */
    readonly eventTime: Date;
    /**
     * @schema io.k8s.api.events.v1beta1.Event#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
     *
     * @schema io.k8s.api.events.v1beta1.Event#note
     */
    readonly note?: string;
    /**
     * Why the action was taken.
     *
     * @schema io.k8s.api.events.v1beta1.Event#reason
     */
    readonly reason?: string;
    /**
     * The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
     *
     * @schema io.k8s.api.events.v1beta1.Event#regarding
     */
    readonly regarding?: ObjectReference;
    /**
     * Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
     *
     * @schema io.k8s.api.events.v1beta1.Event#related
     */
    readonly related?: ObjectReference;
    /**
     * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
     *
     * @schema io.k8s.api.events.v1beta1.Event#reportingController
     */
    readonly reportingController?: string;
    /**
     * ID of the controller instance, e.g. `kubelet-xyzf`.
     *
     * @schema io.k8s.api.events.v1beta1.Event#reportingInstance
     */
    readonly reportingInstance?: string;
    /**
     * Data about the Event series this event represents or nil if it's a singleton Event.
     *
     * @schema io.k8s.api.events.v1beta1.Event#series
     */
    readonly series?: EventSeries;
    /**
     * Type of this event (Normal, Warning), new types could be added in the future.
     *
     * @schema io.k8s.api.events.v1beta1.Event#type
     */
    readonly type?: string;
}
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1beta1.EventList
 */
export interface KubeEventListV1Beta1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.events.v1beta1.EventList#items
     */
    readonly items: KubeEventV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.events.v1beta1.EventList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSet
 */
export interface KubeDaemonSetV1Beta1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSet#spec
     */
    readonly spec?: DaemonSetSpec;
}
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetList
 */
export interface KubeDaemonSetListV1Beta1Props {
    /**
     * A list of daemon sets.
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetList#items
     */
    readonly items: KubeDaemonSetV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 *
 * @schema io.k8s.api.networking.v1beta1.Ingress
 */
export interface KubeIngressV1Beta1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.networking.v1beta1.Ingress#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.networking.v1beta1.Ingress#spec
     */
    readonly spec?: IngressSpec;
}
/**
 * IngressList is a collection of Ingress.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressList
 */
export interface KubeIngressListV1Beta1Props {
    /**
     * Items is the list of Ingress.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressList#items
     */
    readonly items: KubeIngressV1Beta1Props[];
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.networking.v1beta1.IngressList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy
 */
export interface KubeNetworkPolicyV1Beta1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior for this NetworkPolicy.
     *
     * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy#spec
     */
    readonly spec?: NetworkPolicySpec;
}
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList
 */
export interface KubeNetworkPolicyListV1Beta1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList#items
     */
    readonly items: KubeNetworkPolicyV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy
 */
export interface KubePodSecurityPolicyV1Beta1Props {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * spec defines the policy enforced.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy#spec
     */
    readonly spec?: PodSecurityPolicySpec;
}
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList
 */
export interface KubePodSecurityPolicyListV1Beta1Props {
    /**
     * items is a list of schema objects.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList#items
     */
    readonly items: KubePodSecurityPolicyV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSet
 */
export interface KubeReplicaSetV1Beta1Props {
    /**
     * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSet#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSet#spec
     */
    readonly spec?: ReplicaSetSpec;
}
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList
 */
export interface KubeReplicaSetListV1Beta1Props {
    /**
     * List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList#items
     */
    readonly items: KubeReplicaSetV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicy
 */
export interface KubeNetworkPolicyProps {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicy#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior for this NetworkPolicy.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicy#spec
     */
    readonly spec?: NetworkPolicySpec;
}
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyList
 */
export interface KubeNetworkPolicyListProps {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyList#items
     */
    readonly items: KubeNetworkPolicyProps[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClass
 */
export interface KubeRuntimeClassV1Alpha1Props {
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.node.v1alpha1.RuntimeClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the RuntimeClass More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.node.v1alpha1.RuntimeClass#spec
     */
    readonly spec: RuntimeClassSpec;
}
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassList
 */
export interface KubeRuntimeClassListV1Alpha1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.node.v1alpha1.RuntimeClassList#items
     */
    readonly items: KubeRuntimeClassV1Alpha1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.node.v1alpha1.RuntimeClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClass
 */
export interface KubeRuntimeClassV1Beta1Props {
    /**
     * Handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must conform to the DNS Label (RFC 1123) requirements, and is immutable.
     *
     * @schema io.k8s.api.node.v1beta1.RuntimeClass#handler
     */
    readonly handler: string;
    /**
     * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.node.v1beta1.RuntimeClass#metadata
     */
    readonly metadata?: ObjectMeta;
}
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClassList
 */
export interface KubeRuntimeClassListV1Beta1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.node.v1beta1.RuntimeClassList#items
     */
    readonly items: KubeRuntimeClassV1Beta1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.node.v1beta1.RuntimeClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 *
 * @schema io.k8s.api.policy.v1beta1.Eviction
 */
export interface KubeEvictionV1Beta1Props {
    /**
     * DeleteOptions may be provided
     *
     * @schema io.k8s.api.policy.v1beta1.Eviction#deleteOptions
     */
    readonly deleteOptions?: DeleteOptions;
    /**
     * ObjectMeta describes the pod that is being evicted.
     *
     * @schema io.k8s.api.policy.v1beta1.Eviction#metadata
     */
    readonly metadata?: ObjectMeta;
}
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget
 */
export interface KubePodDisruptionBudgetV1Beta1Props {
    /**
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the PodDisruptionBudget.
     *
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget#spec
     */
    readonly spec?: PodDisruptionBudgetSpec;
}
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList
 */
export interface KubePodDisruptionBudgetListV1Beta1Props {
    /**
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList#items
     */
    readonly items: KubePodDisruptionBudgetV1Beta1Props[];
    /**
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRole
 */
export interface KubeClusterRoleProps {
    /**
     * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRole#aggregationRule
     */
    readonly aggregationRule?: AggregationRule;
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRole#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     *
     * @schema io.k8s.api.rbac.v1.ClusterRole#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBinding
 */
export interface KubeClusterRoleBindingProps {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList
 */
export interface KubeClusterRoleBindingListProps {
    /**
     * Items is a list of ClusterRoleBindings
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList#items
     */
    readonly items: KubeClusterRoleBindingProps[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleList
 */
export interface KubeClusterRoleListProps {
    /**
     * Items is a list of ClusterRoles
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleList#items
     */
    readonly items: KubeClusterRoleProps[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.ClusterRoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.Role
 */
export interface KubeRoleProps {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.Role#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this Role
     *
     * @schema io.k8s.api.rbac.v1.Role#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1.RoleBinding
 */
export interface KubeRoleBindingProps {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.RoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1.RoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1.RoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1.RoleBindingList
 */
export interface KubeRoleBindingListProps {
    /**
     * Items is a list of RoleBindings
     *
     * @schema io.k8s.api.rbac.v1.RoleBindingList#items
     */
    readonly items: KubeRoleBindingProps[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.RoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1.RoleList
 */
export interface KubeRoleListProps {
    /**
     * Items is a list of Roles
     *
     * @schema io.k8s.api.rbac.v1.RoleList#items
     */
    readonly items: KubeRoleProps[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1.RoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRole
 */
export interface KubeClusterRoleV1Alpha1Props {
    /**
     * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRole#aggregationRule
     */
    readonly aggregationRule?: AggregationRule;
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRole#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRole#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding
 */
export interface KubeClusterRoleBindingV1Alpha1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList
 */
export interface KubeClusterRoleBindingListV1Alpha1Props {
    /**
     * Items is a list of ClusterRoleBindings
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList#items
     */
    readonly items: KubeClusterRoleBindingV1Alpha1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList
 */
export interface KubeClusterRoleListV1Alpha1Props {
    /**
     * Items is a list of ClusterRoles
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList#items
     */
    readonly items: KubeClusterRoleV1Alpha1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.Role
 */
export interface KubeRoleV1Alpha1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.Role#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this Role
     *
     * @schema io.k8s.api.rbac.v1alpha1.Role#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBinding
 */
export interface KubeRoleBindingV1Alpha1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList
 */
export interface KubeRoleBindingListV1Alpha1Props {
    /**
     * Items is a list of RoleBindings
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList#items
     */
    readonly items: KubeRoleBindingV1Alpha1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleList
 */
export interface KubeRoleListV1Alpha1Props {
    /**
     * Items is a list of Roles
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleList#items
     */
    readonly items: KubeRoleV1Alpha1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1alpha1.RoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRole
 */
export interface KubeClusterRoleV1Beta1Props {
    /**
     * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRole#aggregationRule
     */
    readonly aggregationRule?: AggregationRule;
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRole#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRole#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding
 */
export interface KubeClusterRoleBindingV1Beta1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList
 */
export interface KubeClusterRoleBindingListV1Beta1Props {
    /**
     * Items is a list of ClusterRoleBindings
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList#items
     */
    readonly items: KubeClusterRoleBindingV1Beta1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList
 */
export interface KubeClusterRoleListV1Beta1Props {
    /**
     * Items is a list of ClusterRoles
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList#items
     */
    readonly items: KubeClusterRoleV1Beta1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.Role
 */
export interface KubeRoleV1Beta1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.Role#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this Role
     *
     * @schema io.k8s.api.rbac.v1beta1.Role#rules
     */
    readonly rules?: PolicyRule[];
}
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBinding
 */
export interface KubeRoleBindingV1Beta1Props {
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleBinding#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleBinding#roleRef
     */
    readonly roleRef: RoleRef;
    /**
     * Subjects holds references to the objects the role applies to.
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleBinding#subjects
     */
    readonly subjects?: Subject[];
}
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBindingList
 */
export interface KubeRoleBindingListV1Beta1Props {
    /**
     * Items is a list of RoleBindings
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleBindingList#items
     */
    readonly items: KubeRoleBindingV1Beta1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleBindingList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleList
 */
export interface KubeRoleListV1Beta1Props {
    /**
     * Items is a list of Roles
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleList#items
     */
    readonly items: KubeRoleV1Beta1Props[];
    /**
     * Standard object's metadata.
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClass
 */
export interface KubePriorityClassProps {
    /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClass#description
     */
    readonly description?: string;
    /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClass#globalDefault
     */
    readonly globalDefault?: boolean;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     *
     * @default PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     * @schema io.k8s.api.scheduling.v1.PriorityClass#preemptionPolicy
     */
    readonly preemptionPolicy?: string;
    /**
     * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClass#value
     */
    readonly value: number;
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClassList
 */
export interface KubePriorityClassListProps {
    /**
     * items is the list of PriorityClasses
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClassList#items
     */
    readonly items: KubePriorityClassProps[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1.PriorityClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass
 */
export interface KubePriorityClassV1Alpha1Props {
    /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass#description
     */
    readonly description?: string;
    /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass#globalDefault
     */
    readonly globalDefault?: boolean;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     *
     * @default PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass#preemptionPolicy
     */
    readonly preemptionPolicy?: string;
    /**
     * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass#value
     */
    readonly value: number;
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList
 */
export interface KubePriorityClassListV1Alpha1Props {
    /**
     * items is the list of PriorityClasses
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList#items
     */
    readonly items: KubePriorityClassV1Alpha1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClass
 */
export interface KubePriorityClassV1Beta1Props {
    /**
     * description is an arbitrary string that usually provides guidelines on when this priority class should be used.
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClass#description
     */
    readonly description?: string;
    /**
     * globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClass#globalDefault
     */
    readonly globalDefault?: boolean;
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     *
     * @default PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClass#preemptionPolicy
     */
    readonly preemptionPolicy?: string;
    /**
     * The value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClass#value
     */
    readonly value: number;
}
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList
 */
export interface KubePriorityClassListV1Beta1Props {
    /**
     * items is the list of PriorityClasses
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList#items
     */
    readonly items: KubePriorityClassV1Beta1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPreset
 */
export interface KubePodPresetV1Alpha1Props {
    /**
     * @schema io.k8s.api.settings.v1alpha1.PodPreset#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * @schema io.k8s.api.settings.v1alpha1.PodPreset#spec
     */
    readonly spec?: PodPresetSpec;
}
/**
 * PodPresetList is a list of PodPreset objects.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPresetList
 */
export interface KubePodPresetListV1Alpha1Props {
    /**
     * Items is a list of schema objects.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetList#items
     */
    readonly items: KubePodPresetV1Alpha1Props[];
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1.StorageClass
 */
export interface KubeStorageClassProps {
    /**
     * AllowVolumeExpansion shows whether the storage class allow volume expand
     *
     * @schema io.k8s.api.storage.v1.StorageClass#allowVolumeExpansion
     */
    readonly allowVolumeExpansion?: boolean;
    /**
     * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
     *
     * @schema io.k8s.api.storage.v1.StorageClass#allowedTopologies
     */
    readonly allowedTopologies?: TopologySelectorTerm[];
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1.StorageClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
     *
     * @schema io.k8s.api.storage.v1.StorageClass#mountOptions
     */
    readonly mountOptions?: string[];
    /**
     * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
     *
     * @schema io.k8s.api.storage.v1.StorageClass#parameters
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Provisioner indicates the type of the provisioner.
     *
     * @schema io.k8s.api.storage.v1.StorageClass#provisioner
     */
    readonly provisioner: string;
    /**
     * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
     *
     * @default Delete.
     * @schema io.k8s.api.storage.v1.StorageClass#reclaimPolicy
     */
    readonly reclaimPolicy?: string;
    /**
     * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
     *
     * @schema io.k8s.api.storage.v1.StorageClass#volumeBindingMode
     */
    readonly volumeBindingMode?: string;
}
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1.StorageClassList
 */
export interface KubeStorageClassListProps {
    /**
     * Items is the list of StorageClasses
     *
     * @schema io.k8s.api.storage.v1.StorageClassList#items
     */
    readonly items: KubeStorageClassProps[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1.StorageClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachment
 */
export interface KubeVolumeAttachmentProps {
    /**
     * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1.VolumeAttachment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
     *
     * @schema io.k8s.api.storage.v1.VolumeAttachment#spec
     */
    readonly spec: VolumeAttachmentSpec;
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachmentList
 */
export interface KubeVolumeAttachmentListProps {
    /**
     * Items is the list of VolumeAttachments
     *
     * @schema io.k8s.api.storage.v1.VolumeAttachmentList#items
     */
    readonly items: KubeVolumeAttachmentProps[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1.VolumeAttachmentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment
 */
export interface KubeVolumeAttachmentV1Alpha1Props {
    /**
     * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
     *
     * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment#spec
     */
    readonly spec: VolumeAttachmentSpec;
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList
 */
export interface KubeVolumeAttachmentListV1Alpha1Props {
    /**
     * Items is the list of VolumeAttachments
     *
     * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList#items
     */
    readonly items: KubeVolumeAttachmentV1Alpha1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriver
 */
export interface KubeCsiDriverV1Beta1Props {
    /**
     * Standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.CSIDriver#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the CSI Driver.
     *
     * @schema io.k8s.api.storage.v1beta1.CSIDriver#spec
     */
    readonly spec: CsiDriverSpec;
}
/**
 * CSIDriverList is a collection of CSIDriver objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriverList
 */
export interface KubeCsiDriverListV1Beta1Props {
    /**
     * items is the list of CSIDriver
     *
     * @schema io.k8s.api.storage.v1beta1.CSIDriverList#items
     */
    readonly items: KubeCsiDriverV1Beta1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.CSIDriverList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINode
 */
export interface KubeCsiNodeV1Beta1Props {
    /**
     * metadata.name must be the Kubernetes node name.
     *
     * @schema io.k8s.api.storage.v1beta1.CSINode#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * spec is the specification of CSINode
     *
     * @schema io.k8s.api.storage.v1beta1.CSINode#spec
     */
    readonly spec: CsiNodeSpec;
}
/**
 * CSINodeList is a collection of CSINode objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeList
 */
export interface KubeCsiNodeListV1Beta1Props {
    /**
     * items is the list of CSINode
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeList#items
     */
    readonly items: KubeCsiNodeV1Beta1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClass
 */
export interface KubeStorageClassV1Beta1Props {
    /**
     * AllowVolumeExpansion shows whether the storage class allow volume expand
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#allowVolumeExpansion
     */
    readonly allowVolumeExpansion?: boolean;
    /**
     * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#allowedTopologies
     */
    readonly allowedTopologies?: TopologySelectorTerm[];
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#mountOptions
     */
    readonly mountOptions?: string[];
    /**
     * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#parameters
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Provisioner indicates the type of the provisioner.
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#provisioner
     */
    readonly provisioner: string;
    /**
     * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
     *
     * @default Delete.
     * @schema io.k8s.api.storage.v1beta1.StorageClass#reclaimPolicy
     */
    readonly reclaimPolicy?: string;
    /**
     * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClass#volumeBindingMode
     */
    readonly volumeBindingMode?: string;
}
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClassList
 */
export interface KubeStorageClassListV1Beta1Props {
    /**
     * Items is the list of StorageClasses
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClassList#items
     */
    readonly items: KubeStorageClassV1Beta1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.StorageClassList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachment
 */
export interface KubeVolumeAttachmentV1Beta1Props {
    /**
     * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachment#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachment#spec
     */
    readonly spec: VolumeAttachmentSpec;
}
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList
 */
export interface KubeVolumeAttachmentListV1Beta1Props {
    /**
     * Items is the list of VolumeAttachments
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList#items
     */
    readonly items: KubeVolumeAttachmentV1Beta1Props[];
    /**
     * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition
 */
export interface KubeCustomResourceDefinitionV1Beta1Props {
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec describes how the user wants the resources to appear
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition#spec
     */
    readonly spec: CustomResourceDefinitionSpec;
}
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList
 */
export interface KubeCustomResourceDefinitionListV1Beta1Props {
    /**
     * Items individual CustomResourceDefinitions
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList#items
     */
    readonly items: KubeCustomResourceDefinitionV1Beta1Props[];
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * Status is a return value for calls that don't return other objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status
 */
export interface KubeStatusProps {
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status#code
     */
    readonly code?: number;
    /**
     * Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status#details
     */
    readonly details?: StatusDetails;
    /**
     * A human-readable description of the status of this operation.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status#message
     */
    readonly message?: string;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status#metadata
     */
    readonly metadata?: ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status#reason
     */
    readonly reason?: string;
}
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
 */
export interface KubeApiServiceProps {
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec contains information for locating and communicating with a server
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService#spec
     */
    readonly spec?: ApiServiceSpec;
}
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList
 */
export interface KubeApiServiceListProps {
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList#items
     */
    readonly items: KubeApiServiceProps[];
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService
 */
export interface KubeApiServiceV1Beta1Props {
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Spec contains information for locating and communicating with a server
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService#spec
     */
    readonly spec?: ApiServiceSpec;
}
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList
 */
export interface KubeApiServiceListV1Beta1Props {
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList#items
     */
    readonly items: KubeApiServiceV1Beta1Props[];
    /**
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList#metadata
     */
    readonly metadata?: ListMeta;
}
/**
 * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
 */
export interface ObjectMeta {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#annotations
     */
    readonly annotations?: {
        [key: string]: string;
    };
    /**
     * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#clusterName
     */
    readonly clusterName?: string;
    /**
     * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.
  
  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#creationTimestamp
     */
    readonly creationTimestamp?: Date;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#deletionGracePeriodSeconds
     */
    readonly deletionGracePeriodSeconds?: number;
    /**
     * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.
  
  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#deletionTimestamp
     */
    readonly deletionTimestamp?: Date;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#finalizers
     */
    readonly finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
  
  If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).
  
  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#generateName
     */
    readonly generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#generation
     */
    readonly generation?: number;
    /**
     * An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.
  
  When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.
  
  DEPRECATED - initializers are an alpha field and will be removed in v1.15.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#initializers
     */
    readonly initializers?: Initializers;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#labels
     */
    readonly labels?: {
        [key: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
  
  This field is alpha and can be changed or removed without notice.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#managedFields
     */
    readonly managedFields?: ManagedFieldsEntry[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#name
     */
    readonly name?: string;
    /**
     * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
  
  Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#namespace
     */
    readonly namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#ownerReferences
     */
    readonly ownerReferences?: OwnerReference[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
  
  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#resourceVersion
     */
    readonly resourceVersion?: string;
    /**
     * SelfLink is a URL representing this object. Populated by the system. Read-only.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#selfLink
     */
    readonly selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
  
  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#uid
     */
    readonly uid?: string;
}
/**
 * MutatingWebhook describes an admission webhook and the resources and operations it applies to.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook
 */
export interface MutatingWebhook {
    /**
     * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`.
     *
     * @default v1beta1']`.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#admissionReviewVersions
     */
    readonly admissionReviewVersions?: string[];
    /**
     * ClientConfig defines how to communicate with the hook. Required
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#clientConfig
     */
    readonly clientConfig: WebhookClientConfig;
    /**
     * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
     *
     * @default Ignore.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#failurePolicy
     */
    readonly failurePolicy?: string;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
  
  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
  
  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
  
  Defaults to "Exact"
     *
     * @default Exact"
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#matchPolicy
     */
    readonly matchPolicy?: string;
    /**
     * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#name
     */
    readonly name: string;
    /**
     * NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.
  
  For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "runlevel",
        "operator": "NotIn",
        "values": [
          "0",
          "1"
        ]
      }
    ]
  }
  
  If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "environment",
        "operator": "In",
        "values": [
          "prod",
          "staging"
        ]
      }
    ]
  }
  
  See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.
  
  Default to the empty LabelSelector, which matches everything.
     *
     * @default the empty LabelSelector, which matches everything.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#namespaceSelector
     */
    readonly namespaceSelector?: LabelSelector;
    /**
     * ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.
     *
     * @default the empty LabelSelector, which matches everything.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#objectSelector
     */
    readonly objectSelector?: LabelSelector;
    /**
     * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".
  
  Never: the webhook will not be called more than once in a single admission evaluation.
  
  IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.
  
  Defaults to "Never".
     *
     * @default Never".
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#reinvocationPolicy
     */
    readonly reinvocationPolicy?: string;
    /**
     * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#rules
     */
    readonly rules?: RuleWithOperations[];
    /**
     * SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown.
     *
     * @default Unknown.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#sideEffects
     */
    readonly sideEffects?: string;
    /**
     * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds.
     *
     * @default 30 seconds.
     * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhook#timeoutSeconds
     */
    readonly timeoutSeconds?: number;
}
/**
 * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
 */
export interface ListMeta {
    /**
     * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#continue
     */
    readonly continue?: string;
    /**
     * remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
  
  This field is alpha and can be changed or removed without notice.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#remainingItemCount
     */
    readonly remainingItemCount?: number;
    /**
     * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#resourceVersion
     */
    readonly resourceVersion?: string;
    /**
     * selfLink is a URL representing this object. Populated by the system. Read-only.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#selfLink
     */
    readonly selfLink?: string;
}
/**
 * ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook
 */
export interface ValidatingWebhook {
    /**
     * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`.
     *
     * @default v1beta1']`.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#admissionReviewVersions
     */
    readonly admissionReviewVersions?: string[];
    /**
     * ClientConfig defines how to communicate with the hook. Required
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#clientConfig
     */
    readonly clientConfig: WebhookClientConfig;
    /**
     * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
     *
     * @default Ignore.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#failurePolicy
     */
    readonly failurePolicy?: string;
    /**
     * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
  
  - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
  
  - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
  
  Defaults to "Exact"
     *
     * @default Exact"
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#matchPolicy
     */
    readonly matchPolicy?: string;
    /**
     * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#name
     */
    readonly name: string;
    /**
     * NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.
  
  For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "runlevel",
        "operator": "NotIn",
        "values": [
          "0",
          "1"
        ]
      }
    ]
  }
  
  If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
    "matchExpressions": [
      {
        "key": "environment",
        "operator": "In",
        "values": [
          "prod",
          "staging"
        ]
      }
    ]
  }
  
  See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.
  
  Default to the empty LabelSelector, which matches everything.
     *
     * @default the empty LabelSelector, which matches everything.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#namespaceSelector
     */
    readonly namespaceSelector?: LabelSelector;
    /**
     * ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.
     *
     * @default the empty LabelSelector, which matches everything.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#objectSelector
     */
    readonly objectSelector?: LabelSelector;
    /**
     * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#rules
     */
    readonly rules?: RuleWithOperations[];
    /**
     * SideEffects states whether this webhookk has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown.
     *
     * @default Unknown.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#sideEffects
     */
    readonly sideEffects?: string;
    /**
     * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds.
     *
     * @default 30 seconds.
     * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#timeoutSeconds
     */
    readonly timeoutSeconds?: number;
}
/**
 * RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package: type MyAPIObject struct {
    runtime.TypeMeta `json:",inline"`
    MyPlugin runtime.Object `json:"myPlugin"`
} type PluginA struct {
    AOption string `json:"aOption"`
}

// External package: type MyAPIObject struct {
    runtime.TypeMeta `json:",inline"`
    MyPlugin runtime.RawExtension `json:"myPlugin"`
} type PluginA struct {
    AOption string `json:"aOption"`
}

// On the wire, the JSON will look something like this: {
    "kind":"MyAPIObject",
    "apiVersion":"v1",
    "myPlugin": {
        "kind":"PluginA",
        "aOption":"foo",
    },
}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
 *
 * @schema io.k8s.apimachinery.pkg.runtime.RawExtension
 */
export interface RawExtension {
    /**
     * Raw is the underlying serialization of this object.
     *
     * @schema io.k8s.apimachinery.pkg.runtime.RawExtension#Raw
     */
    readonly raw?: string;
}
/**
 * DaemonSetSpec is the specification of a daemon set.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec
 */
export interface DaemonSetSpec {
    /**
     * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
     *
     * @default 0 (pod will be considered available as soon as it is ready).
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#minReadySeconds
     */
    readonly minReadySeconds?: number;
    /**
     * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     *
     * @default 10.
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#revisionHistoryLimit
     */
    readonly revisionHistoryLimit?: number;
    /**
     * A label query over pods that are managed by the daemon set. Must match in order to be controlled. If empty, defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#selector
     */
    readonly selector?: LabelSelector;
    /**
     * An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#template
     */
    readonly template: PodTemplateSpec;
    /**
     * DEPRECATED. A sequence number representing a specific generation of the template. Populated by the system. It can be set only during the creation.
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#templateGeneration
     */
    readonly templateGeneration?: number;
    /**
     * An update strategy to replace existing DaemonSet pods with new pods.
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetSpec#updateStrategy
     */
    readonly updateStrategy?: DaemonSetUpdateStrategy;
}
/**
 * DeploymentSpec is the specification of the desired behavior of the Deployment.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentSpec
 */
export interface DeploymentSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     *
     * @default 0 (pod will be considered available as soon as it is ready)
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#minReadySeconds
     */
    readonly minReadySeconds?: number;
    /**
     * Indicates that the deployment is paused.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#paused
     */
    readonly paused?: boolean;
    /**
     * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
     *
     * @default 600s.
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#progressDeadlineSeconds
     */
    readonly progressDeadlineSeconds?: number;
    /**
     * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
     *
     * @default 1.
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#replicas
     */
    readonly replicas?: number;
    /**
     * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
     *
     * @default 10.
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#revisionHistoryLimit
     */
    readonly revisionHistoryLimit?: number;
    /**
     * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#selector
     */
    readonly selector: LabelSelector;
    /**
     * The deployment strategy to use to replace existing pods with new ones.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#strategy
     */
    readonly strategy?: DeploymentStrategy;
    /**
     * Template describes the pods that will be created.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentSpec#template
     */
    readonly template: PodTemplateSpec;
}
/**
 * ReplicaSetSpec is the specification of a ReplicaSet.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSetSpec
 */
export interface ReplicaSetSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     *
     * @default 0 (pod will be considered available as soon as it is ready)
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetSpec#minReadySeconds
     */
    readonly minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
     *
     * @default 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetSpec#replicas
     */
    readonly replicas?: number;
    /**
     * Selector is a label query over pods that should match the replica count. If the selector is empty, it is defaulted to the labels present on the pod template. Label keys and values that must match in order to be controlled by this replica set. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetSpec#selector
     */
    readonly selector?: LabelSelector;
    /**
     * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
     *
     * @schema io.k8s.api.extensions.v1beta1.ReplicaSetSpec#template
     */
    readonly template?: PodTemplateSpec;
}
/**
 * A StatefulSetSpec is the specification of a StatefulSet.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec
 */
export interface StatefulSetSpec {
    /**
     * podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#podManagementPolicy
     */
    readonly podManagementPolicy?: string;
    /**
     * replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#replicas
     */
    readonly replicas?: number;
    /**
     * revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#revisionHistoryLimit
     */
    readonly revisionHistoryLimit?: number;
    /**
     * selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#selector
     */
    readonly selector: LabelSelector;
    /**
     * serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#serviceName
     */
    readonly serviceName: string;
    /**
     * template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#template
     */
    readonly template: PodTemplateSpec;
    /**
     * updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#updateStrategy
     */
    readonly updateStrategy?: StatefulSetUpdateStrategy;
    /**
     * volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetSpec#volumeClaimTemplates
     */
    readonly volumeClaimTemplates?: KubePersistentVolumeClaimProps[];
}
/**
 * ScaleSpec describes the attributes of a scale subresource.
 *
 * @schema io.k8s.api.autoscaling.v1.ScaleSpec
 */
export interface ScaleSpec {
    /**
     * desired number of instances for the scaled object.
     *
     * @schema io.k8s.api.autoscaling.v1.ScaleSpec#replicas
     */
    readonly replicas?: number;
}
/**
 * AuditSinkSpec holds the spec for the audit sink
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec
 */
export interface AuditSinkSpec {
    /**
     * Policy defines the policy for selecting which events should be sent to the webhook required
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec#policy
     */
    readonly policy: Policy;
    /**
     * Webhook to send events required
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec#webhook
     */
    readonly webhook: Webhook;
}
/**
 * TokenReviewSpec is a description of the token authentication request.
 *
 * @schema io.k8s.api.authentication.v1beta1.TokenReviewSpec
 */
export interface TokenReviewSpec {
    /**
     * Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
     *
     * @schema io.k8s.api.authentication.v1beta1.TokenReviewSpec#audiences
     */
    readonly audiences?: string[];
    /**
     * Token is the opaque bearer token.
     *
     * @schema io.k8s.api.authentication.v1beta1.TokenReviewSpec#token
     */
    readonly token?: string;
}
/**
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 *
 * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec
 */
export interface SubjectAccessReviewSpec {
    /**
     * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#extra
     */
    readonly extra?: {
        [key: string]: string[];
    };
    /**
     * Groups is the groups you're testing for.
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#group
     */
    readonly group?: string[];
    /**
     * NonResourceAttributes describes information for a non-resource access request
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#nonResourceAttributes
     */
    readonly nonResourceAttributes?: NonResourceAttributes;
    /**
     * ResourceAuthorizationAttributes describes information for a resource access request
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#resourceAttributes
     */
    readonly resourceAttributes?: ResourceAttributes;
    /**
     * UID information about the requesting user.
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#uid
     */
    readonly uid?: string;
    /**
     * User is the user you're testing for. If you specify "User" but not "Group", then is it interpreted as "What if User were not a member of any groups
     *
     * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#user
     */
    readonly user?: string;
}
/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec
 */
export interface SelfSubjectAccessReviewSpec {
    /**
     * NonResourceAttributes describes information for a non-resource access request
     *
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec#nonResourceAttributes
     */
    readonly nonResourceAttributes?: NonResourceAttributes;
    /**
     * ResourceAuthorizationAttributes describes information for a resource access request
     *
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReviewSpec#resourceAttributes
     */
    readonly resourceAttributes?: ResourceAttributes;
}
/**
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReviewSpec
 */
export interface SelfSubjectRulesReviewSpec {
    /**
     * Namespace to evaluate rules for. Required.
     *
     * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReviewSpec#namespace
     */
    readonly namespace?: string;
}
/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec
 */
export interface HorizontalPodAutoscalerSpec {
    /**
     * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec#maxReplicas
     */
    readonly maxReplicas: number;
    /**
     * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec#metrics
     */
    readonly metrics?: MetricSpec[];
    /**
     * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec#minReplicas
     */
    readonly minReplicas?: number;
    /**
     * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec#scaleTargetRef
     */
    readonly scaleTargetRef: CrossVersionObjectReference;
}
/**
 * JobSpec describes how the job execution will look like.
 *
 * @schema io.k8s.api.batch.v1.JobSpec
 */
export interface JobSpec {
    /**
     * Specifies the duration in seconds relative to the startTime that the job may be active before the system tries to terminate it; value must be positive integer
     *
     * @schema io.k8s.api.batch.v1.JobSpec#activeDeadlineSeconds
     */
    readonly activeDeadlineSeconds?: number;
    /**
     * Specifies the number of retries before marking this job failed. Defaults to 6
     *
     * @default 6
     * @schema io.k8s.api.batch.v1.JobSpec#backoffLimit
     */
    readonly backoffLimit?: number;
    /**
     * Specifies the desired number of successfully finished pods the job should be run with.  Setting to nil means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     *
     * @schema io.k8s.api.batch.v1.JobSpec#completions
     */
    readonly completions?: number;
    /**
     * manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
     *
     * @schema io.k8s.api.batch.v1.JobSpec#manualSelector
     */
    readonly manualSelector?: boolean;
    /**
     * Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     *
     * @schema io.k8s.api.batch.v1.JobSpec#parallelism
     */
    readonly parallelism?: number;
    /**
     * A label query over pods that should match the pod count. Normally, the system sets this field for you. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     *
     * @schema io.k8s.api.batch.v1.JobSpec#selector
     */
    readonly selector?: LabelSelector;
    /**
     * Describes the pod that will be created when executing a job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
     *
     * @schema io.k8s.api.batch.v1.JobSpec#template
     */
    readonly template: PodTemplateSpec;
    /**
     * ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes. This field is alpha-level and is only honored by servers that enable the TTLAfterFinished feature.
     *
     * @schema io.k8s.api.batch.v1.JobSpec#ttlSecondsAfterFinished
     */
    readonly ttlSecondsAfterFinished?: number;
}
/**
 * CronJobSpec describes how the job execution will look like and when it will actually run.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJobSpec
 */
export interface CronJobSpec {
    /**
     * Specifies how to treat concurrent executions of a Job. Valid values are: - "Allow" (default): allows CronJobs to run concurrently; - "Forbid": forbids concurrent runs, skipping next run if previous run hasn't finished yet; - "Replace": cancels currently running job and replaces it with a new one
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#concurrencyPolicy
     */
    readonly concurrencyPolicy?: string;
    /**
     * The number of failed finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#failedJobsHistoryLimit
     */
    readonly failedJobsHistoryLimit?: number;
    /**
     * Specifies the job that will be created when executing a CronJob.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#jobTemplate
     */
    readonly jobTemplate: JobTemplateSpec;
    /**
     * The schedule in Cron format, see https://en.wikipedia.org/wiki/Cron.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#schedule
     */
    readonly schedule: string;
    /**
     * Optional deadline in seconds for starting the job if it misses scheduled time for any reason.  Missed jobs executions will be counted as failed ones.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#startingDeadlineSeconds
     */
    readonly startingDeadlineSeconds?: number;
    /**
     * The number of successful finished jobs to retain. This is a pointer to distinguish between explicit zero and not specified.
     *
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#successfulJobsHistoryLimit
     */
    readonly successfulJobsHistoryLimit?: number;
    /**
     * This flag tells the controller to suspend subsequent executions, it does not apply to already started executions.  Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.batch.v2alpha1.CronJobSpec#suspend
     */
    readonly suspend?: boolean;
}
/**
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec
 */
export interface CertificateSigningRequestSpec {
    /**
     * Extra information about the requesting user. See user.Info interface for details.
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#extra
     */
    readonly extra?: {
        [key: string]: string[];
    };
    /**
     * Group information about the requesting user. See user.Info interface for details.
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#groups
     */
    readonly groups?: string[];
    /**
     * Base64-encoded PKCS#10 CSR data
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#request
     */
    readonly request: string;
    /**
     * UID information about the requesting user. See user.Info interface for details.
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#uid
     */
    readonly uid?: string;
    /**
     * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3
       https://tools.ietf.org/html/rfc5280#section-4.2.1.12
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#usages
     */
    readonly usages?: string[];
    /**
     * Information about the requesting user. See user.Info interface for details.
     *
     * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#username
     */
    readonly username?: string;
}
/**
 * LeaseSpec is a specification of a Lease.
 *
 * @schema io.k8s.api.coordination.v1beta1.LeaseSpec
 */
export interface LeaseSpec {
    /**
     * acquireTime is a time when the current lease was acquired.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseSpec#acquireTime
     */
    readonly acquireTime?: Date;
    /**
     * holderIdentity contains the identity of the holder of a current lease.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseSpec#holderIdentity
     */
    readonly holderIdentity?: string;
    /**
     * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseSpec#leaseDurationSeconds
     */
    readonly leaseDurationSeconds?: number;
    /**
     * leaseTransitions is the number of transitions of a lease between holders.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseSpec#leaseTransitions
     */
    readonly leaseTransitions?: number;
    /**
     * renewTime is a time when the current holder of a lease has last updated the lease.
     *
     * @schema io.k8s.api.coordination.v1beta1.LeaseSpec#renewTime
     */
    readonly renewTime?: Date;
}
/**
 * ObjectReference contains enough information to let you inspect or modify the referred object.
 *
 * @schema io.k8s.api.core.v1.ObjectReference
 */
export interface ObjectReference {
    /**
     * API version of the referent.
     *
     * @schema io.k8s.api.core.v1.ObjectReference#apiVersion
     */
    readonly apiVersion?: string;
    /**
     * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
     *
     * @schema io.k8s.api.core.v1.ObjectReference#fieldPath
     */
    readonly fieldPath?: string;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.api.core.v1.ObjectReference#kind
     */
    readonly kind?: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.ObjectReference#name
     */
    readonly name?: string;
    /**
     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     *
     * @schema io.k8s.api.core.v1.ObjectReference#namespace
     */
    readonly namespace?: string;
    /**
     * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     *
     * @schema io.k8s.api.core.v1.ObjectReference#resourceVersion
     */
    readonly resourceVersion?: string;
    /**
     * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
     *
     * @schema io.k8s.api.core.v1.ObjectReference#uid
     */
    readonly uid?: string;
}
/**
 * Information about the condition of a component.
 *
 * @schema io.k8s.api.core.v1.ComponentCondition
 */
export interface ComponentCondition {
    /**
     * Condition error code for a component. For example, a health check error code.
     *
     * @schema io.k8s.api.core.v1.ComponentCondition#error
     */
    readonly error?: string;
    /**
     * Message about the condition for a component. For example, information about a health check.
     *
     * @schema io.k8s.api.core.v1.ComponentCondition#message
     */
    readonly message?: string;
    /**
     * Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
     *
     * @schema io.k8s.api.core.v1.ComponentCondition#status
     */
    readonly status: string;
    /**
     * Type of condition for a component. Valid value: "Healthy"
     *
     * @schema io.k8s.api.core.v1.ComponentCondition#type
     */
    readonly type: string;
}
/**
 * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:
  {
    Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
    Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
  }
The resulting set of endpoints can be viewed as:
    a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
    b: [ 10.10.1.1:309, 10.10.2.2:309 ]
 *
 * @schema io.k8s.api.core.v1.EndpointSubset
 */
export interface EndpointSubset {
    /**
     * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
     *
     * @schema io.k8s.api.core.v1.EndpointSubset#addresses
     */
    readonly addresses?: EndpointAddress[];
    /**
     * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
     *
     * @schema io.k8s.api.core.v1.EndpointSubset#notReadyAddresses
     */
    readonly notReadyAddresses?: EndpointAddress[];
    /**
     * Port numbers available on the related IP addresses.
     *
     * @schema io.k8s.api.core.v1.EndpointSubset#ports
     */
    readonly ports?: EndpointPort[];
}
/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 *
 * @schema io.k8s.api.events.v1beta1.EventSeries
 */
export interface EventSeries {
    /**
     * Number of occurrences in this series up to the last heartbeat time
     *
     * @schema io.k8s.api.events.v1beta1.EventSeries#count
     */
    readonly count: number;
    /**
     * Time when last Event from the series was seen before last heartbeat.
     *
     * @schema io.k8s.api.events.v1beta1.EventSeries#lastObservedTime
     */
    readonly lastObservedTime: Date;
    /**
     * Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18
     *
     * @schema io.k8s.api.events.v1beta1.EventSeries#state
     */
    readonly state: string;
}
/**
 * EventSource contains information for an event.
 *
 * @schema io.k8s.api.core.v1.EventSource
 */
export interface EventSource {
    /**
     * Component from which the event is generated.
     *
     * @schema io.k8s.api.core.v1.EventSource#component
     */
    readonly component?: string;
    /**
     * Node name on which the event is generated.
     *
     * @schema io.k8s.api.core.v1.EventSource#host
     */
    readonly host?: string;
}
/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 *
 * @schema io.k8s.api.core.v1.LimitRangeSpec
 */
export interface LimitRangeSpec {
    /**
     * Limits is the list of LimitRangeItem objects that are enforced.
     *
     * @schema io.k8s.api.core.v1.LimitRangeSpec#limits
     */
    readonly limits: LimitRangeItem[];
}
/**
 * NamespaceSpec describes the attributes on a Namespace.
 *
 * @schema io.k8s.api.core.v1.NamespaceSpec
 */
export interface NamespaceSpec {
    /**
     * Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
     *
     * @schema io.k8s.api.core.v1.NamespaceSpec#finalizers
     */
    readonly finalizers?: string[];
}
/**
 * NodeSpec describes the attributes that a node is created with.
 *
 * @schema io.k8s.api.core.v1.NodeSpec
 */
export interface NodeSpec {
    /**
     * If specified, the source to get node configuration from The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field
     *
     * @schema io.k8s.api.core.v1.NodeSpec#configSource
     */
    readonly configSource?: NodeConfigSource;
    /**
     * Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
     *
     * @schema io.k8s.api.core.v1.NodeSpec#externalID
     */
    readonly externalID?: string;
    /**
     * PodCIDR represents the pod IP range assigned to the node.
     *
     * @schema io.k8s.api.core.v1.NodeSpec#podCIDR
     */
    readonly podCIDR?: string;
    /**
     * ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
     *
     * @schema io.k8s.api.core.v1.NodeSpec#providerID
     */
    readonly providerID?: string;
    /**
     * If specified, the node's taints.
     *
     * @schema io.k8s.api.core.v1.NodeSpec#taints
     */
    readonly taints?: Taint[];
    /**
     * Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
     *
     * @schema io.k8s.api.core.v1.NodeSpec#unschedulable
     */
    readonly unschedulable?: boolean;
}
/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeSpec
 */
export interface PersistentVolumeSpec {
    /**
     * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#accessModes
     */
    readonly accessModes?: string[];
    /**
     * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#awsElasticBlockStore
     */
    readonly awsElasticBlockStore?: AwsElasticBlockStoreVolumeSource;
    /**
     * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#azureDisk
     */
    readonly azureDisk?: AzureDiskVolumeSource;
    /**
     * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#azureFile
     */
    readonly azureFile?: AzureFilePersistentVolumeSource;
    /**
     * A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#capacity
     */
    readonly capacity?: {
        [key: string]: Quantity;
    };
    /**
     * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#cephfs
     */
    readonly cephfs?: CephFsPersistentVolumeSource;
    /**
     * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#cinder
     */
    readonly cinder?: CinderPersistentVolumeSource;
    /**
     * ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#claimRef
     */
    readonly claimRef?: ObjectReference;
    /**
     * CSI represents storage that is handled by an external CSI driver (Beta feature).
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#csi
     */
    readonly csi?: CsiPersistentVolumeSource;
    /**
     * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#fc
     */
    readonly fc?: FcVolumeSource;
    /**
     * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#flexVolume
     */
    readonly flexVolume?: FlexPersistentVolumeSource;
    /**
     * Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#flocker
     */
    readonly flocker?: FlockerVolumeSource;
    /**
     * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#gcePersistentDisk
     */
    readonly gcePersistentDisk?: GcePersistentDiskVolumeSource;
    /**
     * Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#glusterfs
     */
    readonly glusterfs?: GlusterfsPersistentVolumeSource;
    /**
     * HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#hostPath
     */
    readonly hostPath?: HostPathVolumeSource;
    /**
     * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#iscsi
     */
    readonly iscsi?: IscsiPersistentVolumeSource;
    /**
     * Local represents directly-attached storage with node affinity
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#local
     */
    readonly local?: LocalVolumeSource;
    /**
     * A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#mountOptions
     */
    readonly mountOptions?: string[];
    /**
     * NFS represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#nfs
     */
    readonly nfs?: NfsVolumeSource;
    /**
     * NodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#nodeAffinity
     */
    readonly nodeAffinity?: VolumeNodeAffinity;
    /**
     * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#persistentVolumeReclaimPolicy
     */
    readonly persistentVolumeReclaimPolicy?: string;
    /**
     * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#photonPersistentDisk
     */
    readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
    /**
     * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#portworxVolume
     */
    readonly portworxVolume?: PortworxVolumeSource;
    /**
     * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#quobyte
     */
    readonly quobyte?: QuobyteVolumeSource;
    /**
     * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#rbd
     */
    readonly rbd?: RbdPersistentVolumeSource;
    /**
     * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#scaleIO
     */
    readonly scaleIO?: ScaleIoPersistentVolumeSource;
    /**
     * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#storageClassName
     */
    readonly storageClassName?: string;
    /**
     * StorageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://releases.k8s.io/HEAD/examples/volumes/storageos/README.md
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#storageos
     */
    readonly storageos?: StorageOsPersistentVolumeSource;
    /**
     * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. This is a beta feature.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#volumeMode
     */
    readonly volumeMode?: string;
    /**
     * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeSpec#vsphereVolume
     */
    readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec
 */
export interface PersistentVolumeClaimSpec {
    /**
     * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#accessModes
     */
    readonly accessModes?: string[];
    /**
     * This field requires the VolumeSnapshotDataSource alpha feature gate to be enabled and currently VolumeSnapshot is the only supported data source. If the provisioner can support VolumeSnapshot data source, it will create a new volume and data will be restored to the volume at the same time. If the provisioner does not support VolumeSnapshot data source, volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#dataSource
     */
    readonly dataSource?: TypedLocalObjectReference;
    /**
     * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#resources
     */
    readonly resources?: ResourceRequirements;
    /**
     * A label query over volumes to consider for binding.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#selector
     */
    readonly selector?: LabelSelector;
    /**
     * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#storageClassName
     */
    readonly storageClassName?: string;
    /**
     * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec. This is a beta feature.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#volumeMode
     */
    readonly volumeMode?: string;
    /**
     * VolumeName is the binding reference to the PersistentVolume backing this claim.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimSpec#volumeName
     */
    readonly volumeName?: string;
}
/**
 * PodSpec is a description of a pod.
 *
 * @schema io.k8s.api.core.v1.PodSpec
 */
export interface PodSpec {
    /**
     * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
     *
     * @schema io.k8s.api.core.v1.PodSpec#activeDeadlineSeconds
     */
    readonly activeDeadlineSeconds?: number;
    /**
     * If specified, the pod's scheduling constraints
     *
     * @schema io.k8s.api.core.v1.PodSpec#affinity
     */
    readonly affinity?: Affinity;
    /**
     * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
     *
     * @schema io.k8s.api.core.v1.PodSpec#automountServiceAccountToken
     */
    readonly automountServiceAccountToken?: boolean;
    /**
     * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.PodSpec#containers
     */
    readonly containers: Container[];
    /**
     * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
     *
     * @schema io.k8s.api.core.v1.PodSpec#dnsConfig
     */
    readonly dnsConfig?: PodDnsConfig;
    /**
     * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     *
     * @default ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
     * @schema io.k8s.api.core.v1.PodSpec#dnsPolicy
     */
    readonly dnsPolicy?: string;
    /**
     * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
     *
     * @default true.
     * @schema io.k8s.api.core.v1.PodSpec#enableServiceLinks
     */
    readonly enableServiceLinks?: boolean;
    /**
     * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
     *
     * @schema io.k8s.api.core.v1.PodSpec#hostAliases
     */
    readonly hostAliases?: HostAlias[];
    /**
     * Use the host's ipc namespace. Optional: Default to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.PodSpec#hostIPC
     */
    readonly hostIPC?: boolean;
    /**
     * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.PodSpec#hostNetwork
     */
    readonly hostNetwork?: boolean;
    /**
     * Use the host's pid namespace. Optional: Default to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.PodSpec#hostPID
     */
    readonly hostPID?: boolean;
    /**
     * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
     *
     * @schema io.k8s.api.core.v1.PodSpec#hostname
     */
    readonly hostname?: string;
    /**
     * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
     *
     * @schema io.k8s.api.core.v1.PodSpec#imagePullSecrets
     */
    readonly imagePullSecrets?: LocalObjectReference[];
    /**
     * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, or Liveness probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
     *
     * @schema io.k8s.api.core.v1.PodSpec#initContainers
     */
    readonly initContainers?: Container[];
    /**
     * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
     *
     * @schema io.k8s.api.core.v1.PodSpec#nodeName
     */
    readonly nodeName?: string;
    /**
     * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
     *
     * @schema io.k8s.api.core.v1.PodSpec#nodeSelector
     */
    readonly nodeSelector?: {
        [key: string]: string;
    };
    /**
     * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     *
     * @default PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
     * @schema io.k8s.api.core.v1.PodSpec#preemptionPolicy
     */
    readonly preemptionPolicy?: string;
    /**
     * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
     *
     * @schema io.k8s.api.core.v1.PodSpec#priority
     */
    readonly priority?: number;
    /**
     * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
     *
     * @schema io.k8s.api.core.v1.PodSpec#priorityClassName
     */
    readonly priorityClassName?: string;
    /**
     * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md
     *
     * @schema io.k8s.api.core.v1.PodSpec#readinessGates
     */
    readonly readinessGates?: PodReadinessGate[];
    /**
     * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
     *
     * @default Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
     * @schema io.k8s.api.core.v1.PodSpec#restartPolicy
     */
    readonly restartPolicy?: string;
    /**
     * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is a beta feature as of Kubernetes v1.14.
     *
     * @schema io.k8s.api.core.v1.PodSpec#runtimeClassName
     */
    readonly runtimeClassName?: string;
    /**
     * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
     *
     * @schema io.k8s.api.core.v1.PodSpec#schedulerName
     */
    readonly schedulerName?: string;
    /**
     * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
     *
     * @default empty.  See type description for default values of each field.
     * @schema io.k8s.api.core.v1.PodSpec#securityContext
     */
    readonly securityContext?: PodSecurityContext;
    /**
     * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
     *
     * @schema io.k8s.api.core.v1.PodSpec#serviceAccount
     */
    readonly serviceAccount?: string;
    /**
     * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
     *
     * @schema io.k8s.api.core.v1.PodSpec#serviceAccountName
     */
    readonly serviceAccountName?: string;
    /**
     * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.
     *
     * @default false. This field is beta-level and may be disabled with the PodShareProcessNamespace feature.
     * @schema io.k8s.api.core.v1.PodSpec#shareProcessNamespace
     */
    readonly shareProcessNamespace?: boolean;
    /**
     * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
     *
     * @schema io.k8s.api.core.v1.PodSpec#subdomain
     */
    readonly subdomain?: string;
    /**
     * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
     *
     * @default 30 seconds.
     * @schema io.k8s.api.core.v1.PodSpec#terminationGracePeriodSeconds
     */
    readonly terminationGracePeriodSeconds?: number;
    /**
     * If specified, the pod's tolerations.
     *
     * @schema io.k8s.api.core.v1.PodSpec#tolerations
     */
    readonly tolerations?: Toleration[];
    /**
     * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
     *
     * @schema io.k8s.api.core.v1.PodSpec#volumes
     */
    readonly volumes?: Volume[];
}
/**
 * PodTemplateSpec describes the data a pod should have when created from a template
 *
 * @schema io.k8s.api.core.v1.PodTemplateSpec
 */
export interface PodTemplateSpec {
    /**
     * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.core.v1.PodTemplateSpec#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.core.v1.PodTemplateSpec#spec
     */
    readonly spec?: PodSpec;
}
/**
 * ReplicationControllerSpec is the specification of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerSpec
 */
export interface ReplicationControllerSpec {
    /**
     * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
     *
     * @default 0 (pod will be considered available as soon as it is ready)
     * @schema io.k8s.api.core.v1.ReplicationControllerSpec#minReadySeconds
     */
    readonly minReadySeconds?: number;
    /**
     * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     *
     * @default 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
     * @schema io.k8s.api.core.v1.ReplicationControllerSpec#replicas
     */
    readonly replicas?: number;
    /**
     * Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
     *
     * @schema io.k8s.api.core.v1.ReplicationControllerSpec#selector
     */
    readonly selector?: {
        [key: string]: string;
    };
    /**
     * Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
     *
     * @schema io.k8s.api.core.v1.ReplicationControllerSpec#template
     */
    readonly template?: PodTemplateSpec;
}
/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaSpec
 */
export interface ResourceQuotaSpec {
    /**
     * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
     *
     * @schema io.k8s.api.core.v1.ResourceQuotaSpec#hard
     */
    readonly hard?: {
        [key: string]: Quantity;
    };
    /**
     * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
     *
     * @schema io.k8s.api.core.v1.ResourceQuotaSpec#scopeSelector
     */
    readonly scopeSelector?: ScopeSelector;
    /**
     * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
     *
     * @schema io.k8s.api.core.v1.ResourceQuotaSpec#scopes
     */
    readonly scopes?: string[];
}
/**
 * ServiceSpec describes the attributes that a user creates on a service.
 *
 * @schema io.k8s.api.core.v1.ServiceSpec
 */
export interface ServiceSpec {
    /**
     * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are "None", empty string (""), or a valid IP address. "None" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#clusterIP
     */
    readonly clusterIP?: string;
    /**
     * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#externalIPs
     */
    readonly externalIPs?: string[];
    /**
     * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires Type to be ExternalName.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#externalName
     */
    readonly externalName?: string;
    /**
     * externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. "Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#externalTrafficPolicy
     */
    readonly externalTrafficPolicy?: string;
    /**
     * healthCheckNodePort specifies the healthcheck nodePort for the service. If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only effects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#healthCheckNodePort
     */
    readonly healthCheckNodePort?: number;
    /**
     * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#loadBalancerIP
     */
    readonly loadBalancerIP?: string;
    /**
     * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature." More info: https://kubernetes.io/docs/tasks/access-application-cluster/configure-cloud-provider-firewall/
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#loadBalancerSourceRanges
     */
    readonly loadBalancerSourceRanges?: string[];
    /**
     * The list of ports that are exposed by this service. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#ports
     */
    readonly ports?: ServicePort[];
    /**
     * publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. The default value is false. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate SRV records for its Pods without respect to their readiness for purpose of peer discovery.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#publishNotReadyAddresses
     */
    readonly publishNotReadyAddresses?: boolean;
    /**
     * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#selector
     */
    readonly selector?: {
        [key: string]: string;
    };
    /**
     * Supports "ClientIP" and "None". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     *
     * @default None. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
     * @schema io.k8s.api.core.v1.ServiceSpec#sessionAffinity
     */
    readonly sessionAffinity?: string;
    /**
     * sessionAffinityConfig contains the configurations of session affinity.
     *
     * @schema io.k8s.api.core.v1.ServiceSpec#sessionAffinityConfig
     */
    readonly sessionAffinityConfig?: SessionAffinityConfig;
    /**
     * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
     *
     * @default ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. "ExternalName" maps to the specified externalName. "ClusterIP" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is "None", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. "NodePort" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. "LoadBalancer" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types
     * @schema io.k8s.api.core.v1.ServiceSpec#type
     */
    readonly type?: string;
}
/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 *
 * @schema io.k8s.api.core.v1.LocalObjectReference
 */
export interface LocalObjectReference {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.LocalObjectReference#name
     */
    readonly name?: string;
}
/**
 * IngressSpec describes the Ingress the user wishes to exist.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressSpec
 */
export interface IngressSpec {
    /**
     * A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressSpec#backend
     */
    readonly backend?: IngressBackend;
    /**
     * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressSpec#rules
     */
    readonly rules?: IngressRule[];
    /**
     * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressSpec#tls
     */
    readonly tls?: IngressTls[];
}
/**
 * NetworkPolicySpec provides the specification of a NetworkPolicy
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicySpec
 */
export interface NetworkPolicySpec {
    /**
     * List of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicySpec#egress
     */
    readonly egress?: NetworkPolicyEgressRule[];
    /**
     * List of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicySpec#ingress
     */
    readonly ingress?: NetworkPolicyIngressRule[];
    /**
     * Selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicySpec#podSelector
     */
    readonly podSelector: LabelSelector;
    /**
     * List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicySpec#policyTypes
     */
    readonly policyTypes?: string[];
}
/**
 * PodSecurityPolicySpec defines the policy enforced.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec
 */
export interface PodSecurityPolicySpec {
    /**
     * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowPrivilegeEscalation
     */
    readonly allowPrivilegeEscalation?: boolean;
    /**
     * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedCSIDrivers
     */
    readonly allowedCSIDrivers?: AllowedCsiDriver[];
    /**
     * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedCapabilities
     */
    readonly allowedCapabilities?: string[];
    /**
     * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the "volumes" field.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedFlexVolumes
     */
    readonly allowedFlexVolumes?: AllowedFlexVolume[];
    /**
     * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedHostPaths
     */
    readonly allowedHostPaths?: AllowedHostPath[];
    /**
     * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedProcMountTypes
     */
    readonly allowedProcMountTypes?: string[];
    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.
  
  Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#allowedUnsafeSysctls
     */
    readonly allowedUnsafeSysctls?: string[];
    /**
     * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#defaultAddCapabilities
     */
    readonly defaultAddCapabilities?: string[];
    /**
     * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#defaultAllowPrivilegeEscalation
     */
    readonly defaultAllowPrivilegeEscalation?: boolean;
    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.
  
  Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#forbiddenSysctls
     */
    readonly forbiddenSysctls?: string[];
    /**
     * fsGroup is the strategy that will dictate what fs group is used by the SecurityContext.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#fsGroup
     */
    readonly fsGroup: FsGroupStrategyOptions;
    /**
     * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#hostIPC
     */
    readonly hostIPC?: boolean;
    /**
     * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#hostNetwork
     */
    readonly hostNetwork?: boolean;
    /**
     * hostPID determines if the policy allows the use of HostPID in the pod spec.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#hostPID
     */
    readonly hostPID?: boolean;
    /**
     * hostPorts determines which host port ranges are allowed to be exposed.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#hostPorts
     */
    readonly hostPorts?: HostPortRange[];
    /**
     * privileged determines if a pod can request to be run as privileged.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#privileged
     */
    readonly privileged?: boolean;
    /**
     * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#readOnlyRootFilesystem
     */
    readonly readOnlyRootFilesystem?: boolean;
    /**
     * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#requiredDropCapabilities
     */
    readonly requiredDropCapabilities?: string[];
    /**
     * RunAsGroup is the strategy that will dictate the allowable RunAsGroup values that may be set. If this field is omitted, the pod's RunAsGroup can take any value. This field requires the RunAsGroup feature gate to be enabled.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#runAsGroup
     */
    readonly runAsGroup?: RunAsGroupStrategyOptions;
    /**
     * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#runAsUser
     */
    readonly runAsUser: RunAsUserStrategyOptions;
    /**
     * runtimeClass is the strategy that will dictate the allowable RuntimeClasses for a pod. If this field is omitted, the pod's runtimeClassName field is unrestricted. Enforcement of this field depends on the RuntimeClass feature gate being enabled.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#runtimeClass
     */
    readonly runtimeClass?: RuntimeClassStrategyOptions;
    /**
     * seLinux is the strategy that will dictate the allowable labels that may be set.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#seLinux
     */
    readonly seLinux: SeLinuxStrategyOptions;
    /**
     * supplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#supplementalGroups
     */
    readonly supplementalGroups: SupplementalGroupsStrategyOptions;
    /**
     * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
     *
     * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#volumes
     */
    readonly volumes?: string[];
}
/**
 * RuntimeClassSpec is a specification of a RuntimeClass. It contains parameters that are required to describe the RuntimeClass to the Container Runtime Interface (CRI) implementation, as well as any other components that need to understand how the pod will be run. The RuntimeClassSpec is immutable.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassSpec
 */
export interface RuntimeClassSpec {
    /**
     * RuntimeHandler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The RuntimeHandler must conform to the DNS Label (RFC 1123) requirements and is immutable.
     *
     * @schema io.k8s.api.node.v1alpha1.RuntimeClassSpec#runtimeHandler
     */
    readonly runtimeHandler: string;
}
/**
 * DeleteOptions may be provided when deleting an API object.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions
 */
export interface DeleteOptions {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#apiVersion
     */
    readonly apiVersion?: string;
    /**
     * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#dryRun
     */
    readonly dryRun?: string[];
    /**
     * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     *
     * @default a per object value if not specified. zero means delete immediately.
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#gracePeriodSeconds
     */
    readonly gracePeriodSeconds?: number;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#kind
     */
    readonly kind?: IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind;
    /**
     * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#orphanDependents
     */
    readonly orphanDependents?: boolean;
    /**
     * Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#preconditions
     */
    readonly preconditions?: Preconditions;
    /**
     * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#propagationPolicy
     */
    readonly propagationPolicy?: string;
}
/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec
 */
export interface PodDisruptionBudgetSpec {
    /**
     * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
     *
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec#maxUnavailable
     */
    readonly maxUnavailable?: IntOrString;
    /**
     * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
     *
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec#minAvailable
     */
    readonly minAvailable?: IntOrString;
    /**
     * Label query over pods whose evictions are managed by the disruption budget.
     *
     * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec#selector
     */
    readonly selector?: LabelSelector;
}
/**
 * AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
 *
 * @schema io.k8s.api.rbac.v1beta1.AggregationRule
 */
export interface AggregationRule {
    /**
     * ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
     *
     * @schema io.k8s.api.rbac.v1beta1.AggregationRule#clusterRoleSelectors
     */
    readonly clusterRoleSelectors?: LabelSelector[];
}
/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 *
 * @schema io.k8s.api.rbac.v1beta1.PolicyRule
 */
export interface PolicyRule {
    /**
     * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
     *
     * @schema io.k8s.api.rbac.v1beta1.PolicyRule#apiGroups
     */
    readonly apiGroups?: string[];
    /**
     * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
     *
     * @schema io.k8s.api.rbac.v1beta1.PolicyRule#nonResourceURLs
     */
    readonly nonResourceURLs?: string[];
    /**
     * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
     *
     * @schema io.k8s.api.rbac.v1beta1.PolicyRule#resourceNames
     */
    readonly resourceNames?: string[];
    /**
     * Resources is a list of resources this rule applies to.  '*' represents all resources in the specified apiGroups. '_/foo' represents the subresource 'foo' for all resources in the specified apiGroups.
     *
     * @schema io.k8s.api.rbac.v1beta1.PolicyRule#resources
     */
    readonly resources?: string[];
    /**
     * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
     *
     * @schema io.k8s.api.rbac.v1beta1.PolicyRule#verbs
     */
    readonly verbs: string[];
}
/**
 * RoleRef contains information that points to the role being used
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleRef
 */
export interface RoleRef {
    /**
     * APIGroup is the group for the resource being referenced
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleRef#apiGroup
     */
    readonly apiGroup: string;
    /**
     * Kind is the type of resource being referenced
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleRef#kind
     */
    readonly kind: string;
    /**
     * Name is the name of resource being referenced
     *
     * @schema io.k8s.api.rbac.v1beta1.RoleRef#name
     */
    readonly name: string;
}
/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 *
 * @schema io.k8s.api.rbac.v1beta1.Subject
 */
export interface Subject {
    /**
     * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
     *
     * @default for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
     * @schema io.k8s.api.rbac.v1beta1.Subject#apiGroup
     */
    readonly apiGroup?: string;
    /**
     * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
     *
     * @schema io.k8s.api.rbac.v1beta1.Subject#kind
     */
    readonly kind: string;
    /**
     * Name of the object being referenced.
     *
     * @schema io.k8s.api.rbac.v1beta1.Subject#name
     */
    readonly name: string;
    /**
     * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
     *
     * @schema io.k8s.api.rbac.v1beta1.Subject#namespace
     */
    readonly namespace?: string;
}
/**
 * PodPresetSpec is a description of a pod preset.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec
 */
export interface PodPresetSpec {
    /**
     * Env defines the collection of EnvVar to inject into containers.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec#env
     */
    readonly env?: EnvVar[];
    /**
     * EnvFrom defines the collection of EnvFromSource to inject into containers.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec#envFrom
     */
    readonly envFrom?: EnvFromSource[];
    /**
     * Selector is a label query over a set of resources, in this case pods. Required.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec#selector
     */
    readonly selector?: LabelSelector;
    /**
     * VolumeMounts defines the collection of VolumeMount to inject into containers.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec#volumeMounts
     */
    readonly volumeMounts?: VolumeMount[];
    /**
     * Volumes defines the collection of Volume to inject into the pod.
     *
     * @schema io.k8s.api.settings.v1alpha1.PodPresetSpec#volumes
     */
    readonly volumes?: Volume[];
}
/**
 * A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
 *
 * @schema io.k8s.api.core.v1.TopologySelectorTerm
 */
export interface TopologySelectorTerm {
    /**
     * A list of topology selector requirements by labels.
     *
     * @schema io.k8s.api.core.v1.TopologySelectorTerm#matchLabelExpressions
     */
    readonly matchLabelExpressions?: TopologySelectorLabelRequirement[];
}
/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSpec
 */
export interface VolumeAttachmentSpec {
    /**
     * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSpec#attacher
     */
    readonly attacher: string;
    /**
     * The node that the volume should be attached to.
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSpec#nodeName
     */
    readonly nodeName: string;
    /**
     * Source represents the volume that should be attached.
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSpec#source
     */
    readonly source: VolumeAttachmentSource;
}
/**
 * CSIDriverSpec is the specification of a CSIDriver.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriverSpec
 */
export interface CsiDriverSpec {
    /**
     * attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called.
     *
     * @schema io.k8s.api.storage.v1beta1.CSIDriverSpec#attachRequired
     */
    readonly attachRequired?: boolean;
    /**
     * If set to true, podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID)
     *
     * @default false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID)
     * @schema io.k8s.api.storage.v1beta1.CSIDriverSpec#podInfoOnMount
     */
    readonly podInfoOnMount?: boolean;
}
/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeSpec
 */
export interface CsiNodeSpec {
    /**
     * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeSpec#drivers
     */
    readonly drivers: CsiNodeDriver[];
}
/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec
 */
export interface CustomResourceDefinitionSpec {
    /**
     * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive.
     *
     * @default a created-at column. Optional, the global columns for all versions. Top-level and per-version columns are mutually exclusive.
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#additionalPrinterColumns
     */
    readonly additionalPrinterColumns?: CustomResourceColumnDefinition[];
    /**
     * `conversion` defines conversion settings for the CRD.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#conversion
     */
    readonly conversion?: CustomResourceConversion;
    /**
     * Group is the group this resource belongs in
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#group
     */
    readonly group: string;
    /**
     * Names are the names used to describe this custom resource
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#names
     */
    readonly names: CustomResourceDefinitionNames;
    /**
     * preserveUnknownFields disables pruning of object fields which are not specified in the OpenAPI schema. apiVersion, kind, metadata and known fields inside metadata are always preserved. Defaults to true in v1beta and will default to false in v1.
     *
     * @default true in v1beta and will default to false in v1.
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#preserveUnknownFields
     */
    readonly preserveUnknownFields?: boolean;
    /**
     * Scope indicates whether this resource is cluster or namespace scoped.  Default is namespaced
     *
     * @default namespaced
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#scope
     */
    readonly scope: string;
    /**
     * Subresources describes the subresources for CustomResource Optional, the global subresources for all versions. Top-level and per-version subresources are mutually exclusive.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#subresources
     */
    readonly subresources?: CustomResourceSubresources;
    /**
     * Validation describes the validation methods for CustomResources Optional, the global validation schema for all versions. Top-level and per-version schemas are mutually exclusive.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#validation
     */
    readonly validation?: CustomResourceValidation;
    /**
     * Version is the version this resource belongs in Should be always first item in Versions field if provided. Optional, but at least one of Version or Versions must be set. Deprecated: Please use `Versions`.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#version
     */
    readonly version?: string;
    /**
     * Versions is the list of all supported versions for this resource. If Version field is provided, this field is optional. Validation: All versions must use the same validation schema for now. i.e., top level Validation field is applied to all of these versions. Order: The version name will be used to compute the order. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec#versions
     */
    readonly versions?: CustomResourceDefinitionVersion[];
}
/**
 * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails
 */
export interface StatusDetails {
    /**
     * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#causes
     */
    readonly causes?: StatusCause[];
    /**
     * The group attribute of the resource associated with the status StatusReason.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#group
     */
    readonly group?: string;
    /**
     * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#kind
     */
    readonly kind?: string;
    /**
     * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#name
     */
    readonly name?: string;
    /**
     * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#retryAfterSeconds
     */
    readonly retryAfterSeconds?: number;
    /**
     * UID of the resource. (when there is a single resource which can be described). More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#uid
     */
    readonly uid?: string;
}
/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec
 */
export interface ApiServiceSpec {
    /**
     * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#caBundle
     */
    readonly caBundle?: string;
    /**
     * Group is the API group name this server hosts
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#group
     */
    readonly group?: string;
    /**
     * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#groupPriorityMinimum
     */
    readonly groupPriorityMinimum: number;
    /**
     * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#insecureSkipTLSVerify
     */
    readonly insecureSkipTLSVerify?: boolean;
    /**
     * Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#service
     */
    readonly service: ServiceReference;
    /**
     * Version is the API version this server hosts.  For example, "v1"
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#version
     */
    readonly version?: string;
    /**
     * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
     *
     * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#versionPriority
     */
    readonly versionPriority: number;
}
/**
 * Initializers tracks the progress of initialization.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Initializers
 */
export interface Initializers {
    /**
     * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Initializers#pending
     */
    readonly pending: Initializer[];
    /**
     * If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Initializers#result
     */
    readonly result?: KubeStatusProps;
}
/**
 * ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry
 */
export interface ManagedFieldsEntry {
    /**
     * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#apiVersion
     */
    readonly apiVersion?: string;
    /**
     * Fields identifies a set of fields.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#fields
     */
    readonly fields?: any;
    /**
     * Manager is an identifier of the workflow managing these fields.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#manager
     */
    readonly manager?: string;
    /**
     * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#operation
     */
    readonly operation?: string;
    /**
     * Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply'
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#time
     */
    readonly time?: Date;
}
/**
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference
 */
export interface OwnerReference {
    /**
     * API version of the referent.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#apiVersion
     */
    readonly apiVersion: string;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
     *
     * @default false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#blockOwnerDeletion
     */
    readonly blockOwnerDeletion?: boolean;
    /**
     * If true, this reference points to the managing controller.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#controller
     */
    readonly controller?: boolean;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#kind
     */
    readonly kind: string;
    /**
     * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#name
     */
    readonly name: string;
    /**
     * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#uid
     */
    readonly uid: string;
}
/**
 * WebhookClientConfig contains the information to make a TLS connection with the webhook
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.WebhookClientConfig
 */
export interface WebhookClientConfig {
    /**
     * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.WebhookClientConfig#caBundle
     */
    readonly caBundle?: string;
    /**
     * `service` is a reference to the service for this webhook. Either `service` or `url` must be specified.
  
  If the webhook is running within the cluster, then you should use `service`.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.WebhookClientConfig#service
     */
    readonly service?: ServiceReference;
    /**
     * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.
  
  The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.
  
  Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.
  
  The scheme must be "https"; the URL must begin with "https://".
  
  A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.
  
  Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.WebhookClientConfig#url
     */
    readonly url?: string;
}
/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
 */
export interface LabelSelector {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#matchExpressions
     */
    readonly matchExpressions?: LabelSelectorRequirement[];
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#matchLabels
     */
    readonly matchLabels?: {
        [key: string]: string;
    };
}
/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations
 */
export interface RuleWithOperations {
    /**
     * APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations#apiGroups
     */
    readonly apiGroups?: string[];
    /**
     * APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations#apiVersions
     */
    readonly apiVersions?: string[];
    /**
     * Operations is the operations the admission hook cares about - CREATE, UPDATE, or * for all operations. If '*' is present, the length of the slice must be one. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations#operations
     */
    readonly operations?: string[];
    /**
     * Resources is a list of resources this rule applies to.
  
  For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '_/scale' means all scale subresources. '_/*' means all resources and their subresources.
  
  If wildcard is present, the validation rule will ensure resources do not overlap with each other.
  
  Depending on the enclosing object, subresources might not be allowed. Required.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations#resources
     */
    readonly resources?: string[];
    /**
     * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".
     *
     * @default .
     * @schema io.k8s.api.admissionregistration.v1beta1.RuleWithOperations#scope
     */
    readonly scope?: string;
}
/**
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy
 */
export interface DaemonSetUpdateStrategy {
    /**
     * Rolling update config params. Present only if type = "RollingUpdate".
     *
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy#rollingUpdate
     */
    readonly rollingUpdate?: RollingUpdateDaemonSet;
    /**
     * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete.
     *
     * @default OnDelete.
     * @schema io.k8s.api.extensions.v1beta1.DaemonSetUpdateStrategy#type
     */
    readonly type?: string;
}
/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentStrategy
 */
export interface DeploymentStrategy {
    /**
     * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
     *
     * @schema io.k8s.api.apps.v1beta2.DeploymentStrategy#rollingUpdate
     */
    readonly rollingUpdate?: RollingUpdateDeployment;
    /**
     * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
     *
     * @default RollingUpdate.
     * @schema io.k8s.api.apps.v1beta2.DeploymentStrategy#type
     */
    readonly type?: string;
}
/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetUpdateStrategy
 */
export interface StatefulSetUpdateStrategy {
    /**
     * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
     *
     * @schema io.k8s.api.apps.v1beta2.StatefulSetUpdateStrategy#rollingUpdate
     */
    readonly rollingUpdate?: RollingUpdateStatefulSetStrategy;
    /**
     * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
     *
     * @default RollingUpdate.
     * @schema io.k8s.api.apps.v1beta2.StatefulSetUpdateStrategy#type
     */
    readonly type?: string;
}
/**
 * Policy defines the configuration of how audit events are logged
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.Policy
 */
export interface Policy {
    /**
     * The Level that all requests are recorded at. available options: None, Metadata, Request, RequestResponse required
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.Policy#level
     */
    readonly level: string;
    /**
     * Stages is a list of stages for which events are created.
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.Policy#stages
     */
    readonly stages?: string[];
}
/**
 * Webhook holds the configuration of the webhook
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.Webhook
 */
export interface Webhook {
    /**
     * ClientConfig holds the connection parameters for the webhook required
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.Webhook#clientConfig
     */
    readonly clientConfig: WebhookClientConfig;
    /**
     * Throttle holds the options for throttling the webhook
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.Webhook#throttle
     */
    readonly throttle?: WebhookThrottleConfig;
}
/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 *
 * @schema io.k8s.api.authorization.v1beta1.NonResourceAttributes
 */
export interface NonResourceAttributes {
    /**
     * Path is the URL path of the request
     *
     * @schema io.k8s.api.authorization.v1beta1.NonResourceAttributes#path
     */
    readonly path?: string;
    /**
     * Verb is the standard HTTP verb
     *
     * @schema io.k8s.api.authorization.v1beta1.NonResourceAttributes#verb
     */
    readonly verb?: string;
}
/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 *
 * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes
 */
export interface ResourceAttributes {
    /**
     * Group is the API Group of the Resource.  "*" means all.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#group
     */
    readonly group?: string;
    /**
     * Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#name
     */
    readonly name?: string;
    /**
     * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#namespace
     */
    readonly namespace?: string;
    /**
     * Resource is one of the existing resource types.  "*" means all.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#resource
     */
    readonly resource?: string;
    /**
     * Subresource is one of the existing resource types.  "" means none.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#subresource
     */
    readonly subresource?: string;
    /**
     * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#verb
     */
    readonly verb?: string;
    /**
     * Version is the API Version of the Resource.  "*" means all.
     *
     * @schema io.k8s.api.authorization.v1beta1.ResourceAttributes#version
     */
    readonly version?: string;
}
/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 *
 * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec
 */
export interface MetricSpec {
    /**
     * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec#external
     */
    readonly external?: ExternalMetricSource;
    /**
     * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec#object
     */
    readonly object?: ObjectMetricSource;
    /**
     * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec#pods
     */
    readonly pods?: PodsMetricSource;
    /**
     * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec#resource
     */
    readonly resource?: ResourceMetricSource;
    /**
     * type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricSpec#type
     */
    readonly type: string;
}
/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference
 */
export interface CrossVersionObjectReference {
    /**
     * API version of the referent
     *
     * @schema io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#apiVersion
     */
    readonly apiVersion?: string;
    /**
     * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds"
     *
     * @schema io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#kind
     */
    readonly kind: string;
    /**
     * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
     *
     * @schema io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#name
     */
    readonly name: string;
}
/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 *
 * @schema io.k8s.api.batch.v2alpha1.JobTemplateSpec
 */
export interface JobTemplateSpec {
    /**
     * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     *
     * @schema io.k8s.api.batch.v2alpha1.JobTemplateSpec#metadata
     */
    readonly metadata?: ObjectMeta;
    /**
     * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
     *
     * @schema io.k8s.api.batch.v2alpha1.JobTemplateSpec#spec
     */
    readonly spec?: JobSpec;
}
/**
 * EndpointAddress is a tuple that describes single IP address.
 *
 * @schema io.k8s.api.core.v1.EndpointAddress
 */
export interface EndpointAddress {
    /**
     * The Hostname of this endpoint
     *
     * @schema io.k8s.api.core.v1.EndpointAddress#hostname
     */
    readonly hostname?: string;
    /**
     * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
     *
     * @schema io.k8s.api.core.v1.EndpointAddress#ip
     */
    readonly ip: string;
    /**
     * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
     *
     * @schema io.k8s.api.core.v1.EndpointAddress#nodeName
     */
    readonly nodeName?: string;
    /**
     * Reference to object providing the endpoint.
     *
     * @schema io.k8s.api.core.v1.EndpointAddress#targetRef
     */
    readonly targetRef?: ObjectReference;
}
/**
 * EndpointPort is a tuple that describes a single port.
 *
 * @schema io.k8s.api.core.v1.EndpointPort
 */
export interface EndpointPort {
    /**
     * The name of this port (corresponds to ServicePort.Name). Must be a DNS_LABEL. Optional only if one port is defined.
     *
     * @schema io.k8s.api.core.v1.EndpointPort#name
     */
    readonly name?: string;
    /**
     * The port number of the endpoint.
     *
     * @schema io.k8s.api.core.v1.EndpointPort#port
     */
    readonly port: number;
    /**
     * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
     *
     * @default TCP.
     * @schema io.k8s.api.core.v1.EndpointPort#protocol
     */
    readonly protocol?: string;
}
/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 *
 * @schema io.k8s.api.core.v1.LimitRangeItem
 */
export interface LimitRangeItem {
    /**
     * Default resource requirement limit value by resource name if resource limit is omitted.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#default
     */
    readonly default?: {
        [key: string]: Quantity;
    };
    /**
     * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#defaultRequest
     */
    readonly defaultRequest?: {
        [key: string]: Quantity;
    };
    /**
     * Max usage constraints on this kind by resource name.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#max
     */
    readonly max?: {
        [key: string]: Quantity;
    };
    /**
     * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#maxLimitRequestRatio
     */
    readonly maxLimitRequestRatio?: {
        [key: string]: Quantity;
    };
    /**
     * Min usage constraints on this kind by resource name.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#min
     */
    readonly min?: {
        [key: string]: Quantity;
    };
    /**
     * Type of resource that this limit applies to.
     *
     * @schema io.k8s.api.core.v1.LimitRangeItem#type
     */
    readonly type?: string;
}
/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil.
 *
 * @schema io.k8s.api.core.v1.NodeConfigSource
 */
export interface NodeConfigSource {
    /**
     * ConfigMap is a reference to a Node's ConfigMap
     *
     * @schema io.k8s.api.core.v1.NodeConfigSource#configMap
     */
    readonly configMap?: ConfigMapNodeConfigSource;
}
/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 *
 * @schema io.k8s.api.core.v1.Taint
 */
export interface Taint {
    /**
     * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
     *
     * @schema io.k8s.api.core.v1.Taint#effect
     */
    readonly effect: string;
    /**
     * Required. The taint key to be applied to a node.
     *
     * @schema io.k8s.api.core.v1.Taint#key
     */
    readonly key: string;
    /**
     * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
     *
     * @schema io.k8s.api.core.v1.Taint#timeAdded
     */
    readonly timeAdded?: Date;
    /**
     * Required. The taint value corresponding to the taint key.
     *
     * @schema io.k8s.api.core.v1.Taint#value
     */
    readonly value?: string;
}
/**
 * Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource
 */
export interface AwsElasticBlockStoreVolumeSource {
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     *
     * @schema io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
     *
     * @schema io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#partition
     */
    readonly partition?: number;
    /**
     * Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     *
     * @schema io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     *
     * @schema io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#volumeID
     */
    readonly volumeID: string;
}
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 *
 * @schema io.k8s.api.core.v1.AzureDiskVolumeSource
 */
export interface AzureDiskVolumeSource {
    /**
     * Host Caching mode: None, Read Only, Read Write.
     *
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#cachingMode
     */
    readonly cachingMode?: string;
    /**
     * The Name of the data disk in the blob storage
     *
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#diskName
     */
    readonly diskName: string;
    /**
     * The URI the data disk in the blob storage
     *
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#diskURI
     */
    readonly diskURI: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
     *
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#kind
     */
    readonly kind?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.AzureDiskVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 *
 * @schema io.k8s.api.core.v1.AzureFilePersistentVolumeSource
 */
export interface AzureFilePersistentVolumeSource {
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.AzureFilePersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * the name of secret that contains Azure Storage Account Name and Key
     *
     * @schema io.k8s.api.core.v1.AzureFilePersistentVolumeSource#secretName
     */
    readonly secretName: string;
    /**
     * the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
     *
     * @schema io.k8s.api.core.v1.AzureFilePersistentVolumeSource#secretNamespace
     */
    readonly secretNamespace?: string;
    /**
     * Share Name
     *
     * @schema io.k8s.api.core.v1.AzureFilePersistentVolumeSource#shareName
     */
    readonly shareName: string;
}
/**
 * @schema io.k8s.apimachinery.pkg.api.resource.Quantity
 */
export declare class Quantity {
    static fromString(value: string): Quantity;
    static fromNumber(value: number): Quantity;
    private constructor();
}
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource
 */
export interface CephFsPersistentVolumeSource {
    /**
     * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#monitors
     */
    readonly monitors: string[];
    /**
     * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     *
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#path
     */
    readonly path?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#secretFile
     */
    readonly secretFile?: string;
    /**
     * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#secretRef
     */
    readonly secretRef?: SecretReference;
    /**
     * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSPersistentVolumeSource#user
     */
    readonly user?: string;
}
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.CinderPersistentVolumeSource
 */
export interface CinderPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.CinderPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     * @schema io.k8s.api.core.v1.CinderPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: points to a secret object containing parameters used to connect to OpenStack.
     *
     * @schema io.k8s.api.core.v1.CinderPersistentVolumeSource#secretRef
     */
    readonly secretRef?: SecretReference;
    /**
     * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.CinderPersistentVolumeSource#volumeID
     */
    readonly volumeID: string;
}
/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 *
 * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource
 */
export interface CsiPersistentVolumeSource {
    /**
     * ControllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This is an alpha field and requires enabling ExpandCSIVolumes feature gate. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#controllerExpandSecretRef
     */
    readonly controllerExpandSecretRef?: SecretReference;
    /**
     * ControllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#controllerPublishSecretRef
     */
    readonly controllerPublishSecretRef?: SecretReference;
    /**
     * Driver is the name of the driver to use for this volume. Required.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#driver
     */
    readonly driver: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#nodePublishSecretRef
     */
    readonly nodePublishSecretRef?: SecretReference;
    /**
     * NodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#nodeStageSecretRef
     */
    readonly nodeStageSecretRef?: SecretReference;
    /**
     * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
     *
     * @default false (read/write).
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Attributes of the volume to publish.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#volumeAttributes
     */
    readonly volumeAttributes?: {
        [key: string]: string;
    };
    /**
     * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
     *
     * @schema io.k8s.api.core.v1.CSIPersistentVolumeSource#volumeHandle
     */
    readonly volumeHandle: string;
}
/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.FCVolumeSource
 */
export interface FcVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.FCVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Optional: FC target lun number
     *
     * @schema io.k8s.api.core.v1.FCVolumeSource#lun
     */
    readonly lun?: number;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.FCVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: FC target worldwide names (WWNs)
     *
     * @schema io.k8s.api.core.v1.FCVolumeSource#targetWWNs
     */
    readonly targetWWNs?: string[];
    /**
     * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
     *
     * @schema io.k8s.api.core.v1.FCVolumeSource#wwids
     */
    readonly wwids?: string[];
}
/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 *
 * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource
 */
export interface FlexPersistentVolumeSource {
    /**
     * Driver is the name of the driver to use for this volume.
     *
     * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource#driver
     */
    readonly driver: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
     *
     * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Optional: Extra command options if any.
     *
     * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource#options
     */
    readonly options?: {
        [key: string]: string;
    };
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
     *
     * @schema io.k8s.api.core.v1.FlexPersistentVolumeSource#secretRef
     */
    readonly secretRef?: SecretReference;
}
/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.FlockerVolumeSource
 */
export interface FlockerVolumeSource {
    /**
     * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
     *
     * @schema io.k8s.api.core.v1.FlockerVolumeSource#datasetName
     */
    readonly datasetName?: string;
    /**
     * UUID of the dataset. This is unique identifier of a Flocker dataset
     *
     * @schema io.k8s.api.core.v1.FlockerVolumeSource#datasetUUID
     */
    readonly datasetUUID?: string;
}
/**
 * Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.GCEPersistentDiskVolumeSource
 */
export interface GcePersistentDiskVolumeSource {
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @schema io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @schema io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#partition
     */
    readonly partition?: number;
    /**
     * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @schema io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#pdName
     */
    readonly pdName: string;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @default false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     * @schema io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.GlusterfsPersistentVolumeSource
 */
export interface GlusterfsPersistentVolumeSource {
    /**
     * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @schema io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#endpoints
     */
    readonly endpoints: string;
    /**
     * EndpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @schema io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#endpointsNamespace
     */
    readonly endpointsNamespace?: string;
    /**
     * Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @schema io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#path
     */
    readonly path: string;
    /**
     * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @default false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     * @schema io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.HostPathVolumeSource
 */
export interface HostPathVolumeSource {
    /**
     * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     *
     * @schema io.k8s.api.core.v1.HostPathVolumeSource#path
     */
    readonly path: string;
    /**
     * Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     *
     * @default More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     * @schema io.k8s.api.core.v1.HostPathVolumeSource#type
     */
    readonly type?: string;
}
/**
 * ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource
 */
export interface IscsiPersistentVolumeSource {
    /**
     * whether support iSCSI Discovery CHAP authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#chapAuthDiscovery
     */
    readonly chapAuthDiscovery?: boolean;
    /**
     * whether support iSCSI Session CHAP authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#chapAuthSession
     */
    readonly chapAuthSession?: boolean;
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#initiatorName
     */
    readonly initiatorName?: string;
    /**
     * Target iSCSI Qualified Name.
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#iqn
     */
    readonly iqn: string;
    /**
     * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     *
     * @default default' (tcp).
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#iscsiInterface
     */
    readonly iscsiInterface?: string;
    /**
     * iSCSI Target Lun number.
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#lun
     */
    readonly lun: number;
    /**
     * iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#portals
     */
    readonly portals?: string[];
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * CHAP Secret for iSCSI target and initiator authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#secretRef
     */
    readonly secretRef?: SecretReference;
    /**
     * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     *
     * @schema io.k8s.api.core.v1.ISCSIPersistentVolumeSource#targetPortal
     */
    readonly targetPortal: string;
}
/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 *
 * @schema io.k8s.api.core.v1.LocalVolumeSource
 */
export interface LocalVolumeSource {
    /**
     * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified.
     *
     * @schema io.k8s.api.core.v1.LocalVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
     *
     * @schema io.k8s.api.core.v1.LocalVolumeSource#path
     */
    readonly path: string;
}
/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.NFSVolumeSource
 */
export interface NfsVolumeSource {
    /**
     * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     *
     * @schema io.k8s.api.core.v1.NFSVolumeSource#path
     */
    readonly path: string;
    /**
     * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     *
     * @default false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     * @schema io.k8s.api.core.v1.NFSVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     *
     * @schema io.k8s.api.core.v1.NFSVolumeSource#server
     */
    readonly server: string;
}
/**
 * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
 *
 * @schema io.k8s.api.core.v1.VolumeNodeAffinity
 */
export interface VolumeNodeAffinity {
    /**
     * Required specifies hard node constraints that must be met.
     *
     * @schema io.k8s.api.core.v1.VolumeNodeAffinity#required
     */
    readonly required?: NodeSelector;
}
/**
 * Represents a Photon Controller persistent disk resource.
 *
 * @schema io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource
 */
export interface PhotonPersistentDiskVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * ID that identifies Photon Controller persistent disk
     *
     * @schema io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#pdID
     */
    readonly pdID: string;
}
/**
 * PortworxVolumeSource represents a Portworx volume resource.
 *
 * @schema io.k8s.api.core.v1.PortworxVolumeSource
 */
export interface PortworxVolumeSource {
    /**
     * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.PortworxVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.PortworxVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * VolumeID uniquely identifies a Portworx volume
     *
     * @schema io.k8s.api.core.v1.PortworxVolumeSource#volumeID
     */
    readonly volumeID: string;
}
/**
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.QuobyteVolumeSource
 */
export interface QuobyteVolumeSource {
    /**
     * Group to map volume access to Default is no group
     *
     * @default no group
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#group
     */
    readonly group?: string;
    /**
     * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
     *
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#registry
     */
    readonly registry: string;
    /**
     * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
     *
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#tenant
     */
    readonly tenant?: string;
    /**
     * User to map volume access to Defaults to serivceaccount user
     *
     * @default serivceaccount user
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#user
     */
    readonly user?: string;
    /**
     * Volume is a string that references an already created Quobyte volume by name.
     *
     * @schema io.k8s.api.core.v1.QuobyteVolumeSource#volume
     */
    readonly volume: string;
}
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource
 */
export interface RbdPersistentVolumeSource {
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
     *
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#image
     */
    readonly image: string;
    /**
     * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#keyring
     */
    readonly keyring?: string;
    /**
     * A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#monitors
     */
    readonly monitors: string[];
    /**
     * The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#pool
     */
    readonly pool?: string;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#secretRef
     */
    readonly secretRef?: SecretReference;
    /**
     * The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDPersistentVolumeSource#user
     */
    readonly user?: string;
}
/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 *
 * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource
 */
export interface ScaleIoPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"
     *
     * @default xfs"
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The host address of the ScaleIO API Gateway.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#gateway
     */
    readonly gateway: string;
    /**
     * The name of the ScaleIO Protection Domain for the configured storage.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#protectionDomain
     */
    readonly protectionDomain?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#secretRef
     */
    readonly secretRef: SecretReference;
    /**
     * Flag to enable/disable SSL communication with Gateway, default false
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#sslEnabled
     */
    readonly sslEnabled?: boolean;
    /**
     * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
     *
     * @default ThinProvisioned.
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#storageMode
     */
    readonly storageMode?: string;
    /**
     * The ScaleIO Storage Pool associated with the protection domain.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#storagePool
     */
    readonly storagePool?: string;
    /**
     * The name of the storage system as configured in ScaleIO.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#system
     */
    readonly system: string;
    /**
     * The name of a volume already created in the ScaleIO system that is associated with this volume source.
     *
     * @schema io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#volumeName
     */
    readonly volumeName?: string;
}
/**
 * Represents a StorageOS persistent volume resource.
 *
 * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource
 */
export interface StorageOsPersistentVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
     *
     * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource#secretRef
     */
    readonly secretRef?: ObjectReference;
    /**
     * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
     *
     * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource#volumeName
     */
    readonly volumeName?: string;
    /**
     * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
     *
     * @schema io.k8s.api.core.v1.StorageOSPersistentVolumeSource#volumeNamespace
     */
    readonly volumeNamespace?: string;
}
/**
 * Represents a vSphere volume resource.
 *
 * @schema io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource
 */
export interface VsphereVirtualDiskVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
     *
     * @schema io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#storagePolicyID
     */
    readonly storagePolicyID?: string;
    /**
     * Storage Policy Based Management (SPBM) profile name.
     *
     * @schema io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#storagePolicyName
     */
    readonly storagePolicyName?: string;
    /**
     * Path that identifies vSphere volume vmdk
     *
     * @schema io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#volumePath
     */
    readonly volumePath: string;
}
/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 *
 * @schema io.k8s.api.core.v1.TypedLocalObjectReference
 */
export interface TypedLocalObjectReference {
    /**
     * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
     *
     * @schema io.k8s.api.core.v1.TypedLocalObjectReference#apiGroup
     */
    readonly apiGroup?: string;
    /**
     * Kind is the type of resource being referenced
     *
     * @schema io.k8s.api.core.v1.TypedLocalObjectReference#kind
     */
    readonly kind: string;
    /**
     * Name is the name of resource being referenced
     *
     * @schema io.k8s.api.core.v1.TypedLocalObjectReference#name
     */
    readonly name: string;
}
/**
 * ResourceRequirements describes the compute resource requirements.
 *
 * @schema io.k8s.api.core.v1.ResourceRequirements
 */
export interface ResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     *
     * @schema io.k8s.api.core.v1.ResourceRequirements#limits
     */
    readonly limits?: {
        [key: string]: Quantity;
    };
    /**
     * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     *
     * @schema io.k8s.api.core.v1.ResourceRequirements#requests
     */
    readonly requests?: {
        [key: string]: Quantity;
    };
}
/**
 * Affinity is a group of affinity scheduling rules.
 *
 * @schema io.k8s.api.core.v1.Affinity
 */
export interface Affinity {
    /**
     * Describes node affinity scheduling rules for the pod.
     *
     * @schema io.k8s.api.core.v1.Affinity#nodeAffinity
     */
    readonly nodeAffinity?: NodeAffinity;
    /**
     * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
     *
     * @schema io.k8s.api.core.v1.Affinity#podAffinity
     */
    readonly podAffinity?: PodAffinity;
    /**
     * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
     *
     * @schema io.k8s.api.core.v1.Affinity#podAntiAffinity
     */
    readonly podAntiAffinity?: PodAntiAffinity;
}
/**
 * A single application container that you want to run within a pod.
 *
 * @schema io.k8s.api.core.v1.Container
 */
export interface Container {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     *
     * @schema io.k8s.api.core.v1.Container#args
     */
    readonly args?: string[];
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
     *
     * @schema io.k8s.api.core.v1.Container#command
     */
    readonly command?: string[];
    /**
     * List of environment variables to set in the container. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#env
     */
    readonly env?: EnvVar[];
    /**
     * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#envFrom
     */
    readonly envFrom?: EnvFromSource[];
    /**
     * Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
     *
     * @schema io.k8s.api.core.v1.Container#image
     */
    readonly image?: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     *
     * @default Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * @schema io.k8s.api.core.v1.Container#imagePullPolicy
     */
    readonly imagePullPolicy?: string;
    /**
     * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#lifecycle
     */
    readonly lifecycle?: Lifecycle;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     *
     * @schema io.k8s.api.core.v1.Container#livenessProbe
     */
    readonly livenessProbe?: Probe;
    /**
     * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#name
     */
    readonly name: string;
    /**
     * List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#ports
     */
    readonly ports?: ContainerPort[];
    /**
     * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     *
     * @schema io.k8s.api.core.v1.Container#readinessProbe
     */
    readonly readinessProbe?: Probe;
    /**
     * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
     *
     * @schema io.k8s.api.core.v1.Container#resources
     */
    readonly resources?: ResourceRequirements;
    /**
     * Security options the pod should run with. More info: https://kubernetes.io/docs/concepts/policy/security-context/ More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     *
     * @schema io.k8s.api.core.v1.Container#securityContext
     */
    readonly securityContext?: SecurityContext;
    /**
     * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.Container#stdin
     */
    readonly stdin?: boolean;
    /**
     * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
     *
     * @default false
     * @schema io.k8s.api.core.v1.Container#stdinOnce
     */
    readonly stdinOnce?: boolean;
    /**
     * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
     *
     * @default dev/termination-log. Cannot be updated.
     * @schema io.k8s.api.core.v1.Container#terminationMessagePath
     */
    readonly terminationMessagePath?: string;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     *
     * @default File. Cannot be updated.
     * @schema io.k8s.api.core.v1.Container#terminationMessagePolicy
     */
    readonly terminationMessagePolicy?: string;
    /**
     * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.Container#tty
     */
    readonly tty?: boolean;
    /**
     * volumeDevices is the list of block devices to be used by the container. This is a beta feature.
     *
     * @schema io.k8s.api.core.v1.Container#volumeDevices
     */
    readonly volumeDevices?: VolumeDevice[];
    /**
     * Pod volumes to mount into the container's filesystem. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#volumeMounts
     */
    readonly volumeMounts?: VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
     *
     * @schema io.k8s.api.core.v1.Container#workingDir
     */
    readonly workingDir?: string;
}
/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 *
 * @schema io.k8s.api.core.v1.PodDNSConfig
 */
export interface PodDnsConfig {
    /**
     * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
     *
     * @schema io.k8s.api.core.v1.PodDNSConfig#nameservers
     */
    readonly nameservers?: string[];
    /**
     * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
     *
     * @schema io.k8s.api.core.v1.PodDNSConfig#options
     */
    readonly options?: PodDnsConfigOption[];
    /**
     * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
     *
     * @schema io.k8s.api.core.v1.PodDNSConfig#searches
     */
    readonly searches?: string[];
}
/**
 * HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.
 *
 * @schema io.k8s.api.core.v1.HostAlias
 */
export interface HostAlias {
    /**
     * Hostnames for the above IP address.
     *
     * @schema io.k8s.api.core.v1.HostAlias#hostnames
     */
    readonly hostnames?: string[];
    /**
     * IP address of the host file entry.
     *
     * @schema io.k8s.api.core.v1.HostAlias#ip
     */
    readonly ip?: string;
}
/**
 * PodReadinessGate contains the reference to a pod condition
 *
 * @schema io.k8s.api.core.v1.PodReadinessGate
 */
export interface PodReadinessGate {
    /**
     * ConditionType refers to a condition in the pod's condition list with matching type.
     *
     * @schema io.k8s.api.core.v1.PodReadinessGate#conditionType
     */
    readonly conditionType: string;
}
/**
 * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
 *
 * @schema io.k8s.api.core.v1.PodSecurityContext
 */
export interface PodSecurityContext {
    /**
     * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:
  
  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----
  
  If unset, the Kubelet will not modify the ownership and permissions of any volume.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#fsGroup
     */
    readonly fsGroup?: number;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#runAsGroup
     */
    readonly runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#runAsNonRoot
     */
    readonly runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     *
     * @default user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     * @schema io.k8s.api.core.v1.PodSecurityContext#runAsUser
     */
    readonly runAsUser?: number;
    /**
     * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#seLinuxOptions
     */
    readonly seLinuxOptions?: SeLinuxOptions;
    /**
     * A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#supplementalGroups
     */
    readonly supplementalGroups?: number[];
    /**
     * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#sysctls
     */
    readonly sysctls?: Sysctl[];
    /**
     * Windows security options.
     *
     * @schema io.k8s.api.core.v1.PodSecurityContext#windowsOptions
     */
    readonly windowsOptions?: WindowsSecurityContextOptions;
}
/**
 * The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.
 *
 * @schema io.k8s.api.core.v1.Toleration
 */
export interface Toleration {
    /**
     * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
     *
     * @schema io.k8s.api.core.v1.Toleration#effect
     */
    readonly effect?: string;
    /**
     * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
     *
     * @schema io.k8s.api.core.v1.Toleration#key
     */
    readonly key?: string;
    /**
     * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
     *
     * @default Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
     * @schema io.k8s.api.core.v1.Toleration#operator
     */
    readonly operator?: string;
    /**
     * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
     *
     * @schema io.k8s.api.core.v1.Toleration#tolerationSeconds
     */
    readonly tolerationSeconds?: number;
    /**
     * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
     *
     * @schema io.k8s.api.core.v1.Toleration#value
     */
    readonly value?: string;
}
/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 *
 * @schema io.k8s.api.core.v1.Volume
 */
export interface Volume {
    /**
     * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
     *
     * @schema io.k8s.api.core.v1.Volume#awsElasticBlockStore
     */
    readonly awsElasticBlockStore?: AwsElasticBlockStoreVolumeSource;
    /**
     * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
     *
     * @schema io.k8s.api.core.v1.Volume#azureDisk
     */
    readonly azureDisk?: AzureDiskVolumeSource;
    /**
     * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
     *
     * @schema io.k8s.api.core.v1.Volume#azureFile
     */
    readonly azureFile?: AzureFileVolumeSource;
    /**
     * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
     *
     * @schema io.k8s.api.core.v1.Volume#cephfs
     */
    readonly cephfs?: CephFsVolumeSource;
    /**
     * Cinder represents a cinder volume attached and mounted on kubelets host machine More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.Volume#cinder
     */
    readonly cinder?: CinderVolumeSource;
    /**
     * ConfigMap represents a configMap that should populate this volume
     *
     * @schema io.k8s.api.core.v1.Volume#configMap
     */
    readonly configMap?: ConfigMapVolumeSource;
    /**
     * CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature).
     *
     * @schema io.k8s.api.core.v1.Volume#csi
     */
    readonly csi?: CsiVolumeSource;
    /**
     * DownwardAPI represents downward API about the pod that should populate this volume
     *
     * @schema io.k8s.api.core.v1.Volume#downwardAPI
     */
    readonly downwardAPI?: DownwardApiVolumeSource;
    /**
     * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
     *
     * @schema io.k8s.api.core.v1.Volume#emptyDir
     */
    readonly emptyDir?: EmptyDirVolumeSource;
    /**
     * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
     *
     * @schema io.k8s.api.core.v1.Volume#fc
     */
    readonly fc?: FcVolumeSource;
    /**
     * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
     *
     * @schema io.k8s.api.core.v1.Volume#flexVolume
     */
    readonly flexVolume?: FlexVolumeSource;
    /**
     * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
     *
     * @schema io.k8s.api.core.v1.Volume#flocker
     */
    readonly flocker?: FlockerVolumeSource;
    /**
     * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
     *
     * @schema io.k8s.api.core.v1.Volume#gcePersistentDisk
     */
    readonly gcePersistentDisk?: GcePersistentDiskVolumeSource;
    /**
     * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
     *
     * @schema io.k8s.api.core.v1.Volume#gitRepo
     */
    readonly gitRepo?: GitRepoVolumeSource;
    /**
     * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md
     *
     * @schema io.k8s.api.core.v1.Volume#glusterfs
     */
    readonly glusterfs?: GlusterfsVolumeSource;
    /**
     * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
     *
     * @schema io.k8s.api.core.v1.Volume#hostPath
     */
    readonly hostPath?: HostPathVolumeSource;
    /**
     * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://releases.k8s.io/HEAD/examples/volumes/iscsi/README.md
     *
     * @schema io.k8s.api.core.v1.Volume#iscsi
     */
    readonly iscsi?: IscsiVolumeSource;
    /**
     * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.Volume#name
     */
    readonly name: string;
    /**
     * NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
     *
     * @schema io.k8s.api.core.v1.Volume#nfs
     */
    readonly nfs?: NfsVolumeSource;
    /**
     * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     *
     * @schema io.k8s.api.core.v1.Volume#persistentVolumeClaim
     */
    readonly persistentVolumeClaim?: PersistentVolumeClaimVolumeSource;
    /**
     * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.Volume#photonPersistentDisk
     */
    readonly photonPersistentDisk?: PhotonPersistentDiskVolumeSource;
    /**
     * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.Volume#portworxVolume
     */
    readonly portworxVolume?: PortworxVolumeSource;
    /**
     * Items for all in one resources secrets, configmaps, and downward API
     *
     * @schema io.k8s.api.core.v1.Volume#projected
     */
    readonly projected?: ProjectedVolumeSource;
    /**
     * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
     *
     * @schema io.k8s.api.core.v1.Volume#quobyte
     */
    readonly quobyte?: QuobyteVolumeSource;
    /**
     * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md
     *
     * @schema io.k8s.api.core.v1.Volume#rbd
     */
    readonly rbd?: RbdVolumeSource;
    /**
     * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
     *
     * @schema io.k8s.api.core.v1.Volume#scaleIO
     */
    readonly scaleIO?: ScaleIoVolumeSource;
    /**
     * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
     *
     * @schema io.k8s.api.core.v1.Volume#secret
     */
    readonly secret?: SecretVolumeSource;
    /**
     * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
     *
     * @schema io.k8s.api.core.v1.Volume#storageos
     */
    readonly storageos?: StorageOsVolumeSource;
    /**
     * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
     *
     * @schema io.k8s.api.core.v1.Volume#vsphereVolume
     */
    readonly vsphereVolume?: VsphereVirtualDiskVolumeSource;
}
/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 *
 * @schema io.k8s.api.core.v1.ScopeSelector
 */
export interface ScopeSelector {
    /**
     * A list of scope selector requirements by scope of the resources.
     *
     * @schema io.k8s.api.core.v1.ScopeSelector#matchExpressions
     */
    readonly matchExpressions?: ScopedResourceSelectorRequirement[];
}
/**
 * ServicePort contains information on service's port.
 *
 * @schema io.k8s.api.core.v1.ServicePort
 */
export interface ServicePort {
    /**
     * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
     *
     * @schema io.k8s.api.core.v1.ServicePort#name
     */
    readonly name?: string;
    /**
     * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
     *
     * @default to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
     * @schema io.k8s.api.core.v1.ServicePort#nodePort
     */
    readonly nodePort?: number;
    /**
     * The port that will be exposed by this service.
     *
     * @schema io.k8s.api.core.v1.ServicePort#port
     */
    readonly port: number;
    /**
     * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
     *
     * @default TCP.
     * @schema io.k8s.api.core.v1.ServicePort#protocol
     */
    readonly protocol?: string;
    /**
     * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
     *
     * @schema io.k8s.api.core.v1.ServicePort#targetPort
     */
    readonly targetPort?: IntOrString;
}
/**
 * SessionAffinityConfig represents the configurations of session affinity.
 *
 * @schema io.k8s.api.core.v1.SessionAffinityConfig
 */
export interface SessionAffinityConfig {
    /**
     * clientIP contains the configurations of Client IP based session affinity.
     *
     * @schema io.k8s.api.core.v1.SessionAffinityConfig#clientIP
     */
    readonly clientIP?: ClientIpConfig;
}
/**
 * IngressBackend describes all endpoints for a given service and port.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressBackend
 */
export interface IngressBackend {
    /**
     * Specifies the name of the referenced service.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressBackend#serviceName
     */
    readonly serviceName: string;
    /**
     * Specifies the port of the referenced service.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressBackend#servicePort
     */
    readonly servicePort: IntOrString;
}
/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressRule
 */
export interface IngressRule {
    /**
     * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the
        IP in the Spec of the parent Ingress.
  2. The `:` delimiter is not respected because ports are not allowed.
        Currently the port of an Ingress is implicitly :80 for http and
        :443 for https.
  Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressRule#host
     */
    readonly host?: string;
    /**
     * @schema io.k8s.api.networking.v1beta1.IngressRule#http
     */
    readonly http?: HttpIngressRuleValue;
}
/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressTLS
 */
export interface IngressTls {
    /**
     * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
     *
     * @default the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
     * @schema io.k8s.api.networking.v1beta1.IngressTLS#hosts
     */
    readonly hosts?: string[];
    /**
     * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
     *
     * @schema io.k8s.api.networking.v1beta1.IngressTLS#secretName
     */
    readonly secretName?: string;
}
/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyEgressRule
 */
export interface NetworkPolicyEgressRule {
    /**
     * List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyEgressRule#ports
     */
    readonly ports?: NetworkPolicyPort[];
    /**
     * List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyEgressRule#to
     */
    readonly to?: NetworkPolicyPeer[];
}
/**
 * NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyIngressRule
 */
export interface NetworkPolicyIngressRule {
    /**
     * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyIngressRule#from
     */
    readonly from?: NetworkPolicyPeer[];
    /**
     * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyIngressRule#ports
     */
    readonly ports?: NetworkPolicyPort[];
}
/**
 * AllowedCSIDriver represents a single inline CSI Driver that is allowed to be used.
 *
 * @schema io.k8s.api.policy.v1beta1.AllowedCSIDriver
 */
export interface AllowedCsiDriver {
    /**
     * Name is the registered name of the CSI driver
     *
     * @schema io.k8s.api.policy.v1beta1.AllowedCSIDriver#name
     */
    readonly name: string;
}
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 *
 * @schema io.k8s.api.policy.v1beta1.AllowedFlexVolume
 */
export interface AllowedFlexVolume {
    /**
     * driver is the name of the Flexvolume driver.
     *
     * @schema io.k8s.api.policy.v1beta1.AllowedFlexVolume#driver
     */
    readonly driver: string;
}
/**
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 *
 * @schema io.k8s.api.policy.v1beta1.AllowedHostPath
 */
export interface AllowedHostPath {
    /**
     * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.
  
  Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
     *
     * @schema io.k8s.api.policy.v1beta1.AllowedHostPath#pathPrefix
     */
    readonly pathPrefix?: string;
    /**
     * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
     *
     * @schema io.k8s.api.policy.v1beta1.AllowedHostPath#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 *
 * @schema io.k8s.api.policy.v1beta1.FSGroupStrategyOptions
 */
export interface FsGroupStrategyOptions {
    /**
     * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
     *
     * @schema io.k8s.api.policy.v1beta1.FSGroupStrategyOptions#ranges
     */
    readonly ranges?: IdRange[];
    /**
     * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
     *
     * @schema io.k8s.api.policy.v1beta1.FSGroupStrategyOptions#rule
     */
    readonly rule?: string;
}
/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 *
 * @schema io.k8s.api.policy.v1beta1.HostPortRange
 */
export interface HostPortRange {
    /**
     * max is the end of the range, inclusive.
     *
     * @schema io.k8s.api.policy.v1beta1.HostPortRange#max
     */
    readonly max: number;
    /**
     * min is the start of the range, inclusive.
     *
     * @schema io.k8s.api.policy.v1beta1.HostPortRange#min
     */
    readonly min: number;
}
/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 *
 * @schema io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions
 */
export interface RunAsGroupStrategyOptions {
    /**
     * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
     *
     * @schema io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions#ranges
     */
    readonly ranges?: IdRange[];
    /**
     * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
     *
     * @schema io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions#rule
     */
    readonly rule: string;
}
/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 *
 * @schema io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions
 */
export interface RunAsUserStrategyOptions {
    /**
     * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
     *
     * @schema io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions#ranges
     */
    readonly ranges?: IdRange[];
    /**
     * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
     *
     * @schema io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions#rule
     */
    readonly rule: string;
}
/**
 * RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod.
 *
 * @schema io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions
 */
export interface RuntimeClassStrategyOptions {
    /**
     * allowedRuntimeClassNames is a whitelist of RuntimeClass names that may be specified on a pod. A value of "*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset.
     *
     * @schema io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions#allowedRuntimeClassNames
     */
    readonly allowedRuntimeClassNames: string[];
    /**
     * defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod.
     *
     * @schema io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions#defaultRuntimeClassName
     */
    readonly defaultRuntimeClassName?: string;
}
/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 *
 * @schema io.k8s.api.policy.v1beta1.SELinuxStrategyOptions
 */
export interface SeLinuxStrategyOptions {
    /**
     * rule is the strategy that will dictate the allowable labels that may be set.
     *
     * @schema io.k8s.api.policy.v1beta1.SELinuxStrategyOptions#rule
     */
    readonly rule: string;
    /**
     * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
     *
     * @schema io.k8s.api.policy.v1beta1.SELinuxStrategyOptions#seLinuxOptions
     */
    readonly seLinuxOptions?: SeLinuxOptions;
}
/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 *
 * @schema io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions
 */
export interface SupplementalGroupsStrategyOptions {
    /**
     * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
     *
     * @schema io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions#ranges
     */
    readonly ranges?: IdRange[];
    /**
     * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
     *
     * @schema io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions#rule
     */
    readonly rule?: string;
}
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
 *
 * @schema IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind
 */
export declare enum IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind {
    /** DeleteOptions */
    DELETE_OPTIONS = "DeleteOptions"
}
/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions
 */
export interface Preconditions {
    /**
     * Specifies the target ResourceVersion
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions#resourceVersion
     */
    readonly resourceVersion?: string;
    /**
     * Specifies the target UID.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions#uid
     */
    readonly uid?: string;
}
/**
 * @schema io.k8s.apimachinery.pkg.util.intstr.IntOrString
 */
export declare class IntOrString {
    static fromString(value: string): IntOrString;
    static fromNumber(value: number): IntOrString;
    private constructor();
}
/**
 * EnvVar represents an environment variable present in a Container.
 *
 * @schema io.k8s.api.core.v1.EnvVar
 */
export interface EnvVar {
    /**
     * Name of the environment variable. Must be a C_IDENTIFIER.
     *
     * @schema io.k8s.api.core.v1.EnvVar#name
     */
    readonly name: string;
    /**
     * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
     *
     * @default .
     * @schema io.k8s.api.core.v1.EnvVar#value
     */
    readonly value?: string;
    /**
     * Source for the environment variable's value. Cannot be used if value is not empty.
     *
     * @schema io.k8s.api.core.v1.EnvVar#valueFrom
     */
    readonly valueFrom?: EnvVarSource;
}
/**
 * EnvFromSource represents the source of a set of ConfigMaps
 *
 * @schema io.k8s.api.core.v1.EnvFromSource
 */
export interface EnvFromSource {
    /**
     * The ConfigMap to select from
     *
     * @schema io.k8s.api.core.v1.EnvFromSource#configMapRef
     */
    readonly configMapRef?: ConfigMapEnvSource;
    /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     *
     * @schema io.k8s.api.core.v1.EnvFromSource#prefix
     */
    readonly prefix?: string;
    /**
     * The Secret to select from
     *
     * @schema io.k8s.api.core.v1.EnvFromSource#secretRef
     */
    readonly secretRef?: SecretEnvSource;
}
/**
 * VolumeMount describes a mounting of a Volume within a container.
 *
 * @schema io.k8s.api.core.v1.VolumeMount
 */
export interface VolumeMount {
    /**
     * Path within the container at which the volume should be mounted.  Must not contain ':'.
     *
     * @schema io.k8s.api.core.v1.VolumeMount#mountPath
     */
    readonly mountPath: string;
    /**
     * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
     *
     * @schema io.k8s.api.core.v1.VolumeMount#mountPropagation
     */
    readonly mountPropagation?: string;
    /**
     * This must match the Name of a Volume.
     *
     * @schema io.k8s.api.core.v1.VolumeMount#name
     */
    readonly name: string;
    /**
     * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.VolumeMount#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     *
     * @default volume's root).
     * @schema io.k8s.api.core.v1.VolumeMount#subPath
     */
    readonly subPath?: string;
    /**
     * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive. This field is beta in 1.15.
     *
     * @default volume's root). SubPathExpr and SubPath are mutually exclusive. This field is beta in 1.15.
     * @schema io.k8s.api.core.v1.VolumeMount#subPathExpr
     */
    readonly subPathExpr?: string;
}
/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 *
 * @schema io.k8s.api.core.v1.TopologySelectorLabelRequirement
 */
export interface TopologySelectorLabelRequirement {
    /**
     * The label key that the selector applies to.
     *
     * @schema io.k8s.api.core.v1.TopologySelectorLabelRequirement#key
     */
    readonly key: string;
    /**
     * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
     *
     * @schema io.k8s.api.core.v1.TopologySelectorLabelRequirement#values
     */
    readonly values: string[];
}
/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSource
 */
export interface VolumeAttachmentSource {
    /**
     * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature.
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSource#inlineVolumeSpec
     */
    readonly inlineVolumeSpec?: PersistentVolumeSpec;
    /**
     * Name of the persistent volume to attach.
     *
     * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentSource#persistentVolumeName
     */
    readonly persistentVolumeName?: string;
}
/**
 * CSINodeDriver holds information about the specification of one CSI driver installed on a node
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeDriver
 */
export interface CsiNodeDriver {
    /**
     * This is the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeDriver#name
     */
    readonly name: string;
    /**
     * nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required.
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeDriver#nodeID
     */
    readonly nodeID: string;
    /**
     * topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology.
     *
     * @schema io.k8s.api.storage.v1beta1.CSINodeDriver#topologyKeys
     */
    readonly topologyKeys?: string[];
}
/**
 * CustomResourceColumnDefinition specifies a column for server side printing.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition
 */
export interface CustomResourceColumnDefinition {
    /**
     * JSONPath is a simple JSON path, i.e. with array notation.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#JSONPath
     */
    readonly jsonPath?: string;
    /**
     * description is a human readable description of this column.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#description
     */
    readonly description?: string;
    /**
     * format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#format
     */
    readonly format?: string;
    /**
     * name is a human readable name for the column.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#name
     */
    readonly name: string;
    /**
     * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a higher priority.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#priority
     */
    readonly priority?: number;
    /**
     * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for more.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#type
     */
    readonly type: string;
}
/**
 * CustomResourceConversion describes how to convert different versions of a CR.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion
 */
export interface CustomResourceConversion {
    /**
     * ConversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, conversion will fail for this object. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail. Default to `['v1beta1']`.
     *
     * @default v1beta1']`.
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion#conversionReviewVersions
     */
    readonly conversionReviewVersions?: string[];
    /**
     * `strategy` specifies the conversion strategy. Allowed values are: - `None`: The converter only change the apiVersion and would not touch any other field in the CR. - `Webhook`: API Server will call to an external webhook to do the conversion. Additional information
    is needed for this option. This requires spec.preserveUnknownFields to be false.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion#strategy
     */
    readonly strategy: string;
    /**
     * `webhookClientConfig` is the instructions for how to call the webhook if strategy is `Webhook`. This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion#webhookClientConfig
     */
    readonly webhookClientConfig?: WebhookClientConfig;
}
/**
 * CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames
 */
export interface CustomResourceDefinitionNames {
    /**
     * Categories is a list of grouped resources custom resources belong to (e.g. 'all')
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#categories
     */
    readonly categories?: string[];
    /**
     * Kind is the serialized kind of the resource.  It is normally CamelCase and singular.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#kind
     */
    readonly kind: string;
    /**
     * ListKind is the serialized kind of the list for this resource.  Defaults to <kind>List.
     *
     * @default kind>List.
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#listKind
     */
    readonly listKind?: string;
    /**
     * Plural is the plural name of the resource to serve.  It must match the name of the CustomResourceDefinition-registration too: plural.group and it must be all lowercase.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#plural
     */
    readonly plural: string;
    /**
     * ShortNames are short names for the resource.  It must be all lowercase.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#shortNames
     */
    readonly shortNames?: string[];
    /**
     * Singular is the singular name of the resource.  It must be all lowercase  Defaults to lowercased <kind>
     *
     * @default lowercased <kind>
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#singular
     */
    readonly singular?: string;
}
/**
 * CustomResourceSubresources defines the status and scale subresources for CustomResources.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources
 */
export interface CustomResourceSubresources {
    /**
     * Scale denotes the scale subresource for CustomResources
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources#scale
     */
    readonly scale?: CustomResourceSubresourceScale;
    /**
     * Status denotes the status subresource for CustomResources
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources#status
     */
    readonly status?: any;
}
/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceValidation
 */
export interface CustomResourceValidation {
    /**
     * OpenAPIV3Schema is the OpenAPI v3 schema to be validated against.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceValidation#openAPIV3Schema
     */
    readonly openAPIV3Schema?: JsonSchemaProps;
}
/**
 * CustomResourceDefinitionVersion describes a version for CRD.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion
 */
export interface CustomResourceDefinitionVersion {
    /**
     * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null
     *
     * @default a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#additionalPrinterColumns
     */
    readonly additionalPrinterColumns?: CustomResourceColumnDefinition[];
    /**
     * Name is the version name, e.g. “v1”, “v2beta1”, etc.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#name
     */
    readonly name: string;
    /**
     * Schema describes the schema for CustomResource used in validation, pruning, and defaulting. Top-level and per-version schemas are mutually exclusive. Per-version schemas must not all be set to identical values (top-level validation schema should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#schema
     */
    readonly schema?: CustomResourceValidation;
    /**
     * Served is a flag enabling/disabling this version from being served via REST APIs
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#served
     */
    readonly served: boolean;
    /**
     * Storage flags the version as storage version. There must be exactly one flagged as storage version.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#storage
     */
    readonly storage: boolean;
    /**
     * Subresources describes the subresources for CustomResource Top-level and per-version subresources are mutually exclusive. Per-version subresources must not all be set to identical values (top-level subresources should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#subresources
     */
    readonly subresources?: CustomResourceSubresources;
}
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause
 */
export interface StatusCause {
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.
  
  Examples:
    "name" - the field "name" on the current resource
    "items[0].name" - the field "name" on the first array entry in "items"
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause#field
     */
    readonly field?: string;
    /**
     * A human-readable description of the cause of the error.  This field may be presented as-is to a reader.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause#message
     */
    readonly message?: string;
    /**
     * A machine-readable description of the cause of the error. If this value is empty there is no information available.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause#reason
     */
    readonly reason?: string;
}
/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ServiceReference
 */
export interface ServiceReference {
    /**
     * `name` is the name of the service. Required
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ServiceReference#name
     */
    readonly name: string;
    /**
     * `namespace` is the namespace of the service. Required
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ServiceReference#namespace
     */
    readonly namespace: string;
    /**
     * `path` is an optional URL path which will be sent in any request to this service.
     *
     * @schema io.k8s.api.admissionregistration.v1beta1.ServiceReference#path
     */
    readonly path?: string;
    /**
     * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     *
     * @default 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
     * @schema io.k8s.api.admissionregistration.v1beta1.ServiceReference#port
     */
    readonly port?: number;
}
/**
 * Initializer is information about an initializer that has not yet completed.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Initializer
 */
export interface Initializer {
    /**
     * name of the process that is responsible for initializing this object.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Initializer#name
     */
    readonly name: string;
}
/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement
 */
export interface LabelSelectorRequirement {
    /**
     * key is the label key that the selector applies to.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement#key
     */
    readonly key: string;
    /**
     * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement#operator
     */
    readonly operator: string;
    /**
     * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     *
     * @schema io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement#values
     */
    readonly values?: string[];
}
/**
 * Spec to control the desired behavior of daemon set rolling update.
 *
 * @schema io.k8s.api.extensions.v1beta1.RollingUpdateDaemonSet
 */
export interface RollingUpdateDaemonSet {
    /**
     * The maximum number of DaemonSet pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of total number of DaemonSet pods at the start of the update (ex: 10%). Absolute number is calculated from percentage by rounding up. This cannot be 0. Default value is 1. Example: when this is set to 30%, at most 30% of the total number of nodes that should be running the daemon pod (i.e. status.desiredNumberScheduled) can have their pods stopped for an update at any given time. The update starts by stopping at most 30% of those DaemonSet pods and then brings up new DaemonSet pods in their place. Once the new pods are available, it then proceeds onto other DaemonSet pods, thus ensuring that at least 70% of original number of DaemonSet pods are available at all times during the update.
     *
     * @schema io.k8s.api.extensions.v1beta1.RollingUpdateDaemonSet#maxUnavailable
     */
    readonly maxUnavailable?: IntOrString;
}
/**
 * Spec to control the desired behavior of rolling update.
 *
 * @schema io.k8s.api.apps.v1beta2.RollingUpdateDeployment
 */
export interface RollingUpdateDeployment {
    /**
     * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
     *
     * @default 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
     * @schema io.k8s.api.apps.v1beta2.RollingUpdateDeployment#maxSurge
     */
    readonly maxSurge?: IntOrString;
    /**
     * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
     *
     * @default 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
     * @schema io.k8s.api.apps.v1beta2.RollingUpdateDeployment#maxUnavailable
     */
    readonly maxUnavailable?: IntOrString;
}
/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 *
 * @schema io.k8s.api.apps.v1beta2.RollingUpdateStatefulSetStrategy
 */
export interface RollingUpdateStatefulSetStrategy {
    /**
     * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
     *
     * @schema io.k8s.api.apps.v1beta2.RollingUpdateStatefulSetStrategy#partition
     */
    readonly partition?: number;
}
/**
 * WebhookThrottleConfig holds the configuration for throttling events
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig
 */
export interface WebhookThrottleConfig {
    /**
     * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig#burst
     */
    readonly burst?: number;
    /**
     * ThrottleQPS maximum number of batches per second default 10 QPS
     *
     * @schema io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig#qps
     */
    readonly qps?: number;
}
/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 *
 * @schema io.k8s.api.autoscaling.v2beta2.ExternalMetricSource
 */
export interface ExternalMetricSource {
    /**
     * metric identifies the target metric by name and selector
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ExternalMetricSource#metric
     */
    readonly metric: MetricIdentifier;
    /**
     * target specifies the target value for the given metric
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ExternalMetricSource#target
     */
    readonly target: MetricTarget;
}
/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 *
 * @schema io.k8s.api.autoscaling.v2beta2.ObjectMetricSource
 */
export interface ObjectMetricSource {
    /**
     * @schema io.k8s.api.autoscaling.v2beta2.ObjectMetricSource#describedObject
     */
    readonly describedObject: CrossVersionObjectReference;
    /**
     * metric identifies the target metric by name and selector
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ObjectMetricSource#metric
     */
    readonly metric: MetricIdentifier;
    /**
     * target specifies the target value for the given metric
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ObjectMetricSource#target
     */
    readonly target: MetricTarget;
}
/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.PodsMetricSource
 */
export interface PodsMetricSource {
    /**
     * metric identifies the target metric by name and selector
     *
     * @schema io.k8s.api.autoscaling.v2beta2.PodsMetricSource#metric
     */
    readonly metric: MetricIdentifier;
    /**
     * target specifies the target value for the given metric
     *
     * @schema io.k8s.api.autoscaling.v2beta2.PodsMetricSource#target
     */
    readonly target: MetricTarget;
}
/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.ResourceMetricSource
 */
export interface ResourceMetricSource {
    /**
     * name is the name of the resource in question.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ResourceMetricSource#name
     */
    readonly name: string;
    /**
     * target specifies the target value for the given metric
     *
     * @schema io.k8s.api.autoscaling.v2beta2.ResourceMetricSource#target
     */
    readonly target: MetricTarget;
}
/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node.
 *
 * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource
 */
export interface ConfigMapNodeConfigSource {
    /**
     * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
     *
     * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource#kubeletConfigKey
     */
    readonly kubeletConfigKey: string;
    /**
     * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
     *
     * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource#name
     */
    readonly name: string;
    /**
     * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
     *
     * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource#namespace
     */
    readonly namespace: string;
    /**
     * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     *
     * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource#resourceVersion
     */
    readonly resourceVersion?: string;
    /**
     * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
     *
     * @schema io.k8s.api.core.v1.ConfigMapNodeConfigSource#uid
     */
    readonly uid?: string;
}
/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 *
 * @schema io.k8s.api.core.v1.SecretReference
 */
export interface SecretReference {
    /**
     * Name is unique within a namespace to reference a secret resource.
     *
     * @schema io.k8s.api.core.v1.SecretReference#name
     */
    readonly name?: string;
    /**
     * Namespace defines the space within which the secret name must be unique.
     *
     * @schema io.k8s.api.core.v1.SecretReference#namespace
     */
    readonly namespace?: string;
}
/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 *
 * @schema io.k8s.api.core.v1.NodeSelector
 */
export interface NodeSelector {
    /**
     * Required. A list of node selector terms. The terms are ORed.
     *
     * @schema io.k8s.api.core.v1.NodeSelector#nodeSelectorTerms
     */
    readonly nodeSelectorTerms: NodeSelectorTerm[];
}
/**
 * Node affinity is a group of node affinity scheduling rules.
 *
 * @schema io.k8s.api.core.v1.NodeAffinity
 */
export interface NodeAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
     *
     * @schema io.k8s.api.core.v1.NodeAffinity#preferredDuringSchedulingIgnoredDuringExecution
     */
    readonly preferredDuringSchedulingIgnoredDuringExecution?: PreferredSchedulingTerm[];
    /**
     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
     *
     * @schema io.k8s.api.core.v1.NodeAffinity#requiredDuringSchedulingIgnoredDuringExecution
     */
    readonly requiredDuringSchedulingIgnoredDuringExecution?: NodeSelector;
}
/**
 * Pod affinity is a group of inter pod affinity scheduling rules.
 *
 * @schema io.k8s.api.core.v1.PodAffinity
 */
export interface PodAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     *
     * @schema io.k8s.api.core.v1.PodAffinity#preferredDuringSchedulingIgnoredDuringExecution
     */
    readonly preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
    /**
     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     *
     * @schema io.k8s.api.core.v1.PodAffinity#requiredDuringSchedulingIgnoredDuringExecution
     */
    readonly requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/**
 * Pod anti affinity is a group of inter pod anti affinity scheduling rules.
 *
 * @schema io.k8s.api.core.v1.PodAntiAffinity
 */
export interface PodAntiAffinity {
    /**
     * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
     *
     * @schema io.k8s.api.core.v1.PodAntiAffinity#preferredDuringSchedulingIgnoredDuringExecution
     */
    readonly preferredDuringSchedulingIgnoredDuringExecution?: WeightedPodAffinityTerm[];
    /**
     * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
     *
     * @schema io.k8s.api.core.v1.PodAntiAffinity#requiredDuringSchedulingIgnoredDuringExecution
     */
    readonly requiredDuringSchedulingIgnoredDuringExecution?: PodAffinityTerm[];
}
/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 *
 * @schema io.k8s.api.core.v1.Lifecycle
 */
export interface Lifecycle {
    /**
     * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
     *
     * @schema io.k8s.api.core.v1.Lifecycle#postStart
     */
    readonly postStart?: Handler;
    /**
     * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
     *
     * @schema io.k8s.api.core.v1.Lifecycle#preStop
     */
    readonly preStop?: Handler;
}
/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 *
 * @schema io.k8s.api.core.v1.Probe
 */
export interface Probe {
    /**
     * One and only one of the following should be specified. Exec specifies the action to take.
     *
     * @schema io.k8s.api.core.v1.Probe#exec
     */
    readonly exec?: ExecAction;
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     *
     * @default 3. Minimum value is 1.
     * @schema io.k8s.api.core.v1.Probe#failureThreshold
     */
    readonly failureThreshold?: number;
    /**
     * HTTPGet specifies the http request to perform.
     *
     * @schema io.k8s.api.core.v1.Probe#httpGet
     */
    readonly httpGet?: HttpGetAction;
    /**
     * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     *
     * @schema io.k8s.api.core.v1.Probe#initialDelaySeconds
     */
    readonly initialDelaySeconds?: number;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
     *
     * @default 10 seconds. Minimum value is 1.
     * @schema io.k8s.api.core.v1.Probe#periodSeconds
     */
    readonly periodSeconds?: number;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1.
     *
     * @default 1. Must be 1 for liveness. Minimum value is 1.
     * @schema io.k8s.api.core.v1.Probe#successThreshold
     */
    readonly successThreshold?: number;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
     *
     * @schema io.k8s.api.core.v1.Probe#tcpSocket
     */
    readonly tcpSocket?: TcpSocketAction;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     *
     * @default 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     * @schema io.k8s.api.core.v1.Probe#timeoutSeconds
     */
    readonly timeoutSeconds?: number;
}
/**
 * ContainerPort represents a network port in a single container.
 *
 * @schema io.k8s.api.core.v1.ContainerPort
 */
export interface ContainerPort {
    /**
     * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
     *
     * @schema io.k8s.api.core.v1.ContainerPort#containerPort
     */
    readonly containerPort: number;
    /**
     * What host IP to bind the external port to.
     *
     * @schema io.k8s.api.core.v1.ContainerPort#hostIP
     */
    readonly hostIP?: string;
    /**
     * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
     *
     * @schema io.k8s.api.core.v1.ContainerPort#hostPort
     */
    readonly hostPort?: number;
    /**
     * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
     *
     * @schema io.k8s.api.core.v1.ContainerPort#name
     */
    readonly name?: string;
    /**
     * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
     *
     * @default TCP".
     * @schema io.k8s.api.core.v1.ContainerPort#protocol
     */
    readonly protocol?: string;
}
/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 *
 * @schema io.k8s.api.core.v1.SecurityContext
 */
export interface SecurityContext {
    /**
     * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
     *
     * @schema io.k8s.api.core.v1.SecurityContext#allowPrivilegeEscalation
     */
    readonly allowPrivilegeEscalation?: boolean;
    /**
     * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
     *
     * @default the default set of capabilities granted by the container runtime.
     * @schema io.k8s.api.core.v1.SecurityContext#capabilities
     */
    readonly capabilities?: Capabilities;
    /**
     * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.SecurityContext#privileged
     */
    readonly privileged?: boolean;
    /**
     * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
     *
     * @schema io.k8s.api.core.v1.SecurityContext#procMount
     */
    readonly procMount?: string;
    /**
     * Whether this container has a read-only root filesystem. Default is false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.SecurityContext#readOnlyRootFilesystem
     */
    readonly readOnlyRootFilesystem?: boolean;
    /**
     * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     *
     * @schema io.k8s.api.core.v1.SecurityContext#runAsGroup
     */
    readonly runAsGroup?: number;
    /**
     * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     *
     * @schema io.k8s.api.core.v1.SecurityContext#runAsNonRoot
     */
    readonly runAsNonRoot?: boolean;
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     *
     * @default user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     * @schema io.k8s.api.core.v1.SecurityContext#runAsUser
     */
    readonly runAsUser?: number;
    /**
     * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     *
     * @schema io.k8s.api.core.v1.SecurityContext#seLinuxOptions
     */
    readonly seLinuxOptions?: SeLinuxOptions;
    /**
     * Windows security options.
     *
     * @schema io.k8s.api.core.v1.SecurityContext#windowsOptions
     */
    readonly windowsOptions?: WindowsSecurityContextOptions;
}
/**
 * volumeDevice describes a mapping of a raw block device within a container.
 *
 * @schema io.k8s.api.core.v1.VolumeDevice
 */
export interface VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     *
     * @schema io.k8s.api.core.v1.VolumeDevice#devicePath
     */
    readonly devicePath: string;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     *
     * @schema io.k8s.api.core.v1.VolumeDevice#name
     */
    readonly name: string;
}
/**
 * PodDNSConfigOption defines DNS resolver options of a pod.
 *
 * @schema io.k8s.api.core.v1.PodDNSConfigOption
 */
export interface PodDnsConfigOption {
    /**
     * Required.
     *
     * @schema io.k8s.api.core.v1.PodDNSConfigOption#name
     */
    readonly name?: string;
    /**
     * @schema io.k8s.api.core.v1.PodDNSConfigOption#value
     */
    readonly value?: string;
}
/**
 * SELinuxOptions are the labels to be applied to the container
 *
 * @schema io.k8s.api.core.v1.SELinuxOptions
 */
export interface SeLinuxOptions {
    /**
     * Level is SELinux level label that applies to the container.
     *
     * @schema io.k8s.api.core.v1.SELinuxOptions#level
     */
    readonly level?: string;
    /**
     * Role is a SELinux role label that applies to the container.
     *
     * @schema io.k8s.api.core.v1.SELinuxOptions#role
     */
    readonly role?: string;
    /**
     * Type is a SELinux type label that applies to the container.
     *
     * @schema io.k8s.api.core.v1.SELinuxOptions#type
     */
    readonly type?: string;
    /**
     * User is a SELinux user label that applies to the container.
     *
     * @schema io.k8s.api.core.v1.SELinuxOptions#user
     */
    readonly user?: string;
}
/**
 * Sysctl defines a kernel parameter to be set
 *
 * @schema io.k8s.api.core.v1.Sysctl
 */
export interface Sysctl {
    /**
     * Name of a property to set
     *
     * @schema io.k8s.api.core.v1.Sysctl#name
     */
    readonly name: string;
    /**
     * Value of a property to set
     *
     * @schema io.k8s.api.core.v1.Sysctl#value
     */
    readonly value: string;
}
/**
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 *
 * @schema io.k8s.api.core.v1.WindowsSecurityContextOptions
 */
export interface WindowsSecurityContextOptions {
    /**
     * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.
     *
     * @schema io.k8s.api.core.v1.WindowsSecurityContextOptions#gmsaCredentialSpec
     */
    readonly gmsaCredentialSpec?: string;
    /**
     * GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.
     *
     * @schema io.k8s.api.core.v1.WindowsSecurityContextOptions#gmsaCredentialSpecName
     */
    readonly gmsaCredentialSpecName?: string;
}
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 *
 * @schema io.k8s.api.core.v1.AzureFileVolumeSource
 */
export interface AzureFileVolumeSource {
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.AzureFileVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * the name of secret that contains Azure Storage Account Name and Key
     *
     * @schema io.k8s.api.core.v1.AzureFileVolumeSource#secretName
     */
    readonly secretName: string;
    /**
     * Share Name
     *
     * @schema io.k8s.api.core.v1.AzureFileVolumeSource#shareName
     */
    readonly shareName: string;
}
/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.CephFSVolumeSource
 */
export interface CephFsVolumeSource {
    /**
     * Required: Monitors is a collection of Ceph monitors More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#monitors
     */
    readonly monitors: string[];
    /**
     * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
     *
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#path
     */
    readonly path?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#secretFile
     */
    readonly secretFile?: string;
    /**
     * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
    /**
     * Optional: User is the rados user name, default is admin More info: https://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.CephFSVolumeSource#user
     */
    readonly user?: string;
}
/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.CinderVolumeSource
 */
export interface CinderVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.CinderVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     * @schema io.k8s.api.core.v1.CinderVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: points to a secret object containing parameters used to connect to OpenStack.
     *
     * @schema io.k8s.api.core.v1.CinderVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
    /**
     * volume id used to identify the volume in cinder More info: https://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md
     *
     * @schema io.k8s.api.core.v1.CinderVolumeSource#volumeID
     */
    readonly volumeID: string;
}
/**
 * Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.ConfigMapVolumeSource
 */
export interface ConfigMapVolumeSource {
    /**
     * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @default 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @schema io.k8s.api.core.v1.ConfigMapVolumeSource#defaultMode
     */
    readonly defaultMode?: number;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     *
     * @schema io.k8s.api.core.v1.ConfigMapVolumeSource#items
     */
    readonly items?: KeyToPath[];
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.ConfigMapVolumeSource#name
     */
    readonly name?: string;
    /**
     * Specify whether the ConfigMap or its keys must be defined
     *
     * @schema io.k8s.api.core.v1.ConfigMapVolumeSource#optional
     */
    readonly optional?: boolean;
}
/**
 * Represents a source location of a volume to mount, managed by an external CSI driver
 *
 * @schema io.k8s.api.core.v1.CSIVolumeSource
 */
export interface CsiVolumeSource {
    /**
     * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
     *
     * @schema io.k8s.api.core.v1.CSIVolumeSource#driver
     */
    readonly driver: string;
    /**
     * Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
     *
     * @schema io.k8s.api.core.v1.CSIVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
     *
     * @schema io.k8s.api.core.v1.CSIVolumeSource#nodePublishSecretRef
     */
    readonly nodePublishSecretRef?: LocalObjectReference;
    /**
     * Specifies a read-only configuration for the volume. Defaults to false (read/write).
     *
     * @default false (read/write).
     * @schema io.k8s.api.core.v1.CSIVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
     *
     * @schema io.k8s.api.core.v1.CSIVolumeSource#volumeAttributes
     */
    readonly volumeAttributes?: {
        [key: string]: string;
    };
}
/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.DownwardAPIVolumeSource
 */
export interface DownwardApiVolumeSource {
    /**
     * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @default 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeSource#defaultMode
     */
    readonly defaultMode?: number;
    /**
     * Items is a list of downward API volume file
     *
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeSource#items
     */
    readonly items?: DownwardApiVolumeFile[];
}
/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.EmptyDirVolumeSource
 */
export interface EmptyDirVolumeSource {
    /**
     * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
     *
     * @schema io.k8s.api.core.v1.EmptyDirVolumeSource#medium
     */
    readonly medium?: string;
    /**
     * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
     *
     * @schema io.k8s.api.core.v1.EmptyDirVolumeSource#sizeLimit
     */
    readonly sizeLimit?: Quantity;
}
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 *
 * @schema io.k8s.api.core.v1.FlexVolumeSource
 */
export interface FlexVolumeSource {
    /**
     * Driver is the name of the driver to use for this volume.
     *
     * @schema io.k8s.api.core.v1.FlexVolumeSource#driver
     */
    readonly driver: string;
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
     *
     * @schema io.k8s.api.core.v1.FlexVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Optional: Extra command options if any.
     *
     * @schema io.k8s.api.core.v1.FlexVolumeSource#options
     */
    readonly options?: {
        [key: string]: string;
    };
    /**
     * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.FlexVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
     *
     * @schema io.k8s.api.core.v1.FlexVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
}
/**
 * Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 *
 * @schema io.k8s.api.core.v1.GitRepoVolumeSource
 */
export interface GitRepoVolumeSource {
    /**
     * Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
     *
     * @schema io.k8s.api.core.v1.GitRepoVolumeSource#directory
     */
    readonly directory?: string;
    /**
     * Repository URL
     *
     * @schema io.k8s.api.core.v1.GitRepoVolumeSource#repository
     */
    readonly repository: string;
    /**
     * Commit hash for the specified revision.
     *
     * @schema io.k8s.api.core.v1.GitRepoVolumeSource#revision
     */
    readonly revision?: string;
}
/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.GlusterfsVolumeSource
 */
export interface GlusterfsVolumeSource {
    /**
     * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @schema io.k8s.api.core.v1.GlusterfsVolumeSource#endpoints
     */
    readonly endpoints: string;
    /**
     * Path is the Glusterfs volume path. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @schema io.k8s.api.core.v1.GlusterfsVolumeSource#path
     */
    readonly path: string;
    /**
     * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     *
     * @default false. More info: https://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod
     * @schema io.k8s.api.core.v1.GlusterfsVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.ISCSIVolumeSource
 */
export interface IscsiVolumeSource {
    /**
     * whether support iSCSI Discovery CHAP authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#chapAuthDiscovery
     */
    readonly chapAuthDiscovery?: boolean;
    /**
     * whether support iSCSI Session CHAP authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#chapAuthSession
     */
    readonly chapAuthSession?: boolean;
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#initiatorName
     */
    readonly initiatorName?: string;
    /**
     * Target iSCSI Qualified Name.
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#iqn
     */
    readonly iqn: string;
    /**
     * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
     *
     * @default default' (tcp).
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#iscsiInterface
     */
    readonly iscsiInterface?: string;
    /**
     * iSCSI Target Lun number.
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#lun
     */
    readonly lun: number;
    /**
     * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#portals
     */
    readonly portals?: string[];
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
     *
     * @default false.
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * CHAP Secret for iSCSI target and initiator authentication
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
    /**
     * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
     *
     * @schema io.k8s.api.core.v1.ISCSIVolumeSource#targetPortal
     */
    readonly targetPortal: string;
}
/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource
 */
export interface PersistentVolumeClaimVolumeSource {
    /**
     * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource#claimName
     */
    readonly claimName: string;
    /**
     * Will force the ReadOnly setting in VolumeMounts. Default false.
     *
     * @schema io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
}
/**
 * Represents a projected volume source
 *
 * @schema io.k8s.api.core.v1.ProjectedVolumeSource
 */
export interface ProjectedVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @schema io.k8s.api.core.v1.ProjectedVolumeSource#defaultMode
     */
    readonly defaultMode?: number;
    /**
     * list of volume projections
     *
     * @schema io.k8s.api.core.v1.ProjectedVolumeSource#sources
     */
    readonly sources: VolumeProjection[];
}
/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.RBDVolumeSource
 */
export interface RbdVolumeSource {
    /**
     * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
     *
     * @schema io.k8s.api.core.v1.RBDVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The rados image name. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.RBDVolumeSource#image
     */
    readonly image: string;
    /**
     * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default etc/ceph/keyring. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDVolumeSource#keyring
     */
    readonly keyring?: string;
    /**
     * A collection of Ceph monitors. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @schema io.k8s.api.core.v1.RBDVolumeSource#monitors
     */
    readonly monitors: string[];
    /**
     * The rados pool name. Default is rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default rbd. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDVolumeSource#pool
     */
    readonly pool?: string;
    /**
     * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default false. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default nil. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
    /**
     * The rados user name. Default is admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     *
     * @default admin. More info: https://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it
     * @schema io.k8s.api.core.v1.RBDVolumeSource#user
     */
    readonly user?: string;
}
/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 *
 * @schema io.k8s.api.core.v1.ScaleIOVolumeSource
 */
export interface ScaleIoVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
     *
     * @default xfs".
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * The host address of the ScaleIO API Gateway.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#gateway
     */
    readonly gateway: string;
    /**
     * The name of the ScaleIO Protection Domain for the configured storage.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#protectionDomain
     */
    readonly protectionDomain?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#secretRef
     */
    readonly secretRef: LocalObjectReference;
    /**
     * Flag to enable/disable SSL communication with Gateway, default false
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#sslEnabled
     */
    readonly sslEnabled?: boolean;
    /**
     * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
     *
     * @default ThinProvisioned.
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#storageMode
     */
    readonly storageMode?: string;
    /**
     * The ScaleIO Storage Pool associated with the protection domain.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#storagePool
     */
    readonly storagePool?: string;
    /**
     * The name of the storage system as configured in ScaleIO.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#system
     */
    readonly system: string;
    /**
     * The name of a volume already created in the ScaleIO system that is associated with this volume source.
     *
     * @schema io.k8s.api.core.v1.ScaleIOVolumeSource#volumeName
     */
    readonly volumeName?: string;
}
/**
 * Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
 *
 * @schema io.k8s.api.core.v1.SecretVolumeSource
 */
export interface SecretVolumeSource {
    /**
     * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @default 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @schema io.k8s.api.core.v1.SecretVolumeSource#defaultMode
     */
    readonly defaultMode?: number;
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     *
     * @schema io.k8s.api.core.v1.SecretVolumeSource#items
     */
    readonly items?: KeyToPath[];
    /**
     * Specify whether the Secret or its keys must be defined
     *
     * @schema io.k8s.api.core.v1.SecretVolumeSource#optional
     */
    readonly optional?: boolean;
    /**
     * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
     *
     * @schema io.k8s.api.core.v1.SecretVolumeSource#secretName
     */
    readonly secretName?: string;
}
/**
 * Represents a StorageOS persistent volume resource.
 *
 * @schema io.k8s.api.core.v1.StorageOSVolumeSource
 */
export interface StorageOsVolumeSource {
    /**
     * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
     *
     * @schema io.k8s.api.core.v1.StorageOSVolumeSource#fsType
     */
    readonly fsType?: string;
    /**
     * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     *
     * @default false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
     * @schema io.k8s.api.core.v1.StorageOSVolumeSource#readOnly
     */
    readonly readOnly?: boolean;
    /**
     * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
     *
     * @schema io.k8s.api.core.v1.StorageOSVolumeSource#secretRef
     */
    readonly secretRef?: LocalObjectReference;
    /**
     * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
     *
     * @schema io.k8s.api.core.v1.StorageOSVolumeSource#volumeName
     */
    readonly volumeName?: string;
    /**
     * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
     *
     * @schema io.k8s.api.core.v1.StorageOSVolumeSource#volumeNamespace
     */
    readonly volumeNamespace?: string;
}
/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 *
 * @schema io.k8s.api.core.v1.ScopedResourceSelectorRequirement
 */
export interface ScopedResourceSelectorRequirement {
    /**
     * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
     *
     * @schema io.k8s.api.core.v1.ScopedResourceSelectorRequirement#operator
     */
    readonly operator: string;
    /**
     * The name of the scope that the selector applies to.
     *
     * @schema io.k8s.api.core.v1.ScopedResourceSelectorRequirement#scopeName
     */
    readonly scopeName: string;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
     *
     * @schema io.k8s.api.core.v1.ScopedResourceSelectorRequirement#values
     */
    readonly values?: string[];
}
/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 *
 * @schema io.k8s.api.core.v1.ClientIPConfig
 */
export interface ClientIpConfig {
    /**
     * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
     *
     * @schema io.k8s.api.core.v1.ClientIPConfig#timeoutSeconds
     */
    readonly timeoutSeconds?: number;
}
/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 *
 * @schema io.k8s.api.networking.v1beta1.HTTPIngressRuleValue
 */
export interface HttpIngressRuleValue {
    /**
     * A collection of paths that map requests to backends.
     *
     * @schema io.k8s.api.networking.v1beta1.HTTPIngressRuleValue#paths
     */
    readonly paths: HttpIngressPath[];
}
/**
 * NetworkPolicyPort describes a port to allow traffic on
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyPort
 */
export interface NetworkPolicyPort {
    /**
     * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyPort#port
     */
    readonly port?: IntOrString;
    /**
     * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyPort#protocol
     */
    readonly protocol?: string;
}
/**
 * NetworkPolicyPeer describes a peer to allow traffic from. Only certain combinations of fields are allowed
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyPeer
 */
export interface NetworkPolicyPeer {
    /**
     * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyPeer#ipBlock
     */
    readonly ipBlock?: IpBlock;
    /**
     * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
  
  If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyPeer#namespaceSelector
     */
    readonly namespaceSelector?: LabelSelector;
    /**
     * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
  
  If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
     *
     * @schema io.k8s.api.networking.v1.NetworkPolicyPeer#podSelector
     */
    readonly podSelector?: LabelSelector;
}
/**
 * IDRange provides a min/max of an allowed range of IDs.
 *
 * @schema io.k8s.api.policy.v1beta1.IDRange
 */
export interface IdRange {
    /**
     * max is the end of the range, inclusive.
     *
     * @schema io.k8s.api.policy.v1beta1.IDRange#max
     */
    readonly max: number;
    /**
     * min is the start of the range, inclusive.
     *
     * @schema io.k8s.api.policy.v1beta1.IDRange#min
     */
    readonly min: number;
}
/**
 * EnvVarSource represents a source for the value of an EnvVar.
 *
 * @schema io.k8s.api.core.v1.EnvVarSource
 */
export interface EnvVarSource {
    /**
     * Selects a key of a ConfigMap.
     *
     * @schema io.k8s.api.core.v1.EnvVarSource#configMapKeyRef
     */
    readonly configMapKeyRef?: ConfigMapKeySelector;
    /**
     * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
     *
     * @schema io.k8s.api.core.v1.EnvVarSource#fieldRef
     */
    readonly fieldRef?: ObjectFieldSelector;
    /**
     * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
     *
     * @schema io.k8s.api.core.v1.EnvVarSource#resourceFieldRef
     */
    readonly resourceFieldRef?: ResourceFieldSelector;
    /**
     * Selects a key of a secret in the pod's namespace
     *
     * @schema io.k8s.api.core.v1.EnvVarSource#secretKeyRef
     */
    readonly secretKeyRef?: SecretKeySelector;
}
/**
 * ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
 *
 * @schema io.k8s.api.core.v1.ConfigMapEnvSource
 */
export interface ConfigMapEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.ConfigMapEnvSource#name
     */
    readonly name?: string;
    /**
     * Specify whether the ConfigMap must be defined
     *
     * @schema io.k8s.api.core.v1.ConfigMapEnvSource#optional
     */
    readonly optional?: boolean;
}
/**
 * SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
 *
 * @schema io.k8s.api.core.v1.SecretEnvSource
 */
export interface SecretEnvSource {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.SecretEnvSource#name
     */
    readonly name?: string;
    /**
     * Specify whether the Secret must be defined
     *
     * @schema io.k8s.api.core.v1.SecretEnvSource#optional
     */
    readonly optional?: boolean;
}
/**
 * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale
 */
export interface CustomResourceSubresourceScale {
    /**
     * LabelSelectorPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Selector. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status or .spec. Must be set to work with HPA. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the CustomResource, the status label selector value in the /scale subresource will default to the empty string.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale#labelSelectorPath
     */
    readonly labelSelectorPath?: string;
    /**
     * SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the /scale subresource will return an error on GET.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale#specReplicasPath
     */
    readonly specReplicasPath: string;
    /**
     * StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the /scale subresource will default to 0.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale#statusReplicasPath
     */
    readonly statusReplicasPath: string;
}
/**
 * JSONSchemaProps is a JSON-Schema following Specification Draft 4 (http://json-schema.org/).
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps
 */
export interface JsonSchemaProps {
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#$ref
     */
    readonly ref?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#$schema
     */
    readonly schema?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#additionalItems
     */
    readonly additionalItems?: any;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#additionalProperties
     */
    readonly additionalProperties?: any;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#allOf
     */
    readonly allOf?: JsonSchemaProps[];
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#anyOf
     */
    readonly anyOf?: JsonSchemaProps[];
    /**
     * default is a default value for undefined object fields. Defaulting is an alpha feature under the CustomResourceDefaulting feature gate. Defaulting requires spec.preserveUnknownFields to be false.
     *
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#default
     */
    readonly default?: any;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#definitions
     */
    readonly definitions?: {
        [key: string]: JsonSchemaProps;
    };
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#dependencies
     */
    readonly dependencies?: {
        [key: string]: any;
    };
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#description
     */
    readonly description?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#enum
     */
    readonly enum?: any[];
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#example
     */
    readonly example?: any;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#exclusiveMaximum
     */
    readonly exclusiveMaximum?: boolean;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#exclusiveMinimum
     */
    readonly exclusiveMinimum?: boolean;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#externalDocs
     */
    readonly externalDocs?: ExternalDocumentation;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#format
     */
    readonly format?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#id
     */
    readonly id?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#items
     */
    readonly items?: any;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#maxItems
     */
    readonly maxItems?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#maxLength
     */
    readonly maxLength?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#maxProperties
     */
    readonly maxProperties?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#maximum
     */
    readonly maximum?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#minItems
     */
    readonly minItems?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#minLength
     */
    readonly minLength?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#minProperties
     */
    readonly minProperties?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#minimum
     */
    readonly minimum?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#multipleOf
     */
    readonly multipleOf?: number;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#not
     */
    readonly not?: JsonSchemaProps;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#nullable
     */
    readonly nullable?: boolean;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#oneOf
     */
    readonly oneOf?: JsonSchemaProps[];
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#pattern
     */
    readonly pattern?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#patternProperties
     */
    readonly patternProperties?: {
        [key: string]: JsonSchemaProps;
    };
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#properties
     */
    readonly properties?: {
        [key: string]: JsonSchemaProps;
    };
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#required
     */
    readonly required?: string[];
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#title
     */
    readonly title?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#type
     */
    readonly type?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSONSchemaProps#uniqueItems
     */
    readonly uniqueItems?: boolean;
}
/**
 * MetricIdentifier defines the name and optionally selector for a metric
 *
 * @schema io.k8s.api.autoscaling.v2beta2.MetricIdentifier
 */
export interface MetricIdentifier {
    /**
     * name is the name of the given metric
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricIdentifier#name
     */
    readonly name: string;
    /**
     * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricIdentifier#selector
     */
    readonly selector?: LabelSelector;
}
/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 *
 * @schema io.k8s.api.autoscaling.v2beta2.MetricTarget
 */
export interface MetricTarget {
    /**
     * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricTarget#averageUtilization
     */
    readonly averageUtilization?: number;
    /**
     * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricTarget#averageValue
     */
    readonly averageValue?: Quantity;
    /**
     * type represents whether the metric type is Utilization, Value, or AverageValue
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricTarget#type
     */
    readonly type: string;
    /**
     * value is the target value of the metric (as a quantity).
     *
     * @schema io.k8s.api.autoscaling.v2beta2.MetricTarget#value
     */
    readonly value?: Quantity;
}
/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 *
 * @schema io.k8s.api.core.v1.NodeSelectorTerm
 */
export interface NodeSelectorTerm {
    /**
     * A list of node selector requirements by node's labels.
     *
     * @schema io.k8s.api.core.v1.NodeSelectorTerm#matchExpressions
     */
    readonly matchExpressions?: NodeSelectorRequirement[];
    /**
     * A list of node selector requirements by node's fields.
     *
     * @schema io.k8s.api.core.v1.NodeSelectorTerm#matchFields
     */
    readonly matchFields?: NodeSelectorRequirement[];
}
/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 *
 * @schema io.k8s.api.core.v1.PreferredSchedulingTerm
 */
export interface PreferredSchedulingTerm {
    /**
     * A node selector term, associated with the corresponding weight.
     *
     * @schema io.k8s.api.core.v1.PreferredSchedulingTerm#preference
     */
    readonly preference: NodeSelectorTerm;
    /**
     * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     *
     * @schema io.k8s.api.core.v1.PreferredSchedulingTerm#weight
     */
    readonly weight: number;
}
/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 *
 * @schema io.k8s.api.core.v1.WeightedPodAffinityTerm
 */
export interface WeightedPodAffinityTerm {
    /**
     * Required. A pod affinity term, associated with the corresponding weight.
     *
     * @schema io.k8s.api.core.v1.WeightedPodAffinityTerm#podAffinityTerm
     */
    readonly podAffinityTerm: PodAffinityTerm;
    /**
     * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
     *
     * @schema io.k8s.api.core.v1.WeightedPodAffinityTerm#weight
     */
    readonly weight: number;
}
/**
 * Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
 *
 * @schema io.k8s.api.core.v1.PodAffinityTerm
 */
export interface PodAffinityTerm {
    /**
     * A label query over a set of resources, in this case pods.
     *
     * @schema io.k8s.api.core.v1.PodAffinityTerm#labelSelector
     */
    readonly labelSelector?: LabelSelector;
    /**
     * namespaces specifies which namespaces the labelSelector applies to (matches against); null or empty list means "this pod's namespace"
     *
     * @schema io.k8s.api.core.v1.PodAffinityTerm#namespaces
     */
    readonly namespaces?: string[];
    /**
     * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
     *
     * @schema io.k8s.api.core.v1.PodAffinityTerm#topologyKey
     */
    readonly topologyKey: string;
}
/**
 * Handler defines a specific action that should be taken
 *
 * @schema io.k8s.api.core.v1.Handler
 */
export interface Handler {
    /**
     * One and only one of the following should be specified. Exec specifies the action to take.
     *
     * @schema io.k8s.api.core.v1.Handler#exec
     */
    readonly exec?: ExecAction;
    /**
     * HTTPGet specifies the http request to perform.
     *
     * @schema io.k8s.api.core.v1.Handler#httpGet
     */
    readonly httpGet?: HttpGetAction;
    /**
     * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
     *
     * @schema io.k8s.api.core.v1.Handler#tcpSocket
     */
    readonly tcpSocket?: TcpSocketAction;
}
/**
 * ExecAction describes a "run in container" action.
 *
 * @schema io.k8s.api.core.v1.ExecAction
 */
export interface ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     *
     * @schema io.k8s.api.core.v1.ExecAction#command
     */
    readonly command?: string[];
}
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 *
 * @schema io.k8s.api.core.v1.HTTPGetAction
 */
export interface HttpGetAction {
    /**
     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     *
     * @schema io.k8s.api.core.v1.HTTPGetAction#host
     */
    readonly host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     *
     * @schema io.k8s.api.core.v1.HTTPGetAction#httpHeaders
     */
    readonly httpHeaders?: HttpHeader[];
    /**
     * Path to access on the HTTP server.
     *
     * @schema io.k8s.api.core.v1.HTTPGetAction#path
     */
    readonly path?: string;
    /**
     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     *
     * @schema io.k8s.api.core.v1.HTTPGetAction#port
     */
    readonly port: IntOrString;
    /**
     * Scheme to use for connecting to the host. Defaults to HTTP.
     *
     * @default HTTP.
     * @schema io.k8s.api.core.v1.HTTPGetAction#scheme
     */
    readonly scheme?: string;
}
/**
 * TCPSocketAction describes an action based on opening a socket
 *
 * @schema io.k8s.api.core.v1.TCPSocketAction
 */
export interface TcpSocketAction {
    /**
     * Optional: Host name to connect to, defaults to the pod IP.
     *
     * @schema io.k8s.api.core.v1.TCPSocketAction#host
     */
    readonly host?: string;
    /**
     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
     *
     * @schema io.k8s.api.core.v1.TCPSocketAction#port
     */
    readonly port: IntOrString;
}
/**
 * Adds and removes POSIX capabilities from running containers.
 *
 * @schema io.k8s.api.core.v1.Capabilities
 */
export interface Capabilities {
    /**
     * Added capabilities
     *
     * @schema io.k8s.api.core.v1.Capabilities#add
     */
    readonly add?: string[];
    /**
     * Removed capabilities
     *
     * @schema io.k8s.api.core.v1.Capabilities#drop
     */
    readonly drop?: string[];
}
/**
 * Maps a string key to a path within a volume.
 *
 * @schema io.k8s.api.core.v1.KeyToPath
 */
export interface KeyToPath {
    /**
     * The key to project.
     *
     * @schema io.k8s.api.core.v1.KeyToPath#key
     */
    readonly key: string;
    /**
     * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @schema io.k8s.api.core.v1.KeyToPath#mode
     */
    readonly mode?: number;
    /**
     * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     *
     * @schema io.k8s.api.core.v1.KeyToPath#path
     */
    readonly path: string;
}
/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 *
 * @schema io.k8s.api.core.v1.DownwardAPIVolumeFile
 */
export interface DownwardApiVolumeFile {
    /**
     * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
     *
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeFile#fieldRef
     */
    readonly fieldRef?: ObjectFieldSelector;
    /**
     * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     *
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeFile#mode
     */
    readonly mode?: number;
    /**
     * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
     *
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeFile#path
     */
    readonly path: string;
    /**
     * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
     *
     * @schema io.k8s.api.core.v1.DownwardAPIVolumeFile#resourceFieldRef
     */
    readonly resourceFieldRef?: ResourceFieldSelector;
}
/**
 * Projection that may be projected along with other supported volume types
 *
 * @schema io.k8s.api.core.v1.VolumeProjection
 */
export interface VolumeProjection {
    /**
     * information about the configMap data to project
     *
     * @schema io.k8s.api.core.v1.VolumeProjection#configMap
     */
    readonly configMap?: ConfigMapProjection;
    /**
     * information about the downwardAPI data to project
     *
     * @schema io.k8s.api.core.v1.VolumeProjection#downwardAPI
     */
    readonly downwardAPI?: DownwardApiProjection;
    /**
     * information about the secret data to project
     *
     * @schema io.k8s.api.core.v1.VolumeProjection#secret
     */
    readonly secret?: SecretProjection;
    /**
     * information about the serviceAccountToken data to project
     *
     * @schema io.k8s.api.core.v1.VolumeProjection#serviceAccountToken
     */
    readonly serviceAccountToken?: ServiceAccountTokenProjection;
}
/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 *
 * @schema io.k8s.api.networking.v1beta1.HTTPIngressPath
 */
export interface HttpIngressPath {
    /**
     * Backend defines the referenced service endpoint to which the traffic will be forwarded to.
     *
     * @schema io.k8s.api.networking.v1beta1.HTTPIngressPath#backend
     */
    readonly backend: IngressBackend;
    /**
     * Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
     *
     * @schema io.k8s.api.networking.v1beta1.HTTPIngressPath#path
     */
    readonly path?: string;
}
/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 *
 * @schema io.k8s.api.networking.v1.IPBlock
 */
export interface IpBlock {
    /**
     * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24"
     *
     * @schema io.k8s.api.networking.v1.IPBlock#cidr
     */
    readonly cidr: string;
    /**
     * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range
     *
     * @schema io.k8s.api.networking.v1.IPBlock#except
     */
    readonly except?: string[];
}
/**
 * Selects a key from a ConfigMap.
 *
 * @schema io.k8s.api.core.v1.ConfigMapKeySelector
 */
export interface ConfigMapKeySelector {
    /**
     * The key to select.
     *
     * @schema io.k8s.api.core.v1.ConfigMapKeySelector#key
     */
    readonly key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.ConfigMapKeySelector#name
     */
    readonly name?: string;
    /**
     * Specify whether the ConfigMap or its key must be defined
     *
     * @schema io.k8s.api.core.v1.ConfigMapKeySelector#optional
     */
    readonly optional?: boolean;
}
/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 *
 * @schema io.k8s.api.core.v1.ObjectFieldSelector
 */
export interface ObjectFieldSelector {
    /**
     * Version of the schema the FieldPath is written in terms of, defaults to "v1".
     *
     * @schema io.k8s.api.core.v1.ObjectFieldSelector#apiVersion
     */
    readonly apiVersion?: string;
    /**
     * Path of the field to select in the specified API version.
     *
     * @schema io.k8s.api.core.v1.ObjectFieldSelector#fieldPath
     */
    readonly fieldPath: string;
}
/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 *
 * @schema io.k8s.api.core.v1.ResourceFieldSelector
 */
export interface ResourceFieldSelector {
    /**
     * Container name: required for volumes, optional for env vars
     *
     * @schema io.k8s.api.core.v1.ResourceFieldSelector#containerName
     */
    readonly containerName?: string;
    /**
     * Specifies the output format of the exposed resources, defaults to "1"
     *
     * @schema io.k8s.api.core.v1.ResourceFieldSelector#divisor
     */
    readonly divisor?: Quantity;
    /**
     * Required: resource to select
     *
     * @schema io.k8s.api.core.v1.ResourceFieldSelector#resource
     */
    readonly resource: string;
}
/**
 * SecretKeySelector selects a key of a Secret.
 *
 * @schema io.k8s.api.core.v1.SecretKeySelector
 */
export interface SecretKeySelector {
    /**
     * The key of the secret to select from.  Must be a valid secret key.
     *
     * @schema io.k8s.api.core.v1.SecretKeySelector#key
     */
    readonly key: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.SecretKeySelector#name
     */
    readonly name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     *
     * @schema io.k8s.api.core.v1.SecretKeySelector#optional
     */
    readonly optional?: boolean;
}
/**
 * ExternalDocumentation allows referencing an external resource for extended documentation.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation
 */
export interface ExternalDocumentation {
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation#description
     */
    readonly description?: string;
    /**
     * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ExternalDocumentation#url
     */
    readonly url?: string;
}
/**
 * A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 *
 * @schema io.k8s.api.core.v1.NodeSelectorRequirement
 */
export interface NodeSelectorRequirement {
    /**
     * The label key that the selector applies to.
     *
     * @schema io.k8s.api.core.v1.NodeSelectorRequirement#key
     */
    readonly key: string;
    /**
     * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
     *
     * @schema io.k8s.api.core.v1.NodeSelectorRequirement#operator
     */
    readonly operator: string;
    /**
     * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
     *
     * @schema io.k8s.api.core.v1.NodeSelectorRequirement#values
     */
    readonly values?: string[];
}
/**
 * HTTPHeader describes a custom header to be used in HTTP probes
 *
 * @schema io.k8s.api.core.v1.HTTPHeader
 */
export interface HttpHeader {
    /**
     * The header field name
     *
     * @schema io.k8s.api.core.v1.HTTPHeader#name
     */
    readonly name: string;
    /**
     * The header field value
     *
     * @schema io.k8s.api.core.v1.HTTPHeader#value
     */
    readonly value: string;
}
/**
 * Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
 *
 * @schema io.k8s.api.core.v1.ConfigMapProjection
 */
export interface ConfigMapProjection {
    /**
     * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     *
     * @schema io.k8s.api.core.v1.ConfigMapProjection#items
     */
    readonly items?: KeyToPath[];
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.ConfigMapProjection#name
     */
    readonly name?: string;
    /**
     * Specify whether the ConfigMap or its keys must be defined
     *
     * @schema io.k8s.api.core.v1.ConfigMapProjection#optional
     */
    readonly optional?: boolean;
}
/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 *
 * @schema io.k8s.api.core.v1.DownwardAPIProjection
 */
export interface DownwardApiProjection {
    /**
     * Items is a list of DownwardAPIVolume file
     *
     * @schema io.k8s.api.core.v1.DownwardAPIProjection#items
     */
    readonly items?: DownwardApiVolumeFile[];
}
/**
 * Adapts a secret into a projected volume.

The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 *
 * @schema io.k8s.api.core.v1.SecretProjection
 */
export interface SecretProjection {
    /**
     * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
     *
     * @schema io.k8s.api.core.v1.SecretProjection#items
     */
    readonly items?: KeyToPath[];
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     *
     * @schema io.k8s.api.core.v1.SecretProjection#name
     */
    readonly name?: string;
    /**
     * Specify whether the Secret or its key must be defined
     *
     * @schema io.k8s.api.core.v1.SecretProjection#optional
     */
    readonly optional?: boolean;
}
/**
 * ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
 *
 * @schema io.k8s.api.core.v1.ServiceAccountTokenProjection
 */
export interface ServiceAccountTokenProjection {
    /**
     * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
     *
     * @schema io.k8s.api.core.v1.ServiceAccountTokenProjection#audience
     */
    readonly audience?: string;
    /**
     * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
     *
     * @default 1 hour and must be at least 10 minutes.
     * @schema io.k8s.api.core.v1.ServiceAccountTokenProjection#expirationSeconds
     */
    readonly expirationSeconds?: number;
    /**
     * Path is the path relative to the mount point of the file to project the token into.
     *
     * @schema io.k8s.api.core.v1.ServiceAccountTokenProjection#path
     */
    readonly path: string;
}
