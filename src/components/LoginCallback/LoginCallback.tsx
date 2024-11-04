import React, { useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import axios from 'axios';
import { REDIRECT_URI, REST_API_KEY, SERVER_BASE_URL } from '../../utils/login';

const LoginCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  console.log(SERVER_BASE_URL);
  
  const getAccessToken = async () => {
    try {
      const response = await axios.get(`${SERVER_BASE_URL}/api/kakao/callback/${code}`,
      );
      console.log(response.data); // 응답 데이터 출력
    } catch (error) {
      console.error('Error fetching access token:', error); // 오류 처리
    }
  };
  
  // getAccessToken 호출
  if (code) {
    getAccessToken();
  } else {
    console.error('Code parameter is missing from the URL.');
  }
  /*const POST_URL = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

  const postCode = async () => {
    const response = await axios.post(`https://kauth.kakao.com/oauth/token&`,
      {
        haeders:{
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',        
        },
        body: POST_URL
      },
    );
    console.log(response);
  };
*/
  
  return(
    <Loading />
  );
};

export default LoginCallback;