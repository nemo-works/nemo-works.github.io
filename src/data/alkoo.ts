export interface AlkooWorkItem {
  id: string;
  listTitle: string;
  listDescription: string;
  thumbnail: { src: string; alt: string };
  href: string | null;
  tags: string[];
}

export const alkooWorks: AlkooWorkItem[] = [
  {
    id: 'shade-route',
    listTitle: '日陰ルート機能',
    listDescription: '日陰を通る量を日陰率と地図上の日陰で視覚化。\nユーザーにとって最適なルートを比較・検討しやすい機能で、グッドデザイン賞受賞。',
    thumbnail: { src: '/img/alkoo-top/containts-02.png', alt: '日陰ルート機能' },
    href: '/detail/shade-route',
    tags: ['UIUX','機能検討', '展示'],
  },
  {
    id: 'walk-route',
    listTitle: '散歩ルート機能',
    listDescription: '運動習慣を飽きずに続けるために。\n時間や距離、目標の歩数でライフスタイルに合わせたランダムなルートをサクッと提案。',
    thumbnail: { src: '/img/alkoo-top/containts-03.png', alt: '散歩ルート機能' },
    href: '/detail/walk-route',
    tags: ['UIUX','機能検討'],
  },
  {
    id: 'steps-sharing',
    listTitle: '歩数共有機能',
    listDescription: '毎日の歩数を写真やイラストを添えてSNS共有。\n今日と今日の歩みを分かち合い、ユーザー像の理解がより確実なものに。',
    thumbnail: { src: '/img/alkoo-top/img_contents_alkoo_step_share.jpg', alt: '歩数共有機能' },
    href: '/detail/steps-sharing', 
    tags: ['UIUX','機能提案'],
  },
  {
    id: 'report',
    listTitle: '月間レポート',
    listDescription: 'ユーザーのお出かけをキャラクターと一緒にふりかえり。ただの移動も「思い出」に感じられるあたたかなサービスイメージをコンテンツで表現。',
    thumbnail: { src: '/img/alkoo-top/img_contents_alkoo_manth_report.jpg', alt: 'レポート機能' },
    href: null,
    tags: ['機能検討', 'UIUX', 'イラスト','グロース施策'],
  },
];
