import DefaultButton from '@src/components/common/DefaultButton';
import BoardCategoryCard from '@src/components/molecules/BoardCategoryCard';
import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import CheckBox from '../Inputs/ChechBox';

interface Props {
  title: string;
  categories: string[];
}

function BoardSettingTable({ title, categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, watch } = useForm();

  return (
    <Details open={isOpen} onToggle={() => setIsOpen((cur) => !cur)}>
      <Summary>
        <span>{title}</span>
        {isOpen && <DefaultButton>저장하기</DefaultButton>}
      </Summary>
      <Section>
        <Title>
          <span>카테고리</span>
          <DefaultButton type="small">추가하기</DefaultButton>
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
            <CheckBox
              label="1"
              register={register('1')}
              selected={watch('1')}
            />
            <CheckBox
              label="2"
              register={register('2')}
              selected={watch('2')}
            />
          </CheckBoxWrapper>
        </Row>
        <Row>
          <SubTitle>쓰기</SubTitle>
          <CheckBoxWrapper>
            {/* 권한 종류 만큼 생성 */}
            <CheckBox
              label="3"
              register={register('3')}
              selected={watch('3')}
            />
            <CheckBox
              label="4"
              register={register('4')}
              selected={watch('4')}
            />
          </CheckBoxWrapper>
        </Row>
        <Row>
          <SubTitle>삭제</SubTitle>
          <CheckBoxWrapper>
            {/* 권한 종류 만큼 생성 */}
            <CheckBox
              label="5"
              register={register('5')}
              selected={watch('5')}
            />
            <CheckBox
              label="6"
              register={register('6')}
              selected={watch('6')}
            />
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
  background-color: ${({ theme }) => theme.surfacePointDefault};
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
