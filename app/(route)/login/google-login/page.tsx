import { API_URL } from '@app/_constants/apiUrl';
import axios from 'axios';
// import useGoogleLoginMutation from '@app/_hooks/apis/user/useGoogleLoginMutation';
// import { usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// function GoogleLoginLoadingPage() {
//   const { mutate } = useGoogleLoginMutation();
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const { hash } = window.location;
//       const params = new URLSearchParams(hash.substring(1));
//       const accessToken = params.get('access_token');
//       if (accessToken) mutate(accessToken);
//     }
//   }, [mutate]);

//   return <>구글로그인 진행중인데요.</>;
// }

interface Props {
  searchParams: { code: string };
}

async function GoogleLoginLoadingPage({ searchParams: { code } }: Props) {
  await axios.post(`${API_URL}/api/user/google`, {
    code,
  });

  return <>구글로그인 진행중인데요.</>;
}

export default GoogleLoginLoadingPage;
