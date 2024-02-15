let some: unknown;
some = 'Text';

let str: string = some as string;

const obj: object = {};
Object.assign(obj, some);

export {};
