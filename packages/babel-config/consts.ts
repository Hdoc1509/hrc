export const SUPPORTED_PACKAGES = ["button", "input", "spinner"] as const;
export type Package = (typeof SUPPORTED_PACKAGES)[number];
