import CheckBox from '@src/components/molecules/Inputs/ChechBox';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

function AuthoritySettingSection() {
  const { register, watch } = useForm();

  return (
    <Wrapper>
      <Title>권한 설정</Title>
      <Section>
        <SubTitle>읽기</SubTitle>
        <CheckBoxWrapper>
          {/* 권한 종류 만큼 생성 */}
          <CheckBox
            label="test"
            register={register('test')}
            selected={watch('test')}
          />
          <CheckBox
            label="test2"
            register={register('test2')}
            selected={watch('test2')}
          />
        </CheckBoxWrapper>
      </Section>
      <Section>
        <SubTitle>쓰기</SubTitle>
        <CheckBoxWrapper>
          {/* 권한 종류 만큼 생성 */}
          <CheckBox
            label="test"
            register={register('test')}
            selected={watch('test')}
          />
          <CheckBox
            label="test2"
            register={register('test2')}
            selected={watch('test2')}
          />
        </CheckBoxWrapper>
      </Section>
      <Section>
        <SubTitle>삭제</SubTitle>
        <CheckBoxWrapper>
          {/* 권한 종류 만큼 생성 */}
          <CheckBox
            label="test"
            register={register('test')}
            selected={watch('test')}
          />
          <CheckBox
            label="test2"
            register={register('test2')}
            selected={watch('test2')}
          />
        </CheckBoxWrapper>
      </Section>
    </Wrapper>
  );
}

const Section = styled.div`
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

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.surfaceAlt};
  font-size: 2rem;
  padding: 0.8em 1.2em;
`;
const Wrapper = styled.div``;

export default AuthoritySettingSection;
