import loginService from '@app/_service/loginService';

async function SsoLoginPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;

  const response = await loginService.loginCasper({
    code,
    redirectUri: 'https://www.casper.or.kr/login/sso-login',
  });

  console.log(response);

  return <div>SsoLoginPage</div>;
}

export default SsoLoginPage;
