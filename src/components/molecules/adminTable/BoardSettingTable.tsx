import { styled } from 'styled-components';
import { DefaultButton } from 'app/_components/defaultTag';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckInput } from '@src/components/common/featureTag';
import BoardCategoryCard from './common/BoardCategoryCard';

interface Props {
  title: string;
  categories: string[];
}

function BoardSettingTable({ title, categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { register } = useForm();

  return (
    <Details open={isOpen} onToggle={() => setIsOpen((cur) => !cur)}>
      <Summary>
        <span>{title}</span>
        {isOpen && <DefaultButton>저장하기</DefaultButton>}
      </Summary>
      <Section>
        <Title>
          <span>카테고리</span>
          <DefaultButton $size="small">추가하기</DefaultButton>
        </Title>
        <Item>
          <CategoryList>
            {categories.map((category) => (
              <BoardCategoryCard key={category} title={category} />
            ))}
          </CategoryList>
        </Item>
      </Section>
      <Section>
        <Title>권한 설정</Title>
        <Row>
          <SubTitle>읽기</SubTitle>
          <CheckBoxWrapper>
            {/* 권한 종류 만큼 생성 */}
            <CheckInput label="1" {...register('1')} />
            <CheckInput label="2" {...register('2')} />
          </CheckBoxWrapper>
        </Row>
        <Row>
          <SubTitle>쓰기</SubTitle>
          <CheckBoxWrapper>
            {/* 권한 종류 만큼 생성 */}
            <CheckInput label="3" {...register('3')} />
            <CheckInput label="4" {...register('4')} />
          </CheckBoxWrapper>
        </Row>
        <Row>
          <SubTitle>삭제</SubTitle>
          <CheckBoxWrapper>
            {/* 권한 종류 만큼 생성 */}
            <CheckInput label="5" {...register('5')} />
            <CheckInput label="6" {...register('6')} />
          </CheckBoxWrapper>
        </Row>
      </Section>
    </Details>
  );
}

const Details = styled.details`
  border: 1px solid ${({ theme }) => theme.borderDefault};
`;
const Summary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.surfaceAlt};
  font-size: 2.4rem;
  padding: 0 1.2em;
  height: 60px;
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0.8em 1.2em;
  border-bottom: 1px solid ${({ theme }) => theme.borderDefault};
`;
const SubTitle = styled.div``;
const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export default BoardSettingTable;
