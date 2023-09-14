import { styled } from 'styled-components';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';

import LabelInput from '@src/components/molecules/Inputs/LabelInput';
import DefaultButton from '@src/components/common/DefaultButton';
import DefaultForm from '@src/components/common/DefaultForm';
import useLoginMutation, {
  LoginRequest,
} from '@src/hooks/apis/useLoginMutation';
import usePopup from '@src/hooks/usePopup';
import {
  PLACEHOLDER,
  POPUP_TIME,
  REQUIRED_MESSAGE,
} from '@src/utils/constants';

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const { mutate: mutateLogin } = useLoginMutation();
  const { openAndDeletePopup } = usePopup();
  const idRegister = register('id', { required: REQUIRED_MESSAGE.id });
  const pwRegister = register('pw', { required: REQUIRED_MESSAGE.pw });

  const onValid: SubmitHandler<LoginRequest> = (data) => {
    mutateLogin(data);
  };
  const onInvalid: SubmitErrorHandler<LoginRequest> = (errors) => {
    if (errors.id && errors.id.message) {
      openAndDeletePopup({
        key: Date.now(),
        message: errors.id.message,
        time: POPUP_TIME.medium,
      });
    } else if (errors.pw && errors.pw.message) {
      openAndDeletePopup({
        key: Date.now(),
        message: errors.pw.message,
        time: POPUP_TIME.medium,
      });
    }
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
      <LoginButton type="large" full onClick={handleSubmit(onValid, onInvalid)}>
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
  margin-top: 1em;
`;
