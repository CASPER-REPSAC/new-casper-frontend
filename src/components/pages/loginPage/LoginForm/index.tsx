import DefaultButton from '@src/components/common/DefaultButton';
import DefaultForm from '@src/components/common/DefaultForm';
import DefaultInput from '@src/components/common/DefaultInput';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { styled } from 'styled-components';

interface LoginFormProps {
  id: string;
  pw: string;
}

function LoginForm() {
  const { register } = useForm<LoginFormProps>();

  return (
    <Form>
      <InputWrapper>
        <Label htmlFor="id">
          <AiOutlineUser size={25} />
        </Label>
        <LoginInput
          placeholder="ID를 입력해주세요."
          autoComplete="off"
          register={register('id', { required: true })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="pw">
          <AiOutlineLock size={25} />
        </Label>
        <LoginInput
          placeholder="PW를 입력해주세요."
          autoComplete="off"
          type="password"
          register={register('pw', { required: true })}
        />
      </InputWrapper>
      <LoginButton full onClick={() => {}}>
        로그인
      </LoginButton>
    </Form>
  );
}
export default LoginForm;

const Form = styled(DefaultForm)`
  width: 450px;
`;
const LoginInput = styled(DefaultInput)`
  margin-bottom: 0.3em;
  padding-left: 45px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Label = styled.label`
  position: absolute;
  left: 15px;
`;
const LoginButton = styled(DefaultButton)`
  height: 50px;
  margin-top: 1em;
`;
