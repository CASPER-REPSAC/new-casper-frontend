import { useQuery } from '@tanstack/react-query';
import { MEMBER_API } from 'app/_constants/apiUrl';
import { Profile } from 'app/_types/userTypes';
import axios from 'axios';

export default function useProfile(id: string) {
  const queryKey = ['profile', id];

  const queryFn = () => axios.get<Profile>(`/proxy${MEMBER_API}?id=${id}`);

  return useQuery({
    queryKey,
    queryFn,
  });
}
