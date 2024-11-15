import * as S from './OnboardingInput.style';
import React from 'react';

interface OnboardingInputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode
  isError: boolean;
}

function OnboardingInput ({ placeholder, name, value, onChange, children, isError }: OnboardingInputProps){
  return(
    <S.OnboardingInputWrapper>
      <S.InputAreaBox>
        <S.TextInput 
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {children}
        {isError && <p>이미 존재하는 닉네임입니다. </p>}
      </S.InputAreaBox>
    </S.OnboardingInputWrapper>
  );
}

export default OnboardingInput;