import { ALL_MEMEBER_API } from '@src/constants/apiUrl';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useAllMember() {
  const queryKey = ['allMembers'];
  const queryFn = async () => {
    const { data } = await axios.get(ALL_MEMEBER_API);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
  });
}

export default useAllMember;
