import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import react from "@astrojs/react";

const site = "https://Hdoc1509.github.io";

// https://astro.build/config
export default defineConfig({
  site,
  base: "/hrc",
  integrations: [
    starlight({
      title: "hrc",
      logo: {
        src: "./src/assets/hrc-logo.svg",
      },
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: [
        "@material-design-icons/font/index.css",
        "./src/demos/toggle-theme/styles.css",
      ],
      social: {
        github: "https://github.com/Hdoc1509/hrc",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            // NOTE: update `v` param when updating the image
            content: `${site}/og.png?v=1`,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Build your React app with hrc",
          },
        },
      ],
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
