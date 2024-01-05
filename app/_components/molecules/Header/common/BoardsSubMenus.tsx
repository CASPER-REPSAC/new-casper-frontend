import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import { roleState } from '@app/_store/permissionAtoms';
import { useRecoilValue } from 'recoil';

function BoardsSubMenus() {
  const role = useRecoilValue(roleState);
  const { notice, full, associate, graduate, free } = PATH.boards;

  return (
    <>
      <DefaultLink className="w-full" href={notice.url}>
        {notice.name}
      </DefaultLink>
      {(role === '관리자' || role === '정회원') && (
        <DefaultLink className="w-full" href={full.url}>
          {full.name}
        </DefaultLink>
      )}
      {(role === '관리자' || role === '정회원' || role === '준회원') && (
        <DefaultLink className="w-full" href={associate.url}>
          {associate.name}
        </DefaultLink>
      )}
      {(role === '관리자' || role === '정회원') && (
        <DefaultLink className="w-full" href={graduate.url}>
          {graduate.name}
        </DefaultLink>
      )}
      <DefaultLink className="w-full" href={free.url}>
        {free.name}
      </DefaultLink>
    </>
  );
}

export default BoardsSubMenus;
