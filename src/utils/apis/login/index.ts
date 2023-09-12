import { LOGINT_API } from '@src/utils/apiUrl';
import axios from 'axios';

interface Params {
  id: string;
  pw: string;
}

export default function loginUser(params: Params) {
  return axios.post(LOGINT_API, params);
}
