import { AxiosResponse } from 'axios'
import { authInstance } from '../../../apis/apiInstance'
import { useSuspenseQuery } from '@tanstack/react-query';

export const KAKAOINFO_QUERY_KEY = ['kakaoInfoData'];

export const getKakaoInfo = async (body: string) => {
  const response: AxiosResponse = await authInstance.get('/api/kakao/userinfo', {
    params: {
      accessToken: body,
    },
  });

  return response.data;
};

const useGetKakaoInfo = (body: string) => {
  const { data } = useSuspenseQuery({
    queryKey: KAKAOINFO_QUERY_KEY,
    queryFn: () => getKakaoInfo(body),
  });

  return data;
};

export default useGetKakaoInfo;