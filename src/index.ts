type ByObject<T extends object> = NullProtoMap<T>[NullProtoKey<T>];

type OBJECT_KEYS = 'toString' | 'toLocaleString' | 'constructor' | 'valueOf' | 'hasOwnProperty' | 'isPrototypeOf' | 'propertyIsEnumerable';

type ObjectKeys<T> = {
    [key in OBJECT_KEYS]: key extends keyof T ? T[key] : never;
};

type KeyVal<T, K extends OBJECT_KEYS> = ObjectKeys<T>[K]

declare const MARKER: unique symbol;

type RemoveIndex<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
};

type PatchType<T> = string extends keyof T ? {
    [key in keyof (T & { [key in OBJECT_KEYS ]: T[string] })]: key extends OBJECT_KEYS ? key extends keyof RemoveIndex<T> ? T[key] : T[string] : T[key & keyof T];
} : {
    [key in keyof T]: key extends OBJECT_KEYS ? T[key & keyof T] : T[key];
};

type FillType<T> = string extends keyof T ? {
    [key in keyof (T & { [key in OBJECT_KEYS ]: T[string] })]: key extends OBJECT_KEYS ? T[string] : T[key & keyof T];
} & { [MARKER]: T } : {
    [key in keyof T]: key extends OBJECT_KEYS ? T[key & keyof T] : T[key];
} & { [MARKER]: T };


type NullProto<T> = T extends FillType<infer Q> | ByObject<PatchType<infer Q>> ? FillType<Q> | ByObject<PatchType<Q>> : FillType<T> | ByObject<PatchType<T>>;

declare namespace NullProto {
    export type ToBasic<T> = T extends NullProto<infer Q> ? Q : T;
    export type Inner<T extends NullProto<any>> = T extends NullProto<infer Q> ? Q : never;
}
export type ToBasic<T> = NullProto.ToBasic<T>;
export type Inner<T extends NullProto<any>> = NullProto.Inner<T>;

export type {
    NullProto as default,
};

// ########################################################
// # Hello Alice, wanna see how deep the rabbithole goes? #
// ########################################################

declare abstract class NullProtoBase<T> {
    #marker: T;
    [key: symbol]: symbol extends keyof T ? T[symbol] : never;
    [key: string | number]: (string extends keyof T ? T[string] : never) | (number extends keyof T ? T[number] : never) | KeyVal<T, OBJECT_KEYS>;
}


type NullProtoKey<Obj> = `${'toString' extends keyof Obj ? '1' : '0'}${'toLocaleString' extends keyof Obj ? '1' : '0'}${'constructor' extends keyof Obj ? '1' : '0'}${'valueOf' extends keyof Obj ? '1' : '0'}${'hasOwnProperty' extends keyof Obj ? '1' : '0'}${'isPropertyOf' extends keyof Obj ? '1' : '0'}${'propertyIsEnumerable' extends keyof Obj ? '1' : '0'}`;

declare abstract class NP0<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP1<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP2<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP3<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP4<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP5<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP6<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP7<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP8<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP9<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP10<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP11<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP12<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP13<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP14<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP15<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP16<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP17<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP18<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP19<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP20<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP21<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP22<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP23<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP24<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP25<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP26<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP27<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP28<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP29<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP30<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP31<T> extends NullProtoBase<T> {
    private toString: never;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP32<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP33<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP34<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP35<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP36<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP37<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP38<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP39<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP40<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP41<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP42<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP43<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP44<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP45<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP46<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP47<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP48<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP49<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP50<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP51<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP52<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP53<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP54<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP55<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP56<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP57<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP58<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP59<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP60<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP61<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP62<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP63<T> extends NullProtoBase<T> {
    private toString: never;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP64<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP65<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP66<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP67<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP68<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP69<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP70<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP71<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP72<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP73<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP74<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP75<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP76<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP77<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP78<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP79<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP80<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP81<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP82<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP83<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP84<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP85<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP86<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP87<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP88<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP89<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP90<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP91<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP92<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP93<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP94<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP95<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    private toLocaleString: never;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP96<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP97<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP98<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP99<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP100<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP101<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP102<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP103<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP104<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP105<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP106<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP107<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP108<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP109<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP110<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP111<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    private ['constructor']: never;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP112<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP113<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP114<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP115<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP116<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP117<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP118<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP119<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    private valueOf: never;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP120<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP121<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP122<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP123<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    private hasOwnProperty: never;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP124<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    private propertyIsEnumerable: never;
}
declare abstract class NP125<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    private isPrototypeOf: never;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}
declare abstract class NP126<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    private propertyIsEnumerable: never;
}
declare abstract class NP127<T> extends NullProtoBase<T> {
    toString: KeyVal<T, 'toString'>;
    toLocaleString: KeyVal<T, 'toLocaleString'>;
    ['constructor']: KeyVal<T, 'constructor'>;
    valueOf: KeyVal<T, 'valueOf'>;
    hasOwnProperty: KeyVal<T, 'hasOwnProperty'>;
    isPrototypeOf: KeyVal<T, 'isPrototypeOf'>;
    propertyIsEnumerable: KeyVal<T, 'propertyIsEnumerable'>;
}

export type NullProtoMap<T> = {
    '0000000': NP0<T>,
    '0000001': NP1<T>,
    '0000010': NP2<T>,
    '0000011': NP3<T>,
    '0000100': NP4<T>,
    '0000101': NP5<T>,
    '0000110': NP6<T>,
    '0000111': NP7<T>,
    '0001000': NP8<T>,
    '0001001': NP9<T>,
    '0001010': NP10<T>,
    '0001011': NP11<T>,
    '0001100': NP12<T>,
    '0001101': NP13<T>,
    '0001110': NP14<T>,
    '0001111': NP15<T>,
    '0010000': NP16<T>,
    '0010001': NP17<T>,
    '0010010': NP18<T>,
    '0010011': NP19<T>,
    '0010100': NP20<T>,
    '0010101': NP21<T>,
    '0010110': NP22<T>,
    '0010111': NP23<T>,
    '0011000': NP24<T>,
    '0011001': NP25<T>,
    '0011010': NP26<T>,
    '0011011': NP27<T>,
    '0011100': NP28<T>,
    '0011101': NP29<T>,
    '0011110': NP30<T>,
    '0011111': NP31<T>,
    '0100000': NP32<T>,
    '0100001': NP33<T>,
    '0100010': NP34<T>,
    '0100011': NP35<T>,
    '0100100': NP36<T>,
    '0100101': NP37<T>,
    '0100110': NP38<T>,
    '0100111': NP39<T>,
    '0101000': NP40<T>,
    '0101001': NP41<T>,
    '0101010': NP42<T>,
    '0101011': NP43<T>,
    '0101100': NP44<T>,
    '0101101': NP45<T>,
    '0101110': NP46<T>,
    '0101111': NP47<T>,
    '0110000': NP48<T>,
    '0110001': NP49<T>,
    '0110010': NP50<T>,
    '0110011': NP51<T>,
    '0110100': NP52<T>,
    '0110101': NP53<T>,
    '0110110': NP54<T>,
    '0110111': NP55<T>,
    '0111000': NP56<T>,
    '0111001': NP57<T>,
    '0111010': NP58<T>,
    '0111011': NP59<T>,
    '0111100': NP60<T>,
    '0111101': NP61<T>,
    '0111110': NP62<T>,
    '0111111': NP63<T>,
    '1000000': NP64<T>,
    '1000001': NP65<T>,
    '1000010': NP66<T>,
    '1000011': NP67<T>,
    '1000100': NP68<T>,
    '1000101': NP69<T>,
    '1000110': NP70<T>,
    '1000111': NP71<T>,
    '1001000': NP72<T>,
    '1001001': NP73<T>,
    '1001010': NP74<T>,
    '1001011': NP75<T>,
    '1001100': NP76<T>,
    '1001101': NP77<T>,
    '1001110': NP78<T>,
    '1001111': NP79<T>,
    '1010000': NP80<T>,
    '1010001': NP81<T>,
    '1010010': NP82<T>,
    '1010011': NP83<T>,
    '1010100': NP84<T>,
    '1010101': NP85<T>,
    '1010110': NP86<T>,
    '1010111': NP87<T>,
    '1011000': NP88<T>,
    '1011001': NP89<T>,
    '1011010': NP90<T>,
    '1011011': NP91<T>,
    '1011100': NP92<T>,
    '1011101': NP93<T>,
    '1011110': NP94<T>,
    '1011111': NP95<T>,
    '1100000': NP96<T>,
    '1100001': NP97<T>,
    '1100010': NP98<T>,
    '1100011': NP99<T>,
    '1100100': NP100<T>,
    '1100101': NP101<T>,
    '1100110': NP102<T>,
    '1100111': NP103<T>,
    '1101000': NP104<T>,
    '1101001': NP105<T>,
    '1101010': NP106<T>,
    '1101011': NP107<T>,
    '1101100': NP108<T>,
    '1101101': NP109<T>,
    '1101110': NP110<T>,
    '1101111': NP111<T>,
    '1110000': NP112<T>,
    '1110001': NP113<T>,
    '1110010': NP114<T>,
    '1110011': NP115<T>,
    '1110100': NP116<T>,
    '1110101': NP117<T>,
    '1110110': NP118<T>,
    '1110111': NP119<T>,
    '1111000': NP120<T>,
    '1111001': NP121<T>,
    '1111010': NP122<T>,
    '1111011': NP123<T>,
    '1111100': NP124<T>,
    '1111101': NP125<T>,
    '1111110': NP126<T>,
    '1111111': NP127<T>,
};
