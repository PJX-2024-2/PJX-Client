import React from 'react';
import * as S from './EmotionList.style';
import { IcAngry, IcHappy, IcSurprised } from '../../assets/svg';

const EmotionList = () => {
    return (
        <S.EmotionWrapper>
            <IcAngry/>
            <IcHappy/>
            <IcSurprised/>
        </S.EmotionWrapper>
    )
}

export default EmotionList;