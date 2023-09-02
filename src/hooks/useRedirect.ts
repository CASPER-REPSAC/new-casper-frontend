import { useRouter } from 'next/router';

export default function useRedirect() {
  const { push } = useRouter();
  const redirect = (path: string) => () => {
    push(path);
  };

  return redirect;
}
