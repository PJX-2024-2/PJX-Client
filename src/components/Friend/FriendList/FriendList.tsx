import * as S from './FriendList.style';
import React from 'react';
import FriendItem from '../FriendItem/FriendItem';

const FriendList = () => {
  const friendMockData = [
    'aa',
    'bb',
    'cc',
    'dd',
    'ee',
    'ff',
    'gg',
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
