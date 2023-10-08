import DefaultButton from '@src/components/common/DefaultButton';
import BoardBody from '@src/components/molecules/Board/BoardBody';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import BoardHeader from '@src/components/molecules/Board/BoardHeader';
import { PATH } from '@src/utils/urls';
import { useRouter } from 'next/router';
import { styled } from 'styled-components';

function Board() {
  const router = useRouter();
  const onClickWrite = () => {
    router.push(PATH.boards.posts.url);
  };

  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody />
      <WriteButton type="small" onClick={onClickWrite}>
        작성 하기
      </WriteButton>
      {/* 리팩토링 필요 */}
      <BoardFooter maxPage={10} curPage={1} />
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
