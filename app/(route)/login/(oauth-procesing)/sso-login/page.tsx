import { NEW_PATH } from '@app/_constants/urls';
import loginService from '@app/_service/loginService';
import { redirect } from 'next/navigation';

export default async function SsoLoginPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;

  await loginService.loginCasper({
    code,
    redirectUri: process.env.NEXT_PUBLIC_CASPER_REDIRECT_URI,
  });

  redirect(NEW_PATH.home.url);
}
