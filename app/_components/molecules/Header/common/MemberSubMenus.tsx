import { DefaultLink } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';

function MemberSubMenus() {
  const {
    members: { active, rest, graduate },
  } = PATH;

  return (
    <>
      <DefaultLink className="w-full" href={active.url}>
        {active.name}
      </DefaultLink>
      <DefaultLink className="w-full" href={rest.url}>
        {rest.name}
      </DefaultLink>
      <DefaultLink className="w-full" href={graduate.url}>
        {graduate.name}
      </DefaultLink>
    </>
  );
}

export default MemberSubMenus;
