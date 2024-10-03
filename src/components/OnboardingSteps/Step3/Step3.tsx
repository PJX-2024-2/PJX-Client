import StepProps from '../../../types/StepPropsType';
import BtnLarge from '../../common/Button/LargeButton/BtnLarge';
import FriendList from '../../Friend/FriendList/FriendList';
import OnboardingTitle from '../OnboardingTitle/OnboardingTitle';
import * as S from './Step3.style';
import React, { useState } from 'react';

function Step3 ({ onNext }: StepProps){
  const [count, setCount] = useState<number>(0);

  const handleNext = () => {
    onNext();
  };

  return(
    <S.Step3Wrapper>
      <S.LayoutBox>
        <OnboardingTitle>
          🙌 <br /> 
          또래 친구와<br />
          친구를 맺어보세요
        </OnboardingTitle>
        <S.SubtitleText>내 데이터에 따라 나이와 연봉이 비슷한 친구들을 추천드려요.</S.SubtitleText>
        <FriendList />
      </S.LayoutBox>
      <S.ButtonFeild>
        <BtnLarge onClick={handleNext}>{`${count}명 친구 맺고 시작하기`}</BtnLarge>
      </S.ButtonFeild>
    </S.Step3Wrapper>
  );
};

export default Step3;