export type BuildOptions = {
  /** Set extra external dependencies
   * It already includes `react` and `react/jsx-runtime`
   */
  extraDeps?: string | string[];
  /** Set extra entries
   * `main` is already set
   */
  extraEntries?: Record<string, string>;
};
