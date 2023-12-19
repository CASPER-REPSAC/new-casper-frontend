import { useMutation } from '@tanstack/react-query';
import { POPUP_DURATION } from 'app/_constants/duration';
import usePopup from 'app/_hooks/usePopup';
import { setServerSideAccessToken } from 'app/_service/user';

function useServerSideLoginMutation() {
  const { openAndDeletePopup } = usePopup();

  const mutationFn = (accessToken: string) =>
    setServerSideAccessToken(accessToken);

  const onError = () => {
    openAndDeletePopup({
      message: '서버 측 로그인 실패했어요, 개발자에게 문의해주세요.',
      duration: POPUP_DURATION.long,
    });
  };

  return useMutation({ mutationFn, onError });
}

export default useServerSideLoginMutation;
