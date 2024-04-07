'use client';

import { MemberProfile } from '@app/_types/userTypes';
import { memo } from 'react';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  useDisclosure,
} from '@nextui-org/react';

import DetailMemberModal from './alert-box/DetailMemberModal';

interface Props {
  member: MemberProfile;
}

function MemberCard({ member }: Props) {
  const { image, name } = member;
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <>
      <DetailMemberModal
        member={member}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <Card isFooterBlurred isPressable onPress={onOpen}>
        <CardBody>
          <Avatar
            className="h-40 w-40"
            showFallback
            radius="sm"
            src={image ?? ''}
          />
        </CardBody>
        <CardFooter className="flex-center">{name}</CardFooter>
      </Card>
    </>
  );
}

// const wrapperVariants: Variants = {
//   animate: {
//     scale: 1.1,
//     rotate: 4,
//     transition: {
//       type: 'spring',
//       damping: 30,
//       stiffness: 500,
//     },
//   },
// };

export default memo(MemberCard);
