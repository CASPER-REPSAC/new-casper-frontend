import { isDarkState } from "@src/atoms";
import Button from "@src/components/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled(motion.input)`
  :focus {
    outline: none;
  }
  height: 50px;
  width: 400px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.color2};
  margin: 0.3em;
  color: ${(props) => props.theme.textColor};
  padding-left: 45px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
`;

const Img = styled(Image)`
  height: auto !important;
  position: relative !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const ImageWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
`;

interface IForm {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<IForm>();
  const theme = useContext(ThemeContext);
  console.log(theme);
  console.log(watch("id"));

  return (
    <Wrapper>
      <ImageWrapper width="300px">
        {isDark ? (
          <Img layout="fill" src="/casper_logo_white.png" alt="logo" />
        ) : (
          <Img layout="fill" src="/casper_logo_black.png" alt="logo" />
        )}
      </ImageWrapper>

      <Form>
        <Row>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <Input
            placeholder="ID를 입력해주세요."
            autoComplete="false"
            whileFocus={{ border: "1px solid white" }}
            {...register("id", { required: true })}
          ></Input>
        </Row>

        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <Input
            placeholder="PW를 입력해주세요."
            autoComplete="false"
            type={"password"}
            whileFocus={{ border: "1px solid white" }}
            {...register("pw", { required: true })}
          ></Input>
        </Row>
        <Button
          text="로그인"
          width="400px"
          height="50px"
          onClick={() => {}}
        ></Button>
      </Form>
    </Wrapper>
  );
}
