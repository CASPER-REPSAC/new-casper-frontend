interface Props {
  nickname: string;
  date: string;
}

function Header({ nickname, date }: Props) {
  const dateString = new Date(date).toLocaleString();
  return (
    <div className="mb-2 flex items-end">
      <span className="mr-4 font-semibold">{nickname}</span>
      <span className="text-sm font-thin">{dateString}</span>
    </div>
  );
}

export default Header;
