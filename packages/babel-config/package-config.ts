import type { Package } from "./consts";

export const createPackageConfig = (pkg: Package) => {
  return [
    "import",
    {
      libraryName: `@hrc/${pkg}`,
      libraryDirectory: "dist",
      camel2DashComponentName: false,
      transformToDefaultImport: false,
    },
    `@hrc/${pkg}`,
  ] as const;
};
