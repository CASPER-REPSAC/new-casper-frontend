import PageTitle from "@src/components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import Button from "@src/components/Button";

const Editor = dynamic(() => import("@src/components/ToastEditor"), {
  ssr: false,
});

const Wrapper = styled.div`
  padding-left: 160px;
  padding-right: 160px;
  @media screen and (max-width: 1440px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const Label = styled.label`
  font-size: 2rem;
`;
const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color2};
  background-color: inherit;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 3rem;
  height: 40px;
  margin-bottom: 20px;
`;

function PostPage() {
  const { register } = useForm();
  return (
    <Wrapper>
      <Form>
        <Input
          {...register("title", { required: true })}
          placeholder="제목을 입력해주세요."
        />
        <Editor />
        <Button
          text="작성하기"
          style={{
            alignSelf: "flex-end",
            right: 0,
            bottom: 0,
            marginTop: "1em",
          }}
        />
      </Form>
    </Wrapper>
  );
}

export default PostPage;
