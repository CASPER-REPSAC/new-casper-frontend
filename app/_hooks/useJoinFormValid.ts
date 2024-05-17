import { FunnelStepType, JoinFormData } from '@app/_types/joinTypes';
import { useMutationState } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

function useFunnelValid(step: FunnelStepType) {
  const {
    watch,
    formState: { errors, dirtyFields },
  } = useFormContext<JoinFormData>();
  const emailKeyStatus = useMutationState({
    filters: { mutationKey: ['emailKey'] },
    select: (mutation) => mutation.state.status,
  });

  const checkValid = () => {
    switch (step) {
      case 'agree':
        return watch('agree') === true;
      case 'email': {
        const isValidKey = emailKeyStatus.at(-1) === 'success';
        return isValidKey && !errors.email && dirtyFields.email;
      }
      case 'name':
        return (
          !errors.name &&
          !errors.nickname &&
          dirtyFields.name &&
          dirtyFields.nickname
        );
      case 'id':
        return !errors.id && dirtyFields.id;
      case 'password':
        return (
          !errors.pw &&
          !errors.pwConfirm &&
          dirtyFields.pw &&
          dirtyFields.pwConfirm
        );
      default:
        return false;
    }
  };

  return !!checkValid();
}

export default useFunnelValid;
