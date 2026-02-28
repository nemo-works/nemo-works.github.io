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
    id: 'kobaton',
    listTitle: '埼玉県様 コバトンALKOOマイレージ',
    listDescription: 'サービス初となる自治体公式サービス。\n公式サービスの機能更新が自治体サービスへも還元。Win-Winな開発・運用で自治体の健康増進をサポート。',
    thumbnail: { src: '/img/kobaton/kv.png', alt: 'コバトンALKOOマイレージ' },
    href: '/detail/biz/kobaton',
    tags: ['UIUX','機能検討','訴求物作成','顧客折衝'],
  },
  // ↓ 自治体イベントとしてまとめる？ちゅらとかかみがはら、やったことチラシ作成くらいじゃない？それなら川崎も入れられるよ
  {
    id: 'event-graphics',
    listTitle: 'イベントグラフィックデザイン',
    listDescription: '簡素なイベントでは、楽しいものでも楽しさが伝わらない。\nイベントパッケージの一環としてグラフィックデザインも行い、イベントの顔となって主催者を支援しています。',
    thumbnail: { src: '/img/alkoo-biz/img_contents_alkoobiz_chura.jpg', alt: 'ちゅらウォーク' },
    href: '/detail/walk-route',
    tags: ['グラフィックデザイン','販促物作成'],
  },
  {
    id: 'biz-page',
    listTitle: '法人商材紹介サイト',
    listDescription: '売上の大黒柱である、法人商材紹介サイトの作成・運用を行いました。',
    thumbnail: { src: '/img/alkoo-biz/img_contents_alkoobiz_pages.png', alt: '法人商材紹介ページ' },
    href: null,
    tags: ['Web','開発','グロース施策'],
  },
];
