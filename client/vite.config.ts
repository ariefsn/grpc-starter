// import devtools from 'solid-devtools/vite';
import { defineConfig, loadEnv } from 'vite';
import vitePluginRequire from 'vite-plugin-require';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      /* 
      Uncomment the following line to enable solid-devtools.
      For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
      */
      // devtools(),
      solidPlugin(),
      vitePluginRequire()
    ],
    server: {
      port: process.env.VITE_APP_PORT ? +(process.env.VITE_APP_PORT) : 3000,
    },
    build: {
      target: 'esnext',
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    resolve: {
      preserveSymlinks: true
    }
  }
});
