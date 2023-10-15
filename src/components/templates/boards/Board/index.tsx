import DefaultButton from '@src/components/common/DefaultButton';
import BoardBody from '@src/components/molecules/Board/BoardBody';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import BoardHeader from '@src/components/molecules/Board/BoardHeader';
import { ArticleData } from '@src/types/articleTypes';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  articleList: ArticleData[] | null;
}

function Board({ articleList }: Props) {
  const [curPage, setCurpage] = useState(1);
  const { push, query, isReady } = useRouter();
  const onClickWrite = () => {
    push(PATH.boards.posts.url);
  };

  useEffect(() => {
    const { board_params: boardParams } = query;
    if (!isReady || !boardParams || typeof boardParams === 'string') {
      return;
    }
    const page = parseInt(boardParams[1], 10);
    setCurpage(page);
  }, [isReady, query]);

  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody articleList={articleList} />
      <WriteButton type="small" onClick={onClickWrite}>
        작성 하기
      </WriteButton>
      {/* 리팩토링 필요 */}
      <BoardFooter maxPage={10} curPage={curPage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const WriteButton = styled(DefaultButton)`
  align-self: flex-end;
  width: 70px;
`;
export default Board;
