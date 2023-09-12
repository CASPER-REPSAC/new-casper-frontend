/* eslint-disable @typescript-eslint/no-unused-vars */
import DefaultButton from '@src/components/common/DefaultButton';
import AuthoritySettingSection from '@src/components/organism/AuthoritySettingSection';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

function NoticeBoardForm() {
  const { register } = useForm();

  const readRegisters = [];
  const modifyRegisters = [];
  const deleteRegisters = [];

  return (
    <Details>
      <Summary>공지사항</Summary>
      <Section>
        <Title>
          <span>카테고리</span>
          <DefaultButton type="small">추가하기</DefaultButton>
        </Title>
        <Item>
          <CategoryList>
            <CategoryItem>
              <span>C 언어</span>
              <DefaultButton type="small" color="red">
                <AiOutlineClose />
              </DefaultButton>
            </CategoryItem>
            <CategoryItem>
              <span>네트워크</span>
              <DefaultButton type="small" color="red">
                <AiOutlineClose />
              </DefaultButton>
            </CategoryItem>
          </CategoryList>
        </Item>
      </Section>
      <AuthoritySettingSection />
    </Details>
  );
}

const Details = styled.details`
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;
const Summary = styled.summary`
  background-color: ${({ theme }) => theme.surfacePointDefault};
  font-size: 2.4rem;
  padding: 0.8em 1.2em;
  cursor: pointer;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.surfaceAlt};
  font-size: 2rem;
  padding: 0.8em 1.2em;
`;
const Section = styled.section``;
const Item = styled.div`
  font-size: 2rem;
  padding: 0.8em 1.2em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;
const CategoryList = styled.ul`
  padding: 0;
  display: flex;
  gap: 1em;
`;
const CategoryItem = styled.li`
  list-style: none;
  background-color: ${({ theme }) => theme.surfacePointDefault};
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  font-size: 1.6rem;
`;

export default NoticeBoardForm;
