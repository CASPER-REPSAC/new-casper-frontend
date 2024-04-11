import { MyProfile } from '@app/_types/userTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useUserQuery(role: string) {
  const queryKey = ['user-list'];

  const queryFn = async () => {
    const { data } = await axios.get<{ memberList: MyProfile[] }>(
      `proxy/api/user/showall?role=${role}`,
    );
    return data;
  };

  return useQuery({
    queryFn,
    queryKey,
    select: (_data) => {
      return _data.memberList.map(
        ({ role: _role, name, nickname, id, email }) => {
          const selectedData = {
            role: _role,
            name,
            nickname,
            id,
            email,
          };
          return selectedData;
        },
      );
    },
  });
}

export default useUserQuery;
