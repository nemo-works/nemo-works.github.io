# Components

ポートフォリオサイトで使用する共有コンポーネントの仕様書。

---

## 目次

- [ContentHeader](#contentheader)
- [WorkCard](#workcard)
- [PasswordOverlay](#passwordoverlay)

---

## ContentHeader

**ファイル:** `src/components/ContentHeader.astro`

プロジェクト・作業詳細ページのヘッダーセクション。タイトル・説明文・プロジェクト情報・メイン画像をまとめたコンポーネント。`alkoo.astro` や `detail/` 以下の各ページで使い回す。

### 構造

```
ContentHeader
├── header-block        タイトル・説明・タグ
│   ├── subtitle        カテゴリ名など（任意）
│   ├── title           メインタイトル（h1）
│   ├── description     説明文
│   └── tags            タグ一覧（任意）
├── info-block          プロジェクト情報（3カラムグリッド）
│   ├── 対応期間
│   ├── やったこと
│   └── メンバー構成
└── image-block         メイン画像エリア（任意）
```

### Props

| prop | 型 | 必須 | デフォルト | 説明 |
|---|---|:---:|---|---|
| `title` | `string` | ✓ | — | メインタイトル（h1） |
| `description` | `string` | ✓ | — | 説明文 |
| `period` | `string` | ✓ | — | 対応期間 |
| `tasks` | `string[]` | ✓ | — | やったこと（改行区切りで表示） |
| `members` | `string[]` | ✓ | — | メンバー構成（改行区切りで表示） |
| `subtitle` | `string` | — | — | タイトル上部に表示するカテゴリなど |
| `tags` | `string[]` | — | — | タグ一覧（`#機能改善` 形式など） |
| `variant` | `'overview' \| 'detail'` | — | `'overview'` | タイトルのフォント・サイズの切り替え |
| `images` | `ImageItem[]` | — | `[]` | 表示する画像の配列（省略時は画像エリア非表示） |
| `imageLayout` | `'single' \| 'multi'` | — | `'single'` | 画像のレイアウト |

#### ImageItem 型

```ts
interface ImageItem {
  src: string;  // 画像パス（publicディレクトリ相対）
  alt: string;  // alt テキスト
}
```

---

### variant

タイトル（h1）のフォントとサイズを切り替える。

| 値 | フォント | サイズ | 用途 |
|---|---|---|---|
| `overview`（デフォルト） | Inter | 48px | 英語プロジェクト名など |
| `detail` | Zen Kaku Gothic New | 32px | 日本語の説明タイトルなど |

```astro
<!-- overview: "ALKOO by NAVITIME" のような英語タイトル -->
<ContentHeader variant="overview" title="ALKOO by NAVITIME" ... />

<!-- detail: "日陰を選ぶ量を〜" のような日本語タイトル -->
<ContentHeader variant="detail" title="日陰を選ぶ量を..." ... />
```

---

### imageLayout

`images` に画像を渡したときの表示レイアウト。

#### `single`（デフォルト）

1枚を全幅・高さ600pxでカバー表示。KVビジュアルなど印象的な1枚に適している。

```
┌──────────────────────────────────────┐
│                                      │
│         全幅カバー（600px）           │
│                                      │
└──────────────────────────────────────┘
```

```astro
<ContentHeader
  images={[{ src: "/img/alkoo-top/kv.png", alt: "ALKOO Features" }]}
  imageLayout="single"
  ...
/>
```

#### `multi`

2カラムグリッドで複数枚を並べて表示。各画像は高さ400px・`object-fit: cover`。
**奇数枚の場合**、最後の1枚は自動的に全幅表示になる。

```
┌────────────────┬─────────────────────┐
│                │                     │
│   image 1      │   image 2           │ 400px
│                │                     │
├────────────────┴─────────────────────┤
│                                      │
│   image 3（奇数のため全幅）           │ 400px
│                                      │
└──────────────────────────────────────┘
```

```astro
<ContentHeader
  images={[
    { src: "/img/foo/img1.png", alt: "説明1" },
    { src: "/img/foo/img2.png", alt: "説明2" },
    { src: "/img/foo/img3.png", alt: "説明3" },
  ]}
  imageLayout="multi"
  ...
/>
```

#### レスポンシブ対応（imageLayout）

| ブレークポイント | single | multi |
|---|---|---|
| > 768px | 600px 高さ・全幅カバー | 2カラムグリッド・各400px |
| ≤ 768px | 300px 高さ・全幅カバー | 1カラム・各240px |

---

### 使用例

#### 最小構成（画像なし）

```astro
---
import ContentHeader from '../components/ContentHeader.astro';
---

<ContentHeader
  title="ALKOO by NAVITIME"
  description="ウォーキングアプリの説明..."
  period="2021年12月〜2022年11月"
  tasks={["UI/UX検討", "グラフィック作成"]}
  members={["PM…1名", "エンジニア…4名", "デザイナー…1名"]}
/>
```

#### フル構成（overview ページ）

```astro
<ContentHeader
  variant="overview"
  subtitle="ウォーキングアプリ"
  title="ALKOO by NAVITIME"
  description="ウォーキングを楽しむ人の..."
  period="2021年12月〜2022年11月"
  tasks={["UI/UX検討", "グラフィック作成", "展示ブース"]}
  members={["PM…1名", "エンジニア…4名", "デザイナー…1名"]}
  images={[{ src: "/img/alkoo-top/kv.png", alt: "ALKOO Features" }]}
  imageLayout="single"
/>
```

#### フル構成（detail ページ）

```astro
<ContentHeader
  variant="detail"
  title="日陰を選ぶ量を日陰率と地図上の日陰で視覚化。..."
  description="現在地から目的地まで..."
  tags={["#機能改善", "#ALKOO", "#展示"]}
  period="2023年6月〜2023年8月"
  tasks={["UI/UX設計", "告知物デザイン作成", "グッドデザイン賞関連対応"]}
  members={["PM…1名", "エンジニア…3名", "デザイナー…1名"]}
  images={[{ src: "/img/shade-route/kv.png", alt: "日陰ルート機能紹介" }]}
  imageLayout="single"
/>
```

#### 複数画像（multi）

```astro
<ContentHeader
  variant="detail"
  title="機能名"
  description="説明..."
  period="2024年4月〜2024年6月"
  tasks={["UI/UX検討"]}
  members={["PM…1名", "デザイナー…1名"]}
  images={[
    { src: "/img/foo/img1.png", alt: "スクリーン1" },
    { src: "/img/foo/img2.png", alt: "スクリーン2" },
    { src: "/img/foo/img3.png", alt: "スクリーン3" },
  ]}
  imageLayout="multi"
/>
```

---

## WorkCard

**ファイル:** `src/components/WorkCard.astro`

> 仕様未記入。コンポーネント追加・更新時にここに記載する。

---

## PasswordOverlay

**ファイル:** `src/components/PasswordOverlay.astro`

> 仕様未記入。コンポーネント追加・更新時にここに記載する。
