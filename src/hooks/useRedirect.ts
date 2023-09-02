import { useRouter } from 'next/router';

export function useRedirect() {
  const { push } = useRouter();
  const redirect = (path: string) => () => {
    push(path);
  };

  return redirect;
}
