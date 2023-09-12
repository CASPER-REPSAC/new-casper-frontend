import { loginState } from '@src/atoms';
import DefaultButton from '@src/components/common/DefaultButton';
import DefaultForm from '@src/components/common/DefaultForm';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import loginUser from '@src/utils/apis/login';
import { PLACEHOLDER } from '@src/utils/constants';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';

interface LoginFormData {
  id: string;
  pw: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const setLogin = useSetRecoilState(loginState);
  const { mutate } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      setLogin(true);
    },
  });
  const idRegister = register('id', { required: true });
  const pwRegister = register('pw', { required: true });

  const onValid: SubmitHandler<LoginFormData> = async (data) => {
    mutate(data);
  };

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
        type="password"
      />
      <LoginButton full onClick={handleSubmit(onValid)}>
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
