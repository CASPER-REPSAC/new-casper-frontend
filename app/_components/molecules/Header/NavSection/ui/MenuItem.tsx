import { Button } from '@app/_shadcn/components/ui/button';
import {
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuContent,
} from '@app/_shadcn/components/ui/navigation-menu';
import { roleState } from '@app/_store/permissionAtoms';
import Link from 'next/link';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

interface Props {
  title: ReactNode;
  subMenus:
    | {
        name: string;
        href: string;
        accessibleRoles: string[];
      }[]
    | undefined;
  desc: string;
  href?: string;
}

export default function MenuItem({ title, subMenus, desc, href }: Props) {
  const role = useRecoilValue(roleState);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        {href ? <Link href={href}>{title}</Link> : title}
      </NavigationMenuTrigger>
      {subMenus && (
        <NavigationMenuContent>
          <div className="flex min-w-96 grid-cols-3 justify-between gap-2 px-8 py-4">
            <div className=" flex w-full flex-col justify-center rounded bg-primary-foreground p-4">
              <h1>{title}</h1>
              <p className="text-sm font-thin">{desc}</p>
            </div>
            <div className="flex  flex-col gap-1">
              {subMenus.map(({ href: subHref, name, accessibleRoles }) => {
                if (!accessibleRoles.includes(role)) return null;
                return (
                  <Button
                    key={name}
                    asChild
                    size="sm"
                    variant="ghost"
                    className="text-left"
                  >
                    <Link href={subHref}>{name}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  );
}
