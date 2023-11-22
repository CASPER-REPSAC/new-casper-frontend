import { styled } from 'styled-components';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { LabelInput } from '@src/components/common/featureTag';
import { usePopup } from '@src/hooks';
import { DefaultButton, DefaultForm } from '@src/components/common/defaultTag';
import { LockIcon, UserIcon } from '@src/components/common/icons';
import { REQUIRED_MESSAGE } from '@src/constants/message';
import { ICON_SIZE } from '@src/constants/size';
import { PLACEHOLDER } from '@src/constants/label';
import { POPUP_DURATION } from '@src/constants/duration';
import { useLoginMutation } from '@src/hooks/apis/user';
import { LoginRequest } from '@src/types/loginTypes';

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
        message: errors.id.message,
        duration: POPUP_DURATION.medium,
      });
    } else if (errors.pw && errors.pw.message) {
      openAndDeletePopup({
        message: errors.pw.message,
        duration: POPUP_DURATION.medium,
      });
    }
  };

  return (
    <Form>
      <LabelInput
        labelIcon={<UserIcon size={ICON_SIZE.small} />}
        register={idRegister}
        placeholder={PLACEHOLDER.id}
      />
      <LabelInput
        labelIcon={<LockIcon size={ICON_SIZE.small} />}
        register={pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
      />
      <LoginButton
        type="submit"
        size="large"
        color="green"
        full
        onClick={handleSubmit(onValid, onInvalid)}
      >
        로그인
      </LoginButton>
    </Form>
  );
}

const Form = styled(DefaultForm)`
  gap: 0.5em;
`;
const LoginButton = styled(DefaultButton)`
  margin-top: 1em;
`;

export default LoginForm;
