import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import useGetKakaoInfo from '../../hooks/queries/login/useGetKakaoInfo';
import { kakaoUrl, SERVER_BASE_URL } from '../../utils/login';
import * as S from './Start.style';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Start (){
  const navigate = useNavigate();

  const handeleLogin = async () => {
    window.location.href = kakaoUrl;
  };
  const handleNavigate = () => {
    navigate('/home');
  };
  const accessToken = localStorage.getItem('EXIT_ACCESS_TOKEN');
  //if(accessToken) {
   // const data = useGetKakaoInfo(accessToken);
    //console.log(data);

    
  //}
  /*
  const get = async () => {
    const res = await axios.get(`${SERVER_BASE_URL}/api/kakao/userinfo/${accessToken}`, {
    });
    console.log(res);
  }
  if(accessToken) {
    get(); 
  }*/
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