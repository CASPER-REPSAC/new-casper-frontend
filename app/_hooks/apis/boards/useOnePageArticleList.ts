import { OnePageOfArticleList } from 'app/_types/boardTypes';
import { useQuery } from '@tanstack/react-query';
import { getOnePageArticleList } from 'app/_service/article';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from 'app/_store/permissionAtoms';

function useOnePageArticleList(
  {
    boardType,
    page,
    category = 'all',
  }: { boardType: string; page: string; category?: string },
  initialData?: OnePageOfArticleList,
) {
  const accessToken = useRecoilValue(accessTokenState);
  const queryKey = ['onePageArticleList', boardType, page];

  const queryFn = async () => {
    const data = await getOnePageArticleList(
      { boardType, page, category },
      accessToken,
      true,
    );
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
}

export default useOnePageArticleList;
