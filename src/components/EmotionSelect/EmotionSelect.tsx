import React, { useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcPlusRound } from '../../assets/svg';

const EmotionSelect = () => {
    const [openModal,setOpenModal] = useState(false);
    return (
        <S.EmotionSelectWrapper>
            <IcPlusRound style={{width: '3rem',height: '3rem'}} onClick={()=>setOpenModal(!openModal)}/>
                {openModal? <S.EmotionModal>짜잔</S.EmotionModal>:null}
        </S.EmotionSelectWrapper>
    )
}

export default EmotionSelect;