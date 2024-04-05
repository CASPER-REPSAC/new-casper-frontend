import { PostReqData } from '@app/_types/PostTypes';
import { Checkbox } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

function OptionSection() {
  const { watch, setValue } = useFormContext<PostReqData>();

  return (
    <Checkbox
      isSelected={watch('hide')}
      onValueChange={(isSelected) => setValue('hide', isSelected)}
    >
      비밀글
    </Checkbox>
  );
}

export default OptionSection;
