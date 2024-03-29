import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  name: string;
  highlight: boolean;
  href: string;
}
function SideMenuLink({ name, highlight, href }: Props) {
  return (
    <Link
      className="relative flex h-10 items-center p-4 text-lg 
      hover:bg-sky-200 
      dark:hover:bg-slate-700"
      href={href}
      scroll={false}
    >
      {name}
      {highlight && (
        <motion.div
          className="absolute
          left-0 -z-10 ml-1 h-full w-full 
          border-r-2 border-solid border-sky-300 
          bg-sky-100 
          dark:border-r-sky-600 
          dark:bg-slate-800"
          layoutId="sideMenuHighlight"
        />
      )}
    </Link>
  );
}

export default SideMenuLink;
