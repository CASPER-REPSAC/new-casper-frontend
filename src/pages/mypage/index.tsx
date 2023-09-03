/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import PageTitle from '@src/components/common/PageTitle';
import CommonCenterWrapper from '@src/components/common/Layout/CommonCenterWrapper';
import DefaultButton from '@src/components/common/DefaultButton';
import DefaultInput from '@src/components/common/DefaultInput';

function MyPage() {
  const { register } = useForm();

  return (
    <>
      <PageTitle pageTitle="MyPage" />
      <CommonCenterWrapper>
        <Form>
          <FlexCol>
            <AvatarLabel htmlFor="avatar">
              이미지 변경하기
              <Avatar
                register={register('avatar')}
                type="file"
                name="avatar"
                id="avatar"
              />
            </AvatarLabel>

            <InputWrapper>
              <Label htmlFor="introduce">소개글</Label>
              <IntroInput
                id="introduce"
                {...register('introduce', { required: true })}
                placeholder="소개글"
                rows={4}
                cols={33}
              />
            </InputWrapper>
          </FlexCol>
          <FlexCol>
            <InputWrapper>
              <Label htmlFor="name">이름</Label>
              <DefaultInput
                id="name"
                register={register('name', { required: true })}
                type="text"
                placeholder="이름"
                autoComplete="off"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="nickname">닉네임</Label>
              <DefaultInput
                id="nickname"
                register={register('nickname', { required: true })}
                type="text"
                placeholder="닉네임"
                autoComplete="off"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="group">회원 그룹</Label>
              <DefaultInput
                id="group"
                register={register('group', { required: true })}
                type="text"
                placeholder="회원그룹"
                autoComplete="off"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="github">소셜 정보</Label>
              <DefaultInput
                id="github"
                register={register('github', { required: true })}
                type="text"
                placeholder="http://github.com/example"
                autoComplete="off"
              />
              <DefaultInput
                id="blog"
                register={register('blog', { required: true })}
                type="text"
                placeholder="http://blog.example.com"
                autoComplete="off"
              />
            </InputWrapper>
          </FlexCol>
          <Button>저장</Button>
        </Form>
      </CommonCenterWrapper>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 200px;
  width: 450px;
  @media screen and (min-width: 768px) {
    width: 550px;
  }
  @media screen and (min-width: 1024px) {
    width: 600px;
  }
  @media screen and (min-width: 1440px) {
    width: 700px;
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;

const IntroInput = styled.textarea`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  width: 100%;
  color: ${({ theme }) => theme.textDefault};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.borderBold};
  }
  padding: 10px;
  font-size: 1.4rem;
  resize: none;
`;
const Avatar = styled(DefaultInput)`
  display: none;
`;
const AvatarLabel = styled.label`
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borderDefault};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`;
const Button = styled(DefaultButton)`
  align-self: flex-end;
  margin-top: 1em;
  width: 100%;
  height: 50px;
`;

export default MyPage;
