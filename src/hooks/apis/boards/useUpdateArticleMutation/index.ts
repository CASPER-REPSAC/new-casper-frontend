import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { UPDATE_ARTICLE_API } from '@src/constants/apiUrl';
import { useRecoilValue } from 'recoil';
import { accessTokenState } from '@src/atoms';
import { UpdateReqData } from '@src/types/PostTypes';

function useUpdateArticleMutation(id: number) {
  const accessToken = useRecoilValue(accessTokenState);

  const mutationFn = (data: UpdateReqData) =>
    axios.patch(`${UPDATE_ARTICLE_API}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

  return useMutation({
    mutationFn,
  });
}

export default useUpdateArticleMutation;
