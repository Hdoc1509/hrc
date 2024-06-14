// FIX: Cannot find module './*.astro' or its corresponding type declarations.
// see: https://github.com/withastro/language-tools/issues/584
export { Demo } from "./Demo";
// @ts-ignore
export { default as SourceCode } from "./SourceCode.astro";
// @ts-ignore
export { default as SourceCodeWithDisabled } from "./SourceCodeWithDisabled.astro";
// @ts-ignore
export { default as MultiSourceCode } from "./MultiSourceCode.astro";
// @ts-ignore
export { default as InstallCommand } from "./InstallCommand.astro";
