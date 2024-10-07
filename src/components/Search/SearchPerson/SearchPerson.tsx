import React from "react";
import * as S from './SearchPerson.style';
import FriendItem from "../../Friend/FriendItem/FriendItem";

const SearchPerson = () => {
    return (
        <S.SearchPersonWrapper>
            <FriendItem>이웃집 영자</FriendItem>
            <FriendItem>이웃집 영자</FriendItem>
        </S.SearchPersonWrapper>
    )
}

export default SearchPerson;