import { useFormContext } from 'react-hook-form';
import useSendEmailKeyMutation from '@app/_hooks/apis/user/useSendEmailKeyMutation';
import Spinner from '@app/_components/Spinner';
import { EMAIL_REGEX } from '@app/_utils/regex';
import { INPUT_LABEL, PLACEHOLDER } from '@app/_constants/label';
import { INPUT_ERROR, REQUIRED_MESSAGE } from '@app/_constants/message';
import { JoinFormData } from '@app/_types/joinTypes';
import { Button } from '@app/_shadcn/components/ui/button';
import { Input } from '@app/_shadcn/components/ui/input';

function EmailInput() {
  const { register, getValues } = useFormContext<JoinFormData>();
  const { isPending, mutate } = useSendEmailKeyMutation();

  const emailRegister = register('email', {
    required: REQUIRED_MESSAGE.email,
    pattern: {
      value: EMAIL_REGEX,
      message: INPUT_ERROR.email,
    },
  });

  const sendEmailCode = () => {
    const { email } = getValues();
    mutate(email);
  };

  return (
    <>
      <div className="flex items-end gap-2">
        <Input
          type="email"
          label={INPUT_LABEL.email}
          placeholder={PLACEHOLDER.email}
          {...emailRegister}
        />
        <Button type="button" onClick={sendEmailCode} disabled={isPending}>
          {isPending && <Spinner className="mr-2" />}
          코드 전송
        </Button>
      </div>
    </>
  );
}

export default EmailInput;
