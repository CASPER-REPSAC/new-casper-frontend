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
    article: { nickname },
  } = await getArticleDetail(articleId);

  const profileSrc = '';
  const introduce = '소개글';

  return (
    <div className="flex items-center gap-8 ">
      <Avatar className="flex-center size-20 bg-secondary">
        <AvatarImage src={profileSrc} />
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
