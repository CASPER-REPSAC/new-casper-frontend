import PageTitle from "@src/components/PageTitle";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import Button from "@src/components/Button";
import { useRef } from "react";
import PageWrapper from "@src/components/PageWrapper";

/**
 *  글 작성 페이지
 */

const Editor = dynamic(() => import("@src/components/boards/ToastEditor"), {
  ssr: false,
});

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px - 50px); // header, footer 뺀 값
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color2};
  background-color: inherit;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 3rem;
  height: 40px;
  outline: none;
  box-sizing: border-box;
`;

const CheckInput = styled.input`
  align-self: flex-start;
`;

const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
  font-size: 1.6rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;
const Select = styled.select`
  background-color: inherit;
  height: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  margin-right: 0.5em;
  width: 100px;
  text-align: center;
`;

function PostPage() {
  const { register, watch } = useForm();

  return (
    <PageWrapper>
      <Form>
        <Row>
          <Select {...register("category", { required: true })}>
            <option value="공지사항">공지사항</option>
            <option value="정회원">정회원</option>
            <option value="준회원">준회원</option>
          </Select>
          <Select {...register("subCategory", { required: true })}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
          <Input
            {...register("title", { required: true })}
            placeholder="제목을 입력해주세요."
          />
        </Row>

        <Options>
          <label htmlFor="secret">비밀글</label>
          <CheckInput
            {...register("secret")}
            type="checkbox"
            name="secret"
            value={"secret"}
          />
        </Options>

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
    </PageWrapper>
  );
}

export default PostPage;
