/* eslint-disable react/jsx-props-no-spreading */
import router from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CgRename } from 'react-icons/Cg';
import { FaBirthdayCake } from 'react-icons/fa';
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCheckSquare,
  AiFillStar,
  AiOutlineFileImage,
} from 'react-icons/ai';
import axios from 'axios';
import Input from '@src/components/common/Input';
import { EMAIL_REGEX, ID_REGEX, NAME_REGEX, PW_REGEX } from '@src/utils/regex';
import Button from '@src/components/common/Button';

interface IForm {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
  birthdate: Date;
  profile: FileList;
}

export default function Register() {
  const [passwordCheck, setpasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const onValid: SubmitHandler<IForm> = (data) => {
    if (passwordError) return;
    // const formData = new FormData();
    // formData.append('profile', imgFilelist);

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

  const handlePw = (e: { target: { value: string } }) => {
    const { value } = { ...e.target };
    setPasswordError(watch('pw') !== value);
    setpasswordCheck(value);
  };

  const onInvalid = () => {
    // alert('입력값들을 확인해 주세요');
  };
  const IdErrorMessage = errors.id && (
    <InputErrors>{errors.id.message}</InputErrors>
  );
  const PwErrorMessage = errors.pw && (
    <InputErrors>{errors.pw.message}</InputErrors>
  );
  const PwcheckErrorMessage = passwordError && (
    <InputErrors>비밀번호가 일치하지 않습니다.</InputErrors>
  );
  const EmailErrorMessage = errors.email && (
    <InputErrors>{errors.email.message}</InputErrors>
  );
  const NameErrorMessage = errors.name && (
    <InputErrors>{errors.name.message}</InputErrors>
  );
  const NickNameErrorMessage = errors.nickname && (
    <InputErrors>{errors.nickname.message}</InputErrors>
  );
  const BirthdayErrorMessage = errors.birthdate && (
    <InputErrors>{errors.birthdate.message}</InputErrors>
  );

  return (
    <Wrapper>
      <Form>
        <Row>
          <ImgInput
            accept="image/*"
            type="file"
            id="profile"
            // onChange={ImgUpload}
            {...register('profile')}
          />
          <ImgLabel htmlFor="profile">
            <PreviewImg src="/defalutprofile.png" />
            <ImgIcon>
              <AiOutlineFileImage size={25} />
            </ImgIcon>
          </ImgLabel>
        </Row>
        <ProfileLabel>이미지는 정방형으로 올려주세용!</ProfileLabel>
        <Row>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <LoginInput
            placeholder="ID를 입력해주세요.[영문, 숫자만 가능]"
            autoComplete="off"
            register={register('id', {
              required: 'ID를 입력해 주세요.',
              pattern: {
                value: ID_REGEX,
                message: 'ID 형식이 올바르지 않습니다.',
              },
            })}
          />
        </Row>
        {IdErrorMessage}
        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요.[8자리 이상 + 특수문자 1개 이상]"
            autoComplete="off"
            type="password"
            register={register('pw', {
              required: 'PW를 입력해 주세요',
              pattern: {
                value: PW_REGEX,
                message: 'PW 형식이 올바르지 않습니다.',
              },
            })}
          />
        </Row>
        {PwErrorMessage}
        <Row>
          <Label htmlFor="pw_check">
            <AiOutlineCheckSquare size={25} />
          </Label>
          <PwInput
            placeholder="PW를 한번 더 입력해주세요"
            autoComplete="off"
            type="password"
            value={passwordCheck}
            onChange={handlePw}
          />
        </Row>
        {PwcheckErrorMessage}
        <Row>
          <Label htmlFor="email">
            <AiOutlineMail size={25} />
          </Label>
          <LoginInput
            placeholder="email을 입력해 주세요."
            autoComplete="off"
            register={register('email', {
              required: '이메일을 입력해 주세요',
              pattern: {
                value: EMAIL_REGEX,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
        </Row>
        {EmailErrorMessage}
        <Row>
          <Label htmlFor="name">
            <CgRename size={25} />
          </Label>
          <LoginInput
            placeholder="이름을 입력해 주세요."
            autoComplete="off"
            register={register('name', {
              required: '이름을 입력해 주세요',
              pattern: {
                value: NAME_REGEX,
                message: '이름이 이상합니다.',
              },
            })}
          />
        </Row>
        {NameErrorMessage}
        <Row>
          <Label htmlFor="nick">
            <AiFillStar size={25} />
          </Label>
          <LoginInput
            placeholder="닉네임을 입력해 주세요."
            autoComplete="off"
            register={register('nickname', {
              required: '닉네임을 입력해 주세요',
              pattern: {
                value: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/,
                message: '닉네임이 이상합니다.',
              },
            })}
          />
        </Row>
        {NickNameErrorMessage}
        <Row>
          <Label htmlFor="nick">
            <FaBirthdayCake size={25} />
          </Label>
          <BirthdayInput
            placeholder="생일을 입력해 주세요.[YYYYMMDD]"
            autoComplete="off"
            type="date"
            {...register('birthdate', {
              required: '생일을 입력해 주세요',
            })}
          />
        </Row>
        {BirthdayErrorMessage}
        <LoginButton onClick={handleSubmit(onValid, onInvalid)}>
          등록하기
        </LoginButton>
      </Form>
    </Wrapper>
  );
}

const PwInput = styled.input`
  :focus {
    border-color: ${({ theme }) => theme.borderBold};
    outline: none;
  }
  background-color: ${({ theme }) => theme.surfaceDefault};
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textDefault};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 50px;
  width: 400px;
  margin: 0.3em;
  padding-left: 45px;
  transition: all ease 0.3s;
`;
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
const LoginInput = styled(Input)`
  margin: 0.3em;
  padding-left: 45px;
  transition: all ease 0.3s;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
`;
const LoginButton = styled(Button)`
  width: 400px;
  height: 50px;
`;
const InputErrors = styled.p`
  color: red;
  font-size: 110%;
`;
const ImgLabel = styled.label`
  height: 200px;
  margin-bottom: 0.9em;
`;
const ImgIcon = styled.div`
  position: absolute;
  right: 20%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border: solid 2px ${({ theme }) => theme.borderDefault};
  transform: translate(0, -100%);
  border-radius: 50%;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.borderDefault};
  }
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
const ProfileLabel = styled.p`
  font-size: 130%;
`;
const BirthdayInput = styled.input`
  :focus {
    border-color: ${({ theme }) => theme.borderBold};
    outline: none;
  }
  background-color: ${({ theme }) => theme.surfaceDefault};
  border: 1px solid ${({ theme }) => theme.borderDefault};
  color: ${({ theme }) => theme.textDefault};
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.5rem;
  box-sizing: border-box;
  height: 50px;
  width: 400px;
  margin: 0.3em;
  padding-left: 45px;
  transition: all ease 0.3s;
  &[type='date'] {
    color: white;
  }
`;
