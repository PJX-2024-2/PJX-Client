import * as S from './FriendItem.style';
import React from 'react';
import profileMockImage from '../../../assets/profileMockImage.png';
import { IcPlus } from '../../../assets/svg';

interface FriendItemProps {
  children: React.ReactNode;
}

const FriendItem = ({ children }: FriendItemProps) => {
  return(
    <S.FriendItemWrapper>
      <S.FriendImg src={profileMockImage}/>
      <S.NicknameBox>{children}</S.NicknameBox>
      <IcPlus />
    </S.FriendItemWrapper>
  );
};

export default FriendItem;