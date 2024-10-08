import React from 'react';
import * as S from './Feed.style';
import Search from '../../components/Search/Search';
import BuyCard from '../../components/BuyCard/BuyCard';

const Feed = () => {
    return (
        <S.FeedWrapper> <Search/><BuyCard/></S.FeedWrapper>
    )
}

export default Feed;