import DefaultButton from '@src/components/common/DefaultButton';
import DefaultForm from '@src/components/common/DefaultForm';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { PLACEHOLDER } from '@src/utils/constants';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { styled } from 'styled-components';

interface LoginFormData {
  id: string;
  pw: string;
}

function LoginForm() {
  const { register } = useForm<LoginFormData>();

  const idRegister = register('id', { required: true });
  const pwRegister = register('pw', { required: true });

  return (
    <Form>
      <LabelInput
        labelIcon={<AiOutlineUser size={25} />}
        register={idRegister}
        placeholder={PLACEHOLDER.id}
      />
      <LabelInput
        labelIcon={<AiOutlineLock size={25} />}
        register={pwRegister}
        placeholder={PLACEHOLDER.pw}
      />
      <LoginButton full onClick={() => {}}>
        로그인
      </LoginButton>
    </Form>
  );
}
export default LoginForm;

const Form = styled(DefaultForm)`
  width: 450px;
  gap: 0.5em;
`;
const LoginButton = styled(DefaultButton)`
  height: 50px;
  margin-top: 1em;
`;
