import { useProfileUpdateMutation } from '@app/_hooks/apis/user';
import { MyProfile } from '@app/_types/userTypes';
import { Button } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

function ButtonSection() {
  const { handleSubmit } = useFormContext<MyProfile>();
  const { mutate, isPending } = useProfileUpdateMutation();

  const onValid = (myProfile: MyProfile) => {
    mutate(myProfile);
  };

  return (
    <Button
      color="primary"
      size="lg"
      onClick={handleSubmit(onValid)}
      isLoading={isPending}
    >
      저장
    </Button>
  );
}

export default ButtonSection;
