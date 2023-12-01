import { BoardSettingTable } from 'app/_components/molecules';

function NoticeSettingForm() {
  return (
    <BoardSettingTable title="공지사항" categories={['c언어', '네트워크']} />
  );
}
export default NoticeSettingForm;
