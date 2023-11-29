import { DefaultButton } from '@src/components/common/defaultTag';
import styled from 'styled-components';

interface Props {
  name: string;
  date: string;
  content: string;
}

function Comment({ name, date, content }: Props) {
  return (
    <Wrapper>
      <Avatar />
      <Body>
        <Header>
          <Name>{name}</Name>
          <Date>{date}</Date>
          <Buttons>
            <DefaultButton $size="small">수정</DefaultButton>
            <DefaultButton $size="small" $color="red">
              삭제
            </DefaultButton>
          </Buttons>
        </Header>
        <Content>{content}</Content>
      </Body>
    </Wrapper>
  );
}

export default Comment;

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const Avatar = styled.div`
  background-color: ${({ theme }) => theme.surfaceAlt};
  width: 70px;
  height: 70px;
  flex-shrink: 0;
`;
const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 5px 0px 5px 20px;
`;
const Header = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: flex-start;
`;
const Content = styled.div`
  font-size: 1.6rem;
`;
const Name = styled.div`
  font-size: 1.1em;
  margin-right: 0.5em;
`;
const Date = styled.div`
  opacity: 0.8;
`;
const Buttons = styled.div`
  display: flex;
  margin-left: auto;
`;
