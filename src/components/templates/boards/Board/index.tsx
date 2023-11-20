import DefaultButton from '@src/components/common/defaultTag/DefaultButton';
import BoardBody from '@src/components/organism/board/BoardBody';
import BoardFooter from '@src/components/organism/board/BoardFooter';
import BoardHeader from '@src/components/organism/board/BoardHeader';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { PATH } from '@src/constants/urls';
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

  const maxPage = Math.ceil(onePageOfArticleList.maxPageNum);

  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody articleList={onePageOfArticleList.articleList} />
      <WriteButton size="small" color="green" onClick={onClickWrite}>
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
