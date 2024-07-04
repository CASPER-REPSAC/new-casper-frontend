import Avatar from '@app/_components/user/Avatar';
import { getArticleDetail } from '@app/_service/article';

interface Props {
  articleId: string;
}

async function AuthorSection({ articleId }: Props) {
  const {
    article: { nickname, profile, introduce },
  } = await getArticleDetail(articleId);

  return (
    <div className="flex items-center gap-8 ">
      <Avatar
        className="size-20"
        rounded
        src={profile}
        priority={false}
        alt="profile"
        fallback={nickname}
      />
      <div>
        <span className="text-lg font-bold">{nickname}</span>
        <p>{introduce}</p>
      </div>
    </div>
  );
}

export default AuthorSection;
