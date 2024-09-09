import { sanitizeComments } from "./utils.js";
import { HRC_IMPORT_PATH_REGEXP } from "./consts.js";

const transformImportPath = (name: string, packageName: string) =>
  `import {${name}} from "${packageName}/dist/${name}";`;

const transformImportLine = (importLine: string, fileName: string) => {
  const words = importLine.match(/\w+/g);

  if (words == null)
    throw new Error(
      `Found invalid import line\n  File: ${fileName}\n  Line: ${importLine}`,
    );

  const componentNames = words.slice(1, -3);
  const packageName = `@hrc/${words.slice(-1)}`;

  return componentNames
    .map((name) => transformImportPath(name, packageName))
    .join("\n");
};

export function transformCode(code: string, fileName: string) {
  const sanitizedCode = sanitizeComments(code);
  const importLines = sanitizedCode.match(HRC_IMPORT_PATH_REGEXP);

  if (importLines == null) return null;

  const transformedImports = importLines
    .map((line) => transformImportLine(line, fileName))
    .join("\n");

  return transformedImports.concat(
    sanitizedCode.replace(HRC_IMPORT_PATH_REGEXP, ""),
  );
}
