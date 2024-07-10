import useEmailKeyVerifiactionMutation from '@app/_hooks/apis/user/useEmailKeyVerifiactionMutation';
import { Button } from '@app/_shadcn/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@app/_shadcn/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@app/_shadcn/components/ui/input-otp';
import { JoinFormData } from '@app/_types/joinTypes';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useFormContext } from 'react-hook-form';

function EmailKeyInput() {
  const { control, getValues } = useFormContext<JoinFormData>();
  const { mutate } = useEmailKeyVerifiactionMutation();

  const verification = () => {
    const { email, emailKey } = getValues();
    mutate({ email, emailKey });
  };

  return (
    <div className="flex items-end justify-between gap-2">
      <FormField
        control={control}
        name="emailKey"
        render={({ field }) => (
          <FormItem>
            <FormLabel>인증 코드</FormLabel>
            <FormControl>
              <InputOTP
                maxLength={6}
                inputMode="text"
                {...field}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
          </FormItem>
        )}
      />
      <Button type="button" onClick={verification}>
        인증 하기
      </Button>
    </div>
  );
}

export default EmailKeyInput;
