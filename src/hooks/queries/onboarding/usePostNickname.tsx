import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getAccessTokenLocalStorage, post } from '../../../apis/apiInstance';

export const POST_NICKNAME_QUERY_KEY = ['nicknameData'];

export const postNickname = async (value: string) => {
  const data = { userNickname: value };
  const res: AxiosResponse = await post('/api/users/api/onboarding', data, {
    headers: {
      Authorization: `Bearer ${getAccessTokenLocalStorage()}`
    },
  });
  return res.data;
};

const usePostNickname = () => {
  return useMutation({
    mutationFn: postNickname,
    onSuccess: (data) => {
      localStorage.setItem('nickname', data.data.userNickname);
      localStorage.setItem('status', 'existing')
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostNickname;