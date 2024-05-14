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
    <header className="sticky top-0 z-50 w-screen bg-white shadow dark:bg-slate-950 dark:shadow-slate-800">
      <div className="common-center flex h-16 w-full items-center justify-between">
        {/* Mobile Menu */}
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
