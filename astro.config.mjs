import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";
import partytown from '@astrojs/partytown'
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), auth(), partytown({
    config: {
      forward: ["dataLayer.push"],
    }
  })],
  buildOptions: {
    outDir: './dist',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "server",
  adapter: vercel()
});

