import { Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}
export default function Spinner({ className }: Props) {
  return <Loader2 className={twMerge('h-4 w-4 animate-spin', className)} />;
}
