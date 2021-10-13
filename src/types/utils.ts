export type ObjectValues<T> = T[keyof T];

export type WithUpdatedAt<T> = T & { updatedAt: Date };
