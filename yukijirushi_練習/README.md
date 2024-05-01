# 雪メグ Frontend

## 必須環境

Node.js **18+**

## 推奨 IDE 設定

- エディター：[VSCode](https://code.visualstudio.com/)
- 拡張機能（当プロジェクトを初めて読み込み時にインストール推奨がポップアップ）：
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vetur が存在する場合は無効化が必要)
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Prettier 適応設定

`C:/Users/<name>/AppData/Roaming/Code/User/settings.json` に下記コードを追加。

```json
{
  "#その他設定...",

  "#editor.defaultFormatter": "デフォルトフォーマッター",
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  "#editor.formatOnSave": "保存時にフォーマットする",
  "editor.formatOnSave": true
}
```

## Project Setup

### 依存を install

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview for Production

```sh
npm run preview
```

### Type-Check, Compile and Minify for Remote Development

```sh
npm run build-remote-dev
```

### Preview for Remote Development

```sh
npm run preview-remote-dev
```

## 開発手帳

### Development

```sh
npm run docs:dev
```

### Production

```sh
npm run docs:build
```

### Preview Production

```sh
npm run docs:preview
```
