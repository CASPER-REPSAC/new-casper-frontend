import {
  Avatar,
  Body,
  Button,
  Buttons,
  Content,
  Header,
  Name,
  Wrapper,
  Date,
} from './Comment.style';

interface CommentProps {
  name: string;
  date: string;
  content: string;
}

function Comment({ name, date, content }: CommentProps) {
  return (
    <Wrapper>
      <Avatar />
      <Body>
        <Header>
          <Name>{name}</Name>
          <Date>{date}</Date>
          <Buttons>
            <Button>수정</Button>
            <Button>삭제</Button>
          </Buttons>
        </Header>
        <Content>{content}</Content>
      </Body>
    </Wrapper>
  );
}

export default Comment;
