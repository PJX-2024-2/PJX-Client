import React from "react";
import * as S from './Alarm.style';
import Title from '../../components/common/Title/Title';
import AlarmItem from '../../components/Alarm/AlarmItem/AlarmItem';

const Alarm = () => {

  return (
    <S.AlarmWrapper>
      <Title isLarge={false}>알림</Title>
      <S.AlarmBox>
        <AlarmItem />
      </S.AlarmBox>
    </S.AlarmWrapper>
  );
};

export default Alarm;