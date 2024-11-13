import StepProps from '../../../types/StepPropsType';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import OnboardingInput from '../OnboardingInput/OnboardingInput';
import Title from '../../common/Title/Title';
import * as S from './Step2.style';
import { ChangeEvent, useEffect, useState } from 'react';
import React from 'react';
import useGetNickname from '../../../hooks/queries/onboarding/useGetNickname';

function Step2 ({ onNext }: StepProps){
  const [value, setValue] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  const { data, isError } = useGetNickname(debouncedValue);  // debouncedValue로 API 요청

  // value가 변경될 때마다 debouncedValue를 일정 시간 뒤에 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);  // debouncedValue를 업데이트
    }, 10);  // 500ms 동안 대기 후 설정
    console.log(data);
    return () => clearTimeout(timer);  // 타이머를 취소하여 불필요한 요청 방지
  }, [value]);  // value가 변경될 때마다 디바운스를 적용

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleNext = () => {
    console.log(value);
    onNext();
  };

  return(
    <S.Step2Wrapper>
      {
        isError && <p>에러 발생용</p>
      }
      <Title>
        😎 <br /> 
        본인을 확인할 수 있는 <br />
        닉네임을 입력해 주세요
      </Title>
      <OnboardingInput 
        placeholder='닉네임을 입력해주세요'
        name={value}
        value={value}
        onChange={onChange}
      />
      <S.ButtonField>
        <BtnSmall onClick={handleNext}>확인</BtnSmall>
      </S.ButtonField>
    </S.Step2Wrapper>
  );
}

export default Step2;