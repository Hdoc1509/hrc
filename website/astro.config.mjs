import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Hdoc1509.github.io",
  base: "/hrc",
  integrations: [
    starlight({
      title: "<hrc />",
      customCss: [
        '@material-design-icons/font/index.css'
      ],
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
