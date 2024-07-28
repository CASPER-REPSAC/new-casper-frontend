import userService from '@app/_service/userService';
import { useQuery } from '@tanstack/react-query';
import { memberQueryKey } from '../queryKey';

function useMemberQuery(id: string) {
  return useQuery({
    queryKey: memberQueryKey.detail(id),
    queryFn: () => userService.getMember(id),
  });
}

export default useMemberQuery;
