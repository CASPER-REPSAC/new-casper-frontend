import DefaultButton from '@src/components/common/DefaultButton';
import BoardBody from '@src/components/molecules/Board/BoardBody';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import BoardHeader from '@src/components/molecules/Board/BoardHeader';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  onePageOfArticleList: OnePageOfArticleList | null;
}

function Board({ onePageOfArticleList }: Props) {
  const [curPage, setCurpage] = useState(1);
  const { push, query, isReady } = useRouter();

  useEffect(() => {
    const { page } = query;
    if (!isReady || typeof page !== 'string') {
      return;
    }
    const pageInt = parseInt(page, 10);
    setCurpage(pageInt);
  }, [isReady, query]);

  if (!onePageOfArticleList) return <>onePageOfArticleList 없다.</>;

  const onClickWrite = () => {
    push(PATH.posts.url);
  };

  const maxPage = Math.ceil(onePageOfArticleList.maxPageNum / 10);

  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody articleList={onePageOfArticleList.articleList} />
      <WriteButton type="small" onClick={onClickWrite}>
        작성 하기
      </WriteButton>
      <BoardFooter maxPage={maxPage} curPage={curPage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
  width: 70px;
`;
export default Board;
