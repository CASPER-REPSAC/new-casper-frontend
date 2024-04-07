'use client';

import { Avatar, Modal, ModalBody, ModalContent } from '@nextui-org/react';

import { MemberProfile } from '@app/_types/userTypes';
import DetailDescription from './DetailDescription';

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  member: MemberProfile;
}

function DetailMemberModal({
  member: { id, image, introduce, nickname, name, role, homepage, email },
  isOpen,
  onOpenChange,
}: Props) {
  return (
    <Modal
      backdrop="blur"
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalBody className="py-10">
          <div className="flex-center w-full flex-col gap-8 lg:flex-row">
            <Avatar
              className="h-40 w-40 shrink-0"
              radius="sm"
              showFallback
              src={image ?? ''}
            />
            <DetailDescription
              name={name}
              introduce={introduce}
              nickname={nickname}
              role={role}
              homepage={homepage}
              email={email}
              id={id}
              image={image}
            />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default DetailMemberModal;
