'use client';

import { useAtomValue } from 'jotai';
import useUserQuery from '@app/_hooks/apis/admin/useUserQuery';
import useWithdrawalMutation from '@app/_hooks/apis/user/useWithdrawalMutation';
import ButtonWithDialogCheck from '@app/_components/common/WithDialogCheck';
import { roleState } from '@app/_store/adminAtoms';
import { Input } from '@app/_shadcn/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
import RoleFilterSelect from './RoleFilterSelect';
import RoleUpdateSelect from './RoleUpdateSelect';

function UserTable() {
  const selectedRole = useAtomValue(roleState);
  const { data } = useUserQuery(selectedRole);
  const { mutate: withdrawMutate } = useWithdrawalMutation();

  return (
    <>
      <div className="flex gap-4">
        <RoleFilterSelect />
        <Input placeholder="검색기능 개발 중이예요." />
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>권한</TableHead>
            <TableHead>이름</TableHead>
            <TableHead>닉네임</TableHead>
            <TableHead>아이디</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>회원 탈퇴</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map(({ id, name, nickname, email, role }) => (
            <TableRow key={id}>
              <TableCell>
                <RoleUpdateSelect id={id} defaultValue={role} />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{nickname}</TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <ButtonWithDialogCheck
                  variant="destructive"
                  title="회원 탈퇴"
                  description={`정말 ${id} 계정을 삭제하시겠어요?`}
                  confirmVariant="destructive"
                  onClick={() => withdrawMutate(id)}
                >
                  탈퇴
                </ButtonWithDialogCheck>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default UserTable;
