# Chrome拡張機能（TypeScript）

TypeScriptで構築されたChrome拡張機能のテンプレートプロジェクトです。

## 機能

- ✅ TypeScriptによる型安全な開発
- ✅ Viteによる高速なビルド
- ✅ Manifest V3対応
- ✅ ポップアップUI
- ✅ オプション設定画面
- ✅ バックグラウンドスクリプト（Service Worker）
- ✅ コンテンツスクリプト

## プロジェクト構造

```
.
├── src/                    # TypeScriptソースコード
│   ├── popup/             # ポップアップ画面
│   │   └── popup.ts
│   ├── background/        # バックグラウンドスクリプト
│   │   └── background.ts
│   ├── content/           # コンテンツスクリプト
│   │   └── content.ts
│   └── options/           # オプション設定画面
│       └── options.ts
├── popup/                 # ポップアップHTML/CSS
│   ├── popup.html
│   └── popup.css
├── options/               # オプション画面HTML
│   └── options.html
├── icons/                 # 拡張機能のアイコン（要追加）
├── manifest.json          # 拡張機能のマニフェストファイル
├── vite.config.ts         # Vite設定
├── tsconfig.json          # TypeScript設定
└── package.json           # npm設定
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. ビルド

```bash
# プロダクションビルド
npm run build

# 開発モード（ファイル監視）
npm run dev
```

ビルドが成功すると、`dist/` ディレクトリに拡張機能が生成されます。

### 3. Chromeに拡張機能を読み込む

1. Chromeで `chrome://extensions/` を開く
2. 右上の「デベロッパーモード」を有効にする
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. プロジェクトの `dist/` フォルダを選択

## 開発

### アイコンの追加

`icons/` ディレクトリに以下のサイズのアイコンを追加してください：

- icon16.png (16x16px)
- icon48.png (48x48px)
- icon128.png (128x128px)

### カスタマイズ

- `manifest.json`: 拡張機能の名前、説明、権限などを変更
- `src/` 配下のTypeScriptファイル: 機能の実装
- `popup/` と `options/` のHTML/CSS: UIのカスタマイズ

## スクリプト

- `npm run build`: プロダクションビルド
- `npm run dev`: 開発モードでビルド（ファイル監視）
- `npm run clean`: distディレクトリを削除

## 技術スタック

- TypeScript 5.4+
- Vite 5
- Chrome Extension Manifest V3

## ライセンス

MIT
