'use client';

import useUserQuery from '@app/_hooks/apis/admin/useUserQuery';
import { roleState } from '@app/_store/permissionAtoms';
import { Chip } from '@nextui-org/react';
import { useRecoilValue } from 'recoil';

function Status() {
  const role = useRecoilValue(roleState);
  const { isStale } = useUserQuery(role);

  return (
    <div>
      {isStale ? (
        <Chip color="warning" variant="dot">
          Refresh
        </Chip>
      ) : (
        <Chip color="success" variant="dot">
          Fresh
        </Chip>
      )}
    </div>
  );
}

export default Status;
