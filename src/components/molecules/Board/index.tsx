import { DefaultButton } from '@src/components/common/defaultTag';
import { OnePageOfArticleList } from '@src/types/articleTypes';
import { PATH } from '@src/constants/urls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';
import BoardFooter from './BoardFooter';

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

  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody articleList={onePageOfArticleList.articleList} />
      <WriteButton $size="small" $color="green" onClick={onClickWrite}>
        작성 하기
      </WriteButton>
      <BoardFooter
        maxPage={onePageOfArticleList.maxPageNum}
        curPage={curPage}
      />
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
