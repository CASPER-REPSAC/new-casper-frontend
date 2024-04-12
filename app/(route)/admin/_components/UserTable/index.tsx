'use client';

import useUserQuery from '@app/_hooks/apis/admin/useUserQuery';

import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/adminAtoms';
import { SearchIcon } from '@app/_components/icons';
import RoleSelect from './RoleSelect';

const COLUMNS = [
  { key: 'role', label: '권한' },
  { key: 'name', label: '이름' },
  { key: 'nickname', label: '닉네임' },
  { key: 'id', label: '아이디' },
  { key: 'email', label: '이메일' },
];

function UserTable() {
  const role = useRecoilValue(roleState);
  const { data } = useUserQuery(role);

  return (
    <Table
      aria-label="유저 목록"
      topContent={
        <div className="flex gap-4">
          <RoleSelect />
          <Input
            label="Search"
            startContent={<SearchIcon />}
            placeholder="검색기능 개발 중이예요."
          />
        </div>
      }
    >
      <TableHeader columns={COLUMNS}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data} emptyContent={<>없다</>}>
        {data
          ? (item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )
          : []}
      </TableBody>
    </Table>
  );
}

export default UserTable;
