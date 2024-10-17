import * as S from './AlarmItem.style';
import React from 'react';
import mockImage from '../../../assets/profileMockImage.png';
import BtnRounded from '../../common/Button/RoundedButton/BtnRounded';

const AlarmItem = () => {
  const handleNavigate = () => {
    alert('이동');
  };

  return(
    <S.AlarmItemWrapper>
      <S.ProfileImage src={mockImage}/>
      <S.TextBox>
        Nickname님이 반응을 남겼어요
        <span>2일전</span>
      </S.TextBox>
      <BtnRounded onClick={handleNavigate}>보러가기</BtnRounded>
    </S.AlarmItemWrapper>
  );
};

export default AlarmItem;