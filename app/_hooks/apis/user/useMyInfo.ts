import userService from '@app/_service/userService';
import { useQuery } from '@tanstack/react-query';

export default function useMyInfo() {
  const result = useQuery({
    queryKey: ['me'],
    queryFn: () => userService.getMyInfo(),
  });

  const isLoggedIn = result.status === 'success' && !!result.data;

  return { ...result, isLoggedIn };
}
