import { useRouter } from 'next/router';

export function useRedirect() {
  const router = useRouter();
  const redirect = (path: string) => () => {
    router.push(path);
  };

  return redirect;
}
