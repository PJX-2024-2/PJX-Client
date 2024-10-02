import * as S from './FriendItem.style';
import React from 'react';

interface FriendItemProps {
  children: React.ReactNode;
}

const FriendItem = ({ children }: FriendItemProps) => {
  return(
    <S.FriendItemWrapper>
      <S.FriendImg />
      <S.NicknameBox>{children}</S.NicknameBox>
      <S.Icon />
    </S.FriendItemWrapper>
  );
};

export default FriendItem;