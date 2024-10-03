import * as S from './FriendList.style';
import React from 'react';
import FriendItem from '../FriendItem/FriendItem';

const FriendList = () => {
  const friendMockData = [
    'Nickname',
    'Nickname',
    'Nickname',
    'Nickname',
    'Nickname',
    'Nickname',
    'Nickname',
  ];

  return(
    <S.FriendListWrapper>
      {
        friendMockData.map((friend) => (
          <FriendItem key={friend}>
            {friend}
          </FriendItem>
        ))
      }
    </S.FriendListWrapper>
  );
};

export default FriendList;
