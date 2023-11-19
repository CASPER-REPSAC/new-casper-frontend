import { styled } from 'styled-components';
import Comment from '@src/components/organism/Editor/Comment';

function DetailComment() {
  return (
    <>
      <H1>댓글 (정적 데이터)</H1>
      <Comment
        name="박지성"
        date="2021.12.12 14:12:15"
        content="댓글 1번입니다."
      />
    </>
  );
}
export default DetailComment;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1em;
`;
