import AlarmItem from '../AlarmItem/AlarmItem';
import * as S from './AlarmList.style';
import React from 'react';
import noAlarmImage from '../../../assets/image/noAlarm.png';
const AlarmList = () => {
  const mockDatas = [
    { name: '가', },
    { name: '나', },
    { name: '다', },
    { name: '라', },
  ];

  return(
    <S.AlarmListWrapper>
      {
        mockDatas.length == 0 ?
          <img src={noAlarmImage} />
        :
          mockDatas.map(mockData => (
            <AlarmItem 
              key={mockData.name}
              nickname={mockData.name}  
            />
          ))
      }
    </S.AlarmListWrapper>
  );
};

export default AlarmList;