import OnboardingTitle from '../OnboardingTitle/OnboardingTitle';
import * as S from './Step1.style';
import React from 'react';

function Step1 (){
  return(
    <S.Step1Wrapper>
      <OnboardingTitle>
        📧 <br /> 
        본인 이메일이 맞다면 <br />
        아래 확인 버튼을 눌러주세요
      </OnboardingTitle>
      <S.Input
        type='text'
      >
      </S.Input>
    </S.Step1Wrapper>
  );
}

export default Step1;