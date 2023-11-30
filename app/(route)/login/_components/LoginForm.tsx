import { styled } from 'styled-components';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { LabelInput } from '@src/components/common/featureTag';
import { usePopup } from 'app/_hooks';
import { DefaultButton, DefaultForm } from 'app/_components/defaultTag';
import { LockIcon, UserIcon } from 'app/_components/icons';
import { REQUIRED_MESSAGE } from 'app/_constants/message';
import { ICON_SIZE } from 'app/_constants/size';
import { PLACEHOLDER } from 'app/_constants/label';
import { POPUP_DURATION } from 'app/_constants/duration';
import { useLoginMutation } from 'app/_hooks/apis/user';
import { LoginRequest } from 'app/_types/loginTypes';

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
        {...idRegister}
        placeholder={PLACEHOLDER.id}
      />
      <LabelInput
        labelIcon={<LockIcon size={ICON_SIZE.small} />}
        {...pwRegister}
        placeholder={PLACEHOLDER.pw}
        type="password"
        autoComplete="off"
      />
      <LoginButton
        $size="large"
        $color="green"
        $full
        type="submit"
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
