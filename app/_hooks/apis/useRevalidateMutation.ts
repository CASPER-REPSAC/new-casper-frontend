import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function useRevalidateMutation() {
  const mutationFn = (tag: string) =>
    axios.get<{ revalidated: boolean; now: Date }>(
      `/api/revalidate?tag=${tag}`,
    );

  return useMutation({ mutationFn });
}
