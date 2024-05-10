'use client';

import Link from 'next/link';

import { Sheet, SheetTrigger } from '@app/_shadcn/components/ui/sheet';
import { CasperLogo } from '@app/_components/common';
import { MenuIcon } from '@app/_components/icons';
import { Button } from '@app/_shadcn/components/ui/button';
import { PATH } from '@app/_constants/urls';
import DarkModeSwitch from './DarkModeSwitch';
import NavSection from './NavSection';
import SideNavSheet from './SideNavSheet';
import UserButton from './UserButton';

function Header() {
  return (
    <header className="w-screen shadow">
      <div className="common-center flex h-16 w-full items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SideNavSheet />
        </Sheet>

        <Link href={PATH.home.url}>
          <CasperLogo />
        </Link>
        <DarkModeSwitch />

        <NavSection />

        <UserButton />
      </div>
    </header>
  );
}

export default Header;
