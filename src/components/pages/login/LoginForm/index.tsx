import DefaultButton from '@src/components/common/DefaultButton';
import DefaultForm from '@src/components/common/DefaultForm';
import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import { PLACEHOLDER } from '@src/utils/constants';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { styled } from 'styled-components';

interface LoginFormData {
  id: string;
  pw: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const idRegister = register('id', { required: true });
  const pwRegister = register('pw', { required: true });
  const onValid: SubmitHandler<LoginFormData> = async (data) => {
    const params = {
      username: data.id,
      password: data.pw,
    };

    const res = await axios.post('/api/user/login', params);
    // const res = await fetch(`http://build.casper.or.kr${LOGINT_API}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   mode: 'cors', // no-cors, *cors, same-origin

    //   body: JSON.stringify(params),
    // });
    console.log(res.data);
    console.log(res.status);
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
