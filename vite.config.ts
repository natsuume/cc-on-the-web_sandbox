import { defineConfig } from 'vite';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup/popup.html'),
        options: resolve(__dirname, 'options/options.html'),
        background: resolve(__dirname, 'src/background/background.ts'),
        content: resolve(__dirname, 'src/content/content.ts'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // background と content はルートに配置
          if (chunkInfo.name === 'background') {
            return 'background.js';
          }
          if (chunkInfo.name === 'content') {
            return 'content.js';
          }
          // その他は assets フォルダに
          return 'assets/[name].js';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // CSSファイルの配置
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    {
      name: 'copy-manifest',
      closeBundle() {
        // manifest.json をコピー
        copyFileSync(
          resolve(__dirname, 'manifest.json'),
          resolve(__dirname, 'dist/manifest.json')
        );

        // icons ディレクトリが存在する場合はコピー
        const iconsDir = resolve(__dirname, 'icons');
        const distIconsDir = resolve(__dirname, 'dist/icons');
        if (existsSync(iconsDir)) {
          if (!existsSync(distIconsDir)) {
            mkdirSync(distIconsDir, { recursive: true });
          }
          // アイコンファイルのコピーは必要に応じて実装
          // 今は icons ディレクトリが空の可能性があるため、ディレクトリのみ作成
        }
      },
    },
  ],
});
