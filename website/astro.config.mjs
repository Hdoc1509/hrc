import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "<hrc />",
      social: {
        github: "https://github.com/Hdoc1509/hrc",
      },
      sidebar: [
        {
          label: "Getting Started",
          link: "/getting-started/",
        },
        {
          label: "Packages",
          autogenerate: {
            directory: "packages",
          },
        },
        {
          label: "Components",
          collapsed: true,
          autogenerate: {
            directory: "components",
          },
        },
        {
          label: "Components API",
          collapsed: true,
          autogenerate: {
            directory: "api",
          },
        },
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
      ],
    }),
    react(),
  ],
});
