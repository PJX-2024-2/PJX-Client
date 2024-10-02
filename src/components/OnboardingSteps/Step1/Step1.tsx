import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import Dropbox from '../../common/Dropbox/Dropbox';
import OnboardingTitle from '../OnboardingTitle/OnboardingTitle';
import * as S from './Step1.style';
import React, { ChangeEvent, useState } from 'react';

function Step1 (){
  const [value, setValue] = useState<string>('');
  const [domainValue, setDomainValue] = useState<string>('@선택');
  const [isClick, setIsClick] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setIsClick(!isClick);
  };
  const handleDropbox = (newDomain: string) => {
    setIsClick(!isClick);
    setDomainValue(newDomain);
  };
  const handleNext = () => {
    const email = value + domainValue;
    console.log(email);
    alert('이동합니다');
  };

  return(
    <S.Step1Wrapper>
      <OnboardingTitle>
        📧 <br /> 
        본인 이메일이 맞다면 <br />
        아래 확인 버튼을 눌러주세요
      </OnboardingTitle>
      <S.LayoutBox>
        <S.InputBox>
          <S.EmailInput 
            placeholder='이메일'
            name={value}
            value={value}
            onChange={onChange}
          />
          <S.DomainCheckSpan onClick={() => handleClick()}>{domainValue}</S.DomainCheckSpan>
        </S.InputBox>
        {
          isClick && (
            <Dropbox onClick={handleDropbox} />
          )
        }
      </S.LayoutBox>
      <S.ButtonField>
        <BtnSmall onClick={handleNext}>확인</BtnSmall>
      </S.ButtonField>
    </S.Step1Wrapper>
  );
}

export default Step1;