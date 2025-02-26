'use client';

import Link from 'next/link';
import { CasperLogo } from '@app/_components/common';
import { PATH } from '@app/_constants/urls';
import DarkModeSwitch from './DarkModeSwitch';
import MobileMenuSheet from './MobileMenuSheet';
import NavSection from './NavSection';
import UserButton from './UserButton';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-screen bg-white shadow dark:bg-slate-950 dark:shadow-slate-800">
      <div className="common-center flex h-16 w-full items-center justify-between">
        <MobileMenuSheet />

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
