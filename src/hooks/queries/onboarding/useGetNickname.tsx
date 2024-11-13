import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/apiInstance';
import { AxiosResponse } from 'axios';

export const GET_NICKNAME_QUERY_KEY: string[] = ['validNickname'];

export const getNickname = async (value: string): Promise<string | null> => {
  if(value){
    const res: AxiosResponse = await get('/api/onboarding/nickname-check', {
      params: {
        nickname: value,
      },
    });
    return res.data;
  } else return null;
};

const useGetNickname = (value: string) => {
  const queryKey = ['validNickname', value];
  const { data, isError } = useQuery({
    queryKey,
    queryFn: () => getNickname(value),
  });
  return { data, isError };
};

export default useGetNickname;