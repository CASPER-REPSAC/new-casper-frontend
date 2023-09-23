export interface Article {
  ArticleMapping: [
    {
      ArticleId: number;
      title: string;
      file: boolean;
      numOfComments: number;
      nickname: string;
      created_at: string;
      view: number;
    },
  ];
}
