import { useNavigate } from 'react-router-dom';
import SmallTitle from '../../../components/common/Title/SmallTitle/SmallTitle';
import FriendList from '../../../components/Friend/FriendList/FriendList';
import * as S from './MypageFriends.style';
import React from 'react';
import { IcBack } from '../../../assets/svg';

const MypageFriends = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return(
    <S.MypageFriendsWrapper>
      <SmallTitle>
        <S.IconBox onClick={() => handleBack()}>
          <IcBack />
        </S.IconBox>
        내 또래 친구 목록
      </SmallTitle>
      <S.FriendListBox>
        <FriendList />
      </S.FriendListBox>
    </S.MypageFriendsWrapper>
  );
};

export default MypageFriends;