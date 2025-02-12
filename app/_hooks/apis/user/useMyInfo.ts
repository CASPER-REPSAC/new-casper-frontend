import userService from '@app/_service/userService';
import { useQuery } from '@tanstack/react-query';

export default function useMyInfo() {
  return useQuery({
    queryKey: ['me'],
    queryFn: userService.getMyInfo,
  });
}
