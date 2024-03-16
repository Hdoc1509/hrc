import path from "node:path";
import fs from "node:fs";

// Taken from https://github.com/emosheeep/vite-plugin-lib-inject-css/blob/81ba22b57e435ea813abfac717d426350773a16d/packages/vite-plugin-lib-inject-css/index.ts#L79
export const scanEntries = (entryDirs: string | string[]) => {
  const entries: Record<string, string> = {};
  const counter: Record<string, number> = {};

  for (const entryDir of [entryDirs].flat()) {
    if (!entryDir) break;

    const flattenEntries = fs.statSync(entryDir).isDirectory()
      ? fs.readdirSync(entryDir).map((name) => path.resolve(entryDir, name))
      : [entryDir];

    for (const entry of flattenEntries) {
      const { name } = path.parse(entry);
      const entryIndex = counter[name] || 0;

      entries[`${name}${entryIndex || ""}`] = entry;
      counter[name] = entryIndex + 1;
    }
  }

  return entries;
};
