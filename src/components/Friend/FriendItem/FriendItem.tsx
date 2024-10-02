import * as S from './FriendItem.style';
import React from 'react';

function FriendItem (){
  return(
    <S.FriendItemWrapper>
      <S.FriendImg />
      <S.NicknameBox>Nickname</S.NicknameBox>
      <S.Icon />
    </S.FriendItemWrapper>
  );
}

export default FriendItem;