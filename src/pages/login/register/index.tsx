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
  Imginput,
  LoginInput,
  Label,
  Row,
  Wrapper,
  LoginButton,
  Pwfalse,
  Imglabel,
  Preimg,
  Imgicon,
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

  const onUpload = (e : any) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
   };
  }
  return (
    <Wrapper>
      {/* <ImageWrapper width="300px">
        {isDark ? (
          <Image layout="fill" src="/casper_logo_white.png" alt="logo" />
        ) : (
          <Image layout="fill" src="/casper_logo_black.png" alt="logo" />
        )}
      </ImageWrapper> */}
      <Form>
        <Row>
          <Imginput 
            accept="image/*"
            type="file" 
            id="profile"
            onChange={e => onUpload(e)}
            ></Imginput>
          <Imglabel htmlFor="profile">
            <Preimg src={imageSrc ? imageSrc:'/defalutprofile.png'}></Preimg>
            <Imgicon>
              <AiOutlineFileImage size={25}/>
            </Imgicon>          
          </Imglabel>
        </Row>
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
        {watch('pw') !== watch ('pwCheck') && <Pwfalse>비밀번호가 일치하지 않습니다.</Pwfalse>}
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
        <LoginButton onClick={() => {}}>사진도 올리기</LoginButton>
      </Form>
      
    </Wrapper>
  );
}
