import { Profile } from '@src/types/userTypes';
import { MEMBER_API } from '@src/utils/apiUrl';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProfile() {
  const myId = 'ine';
  const queryKey = ['myProfile'];

  const queryFn = () => {
    return axios.get<Profile>(`${MEMBER_API}?id=${myId}`);
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}
