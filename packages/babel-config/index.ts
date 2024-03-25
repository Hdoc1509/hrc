type Package = (typeof SUPPORTED_PACKAGES)[number];

const SUPPORTED_PACKAGES = ["button", "input", "spinner"] as const;
const packagesList = SUPPORTED_PACKAGES.map((pkg) => `@hrc/${pkg}`).join(", ");

const logPrefix = "\n[@hrc/babel-config]";

const createPackageConfig = (pkg: Package) => {
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

const config = (packages: "all" | Package | Package[]) => {
  if (packages === "all") return SUPPORTED_PACKAGES.map(createPackageConfig);

  if (!(Array.isArray(packages) || typeof packages === "string"))
    throw new Error(
      `${logPrefix} Error: packages must be an array or a string`,
    );

  const parsedPackages = [packages].flat();

  if (parsedPackages.some((pkg) => typeof pkg !== "string"))
    throw new Error(`${logPrefix} Error: packages must be an array of strings`);

  for (const pkg of parsedPackages) {
    if (!SUPPORTED_PACKAGES.includes(pkg))
      throw new Error(
        `${logPrefix} Error: "${pkg}" package is not available` +
          `${logPrefix} Available packages: ${packagesList}`,
      );
  }

  return parsedPackages.map(createPackageConfig);
};

export default config;
