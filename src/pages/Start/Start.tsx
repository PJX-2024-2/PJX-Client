import { IcTitleIcon } from '../../assets/svg';
import BtnKakaoLogin from '../../components/common/Button/KakaoLoginButton/BtnKakaoLogin';
import * as S from './Start.style';
import React from 'react';

const Start = () => {
  //토큰 여부에 따른 버튼 조건부 렌더링
  const handeleLogin = () => {
    //로그인 연결
    alert('로그인 진행');
  };

  return(
    <S.StartWrapper>
      <S.TitleText>AI활용</S.TitleText>
      <S.SubtitleText>지출내역 관리</S.SubtitleText>
      <S.IntroText>똑똑하게 관리해봐요!💸</S.IntroText>
      <IcTitleIcon />
      <S.ButtonField>
        <BtnKakaoLogin onClick={handeleLogin}/>
      </S.ButtonField>
    </S.StartWrapper>
  );
};

export default Start;