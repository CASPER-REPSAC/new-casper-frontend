import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { LOGIN_API } from '@app/_constants/apiUrl';
import { LoginRequest, LoginResponse } from '@app/_types/loginTypes';
import useOnLogin from './useOnLogin';

export default function useLoginMutation() {
  const { onSuccess, onError, onSettled } = useOnLogin();

  const mutationFn = (params: LoginRequest) =>
    axios.post<LoginResponse>(`/proxy${LOGIN_API}`, params);

  return useMutation({
    mutationFn,
    onSuccess,
    onError,
    onSettled,
  });
}
