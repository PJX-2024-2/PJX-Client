import React from "react";
import * as S from './Alarm.style';
import Title from '../../components/common/Title/Title';

const Alarm = () => {

  return (
    <S.AlarmWrapper>
      <Title isLarge={false}>알림</Title>
      <S.AlarmBox>
      </S.AlarmBox>
    </S.AlarmWrapper>
  );
};

export default Alarm;