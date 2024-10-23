import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import { kakaoUrl } from '../../utils/login';
import * as S from './Start.style';
import React from 'react';

function Start (){
  //토큰 여부에 따른 버튼 조건부 렌더링
  const handeleLogin = () => {
    //로그인 연결
    window.location.href = kakaoUrl;
  };
  const handleNavigate = () => {
    //첫 로그인 판단해서 온보딩 혹은 메인 페이지 이동
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