import { isDarkState } from '@src/atoms';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser, AiOutlineMail, AiOutlineCheckSquare, AiFillStar, AiOutlineFileImage } from 'react-icons/ai';
import {CgRename} from 'react-icons/Cg'
import { FaBirthdayCake } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import { useState } from "react";
import {
  Form,
  ImageWrapper,
  ImgInput,
  LoginInput,
  Label,
  Row,
  Wrapper,
  LoginButton,
  PwFalse,
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
  profile:HTMLImageElement;
}
export default function Register() {
  const [imageSrc, setImageSrc]: any = useState();
  const isDark = useRecoilValue(isDarkState);
  const { register, watch, handleSubmit} = useForm<IForm>();
  
  // const theme = useContext(ThemeContext);

  const onUpload = (e : ChangeEvent<HTMLInputElement>) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
   };
  }

  const onValid = (data) => console.log(data, "onvalid");
  const onInvalid = (data) => console.log(data, "onInvalid");
  return (
    <Wrapper>
      {/* <ImageWrapper width="300px">
        {isDark ? (
          <Image layout="fill" src="/casper_logo_white.png" alt="logo" />
        ) : (
          <Image layout="fill" src="/casper_logo_black.png" alt="logo" />
        )}
      </ImageWrapper> */}
      {/* <Form onSubmit={handleSubmit(onValid, onInvalid)}> */}
      <Form>
        <Row>
          <ImgInput 
            accept="image/*"
            type="file" 
            id="profile"
            register={register('profile')}
            onChange={e => onUpload(e)}
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
            register = {register("pwCheck", { required: true })}
          ></LoginInput>
        </Row>
        {watch('pw') !== watch ('pwCheck') && <PwFalse>비밀번호가 일치하지 않습니다.</PwFalse>}
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
        <LoginButton onClick={() => {}}>등록하기</LoginButton>
      </Form>
    </Wrapper>
  );
}
