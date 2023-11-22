import { AdminTable } from '@src/components/common';
import { CheckInput } from '@src/components/common/featureTag';
import { ChangeEventHandler } from 'react';
import { useForm } from 'react-hook-form';

function PostTable() {
  const { register, setValue } = useForm();

  const selectAllRegister = register('all');
  const tmpIds = ['1', '2', '3'];

  const handleSelectAll: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.checked) {
      tmpIds.forEach((id) => {
        setValue(id, true);
      });
    } else {
      tmpIds.forEach((id) => {
        setValue(id, false);
      });
    }
  };

  return (
    <AdminTable>
      <AdminTable.Caption>게시글 관리</AdminTable.Caption>
      <AdminTable.THead>
        <AdminTable.Tr>
          <AdminTable.Th>
            <CheckInput
              onChange={handleSelectAll}
              register={selectAllRegister}
            />
          </AdminTable.Th>
          <AdminTable.Th>번호</AdminTable.Th>
          <AdminTable.Th>제목</AdminTable.Th>
          <AdminTable.Th>경로</AdminTable.Th>
          <AdminTable.Th>날짜</AdminTable.Th>
          <AdminTable.Th>경로</AdminTable.Th>
          <AdminTable.Th>IP</AdminTable.Th>
        </AdminTable.Tr>
      </AdminTable.THead>
      <AdminTable.TBody>
        {/* 임시 */}
        {tmpIds.map((val) => (
          <AdminTable.Tr key={val}>
            <AdminTable.TdCenter>
              <CheckInput register={register(val)} />
            </AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
            <AdminTable.TdCenter>{val}</AdminTable.TdCenter>
          </AdminTable.Tr>
        ))}
      </AdminTable.TBody>
    </AdminTable>
  );
}

export default PostTable;
