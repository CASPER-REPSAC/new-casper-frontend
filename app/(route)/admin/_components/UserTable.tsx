'use client';

import useUserQuery from '@app/_hooks/apis/admin/useUserQuery';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';

const COLUMNS = [
  { key: 'role', label: '권한' },
  { key: 'name', label: '이름' },
  { key: 'nickname', label: '닉네임' },
  { key: 'id', label: '아이디' },
  { key: '이메일', label: '이메일' },
];

function UserTable() {
  const ROLE = 'all';
  const { data } = useUserQuery(ROLE);

  if (!data) {
    return <></>;
  }

  return (
    <Table aria-label="유저 목록">
      <TableHeader columns={COLUMNS}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default UserTable;
