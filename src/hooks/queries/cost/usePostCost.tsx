import { AxiosResponse } from 'axios';
import { post } from '../../../apis/apiInstance';
import { useMutation } from '@tanstack/react-query';

export const COST_QUERY_KEY = ['costSummary'];

export const postCost = async (body) => {
  const res: AxiosResponse = await post('/api/spending/manual/create', body);

  return res.data;
};

const usePostCost = () => {
  return useMutation({
    mutationFn: postCost,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostCost;