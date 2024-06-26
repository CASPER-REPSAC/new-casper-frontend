import { ReactNode } from 'react';
import { PageTitle } from '@app/_components/molecules';
import { PAGE_TITLE } from '@app/_constants/label';
import { getAccessToken } from '@app/_utils/cookie';
import { PATH } from '@app/_constants/urls';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Casper - Mypage',
};

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  const accessToken = getAccessToken();
  const isLoggedIn = !!accessToken;

  if (!isLoggedIn) return redirect(PATH.user.login.url);

  return (
    <div className="pb-[200px]">
      <PageTitle pageTitle={PAGE_TITLE.myPage} />
      {children}
    </div>
  );
}

export default Layout;
