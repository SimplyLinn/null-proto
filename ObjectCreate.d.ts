import NullProto from ".";

type ReadonlyKeys<T> = {
    [key in keyof T]: T[key] extends PropertyDescriptor ? false extends T[key]['writable'] ? key : never : never; 
}[keyof T];

type ParsePropertyDescritporMap<T extends PropertyDescriptorMap> = PropertyDescriptorMap extends T ? any : {
    -readonly [key in keyof Omit<T, ReadonlyKeys<T>>]: T[key] extends TypedPropertyDescriptor<infer P> ? P : any;
} & {
    readonly [key in keyof Pick<T, ReadonlyKeys<T>>]: T[key] extends TypedPropertyDescriptor<infer P> ? P : any;
};

declare global {
    interface ObjectConstructor {
        create<T = any>(prototype: null): NullProto<T>;
        create<const T extends PropertyDescriptorMap = any>(prototype: null, properties: T & ThisType<any>): PropertyDescriptorMap extends T ? NullProto<any> : NullProto<{
            [key in keyof ParsePropertyDescritporMap<T>]: ParsePropertyDescritporMap<T>[key];
        }>;
    }
}
