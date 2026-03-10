export interface AlkooBizWorkItem {
  id: string;
  listTitle: string;
  listDescription: string;
  thumbnail: { src: string; alt: string };
  href: string | null;
  tags: string[];
}

export const alkooBizWorks: AlkooBizWorkItem[] = [
  {
    id: "event-graphics",
    listTitle: "イベントグラフィックデザイン",
    listDescription:
      "顧客が検討したイベントの楽しさが伝わるように。\nパッケージの一環としてグラフィックデザインも行い、イベントの顔となって顧客を支援しています。",
    thumbnail: {
      src: "/img/event-graphics/event-graphics-001.jpg",
      alt: "イベントグラフィックス",
    },
    href: "/detail/biz/event-graphics",
    tags: ["グラフィックデザイン", "販促物作成", "顧客折衝"],
  },
  {
    id: "biz-page",
    listTitle: "法人商材紹介サイト",
    listDescription:
      "売上の大黒柱である、法人商材紹介サイトの作成・運用を行いました。",
    thumbnail: {
      src: "/img/alkoo-biz/img_contents_alkoobiz_pages.png",
      alt: "法人商材紹介ページ",
    },
    href: "/detail/biz/biz-page",
    tags: ["Web", "開発", "グロース施策"],
  },
];
