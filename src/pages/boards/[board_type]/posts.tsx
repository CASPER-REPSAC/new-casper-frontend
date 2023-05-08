import PageTitle from "@src/components/layout/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import PageWrapper from "@src/components/layout/PageWrapper";
import { useRouter } from "next/router";
import { DefaultButton, DefaultInput } from "@src/components/Components";

/**
 *  글 작성 페이지
 */

const Editor = dynamic(() => import("@src/components/boards/ToastEditor"), {
  ssr: false,
});

const Form = styled.form`
  position: relative;
  height: calc(150vh - 70px - 50px); // header, footer 뺀 값
  padding-bottom: 10vh;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const Input = styled(DefaultInput)`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.toastBorder};
  width: 100%;
  font-size: 3rem;
  height: 40px;
  padding-bottom: 0.3em;
`;

const CheckInput = styled.input`
  align-self: flex-start;
  margin-right: 1em;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.6rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.8rem;
  margin-right: 1em;
  width: 120px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.toastBorder};
`;

const FileInput = styled.input`
  display: none;
`;
const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: 1px solid ${({ theme }) => theme.toastBorder};

  border-radius: 4px;
  height: 100px;
  cursor: pointer;
`;

const TitleSection = styled.div`
  margin-top: 2em;
`;
const ContentSection = styled.div`
  margin-top: 2em;

  display: flex;
  flex-direction: column;
  height: 80vh;
`;
const OptionSection = styled.div`
  margin-top: 2em;
`;
const FileSection = styled.div`
  margin-top: 2em;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
`;
const Button = styled(DefaultButton)`
  flex-shrink: 0;
`;

function PostPage() {
  const { register, watch } = useForm();
  const router = useRouter();
  const { board_type } = router.query;

  return (
    <PageWrapper>
      <PageTitle pageTitle="공지사항"></PageTitle>
      <Form>
        {/* header */}
        <TitleSection>
          <H1>제목</H1>
          <Header>
            <Select {...register("subCategory", { required: true })}>
              {/* Todo. board type에 따라 목록 변경 */}
              <option value="1">c언어</option>
              <option value="2">시스템</option>
              <option value="3">파이썬</option>
            </Select>
            <Input
              {...register("title", { required: true })}
              placeholder="제목을 입력해주세요."
            />
          </Header>
        </TitleSection>

        {/* 에디터 */}
        <ContentSection>
          <H1>내용</H1>
          <Editor />
        </ContentSection>

        {/* 옵션 */}
        <OptionSection>
          <H1>옵션</H1>
          <Options>
            <label htmlFor="secret">비밀글</label>
            <CheckInput
              {...register("secret")}
              type="checkbox"
              name="secret"
              value={"secret"}
            />
            <label htmlFor="fix">고정글</label>
            <CheckInput
              {...register("fix")}
              type="checkbox"
              name="secret"
              value={"secret"}
            />
          </Options>
        </OptionSection>

        {/* 파일 첨부 */}
        <FileSection>
          <H1>파일</H1>
          <FileInputLabel htmlFor="file">파일 첨부</FileInputLabel>
          <FileInput type="file" id="file"></FileInput>
        </FileSection>

        {/* Footer */}
        <ButtonSection>
          <Button>작성</Button>
        </ButtonSection>
      </Form>
    </PageWrapper>
  );
}

export default PostPage;
