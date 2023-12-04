import { selectedMemberState } from 'app/_store/memberCardAtoms';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import UserIcon from '../common/UserIcon';

function DetailPopupImage() {
  const selectedMember = useRecoilValue(selectedMemberState);

  if (!selectedMember) return <></>;
  const { image, id } = selectedMember;

  return (
    <motion.div
      className="flex-center relative h-36 w-36 flex-shrink-0 bg-gray-900 sm:h-48 sm:w-48"
      layoutId={`${image}_${id}`}
    >
      {image ? (
        <Image objectFit="cover" src={image} fill alt="profile image" />
      ) : (
        <UserIcon />
      )}
    </motion.div>
  );
}

export default DetailPopupImage;
