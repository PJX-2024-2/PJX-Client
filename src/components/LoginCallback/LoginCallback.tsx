import React, { useEffect } from 'react';
import Loading from '../../pages/Loading/Loading';
import usePostAccessCode from '../../hooks/queries/login/usePostAccessCode';

const LoginCallback = () => {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const { mutate: postCode }  = usePostAccessCode();

  useEffect(() => {
    if (code) {
      const body = {'code':code};
      postCode(body);
    } else {
      console.error('Code parameter is missing from the URL.');
    }
  },[code]);

  
  return(
    <Loading />
  );
};

export default LoginCallback;