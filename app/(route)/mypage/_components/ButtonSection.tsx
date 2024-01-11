import { DefaultButton } from '@app/_components/common';
import useProfileUpdateMutation from '@app/_hooks/apis/user/useProfileUpdateMutation';
import { MyProfile } from '@app/_types/userTypes';
import { useFormContext } from 'react-hook-form';

function ButtonSection() {
  const { handleSubmit } = useFormContext<MyProfile>();
  const { mutate } = useProfileUpdateMutation();

  const onValid = ({ nickname, homepage, introduce, image }: MyProfile) => {
    const params = {
      nickname,
      homepage,
      introduce,
      image,
      pw: 'Temp Password',
    };
    mutate(params);
  };

  return (
    <DefaultButton theme="primary" onClick={handleSubmit(onValid)}>
      저장
    </DefaultButton>
  );
}

export default ButtonSection;
