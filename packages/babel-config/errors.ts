import { SUPPORTED_PACKAGES } from "./consts.js";

const logPrefix = "\n[@hrc/babel-config]";
const availablePackages = SUPPORTED_PACKAGES.map((p) => `"${p}"`).join(", ");

const MESSAGES = {
  AVAILABLE_PACKAGES: `Available packages: ${availablePackages}`,
  ERROR: {
    ARGS: `Error: packages must be an array of strings or a string`,
    SELECTED_PACKAGE: (pkg: string) =>
      `Error: "${pkg}" package is not available`,
  },
};

export class ValidationError {
  static receivedArgs(received: unknown) {
    return new Error(
      `${logPrefix}\n  ${MESSAGES.ERROR.ARGS}.\n  Received: ${received}`,
    );
  }

  static selectedPackage(pkg: string) {
    return new Error(
      `${logPrefix}\n  ${MESSAGES.ERROR.SELECTED_PACKAGE(pkg)}`.concat(
        `\n${MESSAGES.AVAILABLE_PACKAGES}`,
      ),
    );
  }
}
