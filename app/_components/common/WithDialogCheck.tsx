import React from 'react';
import { Button, ButtonProps } from '@app/_shadcn/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@app/_shadcn/components/ui/dialog';

interface Props extends ButtonProps {
  title: string;
  description: string;
  confirmVariant?: ButtonProps['variant'];
  cancelVariant?: ButtonProps['variant'];
}

function ButtonWithDialogCheck({
  title,
  description,
  onClick,
  confirmVariant,
  cancelVariant,
  ...props
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{description}</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={cancelVariant || 'secondary'}>취소</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={confirmVariant || 'default'} onClick={onClick}>
              확인
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonWithDialogCheck;
