// import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   base: '/',
//   // If you ever host in a subfolder like /portfolio/, you’d write base: '/portfolio/'
// });

// // https://astro.build/config
// // export default defineConfig({
// //   integrations: [tailwind()]
// // });

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://aryan-iit.github.io',
  base: '/',
  integrations: [tailwind()],
});
