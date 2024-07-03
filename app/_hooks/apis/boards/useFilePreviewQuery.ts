import boardService from '@app/_service/boardService';
import { useQuery } from '@tanstack/react-query';

function useFilePreviewQuery(urls: string[]) {
  return useQuery({
    queryKey: ['file-preview', urls],
    queryFn: () => boardService.downloadFiles(urls),
  });
}

export default useFilePreviewQuery;
