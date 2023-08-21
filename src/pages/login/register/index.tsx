import { isDarkState } from '@src/atoms';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineCheckSquare,
  AiFillStar,
  AiOutlineFileImage,
} from 'react-icons/ai';
import { CgRename } from 'react-icons/Cg';
import { FaBirthdayCake } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { SetStateAction, useEffect, useState } from 'react';
import router from 'next/router';
import {
  Form,
  ImageWrapper,
  ImgInput,
  LoginInput,
  Label,
  Row,
  Wrapper,
  LoginButton,
  InputErrors,
  ImgLabel,
  PreviewImg,
  ImgIcon,
  ProfileLabel,
  PwInput,
  BirthdayInput,
} from './register.style';
import { detectContentType } from 'next/dist/server/image-optimizer';

interface IForm {
  id: string;
  pw: string;
  email: string;
  name: string;
  nickname: string;
  birthdate: Date;
  // profile: FileList;
}

// 정규표현식 선언
const ID_Regex = /^[A-Za-z0-9]{3,19}$/;
const Pw_Regex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
const Email_Regex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const Birthday_Regex = /^[0-9]{4}[0-9]{2}[0-9]{2}$/;

export default function Register() {
  const [passwordCheck, setpasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const isDark = useRecoilValue(isDarkState);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
  });

  const [imageSrc, setImageSrc] = useState<string>();
  const [imgFile, setFilelist] = useState<File>();
  const ImgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profileinput = e.target as HTMLInputElement;
    if (!profileinput.files?.length) {
      return;
    }
    const profile = profileinput.files[0];
    console.log(profile);
    setFilelist(profile);
    if (imgFile && imgFile.length > 0) {
      const file = imgFile;
      setImageSrc(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const file = imgFile;
      setImageSrc(URL.createObjectURL(file));
    }
  }, [imgFile]);

  // const [imageSrc, setImageSrc] = useState<string>();
  // const ProfileImg = watch('profile');
  // useEffect(() => {
  //   if (ProfileImg && ProfileImg.length > 0) {
  //     const file = ProfileImg[0];
  //     setImageSrc(URL.createObjectURL(file));
  //   }
  // }, [ProfileImg]);

  const onValid: SubmitHandler<IForm> = async (data) => {
    if (passwordError) {
      alert('비밀번호 다르다고 짜샤 아오');
      return;
    }
    const formData = new FormData();
    const img = imgFile ? imgFile : 'null';
    formData.append('profile', img);
    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    formData.append('dto', blob);
    await axios
      .post('/api/user/join', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        router.push('/login');
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const handlePw = (e: { target: { value: string } }) => {
    const { value } = { ...e.target };
    setPasswordError(watch('pw') !== value);
    setpasswordCheck(value);
  };

  //에러 메세지 선언
  const onInvalid = () => {
    alert('입력값들을 확인해 주세요');
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
      <Form encType="multipart/form-data">
        <Row>
          <ImgInput
            accept="image/*"
            type="file"
            id="profile"
            onChange={ImgUpload}
            // {...register('profile')}
          ></ImgInput>
          <ImgLabel htmlFor="profile">
            <PreviewImg
              src={imageSrc ? imageSrc : '/defalutprofile.png'}
            ></PreviewImg>
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
                value: ID_Regex,
                message: 'ID 형식이 올바르지 않습니다.',
              },
            })}
          ></LoginInput>
        </Row>
        {IdErrorMessage}
        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요.[8자리 이상 + 특수문자 1개 이상]"
            autoComplete="off"
            type={'password'}
            register={register('pw', {
              required: 'PW를 입력해 주세요',
              pattern: {
                value: Pw_Regex,
                message: 'PW 형식이 올바르지 않습니다.',
              },
            })}
          ></LoginInput>
        </Row>
        {PwErrorMessage}
        <Row>
          <Label htmlFor="pw_check">
            <AiOutlineCheckSquare size={25} />
          </Label>
          <PwInput
            placeholder="PW를 한번 더 입력해주세요"
            autoComplete="off"
            type={'password'}
            value={passwordCheck}
            onChange={handlePw}
          ></PwInput>
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
                value: Email_Regex,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          ></LoginInput>
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
                value: /^[가-힣]+$/,
                message: '이름이 이상합니다.',
              },
            })}
          ></LoginInput>
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
          ></LoginInput>
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
          ></BirthdayInput>
        </Row>
        {BirthdayErrorMessage}
        <LoginButton onClick={handleSubmit(onValid, onInvalid)}>
          등록하기
        </LoginButton>
      </Form>
    </Wrapper>
  );
}
