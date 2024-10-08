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
            <S.BuyPictureWrapper>
                <S.BuyPicture src="https://github.com/user-attachments/assets/fee098da-2db0-459e-adcd-94b1364fd511"/>
                <S.BuyPicture src="https://github.com/user-attachments/assets/fee098da-2db0-459e-adcd-94b1364fd511"/>
            </S.BuyPictureWrapper>
            </S.BuyContent>
            <EmotionList/>
        </S.BuyCardWrapper>
    )
}

export default BuyCard;