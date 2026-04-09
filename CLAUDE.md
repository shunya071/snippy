# CLAUDE.md — snippy-web.jp

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| サイト名 | Snippy（スニッピー） |
| URL | https://snippy-web.jp |
| 目的 | 店舗型ビジネス専門Web集客パートナーの事業サイト |
| ターゲット | 岐阜県の店舗オーナー（サロン・クリニック・飲食店）30〜60代 |
| 主なCV | LINE無料相談（https://lin.ee/OkmWU7S） |
| 料金 | サイト非公開 |
| 参考サイト | https://smarthr.jp/ |

## 技術スタック
- Next.js 15（App Router） + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Framer Motion（アニメーション）
- Prisma + PostgreSQL（Supabase）
- NextAuth.js v5（管理画面認証）
- AI Designer MCP（デザイン生成）
- Vercel（ホスティング）
- pnpm

## ブランドカラー
- Primary: `#00bfa6`（ティール）
- Primary Dark: `#009180`（ホバー）
- Primary Light: `#e6faf7`（薄色背景）
- LINE Green: `#06C755`（LINE CTA専用）
- 背景交互: 白(#fff) / ライトグレー(#f8f8f8)
- ダーク: `#0f172a`（フッター）

## デザインルール（SmartHR準拠）
- ボタン: ピル型（rounded-full）
- カード: rounded-xl、薄いシャドウ
- セクション背景: 白 × #f8f8f8 交互
- フォント: Noto Sans JP
- レイアウト: 非対称（左テキスト + 右イラスト）

## 言葉遣いルール
サイト内テキストは店舗オーナー向けの日常語を使用:
- SEO → 検索で見つかる
- CVR → 予約率
- コンバージョン → 予約・お問い合わせ
- CTA → 相談ボタン
- レスポンシブ → スマホ対応

## 3つのサービス（定食メニュー方式）
1. **サイト制作**（ネットにお店を出す）— スターター/スタンダード/カスタム
2. **マーケティング**（お客さんを増やす）— スターター/スタンダード/カスタム
3. **業務改善**（手間を減らす）— スターター/スタンダード/カスタム

## TOPページ構成（14セクション）
| # | セクション | 背景 | コンポーネント |
|---|----------|------|-------------|
| 0 | ヘッダー（固定） | 白 | header.tsx |
| 1 | ヒーロー | Primary | hero.tsx |
| 2 | サービス概要 | 白 | services.tsx |
| 3 | 選ばれる理由 | グレー | features.tsx |
| 4 | 導入の流れ | 白 | process.tsx |
| 5 | 導入効果 | Primary | results.tsx |
| 6 | サービス詳細 | 白 | service-detail.tsx |
| 7 | 導入事例 | グレー | cases.tsx |
| 8 | お客様の声 | 白 | testimonials.tsx |
| 9 | FAQ | 白 | faq.tsx |
| 10 | お知らせ | グレー | news.tsx |
| 11 | サポート体制 | 白 | support.tsx |
| 12 | 私たちの約束 | グレー | promise.tsx |
| 13 | CTA | Primary | cta.tsx |
| 14 | フッター | ダーク | footer.tsx |

## 定数
`src/lib/constants.ts` にSERVICES, FAQ_ITEMS, NAV_ITEMS, SNIPPY_LINE_URL等を定義済み

## AI Designer ワークフロー
1. `/aidesigner` でセクションごとにデザイン生成
2. 生成されたHTMLを確認・調整
3. Next.jsコンポーネントに変換して `src/components/site/` に配置
4. 定数は `constants.ts` から参照
5. `'use client'` はインタラクティブなコンポーネントのみ

## コーディング規約
- コンポーネントは `function` 宣言（アロー関数禁止）
- `'use client'` は最小範囲（インタラクティブな末端のみ）
- サーバーコンポーネントがデフォルト
- 画像: `next/image`、リンク: `next/link`
- フォーム: `react-hook-form` + `zod`

## 実装状況
- [x] プロジェクト基盤（Next.js + 依存パッケージ）
- [x] レイアウト（header.tsx, footer.tsx, line-sticky.tsx 実装済み）
- [x] 定数定義（constants.ts）
- [x] TOPページ骨組み（page.tsx に13セクションimport済み）
- [ ] 各セクションのデザイン生成・実装 ← **今ここ**

## 絶対NG
- サイト上に料金を表示しない
- 専門用語を使わない（上記言葉遣いルール参照）
- AI活用を前面に出さない
- 確認なしに外部送信・公開しない

## 詳細仕様書
`/Users/morishunya/snippy_inc/.company/pm/tickets/snippy-site-aidesigner-handoff.md`
