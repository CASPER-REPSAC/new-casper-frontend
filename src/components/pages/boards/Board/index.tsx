import BoardBody from '@src/components/molecules/Board/BoardBody';
import BoardFooter from '@src/components/molecules/Board/BoardFooter';
import BoardHeader from '@src/components/molecules/Board/BoardHeader';
import { styled } from 'styled-components';

function Board() {
  return (
    <Wrapper>
      <BoardHeader />
      <BoardBody />
      <BoardFooter />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default Board;
