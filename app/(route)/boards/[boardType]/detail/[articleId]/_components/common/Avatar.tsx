import Image from 'next/image';

interface Props {
  src: string;
  className?: string;
}

function Avatar({ src, className }: Props) {
  return (
    <div
      className={`relative h-20 w-20 overflow-hidden rounded-full bg-gray-600 ${className}`}
    >
      <Image
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
        src={src}
        fill
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
