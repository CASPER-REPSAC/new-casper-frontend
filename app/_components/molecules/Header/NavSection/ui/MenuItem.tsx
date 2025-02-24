import { Button } from '@app/_shadcn/components/ui/button';
import {
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from '@app/_shadcn/components/ui/navigation-menu';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ReactNode } from 'react';
import useMyInfo from '@app/_hooks/apis/user/useMyInfo';

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
  const { data: myProfile } = useMyInfo();
  const role = myProfile?.role || 'NOT_LOGGED_IN';

  return (
    <NavigationMenuItem>
      {subMenus ? (
        <>
          <NavigationMenuTrigger>
            {href ? <Link href={href}>{title}</Link> : title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex min-w-96 grid-cols-3 justify-between gap-2 px-8 py-4">
              <div className=" flex w-full flex-col justify-center rounded bg-primary-foreground p-4">
                <h1>{title}</h1>
                <p className="text-sm font-thin">{desc}</p>
              </div>
              <div className="flex flex-col gap-1">
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
        </>
      ) : (
        <Link href={href || '#'} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {title}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  );
}
