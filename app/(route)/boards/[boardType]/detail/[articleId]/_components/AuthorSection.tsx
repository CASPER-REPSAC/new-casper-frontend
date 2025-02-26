'use client';

import useArticleDetailQuery from '@app/_hooks/apis/boards/useArticleDetailQuery';
import AvatarWithDialog from '@app/_components/user/AvatarWithDialog';

interface Props {
  articleId: string;
}

function AuthorSection({ articleId }: Props) {
  const { data } = useArticleDetailQuery(Number(articleId));

  if (!data) return <></>;

  const { nickname, profile, introduce } = data.article;

  return (
    <section className="mb-32 flex items-center gap-8">
      <AvatarWithDialog
        id={data.article.userId}
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
    </section>
  );
}

export default AuthorSection;
