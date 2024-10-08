import React from "react";
import * as S from './BuyCard.style';
import EmotionList from "../EmotionList/EmotionList";
import EmotionSelect from "../EmotionSelect/EmotionSelect";


const BuyCard = () => {
    return (
        <S.BuyCardWrapper>
            <S.BuyContent>
            <S.BuyName><p>바이바이 샐러드</p><S.CostEmozWrapper><S.BuyCost>42,000원</S.BuyCost> <EmotionSelect/></S.CostEmozWrapper></S.BuyName>
            <S.BuyText>집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ</S.BuyText>
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