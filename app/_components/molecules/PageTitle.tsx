import { usePathname } from 'next/navigation';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { HomeIcon } from '../icons';

interface Props {
  pageTitle: string;
}

function PageTitle({ pageTitle }: Props) {
  const pathname = usePathname();
  const pathList = pathname.split('/').splice(1);

  return (
    <div className="from-sky-0 flex-center mb-10 h-24 flex-col dark:bg-slate-900">
      <h1 className="text-4xl">{pageTitle}</h1>
      <Breadcrumbs>
        <BreadcrumbItem href="/">
          <HomeIcon />
        </BreadcrumbItem>
        {pathList.map((path) => (
          <BreadcrumbItem key={path}>{path}</BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default PageTitle;
