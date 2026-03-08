export interface DValuePassWorkItem {
  id: string;
  listTitle: string;
  listDescription: string;
  thumbnail: { src: string; alt: string };
  href: string | null;
  tags: string[];
}

export const dValuePassWorks: DValuePassWorkItem[] = [
  {
    id: "travel-quiz",
    listTitle: "旅するクイズ",
    listDescription: "新しい旅の目的地が見つかる日本を旅するクイズサービス",
    thumbnail: {
      src: "/img/d-value-pass/travelquiz/kv.png",
      alt: "旅するクイズ",
    },
    href: "/detail/dvaluepass/travel-quiz",
    tags: ["UIUX", "サービス立ち上げ", "機能提案"],
  },
  /*
  {
    id: "mail-ad",
    listTitle: "メール広告運用",
    listDescription:
      "毎日の歩数を写真やイラストを添えてSNS共有。\n今日と今日の歩みを分かち合い、ユーザー像の理解がより確実なものに。",
    thumbnail: {
      src: "/img/alkoo-top/img_contents_alkoo_step_share.jpg",
      alt: "歩数共有機能",
    },
    href: "/detail/dvaluepass/mail-ad",
    tags: ["UIUX", "機能提案"],
  },
  {
    id: "biz-page",
    listTitle: "機能改善",
    listDescription:
      "売上の大黒柱である、法人商材紹介サイトの作成・運用を行いました。",
    thumbnail: {
      src: "/img/alkoo-biz/img_contents_alkoobiz_pages.png",
      alt: "法人商材紹介ページ",
    },
    href: "/detail/dvaluepass/function-improvement",
    tags: ["Web", "開発", "グロース施策"],
  },
  */
];
