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
import Button from '@src/components/common/DefaultButton';
import {
  ERROR_MESSAGE,
  INPUT_LABEL,
  PLACEHOLDER,
  REQUIRED_MESSAGE,
} from '@src/utils/constants';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import AvatarInput from '@src/components/molecules/Inputs/AvatarInput';
import DefaultForm from '@src/components/common/DefaultForm';

interface RegisterFormData {
  id: string;
  pw: string;
  pwConfirm: string;
  email: string;
  name: string;
  nickname: string;
  profile: FileList;
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
  });

  const onValid: SubmitHandler<RegisterFormData> = (data) => {
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
    required: REQUIRED_MESSAGE.id,
    pattern: {
      value: ID_REGEX,
      message: ERROR_MESSAGE.id,
    },
  });
  const pwRegister = register('pw', {
    required: REQUIRED_MESSAGE.pw,
    pattern: {
      value: PW_REGEX,
      message: ERROR_MESSAGE.pw,
    },
  });
  const pwConfirmRegister = register('pwConfirm', {
    required: REQUIRED_MESSAGE.pwConfirm,
    pattern: {
      value: PW_REGEX,
      message: ERROR_MESSAGE.pwConfirm,
    },
  });
  const emailRegister = register('email', {
    required: REQUIRED_MESSAGE.email,
    pattern: {
      value: EMAIL_REGEX,
      message: ERROR_MESSAGE.email,
    },
  });
  const nameRegister = register('name', {
    required: REQUIRED_MESSAGE.name,
    pattern: {
      value: NAME_REGEX,
      message: ERROR_MESSAGE.name,
    },
  });

  const nickNameRegister = register('nickname', {
    required: REQUIRED_MESSAGE.nickname,
    pattern: {
      value: NICKNAME_REGEX,
      message: ERROR_MESSAGE.nickname,
    },
  });
  const avatarRegister = register('profile');

  return (
    <Form>
      <AvatarInput register={avatarRegister} />
      <LabelInput
        label={INPUT_LABEL.id}
        labelIcon={<AiOutlineUser size={25} />}
        register={idRegister}
        placeholder={PLACEHOLDER.id}
        errorMessage={errors.id?.message}
      />
      <LabelInput
        label={INPUT_LABEL.pw}
        labelIcon={<AiOutlineCheckSquare size={25} />}
        register={pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        errorMessage={errors.pw?.message}
      />
      <LabelInput
        label={INPUT_LABEL.pwConfirm}
        labelIcon={<AiOutlineCheckSquare size={25} />}
        register={pwConfirmRegister}
        errorMessage={errors.pwConfirm?.message}
        placeholder={PLACEHOLDER.pwConfirm}
        autoComplete="off"
        type="password"
      />
      <LabelInput
        label={INPUT_LABEL.email}
        labelIcon={<AiOutlineMail size={25} />}
        placeholder={PLACEHOLDER.email}
        autoComplete="off"
        register={emailRegister}
        errorMessage={errors.email?.message}
      />
      <LabelInput
        label={INPUT_LABEL.name}
        labelIcon={<CgRename size={25} />}
        placeholder={PLACEHOLDER.name}
        autoComplete="off"
        register={nameRegister}
        errorMessage={errors.name?.message}
      />
      <LabelInput
        label={INPUT_LABEL.nickname}
        labelIcon={<AiFillStar size={25} />}
        placeholder={PLACEHOLDER.nickname}
        autoComplete="off"
        register={nickNameRegister}
        errorMessage={errors.nickname?.message}
      />
      <LoginButton full onClick={handleSubmit(onValid, onInvalid)}>
        등록하기
      </LoginButton>
    </Form>
  );
}

export default RegisterForm;

const Form = styled(DefaultForm)`
  gap: 2em;
  padding: 100px 0 200px;
`;

const LoginButton = styled(Button)`
  height: 50px;
`;
