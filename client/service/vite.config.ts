import react from '@vitejs/plugin-react';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import visualizer from 'rollup-plugin-visualizer';
import { defineConfig, HtmlTagDescriptor, type PluginOption } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import ImageminPlugin from 'vite-plugin-imagemin';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// html 세팅
const htmlSetting = {
  title: '박병훈 사전과제',
  description: '박병훈 사전과제',
};

// 폰트 세팅
const fontsDirectory = resolve(__dirname, 'public/assets/fonts');
const fontFiles = readdirSync(fontsDirectory).filter((file) =>
  file.endsWith('.woff2'),
);

const injectFontsToHead: HtmlTagDescriptor[] = fontFiles.map((fontFile) => ({
  injectTo: 'head',
  tag: 'link',
  attrs: {
    rel: 'preload',
    href: `/assets/fonts/${fontFile}`,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
}));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000, // yarn vite 시 포트를 3000으로 설정
    open: '/', // 개발 서버의 기본 경로를 '/'로 설정
  },
  define: {
    'import.meta.env.BASE_URL':
      mode === 'production'
        ? JSON.stringify('/service')
        : JSON.stringify('/service-dev'),
    global: 'window',
  },
  build: {
    outDir: mode === 'production' ? '../dist/service' : '../dist/service-dev',
    sourcemap: false, // 소스 맵을 켜놔서 디버깅을 쉽게 만들자
    emptyOutDir: true,
    assetsInlineLimit: 4096, // 4KB 미만의 애셋을 인라인으로 처리
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/(sa|sc|c)ss/i.test(extType)) {
            return `css/build-[name][extname]`;
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/[name]/[name]-[hash][extname]`;
          }
          if (/woff(2)?|ttf|eot|otf/i.test(extType)) {
            return `assets/font/[name]-[hash][extname]`;
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'js/build-[name]-[hash].js',
        entryFileNames: 'js/build-[name]-[hash].js',
      },
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    ImageminPlugin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          title: htmlSetting.title,
          description: htmlSetting.description,
        },
        tags: injectFontsToHead,
      },
    }),
    visualizer({
      filename:
        mode === 'production'
          ? 'bundle-visualizer-production.html'
          : 'bundle-visualizer-developer.html',
      title: '번들 크기 통계 페이지',
    }) as PluginOption,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, 'src/app'),
      '@shared': resolve(__dirname, 'src/shared'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@atom': resolve(__dirname, 'src/shared/component/atom'),
      '@molecule': resolve(__dirname, 'src/shared/component/molecule'),
      '@organisms': resolve(__dirname, 'src/shared/component/organisms'),
      '@template': resolve(__dirname, 'src/shared/component/template'),
      '@typings': resolve(__dirname, 'src/typings'),
    },
  },
}));
