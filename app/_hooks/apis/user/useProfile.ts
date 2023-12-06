import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'app/_service/user';

export default function useProfile(id: string) {
  const queryKey = ['profile', id];

  const queryFn = async () => {
    const data = await getProfile(id, true);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}
