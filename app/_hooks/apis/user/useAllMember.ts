import { MemberProfile } from 'app/_types/memberTypes';
import { useQuery } from '@tanstack/react-query';
import { getAllMember } from 'app/_service/user';

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
