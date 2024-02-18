// Taken from https://github.com/sindresorhus/type-fest

/** Use to flatten the type output to improve type hints shown in editors. */
// eslint-disable-next-line @typescript-eslint/ban-types
export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};
