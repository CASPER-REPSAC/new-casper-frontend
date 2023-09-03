import { styled } from 'styled-components';
import BoardBody from './BoardBody';
import BoardFooter from './BoardFooter';
import BoardHeader from './BoardHeader';

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
