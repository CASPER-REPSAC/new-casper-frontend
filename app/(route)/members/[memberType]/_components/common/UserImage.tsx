'use client';

import { UserIcon } from '@app/_components/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  layoutId: string;
  src: string | null;
  onClick?: () => void;
}

function UserImage({ src, onClick, layoutId }: Props) {
  return (
    <motion.div
      className="flex-center relative h-52 w-52 flex-shrink-0 cursor-pointer overflow-hidden  bg-sky-50 object-cover  dark:bg-slate-800"
      onClick={onClick}
      layoutId={layoutId}
    >
      {src ? (
        <Image objectFit="cover" src={src} alt="profile image" fill />
      ) : (
        <UserIcon className="text-gray-600" size={100} />
      )}
    </motion.div>
  );
}

export default UserImage;
