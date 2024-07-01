import { globSync } from "glob";
import { fileURLToPath } from "url";
import { extname, relative, resolve } from "path";

// Taken and adapted from:
// https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma#split-up-the-css
export const createInputEntries = (dirname: string) => {
  const files = globSync(`${resolve(dirname)}/lib/**/*.{ts,tsx}`, {
    ignore: `${resolve(dirname)}/lib/**/types.ts`,
  });
  return Object.fromEntries(
    files.map((file) => [
      // entry point name
      relative("lib", file.slice(0, file.length - extname(file).length)),
      // entry point path
      fileURLToPath(new URL(file, import.meta.url)),
    ]),
  );
};
