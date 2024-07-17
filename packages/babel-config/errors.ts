import { SUPPORTED_PACKAGES } from "./consts.js";

const logPrefix = "[@hrc/babel-config]";
const availablePackages = SUPPORTED_PACKAGES.map((p) => `"${p}"`).join(", ");

const MESSAGES = {
  AVAILABLE_PACKAGES: `Available packages: ${availablePackages}`,
  ERROR: {
    ARGS: `Error: packages must be an array of strings or a string`,
    SELECTED_PACKAGE: (pkg: string) =>
      `Error: "${pkg}" package is not available`,
  },
};

const createErrorMessage = (messages: string[]) => {
  return `\n${logPrefix}`.concat(...messages.map((m) => `\n  ${m}`));
};

export class ValidationError {
  static receivedArgs(received: unknown) {
    return new Error(
      createErrorMessage([MESSAGES.ERROR.ARGS, `Received: ${received}`]),
    );
  }

  static selectedPackage(pkg: string) {
    return new Error(
      createErrorMessage([
        MESSAGES.ERROR.SELECTED_PACKAGE(pkg),
        MESSAGES.AVAILABLE_PACKAGES,
      ]),
    );
  }
}
