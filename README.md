これは、2/16開催予定の[生成AI活用勉強会](https://aigeeks01.peatix.com/view)で使用する
RAG構築のハンズオン用のリポジトリです。

## 事前準備するもの
- [Node.js ver 22以上](https://nodejs.org/ja)
- [pnpm](https://pnpm.io/ja/)
- [Docker Desktop](https://www.docker.com/ja-jp/products/docker-desktop/)
- [OpenAI API Key](https://platform.openai.com/settings/organization/api-keys)

## Getting Started

.env.exampleをコピーして.envファイルを作成し、OPENAI_API_KEYを設定してください。

```bash
cp .env.example .env
```

Qdrantのコンテナを起動します。
```bash
docker-compose up -d
```
http://localhost:6333/dashboard にアクセスして、Qdrantのダッシュボードが表示されることを確認してください。

依存パッケージをインストールします。
```bash
pnpm install
```

アプリケーションを起動します。
```bash
pnpm dev
```

http://localhost:3000/ にアクセスして、アプリケーションが表示されることを確認してください。
