import { ALL_MEMEBER_API } from '@src/constants/apiUrl';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useAllMember() {
  const queryFn = () => axios.get(ALL_MEMEBER_API);

  return useQuery({
    queryFn,
  });
}

export default useAllMember;
