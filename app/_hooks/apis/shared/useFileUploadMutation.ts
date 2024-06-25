import { TOAST_TITLE } from '@app/_constants/message';
import sharedService from '@app/_service/sharedService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';

function useFileUploadMutation() {
  const { toast } = useToast();

  const mutationFn = async ({
    type,
    files,
  }: {
    type: 'profile' | 'article';
    files: FileList;
  }) => {
    const data = await sharedService.uploadFile({ type, files });
    return data;
  };

  const onError = () => {
    toast({
      variant: 'destructive',
      title: TOAST_TITLE.error,
      description: '파일 업로드 실패했어요.',
    });
  };

  return useMutation({ mutationFn, onError });
}

export default useFileUploadMutation;
