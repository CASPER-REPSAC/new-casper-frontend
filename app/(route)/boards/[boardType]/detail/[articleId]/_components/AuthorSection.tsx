import { getArticleDetail } from '@app/_service/article';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@app/_shadcn/components/ui/avatar';

interface Props {
  articleId: string;
}

async function AuthorSection({ articleId }: Props) {
  const {
    article: { nickname, profile, introduce },
  } = await getArticleDetail(articleId);

  return (
    <div className="flex items-center gap-8 ">
      <Avatar className="flex-center size-20 bg-secondary">
        <AvatarImage src={profile} />
        <AvatarFallback>{nickname}</AvatarFallback>
      </Avatar>
      <div>
        <span className="text-lg font-bold">{nickname}</span>
        <p>{introduce}</p>
      </div>
    </div>
  );
}

export default AuthorSection;
