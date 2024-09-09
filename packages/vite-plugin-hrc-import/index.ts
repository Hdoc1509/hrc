import type { Plugin } from "vite";

// based on https://github.com/LiJiahaoCoder/vitejs-plugin-antd-import
const HRC_IMPORT_PATH_REGEXP =
  /import {[\w,\s]+} from ('|")@hrc\/(button|input|spinner)('|");?/g;
const COMMENT_MULTILINE__REGEXP = /\/\*.*\*\/\s/g;
const COMMENT_SINGLE_LINE__REGEXP = /\/\/.*/;

const sanitizeComments = (code: string) =>
  code
    .replace(COMMENT_MULTILINE__REGEXP, "")
    .replace(COMMENT_SINGLE_LINE__REGEXP, "");

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

const transformCode = (code: string, fileName: string) => {
  const sanitizedCode = sanitizeComments(code);
  const importLines = sanitizedCode.match(HRC_IMPORT_PATH_REGEXP);

  if (importLines == null) return null;

  const transformedImports = importLines
    .map((line) => transformImportLine(line, fileName))
    .join("\n");

  return transformedImports.concat(
    sanitizedCode.replace(HRC_IMPORT_PATH_REGEXP, ""),
  );
};

export default function hrcImportPlugin(): Plugin {
  return {
    name: "vite-plugin-hrc-import",
    enforce: "pre",
    transform(code, fileName) {
      return transformCode(code, fileName);
    },
  };
}
