import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.liquid};
  margin-bottom: 10px;
`;
const Avatar = styled.div`
  background-color: ${({ theme }) => theme.color1};
  width: 70px;
  height: 70px;
  flex-shrink: 0;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5px 20px 5px 20px;
`;
const Header = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: flex-end;
  margin-bottom: 1em;
`;
const Content = styled.div`
  font-size: 1.6rem;
  justify-self: center;
`;
const Name = styled.div`
  font-size: 1.1em;
  margin-right: 0.5em;
`;
const Date = styled.div`
  opacity: 0.8;
`;
const Buttons = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor};
  background-color: inherit;
  border: 0;
  cursor: pointer;
`;

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
