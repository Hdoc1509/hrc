import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
          link: "/guides/getting-started/",
        },
        {
          label: "Packages",
          autogenerate: { directory: "packages" },
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
        {
          label: "Components API",
          autogenerate: { directory: "api" },
        },
        {
          label: 'Minimizing bundle size',
          link: '/guides/minimizing-bundle-size/'
        }
      ],
    }),
  ],
});
