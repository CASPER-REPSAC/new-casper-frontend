interface Props {
  nickname: string;
  date: string;
}

function Header({ nickname, date }: Props) {
  return (
    <div className="mb-2 flex items-end">
      <span className="mr-4">{nickname}</span>
      <span className="text-sm font-thin">{date}</span>
    </div>
  );
}

export default Header;
