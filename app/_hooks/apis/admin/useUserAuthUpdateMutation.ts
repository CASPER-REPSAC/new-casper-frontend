import userService from '@app/_service/userService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEY from '@app/_constants/query-key';

function useUserAuthUpdateMutation() {
  const queryClient = useQueryClient();

  const mutationFn = ({ id, role }: { id: string; role: string }) =>
    userService.updateUserAuth(id, role);

  const onSettled = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.adminUserList] });
  };

  return useMutation({
    mutationFn,
    onSettled,
  });
}

export default useUserAuthUpdateMutation;
