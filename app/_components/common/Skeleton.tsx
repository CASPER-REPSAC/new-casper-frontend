interface Props {
  className?: string;
}

function Skeleton({ className: additionalClassName }: Props) {
  const defaultClassName = 'animate-pulse bg-gray-600/50';
  return <div className={`${defaultClassName} ${additionalClassName}`} />;
}

export default Skeleton;