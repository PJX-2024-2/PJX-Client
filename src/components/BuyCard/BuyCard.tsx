import React from "react";
import * as S from './BuyCard.style';
import EmotionList from "../EmotionList/EmotionList";
import EmotionSelect from "../EmotionSelect/EmotionSelect";


const BuyCard = () => {
    return (
        <S.BuyCardWrapper>
            <S.BuyContent>
            <S.BuyName><p>바이바이 샐러드</p><S.CostEmozWrapper><S.BuyCost>42,000원</S.BuyCost> <EmotionSelect/></S.CostEmozWrapper></S.BuyName>
            <S.BuyText></S.BuyText>
            <S.BuyPicture></S.BuyPicture>
            </S.BuyContent>
            <EmotionList/>
        </S.BuyCardWrapper>
    )
}

export default BuyCard;