import { usePathname } from 'next/navigation';
import { HomeIcon } from '../icons';

interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  const pathname = usePathname();
  const path = pathname?.replaceAll('/', ' - ');

  return (
    <div className="flex-center from-sky-0 mb-10 h-24 flex-col bg-sky-100 text-slate-800 dark:bg-gray-900">
      <h1 className="text-4xl">{pageTitle}</h1>
      <span className="flex items-center gap-2 text-slate-400 dark:text-gray-400">
        <HomeIcon /> {path}
      </span>
    </div>
  );
}

export default PageTitle;
