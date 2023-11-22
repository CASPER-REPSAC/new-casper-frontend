import BoardSettingTable from '@src/components/molecules/adminTable/BoardSettingTable';

function NoticeSettingForm() {
  return (
    <BoardSettingTable title="공지사항" categories={['c언어', '네트워크']} />
  );
}
export default NoticeSettingForm;
