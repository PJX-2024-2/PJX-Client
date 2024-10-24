import React, { useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import axios from 'axios';
import { REDIRECT_URI, REST_API_KEY } from '../../utils/login';

const LoginCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  console.log(code);
  const POST_URL = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`;

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

  useEffect(() => {
    postCode();
  })
  return(
    <Loading />
  );
};

export default LoginCallback;