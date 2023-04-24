import styled from "styled-components";

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
        </Header>
        <Content>{content}</Content>
      </Body>
    </Wrapper>
  );
}

export default Comment;
