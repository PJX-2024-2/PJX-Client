import * as S from './FriendItem.style';
import React from 'react';
import profileMockImage from '../../../assets/profileMockImage.png';

interface FriendItemProps {
  children: React.ReactNode;
}

const FriendItem = ({ children }: FriendItemProps) => {
  return(
    <S.FriendItemWrapper>
      <S.FriendImg src={profileMockImage}/>
      <S.NicknameBox>{children}</S.NicknameBox>
      <S.Icon />
    </S.FriendItemWrapper>
  );
};

export default FriendItem;