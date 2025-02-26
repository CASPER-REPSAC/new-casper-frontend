import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { bearerTokenState } from '@app/_store/permissionAtoms';
import QUERY_KEY from '@app/_constants/query-key';

function useUserAuthUpdateMutation() {
  const queryClient = useQueryClient();

  const bearerToken = useRecoilValue(bearerTokenState);
  const mutationFn = ({ id, role }: { id: string; role: string }) =>
    axios.post(
      '/proxy/api/user/auth',
      { id, role },
      {
        headers: {
          Authorization: bearerToken,
        },
      },
    );

  const onSettled = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.adminUserList] });
  };

  return useMutation({
    mutationFn,
    onSettled,
  });
}

export default useUserAuthUpdateMutation;
