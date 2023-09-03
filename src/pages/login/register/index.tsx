/* eslint-disable react/jsx-props-no-spreading */
import router from 'next/router';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CgRename } from 'react-icons/Cg';
import { FaBirthdayCake } from 'react-icons/fa';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCheckSquare,
  AiFillStar,
} from 'react-icons/ai';
import axios from 'axios';
import {
  EMAIL_REGEX,
  ID_REGEX,
  NAME_REGEX,
  NICKNAME_REGEX,
  PW_REGEX,
} from '@src/utils/regex';
import Button from '@src/components/common/Button';
import LoginInput from '@src/components/login/LoginInput';

interface IForm {
  id: string;
  pw: string;
  pwConfirm: string;
  email: string;
  name: string;
  nickname: string;
  birthdate: Date;
  profile: FileList;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid: SubmitHandler<IForm> = (data) => {
    axios
      .post('/api/user/join', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        router.push('/login');
      });
  };

  const onInvalid = () => {
    // alert('입력값들을 확인해 주세요');
  };

  const idRegister = register('id', {
    required: 'ID를 입력해 주세요.',
    pattern: {
      value: ID_REGEX,
      message: 'ID 형식이 올바르지 않습니다.',
    },
  });
  const pwRegister = register('pw', {
    required: 'PW를 입력해 주세요',
    pattern: {
      value: PW_REGEX,
      message: 'PW 형식이 올바르지 않습니다.',
    },
  });
  const pwConfirmRegister = register('pwConfirm', {
    required: 'PW를 한번 더 입력해주세요.[8자리 이상 + 특수문자 1개 이상]',
    pattern: {
      value: PW_REGEX,
      message: 'PW 형식이 올바르지 않습니다.',
    },
  });
  const emailRegister = register('email', {
    required: '이메일을 입력해 주세요',
    pattern: {
      value: EMAIL_REGEX,
      message: '이메일 형식이 올바르지 않습니다.',
    },
  });
  const nameRegister = register('name', {
    required: '이름을 입력해 주세요',
    pattern: {
      value: NAME_REGEX,
      message: '이름이 이상합니다.',
    },
  });

  const nickNameRegister = register('nickname', {
    required: '닉네임을 입력해 주세요',
    pattern: {
      value: NICKNAME_REGEX,
      message: '닉네임이 이상합니다.',
    },
  });
  const birthdayRegister = register('birthdate', {
    required: '생일을 입력해 주세요',
  });
  return (
    <Form>
      <ImageWrapper>
        <ImgLabel htmlFor="profile">
          <ImgInput
            id="profile"
            accept="image/*"
            type="file"
            {...register('profile')}
          />
          <PreviewImg src="/defalutprofile.png" />
        </ImgLabel>
      </ImageWrapper>
      <LoginInput
        labelIcon={<AiOutlineUser size={25} />}
        register={idRegister}
        placeholder="ID를 입력해주세요.[영문, 숫자만 가능]"
        errorMessage={errors.id?.message}
      />
      <LoginInput
        labelIcon={<AiOutlineCheckSquare size={25} />}
        register={pwRegister}
        placeholder="PW를 입력해주세요"
        type="password"
        errorMessage={errors.pw?.message}
      />
      <LoginInput
        labelIcon={<AiOutlineCheckSquare size={25} />}
        register={pwConfirmRegister}
        errorMessage={errors.pwConfirm?.message}
        placeholder="PW를 한번 더 입력해주세요"
        autoComplete="off"
        type="password"
      />
      <LoginInput
        labelIcon={<AiOutlineMail size={25} />}
        placeholder="email을 입력해 주세요."
        autoComplete="off"
        register={emailRegister}
        errorMessage={errors.email?.message}
      />
      <LoginInput
        labelIcon={<CgRename size={25} />}
        placeholder="이름을 입력해 주세요."
        autoComplete="off"
        register={nameRegister}
        errorMessage={errors.name?.message}
      />
      <LoginInput
        labelIcon={<AiFillStar size={25} />}
        placeholder="닉네임을 입력해 주세요."
        autoComplete="off"
        register={nickNameRegister}
        errorMessage={errors.nickname?.message}
      />
      <LoginInput
        labelIcon={<FaBirthdayCake size={25} />}
        placeholder="생일을 입력해 주세요.[YYYYMMDD]"
        autoComplete="off"
        type="date"
        register={birthdayRegister}
        errorMessage={errors.birthdate?.message}
      />
      <LoginButton onClick={handleSubmit(onValid, onInvalid)}>
        등록하기
      </LoginButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-bottom: 200px;
  margin: 120px auto 0;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
`;

const LoginButton = styled(Button)`
  width: 400px;
  height: 50px;
`;

const ImgLabel = styled.label`
  cursor: pointer;
`;

const PreviewImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.borderDefault};
`;
const ImgInput = styled.input`
  display: none;
`;
