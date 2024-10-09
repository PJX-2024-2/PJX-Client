import React from "react";
import * as S from './Mypage.style';
import SmallTitle from '../../components/common/Title/SmallTitle/SmallTitle';
import mockImage from '../../assets/profileMockImage.png';
import { IcCheck, IcPen, IcRight, IcSearch } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();
  const options = [
    {
      text: '내 지출 요약',
      icon: <IcCheck fill='#000000' />,
      onclick: () => {navigate('/')},
    },
    {
      text: '내 또래 친구 목록',
      icon: <IcSearch />,
      onclick: () => {navigate('/friends')},
    },
  ];

  const summaries = [
    {
      label: 'days',
      value: '1034',
      text: '일 동안',
    },
    {
      label: 'costs',
      value: '1000000',
      text: '원을 아꼈어요',
    },
    {
      label: 'friends',
      value: '3',
      text: '명의 또래 친구가 생겼어요',
    },
  ];
  
  return (
    <S.MyPageWrapper>
      <SmallTitle>마이페이지</SmallTitle>
      <S.ProfileBox>
        <S.ProflieImage src={mockImage}/>
        <S.NicknameBox>
          닉네임
          <IcPen width={'1.8rem'} height={'1.8rem'}/>
        </S.NicknameBox>
      </S.ProfileBox>
      <S.SummaryBox>
        {
          summaries.map((summary) => (
            <p key={summary.label}>
              <span>{summary.value}</span>{summary.text}
            </p>
          ))
        }
      </S.SummaryBox>
      <S.NavigateField>
        {
          options.map((option) => (
            <S.NavigateBox key={option.text} onClick={option.onclick}>
              {option.icon}
              <p>{option.text}</p>
              <IcRight />
            </S.NavigateBox>
          ))
        }
      </S.NavigateField>
    </S.MyPageWrapper>
  );
};

export default Mypage;