export const SUMMARY_QUERY_KEY = ['summary'];
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

export const postSummary = async () => {
  const body = { user_id: 8, };
  const res: AxiosResponse = await axios.post('https://mytestserver.shop/api/v1/spending/analyze', body, {
    headers: {
      "Content-Type": 'application/json',
    },
  });
  return res.data;
};

const usePostSummary = () => {
  return useMutation({
    mutationFn: postSummary,
    onSuccess: (data) => {
      console.log('post 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostSummary;