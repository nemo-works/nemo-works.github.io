# Data

ページで使用するデータを管理するディレクトリ。

---

## ファイル一覧

| ファイル | 対応ページ |
|---|---|
| `alkoo.ts` | `pages/alkoo.astro` / `pages/detail/alkoo-*.astro` |

---

## alkoo.ts

ALKOOプロジェクト配下の制作物リストを管理するデータファイル。

`alkoo.astro` の制作物リストと、各詳細ページ（`pages/detail/` 以下）の `ContentHeader` タグを共通のデータから参照する。

### 制作物を追加する（詳細ページなし）

詳細ページがまだない制作物は `href: null` で追加する。リストには表示されるが、クリックしてもリンクにならない。

```ts
{
  id: 'new-feature',           // 一意なID（英数字ハイフン）
  listTitle: '新機能名',
  listDescription: '制作物リストに表示する説明文。\n改行したい場合は \\n を使う。',
  thumbnail: { src: '/img/alkoo-top/containts-XX.png', alt: '新機能名' },
  href: null,                  // 詳細ページなし
  tags: ['#機能検討', '#UI/UX'],
},
```

### 制作物を追加する（詳細ページあり）

`href` に詳細ページのパスを設定する。あわせて詳細ページのファイルを作成する。

**① `alkoo.ts` にエントリを追加**

```ts
{
  id: 'walk-route',
  listTitle: '散歩ルート機能',
  listDescription: '説明文。',
  thumbnail: { src: '/img/alkoo-top/containts-03.png', alt: '散歩ルート機能' },
  href: '/detail/walk-route',  // 詳細ページのパス
  tags: ['#機能検討', '#UI/UX'],
},
```

**② 詳細ページファイルを作成**

`pages/detail/shade-route.astro` を参考に `pages/detail/walk-route.astro` を作成する。
フロントマターで `id` に対応するエントリを取得し、`tags` を `ContentHeader` に渡す。

```astro
---
import { alkooWorks } from '../../data/alkoo';

const work = alkooWorks.find(w => w.id === 'walk-route')!;
---

<ContentHeader
  tags={work.tags}
  ...
/>
```

### `href: null` → 詳細ページあり に変更する

詳細ページを追加したタイミングで `href: null` を `href: '/detail/walk-route'` に更新する。
リストのリンク化とタグの共有が自動的に反映される。

```ts
// before
href: null,

// after
href: '/detail/walk-route',
```

### AlkooWorkItem 型

```ts
interface AlkooWorkItem {
  id: string;           // 一意なID。詳細ページで find() のキーになる
  listTitle: string;    // 制作物リストのタイトル
  listDescription: string; // 制作物リストの説明文（\n で改行）
  thumbnail: {
    src: string;        // サムネイル画像パス（public/ 相対）
    alt: string;
  };
  href: string | null;  // 詳細ページのパス。null の場合はリンクなし
  tags: string[];       // タグ（リスト・詳細ページ共通）
}
```
