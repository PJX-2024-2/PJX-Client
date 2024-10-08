import React from "react";
import * as S from './BuyCard.style';
import EmotionList from "../EmotionList/EmotionList";


const BuyCard = () => {
    return (
        <S.BuyCardWrapper>
            <S.BuyContent>
            <S.BuyName></S.BuyName>
            <S.BuyText></S.BuyText>
            <S.BuyPicture></S.BuyPicture>
            </S.BuyContent>
            <EmotionList/>
        </S.BuyCardWrapper>
    )
}

export default BuyCard;