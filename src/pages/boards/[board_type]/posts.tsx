import PageTitle from "@src/components/layout/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import Button from "@src/components/Button";
import { useRef } from "react";
import PageWrapper from "@src/components/layout/PageWrapper";
import { useRouter } from "next/router";
import { urlToTitle } from "@src/utils";

/**
 *  글 작성 페이지
 */

const Editor = dynamic(() => import("@src/components/boards/ToastEditor"), {
  ssr: false,
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: calc(100vh - 70px - 50px); // header, footer 뺀 값
  padding-bottom: 10vh;
  box-sizing: border-box;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.toastBorder};
  background-color: inherit;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 3rem;
  height: 40px;
  outline: none;
  box-sizing: border-box;
  padding: 0.3em 0.1em 0.3em 0.1em;
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

  height: 100px;
  cursor: pointer;
`;

function PostPage() {
  const { register, watch } = useForm();
  const router = useRouter();
  const { board_type } = router.query;

  return (
    <PageWrapper>
      <PageTitle
        pageTitle={urlToTitle[String(board_type)] + " 작성"}
      ></PageTitle>
      <Form>
        {/* header */}
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

        {/* 옵션 */}
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

        {/* 에디터 */}
        <Editor />

        {/* 파일 첨부 */}
        <FileInputLabel htmlFor="file">파일 첨부</FileInputLabel>
        <FileInput type="file" id="file"></FileInput>

        {/* Footer */}
        <Button
          text="작성"
          style={{
            alignSelf: "flex-end",
            flexShrink: 0,
          }}
        />
      </Form>
    </PageWrapper>
  );
}

export default PostPage;
