import React from "react";
import * as S from './Mypage.style';
import SmallTitle from '../../components/common/Title/SmallTitle/SmallTitle';
import mockImage from '../../assets/profileMockImage.png';
import { IcCheck, IcPen } from '../../assets/svg';

const Mypage = () => {
  return (
    <S.MyPageWrapper>
      <SmallTitle>마이페이지</SmallTitle>
      <S.ProfileBox>
        <S.ProflieImage src={mockImage}/>
        <S.NicknameBox>
          닉네임
          <IcPen />
        </S.NicknameBox>
      </S.ProfileBox>
      <S.SummaryBox>
        <p><span>1034</span>일 동안</p>
        <p><span>100000</span>원을 아꼈어요</p>
        <p><span>3</span>명의 또래 친구가 생겼어요</p>
      </S.SummaryBox>
      <S.NavigateField>
        <S.NavigateBox>
          <IcCheck />
          내 지출 요약
        </S.NavigateBox>
        <S.NavigateBox>
          <IcPen />
          내 또래 친구 목록
        </S.NavigateBox>
      </S.NavigateField>
    </S.MyPageWrapper>
  );
};

export default Mypage;