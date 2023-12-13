import { getOnePageArticleList } from 'app/_service/article';
import { SirenIcon } from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import ArticlePreview from './_components/ArticlePreview';

async function HomePage() {
  const notice = await getOnePageArticleList({
    boardType: 'notice_board',
    page: '1',
    category: 'all',
  });

  return (
    <div className="common-center lg:absolute-center flex-center mt-24 w-full flex-col text-center lg:mt-0">
      <h1 className="text-6xl font-bold">WELCOME !</h1>
      <div className="h-full w-full text-6xl font-bold text-sky-300">
        CASPER
      </div>
      <div className="mt-16 flex flex-col gap-16 lg:flex-row">
        <ArticlePreview articleList={notice.articleList} />
        <ArticlePreview articleList={notice.articleList} />
      </div>
      <SirenIcon size={ICON_SIZE.medium} className="self-end fill-red-400" />
    </div>
  );
}

export default HomePage;
