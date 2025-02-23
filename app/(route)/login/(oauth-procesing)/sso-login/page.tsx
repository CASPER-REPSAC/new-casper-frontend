import { NEW_PATH } from '@app/_constants/urls';
import loginService from '@app/_service/loginService';
import { redirect } from 'next/navigation';

export default async function SsoLoginPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;

  const { data } = await loginService.loginCasper({
    code,
    redirectUri: process.env.NEXT_PUBLIC_CASPER_REDIRECT_URI,
  });

  if (data.success) {
    redirect(NEW_PATH.home.url);
  }

  return null;
}
