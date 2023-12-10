import { usePathname } from 'next/navigation';
import { HomeIcon } from '../icons';

interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  const pathname = usePathname();
  const path = pathname?.replaceAll('/', ' - ');

  return (
    <div className="from-sky-0 flex-center mb-10 h-24 flex-col dark:bg-slate-900">
      <h1 className="text-4xl">{pageTitle}</h1>
      <span className="flex items-center gap-2 text-slate-400 dark:text-gray-400">
        <HomeIcon /> {path}
      </span>
    </div>
  );
}

export default PageTitle;
