import { DefaultButton, DefaultInput } from "@src/components/Components";
import PageTitle from "@src/components/layout/PageTitle";
import PageWrapper from "@src/components/layout/PageWrapper";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  height: 400px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
`;
const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
const Input = styled(DefaultInput)`
  height: 34px;
  width: 400px;
  font-size: 1.4rem;
`;
const IntroInput = styled.textarea`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.color2};
  width: 290px;
  color: ${({ theme }) => theme.textColor};
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.textColor};
  }
  padding: 10px;
  box-sizing: border-box;
  font-size: 1.4rem;
`;
const Avatar = styled(Input)`
  display: none;
`;
const AvatarLabel = styled.label`
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color2};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 0.5em;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled(DefaultButton)`
  align-self: flex-end;
  margin-top: 1em;
`;

function MyPage() {
  const { register } = useForm();
  return (
    <PageWrapper>
      <PageTitle pageTitle="MyPage" />
      <Form>
        <FlexRow>
          <FlexCol>
            <AvatarLabel htmlFor="avatar">이미지 변경하기</AvatarLabel>
            <Avatar type="file" name="avatar" id="avatar" />
            <Div>
              <Label htmlFor="introduce">소개글</Label>
              <IntroInput
                id="introduce"
                {...register("introduce", { required: true })}
                placeholder="소개글"
                rows={4}
                cols={33}
              />
            </Div>
          </FlexCol>
          <FlexCol>
            <Div>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                type="text"
                placeholder="이름"
                autoComplete={"off"}
              />
            </Div>
            <Div>
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                id="nickname"
                {...register("nickname", { required: true })}
                type="text"
                placeholder="닉네임"
                autoComplete={"off"}
              />
            </Div>
            <Div>
              <Label htmlFor="group">회원 그룹</Label>
              <Input
                id="group"
                {...register("group", { required: true })}
                type="text"
                placeholder="회원그룹"
                autoComplete={"off"}
              />
            </Div>
            <Div>
              <Label htmlFor="github">소셜 정보</Label>
              <Input
                id="github"
                {...register("github", { required: true })}
                type="text"
                placeholder="http://github.com/example"
                autoComplete={"off"}
              />
              <Input
                id="blog"
                {...register("blog", { required: true })}
                type="text"
                placeholder="http://blog.example.com"
                autoComplete={"off"}
              />
            </Div>
          </FlexCol>
        </FlexRow>
        <Button>저장</Button>
      </Form>
    </PageWrapper>
  );
}

export default MyPage;
