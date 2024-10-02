import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import OnboardingTitle from '../OnboardingTitle/OnboardingTitle';
import * as S from './Step1.style';
import React, { ChangeEvent, useState } from 'react';

function Step1 (){
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleDropbox = () => {
    alert('드롭박스 내려옴......');
  };
  const handleNext = () => {
    //이메일 저장 및 다음 단계로 이동
    alert('이동합니다');
  };

  return(
    <S.Step1Wrapper>
      <OnboardingTitle>
        📧 <br /> 
        본인 이메일이 맞다면 <br />
        아래 확인 버튼을 눌러주세요
      </OnboardingTitle>
      <S.InputBox>
        <S.EmailInput 
          placeholder='이메일'
          name={value}
          value={value}
          onChange={onChange}
        />
        <S.DomainCheckSpan onClick={() => handleDropbox()}>@선택</S.DomainCheckSpan>
      </S.InputBox>
      <S.ButtonField>
        <BtnSmall onClick={handleNext}>확인</BtnSmall>
      </S.ButtonField>
    </S.Step1Wrapper>
  );
}

export default Step1;