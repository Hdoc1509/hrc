import { SUPPORTED_PACKAGES } from "./consts.js";

const logPrefix = "[@hrc/babel-config]";
const availablePackages = SUPPORTED_PACKAGES.map((p) => `"${p}"`).join(", ");

const MESSAGES = {
  AVAILABLE_PACKAGES: `Available packages: ${availablePackages}`,
  ERROR: {
    ARGS: `Error: packages must be an array of strings or a string`,
    PACKAGE_TYPE: `Error: package must be a string`,
    SELECTED_PACKAGE: (pkg: string) =>
      `Error: "${pkg}" package is not available`,
  },
};

const createErrorMessage = (messages: string[]) => {
  return `\n${logPrefix}`.concat(...messages.map((m) => `\n  ${m}`));
};

export class ValidationError {
  static receivedArgs(received: unknown, options: { idx?: number } = {}) {
    const messages = [MESSAGES.ERROR.ARGS, `Received: ${received}`];

    if (options.idx != null) {
      messages.splice(0, 1, MESSAGES.ERROR.PACKAGE_TYPE);
      messages.push(`At index: ${options.idx}`);
    }

    return new Error(createErrorMessage(messages));
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
