import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';
import { Feel } from '../../../types/home';

export const POST_Feel_QUERY_KEY = ['feelData'];

export const postFeel = async (body: Feel) => {

  const queryString = `date=${body.date}?reactionType=${body.reactionType}`;
  const response: AxiosResponse = await post(`/api/users/submit-reaction?${queryString}`);
  return response.data;
};

export const usePostFeel = () => {
  return useMutation({
    mutationFn: postFeel,
    onSuccess: (data) => {
      console.log('감정 post 하기 성공', data);
    },
    onError: () => {
      console.log('ERROR');
    },
  });
};

export default usePostFeel;

