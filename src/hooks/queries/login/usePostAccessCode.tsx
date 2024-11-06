import { useMutation } from '@tanstack/react-query';
import { authInstance } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

interface bodyType {
  code: string;
}

export const postAccessCode = async (body: bodyType) => {
  const response: AxiosResponse = await authInstance.post('/api/kakao/callback', body);
  return response.data;
};

const usePostAccessCode = () => {
  return useMutation({
    mutationFn: postAccessCode,
    onSuccess: () => {
      console.log('전송 성공');
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default usePostAccessCode;