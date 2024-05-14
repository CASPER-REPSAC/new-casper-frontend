'use client';

import { DraggableProps as DraggableMotionProps, motion } from 'framer-motion';
import {
  Braces,
  Code,
  EqualNot,
  Ghost,
  Key,
  LockIcon,
  LockOpenIcon,
} from 'lucide-react';
import { PropsWithChildren, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface DraggableProps extends PropsWithChildren {
  className?: string;
  dragConstraints?: DraggableMotionProps['dragConstraints'];
}

function Draggable({ children, className, dragConstraints }: DraggableProps) {
  const xRandom = Math.random();
  const yRandom = Math.random();

  const x =
    xRandom < 0.5
      ? { left: `${xRandom * 100}%` }
      : { right: `${(xRandom - 0.5) * 100}%` };

  const y =
    yRandom < 0.5
      ? { top: `${yRandom * 100}%` }
      : { bottom: `${(yRandom - 0.5) * 100}%` };

  return (
    <motion.div
      style={{
        position: 'absolute',
        ...x,
        ...y,
      }}
      className={twMerge('cursor-pointer', className)}
      drag
      dragConstraints={dragConstraints}
    >
      {children}
    </motion.div>
  );
}

function DragPlayGround() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const SIZE = {
    sm: 120,
    m: 180,
    lg: 240,
  };

  const elements = [
    {
      id: 'lock',
      icon: <LockIcon className="rotate-6" size={SIZE.m} />,
    },
    {
      id: 'not-equal',
      icon: <EqualNot size={SIZE.sm} />,
    },

    {
      id: 'lock-open',
      icon: <LockOpenIcon className="-rotate-12" size={SIZE.m} />,
    },
    {
      id: 'ghost',
      icon: <Ghost strokeWidth={1.5} size={SIZE.lg} />,
    },
    {
      id: 'Braces',
      icon: <Braces size={SIZE.sm} />,
    },

    {
      id: 'Code',
      icon: <Code size={SIZE.sm} />,
    },
    {
      id: 'Key',
      icon: <Key size={SIZE.sm} />,
    },
  ];

  return (
    <motion.div ref={wrapperRef} className="relative m-10 h-screen">
      {elements.map(({ id, icon }) => (
        <Draggable key={id} dragConstraints={wrapperRef}>
          {icon}
        </Draggable>
      ))}
    </motion.div>
  );
}

function HomePage() {
  return (
    <>
      <div className="common-center lg:absolute-center flex-center mt-24 w-full flex-col text-center lg:mt-0">
        <h1 className="text-6xl font-bold">WELCOME!</h1>
        <div className="h-full w-full text-6xl font-bold text-sky-300">
          CASPER
        </div>
      </div>
      <DragPlayGround />
    </>
  );
}

export default HomePage;
