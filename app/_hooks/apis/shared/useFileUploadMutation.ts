import { TOAST_TITLE } from '@app/_constants/message';
import sharedService from '@app/_service/sharedService';
import { useToast } from '@app/_shadcn/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

function useFileUploadMutation() {
  const { toast } = useToast();

  const mutationFn = async ({
    type,
    files,
  }: {
    type: 'profile' | 'article' | 'assignment' | 'submit';
    files: FileList | File[];
  }) => {
    const data = await sharedService.uploadFile({ type, files });
    return data;
  };

  const onError = (error: AxiosError) => {
    switch (error.response?.status) {
      case 413:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: '10MB가 넘는 파일은 업로드할 수 없어요.',
        });
        break;
      default:
        toast({
          variant: 'destructive',
          title: TOAST_TITLE.error,
          description: '알 수 없는 이유로 파일 업로드 실패했어요.',
        });
    }
  };

  return useMutation({ mutationKey: ['file-upload'], mutationFn, onError });
}

export default useFileUploadMutation;
