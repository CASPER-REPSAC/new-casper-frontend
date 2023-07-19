import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser, AiOutlineMail, AiOutlineCheckSquare, AiFillStar } from 'react-icons/ai';
import {CgRename} from 'react-icons/Cg'
import { FaBirthdayCake } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import {
  Form,
  ImageWrapper,
  Img,
  LoginInput,
  Label,
  Row,
  Wrapper,
  LoginButton,
  Pw_false,
} from './register.style';

interface IForm {
  id: string;
  pw: string;
  pw_check : string;
  email: string;
  name: string;
  nickname: string;
  birthday: string;
}
export default function Register() {
  const isDark = useRecoilValue(isDarkState);
  const { register, watch, handleSubmit} = useForm<IForm>();
  // const theme = useContext(ThemeContext);
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
          <LoginInput
            placeholder="ID를 입력해주세요."
            autoComplete="off"
              register={register('id', { required: true })}
          ></LoginInput>
        </Row>

        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요."
            autoComplete="off"
            type={'password'}
            register = {register("pw", { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="pw_check">
            <AiOutlineCheckSquare size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 확인해 주세요."
            autoComplete="off"
            type={'password'}
            register = {register("pw_check", { required: true })}
          ></LoginInput>
        </Row>
        {watch('pw') !== watch ('pw_check') && <Pw_false>비밀번호가 일치하지 않습니다.</Pw_false>}
        <Row>
          <Label htmlFor="email">
            <AiOutlineMail size={25} />
          </Label>
          <LoginInput
            placeholder="email을 입력해 주세요."
            autoComplete="off"
            register = {register('email', { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="name">
            <CgRename size={25} />
          </Label>
          <LoginInput
            placeholder="이름을 입력해 주세요."
            autoComplete="off"
            register = {register("name", { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="nick">
            <AiFillStar size={25} />
          </Label>
          <LoginInput
            placeholder="닉네임을 입력해 주세요."
            autoComplete="off"
            register = {register("nickname", { required: true })}
          ></LoginInput>
        </Row>
        <Row>
          <Label htmlFor="nick">
            <FaBirthdayCake size={25} />
          </Label>
          <LoginInput
            placeholder="생일을 입력해 주세요."
            autoComplete="off"
            register = {register("birthday", { required: true })}
          ></LoginInput>
        </Row>
        <LoginButton onClick={() => {}}>회원가입</LoginButton>
      </Form>
    </Wrapper>
  );
}
