import axios from 'axios';
import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import { kakaoUrl } from '../../utils/login';
import * as S from './Start.style';
import React from 'react';

function Start (){
  const handeleLogin = async () => {
    window.location.href = kakaoUrl;
  };
  const handleNavigate = () => {
    alert('이동');
  };

  return(
    <S.StartWrapper>
      <S.TitleText>AI활용</S.TitleText>
      <S.SubtitleText>지출내역 관리</S.SubtitleText>
      <S.IntroText>똑똑하게 관리해봐요!💸</S.IntroText>
      <IcTitleIcon />
      <S.ButtonField>
        {
          localStorage.getItem('EXIT_ACCESS_TOKEN') ? 
            <BtnLarge onClick={handleNavigate}>시작하기</BtnLarge>
          :
            <BtnKakaoLogin onClick={handeleLogin}/>
        }
      </S.ButtonField>
    </S.StartWrapper>
  );
}

export default Start;