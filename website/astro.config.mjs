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
      logo: {
        src: "/public/favicon.svg",
      },
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: [
        "@material-design-icons/font/index.css",
        "./src/demos/toggle-theme/styles.css",
        "./src/global-styles.css",
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
          label: "Theming",
          autogenerate: {
            directory: "theming",
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
