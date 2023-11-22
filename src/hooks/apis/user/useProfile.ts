import { Profile } from '@src/types/userTypes';
import { MEMBER_API } from '@src/constants/apiUrl';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function getProfile(id: string) {
  const { data } = await axios.get<Profile>(`${MEMBER_API}?id=${id}`);
  return data;
}

export default function useProfile(id: string) {
  const queryKey = ['profile', id];

  const queryFn = async () => {
    const data = await getProfile(id);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}
