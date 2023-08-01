import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser, AiOutlineMail, AiOutlineCheckSquare, AiFillStar, AiOutlineFileImage } from 'react-icons/ai';
import {CgRename} from 'react-icons/Cg'
import { FaBirthdayCake } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from "react";
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
  ProfileLabel
} from './register.style';

interface IForm {
  id: string;
  pw: string;
  pwCheck : string;
  email: string;
  name: string;
  nickname: string;
  birthday: string;
  profile: FileList;
}

export default function Register() {
  const [imageSrc, setImageSrc]: any = useState();
  const isDark = useRecoilValue(isDarkState);
  const { 
    register, 
    watch, 
    handleSubmit,
    formState : {errors},
  } = useForm<IForm>({mode:"onChange"});

  const ProfileImg = watch("profile");
  useEffect(() => {
    if(ProfileImg && ProfileImg.length > 0){
      const file = ProfileImg[0];
        setImageSrc(URL.createObjectURL(file));
    }
  }, [ProfileImg])

  const onValid = (data: any) => {
    const API = "http://build.casper.or.kr:5000/api/join"
    if(watch('pw') == watch ('pwCheck')){
        fetch(API, {
          method : 'POST',
          body : data,
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => console.log(res))
    }
  };
  const onInvalid = (data: any) => {alert("입력값들을 확인해 주세요")};
  
  return (
    <Wrapper>
      <Form>
        <Row>
          <ImgInput 
            accept="image/*"
            type="file" 
            id="profile"
            {...register('profile')}
            ></ImgInput>
          <ImgLabel htmlFor="profile">
            <PreviewImg src={imageSrc ? imageSrc:'/defalutprofile.png'}></PreviewImg>
            <ImgIcon>
              <AiOutlineFileImage size={25}/>
            </ImgIcon>          
          </ImgLabel>
        </Row>
        <ProfileLabel>이미지는 정방형으로 올려주세용!</ProfileLabel>
        <Row>
          <Label htmlFor="id">
            <AiOutlineUser size={25} />
          </Label>
          <LoginInput
            placeholder="ID를 입력해주세요.[3글자 이상, 영문자, 숫자만 가능합니다.]"
            autoComplete="off"
            register={register('id', { 
              required: "ID를 입력해 주세요.",
              pattern: {
                value: /^[A-Za-z0-9]{3,19}$/, 
                message: "ID 형식이 올바르지 않습니다.",
              }
            })}
          ></LoginInput>
        </Row>
        {errors.id && <InputErrors>{errors.id.message}</InputErrors>}
        <Row>
          <Label htmlFor="pw">
            <AiOutlineLock size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 입력해주세요.[8자리 이상 + 특수문자 1개 이상]"
            autoComplete="off"
            type={'password'}
            register = {register("pw", { 
              required: "PW를 입력해 주세요",
              pattern: {
                value:  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/, 
                message: "PW 형식이 올바르지 않습니다.",
              }
            })}
          ></LoginInput>
        </Row>
        {errors.pw && <InputErrors>{errors.pw.message}</InputErrors>}
        <Row>
          <Label htmlFor="pw_check">
            <AiOutlineCheckSquare size={25} />
          </Label>
          <LoginInput
            placeholder="PW를 확인해 주세요."
            autoComplete="off"
            type={'password'}
            register = {register("pwCheck", { required: true })}
          ></LoginInput>
        </Row>
        {watch('pw') !== watch ('pwCheck') && <InputErrors>비밀번호가 일치하지 않습니다.</InputErrors>}
        <Row>
          <Label htmlFor="email">
            <AiOutlineMail size={25} />
          </Label>
          <LoginInput
            placeholder="email을 입력해 주세요."
            autoComplete="off"
            register = {register('email', { 
              required: "이메일을 입력해 주세요",
              pattern: {
                value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, 
                message: "이메일 형식이 올바르지 않습니다.",
              }
            })}
          ></LoginInput>
        </Row>
        {errors.email && <InputErrors>{errors.email.message}</InputErrors>}
        <Row>
          <Label htmlFor="name">
            <CgRename size={25} />
          </Label>
          <LoginInput
            placeholder="이름을 입력해 주세요."
            autoComplete="off"
            register = {register("name", { 
              required: "이름을 입력해 주세요",
              pattern:{
                value:  /^[가-힣]+$/,
                message: "이름이 이상합니다."
              }
            })}
          ></LoginInput>
        </Row>
        {errors.name && <InputErrors>{errors.name.message}</InputErrors>}
        <Row>
          <Label htmlFor="nick">
            <AiFillStar size={25} />
          </Label>
          <LoginInput
            placeholder="닉네임을 입력해 주세요."
            autoComplete="off"
            register = {register("nickname", { 
              required: "닉네임을 입력해 주세요",
              pattern:{
                value: /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/,
                message: "닉네임이 이상합니다."
              }
            })}
          ></LoginInput>
        </Row>
        {errors.nickname && <InputErrors>{errors.nickname.message}</InputErrors>}
        <Row>
          <Label htmlFor="nick">
            <FaBirthdayCake size={25} />
          </Label>
          <LoginInput
            placeholder="생일을 입력해 주세요.[YYYYMMDD]"
            autoComplete="off"
            register = {register("birthday", { 
              required: "생일을 입력해 주세요",
              pattern:{
                value: /^[0-9]{4}[0-9]{2}[0-9]{2}$/,
                message: "생일 형식이 잘못되었습니다."
              }
            })}
          ></LoginInput>
        </Row>
        {errors.birthday && <InputErrors>{errors.birthday.message}</InputErrors>}
        <LoginButton onClick={handleSubmit(onValid, onInvalid)}>등록하기</LoginButton>
      </Form>
    </Wrapper>
  );
}
