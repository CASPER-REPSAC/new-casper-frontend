'use client';

import useUserQuery from '@app/_hooks/apis/admin/useUserQuery';

import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/adminAtoms';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@app/_shadcn/components/ui/table';
import { Input } from '@app/_shadcn/components/ui/input';
import RoleFilterSelect from './RoleFilterSelect';
import RoleUpdateSelect from './RoleUpdateSelect';

function UserTable() {
  const roleFilter = useRecoilValue(roleState);
  const { data } = useUserQuery(roleFilter);

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default UserTable;
