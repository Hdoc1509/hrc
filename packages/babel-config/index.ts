import { SUPPORTED_PACKAGES, type Package } from "./consts.js";
import { ValidationError } from "./errors.js";
import { createPackageConfig } from "./package-config.js";

const config = (packages: "all" | Package | Package[]) => {
  if (packages === "all") return SUPPORTED_PACKAGES.map(createPackageConfig);

  if (!(Array.isArray(packages) || typeof packages === "string"))
    throw ValidationError.receivedArgs(packages);

  const parsedPackages = [packages].flat();

  if (parsedPackages.some((pkg) => typeof pkg !== "string"))
    throw ValidationError.receivedArgs(packages);

  for (const pkg of parsedPackages) {
    if (!SUPPORTED_PACKAGES.includes(pkg))
      throw ValidationError.selectedPackage(pkg);
  }

  return parsedPackages.map(createPackageConfig);
};

export default config;
