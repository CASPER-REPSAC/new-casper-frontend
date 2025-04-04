import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@app/_constants/query-key';
import { MyProfile } from '@app/_types/userTypes';

function useUserQuery(role?: string) {
  const enabled = role !== undefined;
  const queryKey = [QUERY_KEY.adminUserList, role];

  const queryFn = async () => {
    const { data } = await axios.get<{ memberList: MyProfile[] }>(
      `/proxy/api/user/showall?role=${role}`,
    );
    return data;
  };

  return useQuery({
    enabled,
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
    placeholderData: keepPreviousData,
  });
}

export default useUserQuery;
