import { ALL_MEMEBER_API, API_URL } from 'app/_constants/apiUrl';
import { MemberProfile } from 'app/_types/memberTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function getAllMember(role: string, fromServer: boolean = false) {
  const url = fromServer
    ? `${API_URL}${ALL_MEMEBER_API}?role=${role}`
    : `${ALL_MEMEBER_API}?role=${role}`;

  const { data } = await axios.get<{ memberList: MemberProfile[] }>(url);

  return data;
}

function useAllMember(
  role: string,
  initialData?: { memberList: MemberProfile[] },
) {
  const queryKey = ['allMembers', role];
  const queryFn = async () => {
    const data = await getAllMember(role);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}

export default useAllMember;
