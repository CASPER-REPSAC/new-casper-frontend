import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import {
  Form,
  LoginInput,
  Label,
  Row,
  Wrapper,
  Register_link,
  LoginButton,
  LogoWrapper,
} from './adminpage.style';
import Image from 'next/image';

interface LoginFormProps {
  id: string;
  pw: string;
}

export default function Login() {
  const isDark = useRecoilValue(isDarkState);

  const { register, watch, handleSubmit } = useForm<LoginFormProps>();
  // const theme = useContext(ThemeContext);

  return (
    <Wrapper>
      관리자 페이지 입니다 test
    </Wrapper>
  );
}
