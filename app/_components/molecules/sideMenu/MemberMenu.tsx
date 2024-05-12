import { useParams } from 'next/navigation';
import { MEMBER_TABS } from '@app/_constants/menu';
import { useRecoilValue } from 'recoil';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@app/_shadcn/components/ui/tabs';

function MemberMenu() {
  const { memberType } = useParams<{ memberType: string }>();
  const role = useRecoilValue(roleState);

  return (
    <Tabs value={memberType}>
      <TabsList className="flex h-fit flex-col gap-2 ">
        {MEMBER_TABS.map(({ key, name, href, accessibleRoles }) => {
          if (!accessibleRoles.includes(role)) return null;
          return (
            <TabsTrigger asChild key={key} value={key}>
              <Link className="w-full" href={href}>
                {name}
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

export default MemberMenu;
