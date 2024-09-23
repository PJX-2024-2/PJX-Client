import { IcKakaoButton } from '../../../../assets/svg';
import * as S from './BtnKakaoLogin.style';
import React from 'react';

interface BtnKakaoLoginProps {
  onClick: () => void;
}

const BtnKakaoLogin = ({ onClick }: BtnKakaoLoginProps) => {
  return(
    <S.ButtonWrapper onClick={() => {onClick()}}>
      <IcKakaoButton />
    </S.ButtonWrapper>
  );
};

export default BtnKakaoLogin;