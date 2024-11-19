import { useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { post } from '../../../apis/apiInstance';
import { SERVER_BASE_URL } from '../../../utils/login';

interface NicknameInterface {
  nickname: string;
}

export const POST_NICKNAME_QUERY_KEY = ['nicknameData'];

export const postNickname = async (data: NicknameInterface) => {
  const res: AxiosResponse = await axios.post(`${SERVER_BASE_URL}/api/onboarding`, data);
  return res.data;
};

const usePostNickname = () => {
  return useMutation({
    mutationFn: postNickname,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostNickname;