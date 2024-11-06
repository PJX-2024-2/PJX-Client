import axios from 'axios';
import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import usePostReceiptAnalyze from '../../hooks/queries/receipt/usePostReceiptAnalyze';
import { kakaoUrl } from '../../utils/login';
import * as S from './Start.style';
import React from 'react';
import { SERVER_BASE_URL } from '../../utils/login';

function Start (){
  //토큰 여부에 따른 버튼 조건부 렌더링
  const handeleLogin = async () => {
    //로그인 연결
    window.location.href = kakaoUrl;
  };
  const handleNavigate = () => {
    
    alert('이동');
  };
  console.log(import.meta.env.VITE_REST_API_KEY);
  console.log(import.meta.env.VITE_LOCAL_REDIRECT_URI);

  return(
    <S.StartWrapper>
      <S.TitleText>AI활용</S.TitleText>
      <S.SubtitleText>지출내역 관리</S.SubtitleText>
      <S.IntroText>똑똑하게 관리해봐요!💸</S.IntroText>
      <IcTitleIcon />
      <S.ButtonField>
        <BtnKakaoLogin onClick={handeleLogin}/>
        <BtnLarge onClick={handleNavigate}>시작하기</BtnLarge>
      </S.ButtonField>
    </S.StartWrapper>
  );
}

export default Start;