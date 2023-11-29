import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { API_URL, ARTICLE_LIST_API } from '@src/constants/apiUrl';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { ParsedUrlQuery } from 'querystring';
import Error from '@src/pages/_error';
import { BoardLayout } from '@src/components/organism/layout';
import { ReactElement } from 'react';
import customAxios from '@src/utils/customAxios';
import { BOARD_TYPE } from '@src/constants/mock';
import { BoardTemplate } from '@src/components/templates';
import {
  BoardBody,
  BoardFooter,
  BoardHeader,
} from '@src/components/organism/board';
import useOnePageArticleList, {
  getOnePageArticleList,
} from '@src/hooks/apis/boards/useOnePageArticleList';
import { LinkButton } from '@src/components/common/featureTag';
import { PATH } from '@src/constants/urls';
import { useRecoilValue } from 'recoil';
import { myProfileState } from '@src/recoil/permissionAtoms';

interface Params extends ParsedUrlQuery {
  boardType: string;
  page: string;
}

export const getStaticPaths = (async () => {
  const boardTypes = Object.values(BOARD_TYPE);
  const paths: { params: Params }[] = [];

  const PromiseMaxPages = boardTypes.map(async (boardType) => {
    const { data } = await customAxios<OnePageOfArticleList>({
      method: 'GET',
      url: `${API_URL}${ARTICLE_LIST_API}/${boardType}/all/1`,
    });

    if (!data) {
      return 0;
    }

    return data.maxPageNum;
  });
  const maxPages = await Promise.all(PromiseMaxPages);

  boardTypes.forEach((boardType, idx) => {
    const maxPage = maxPages[idx];
    for (let page = 1; page < maxPage + 1; page += 1) {
      const params = {
        boardType,
        page: String(page),
      };
      paths.push({ params });
    }
  });

  return { paths, fallback: true };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const params = context.params!;
  const { boardType, page } = params;
  if (typeof boardType !== 'string' || typeof page !== 'string')
    return {
      notFound: true,
    };

  const data = await getOnePageArticleList(
    {
      boardType,
      page,
    },
    true,
  );

  return { props: { initialData: data, boardType, page }, revalidate: 3 };
}) satisfies GetStaticProps<{
  initialData: OnePageOfArticleList;
  boardType: string;
  page: string;
}>;

function BoardPage({
  initialData,
  boardType,
  page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useOnePageArticleList({ boardType, page }, initialData);

  const a = useRecoilValue(myProfileState);
  console.log(a);

  if (!data) return <Error statusCode={-1} />;

  return (
    <BoardTemplate
      headerSection={<BoardHeader />}
      bodySection={<BoardBody boardType={boardType} page={page} />}
      buttonSection={
        <LinkButton $color="green" $size="medium" href={PATH.posts.url}>
          작성 하기
        </LinkButton>
      }
      footerSection={
        <BoardFooter maxPage={data.maxPageNum} curPage={Number(page)} />
      }
    />
  );
}

BoardPage.getLayout = (page: ReactElement) => {
  return <BoardLayout>{page}</BoardLayout>;
};

export default BoardPage;
