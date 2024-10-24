import React, { useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcAngry, IcHappy, IcPlusRound, IcSad, IcSurprised, IcThinking } from '../../assets/svg';

const EmotionSelect = () => {
    const [openModal,setOpenModal] = useState(false);
    return (
        <S.EmotionSelectWrapper >
            <IcPlusRound style={{width: '3rem',height: '3rem'}} onClick={()=>setOpenModal(!openModal)}/>
                {openModal? <><S.ModalOpenBackGround onClick={()=>setOpenModal(!openModal)} openModal={openModal}></S.ModalOpenBackGround><S.EmotionModal><IcHappy/><IcThinking/><IcSurprised/><IcSad/><IcAngry/></S.EmotionModal></>:null}
        </S.EmotionSelectWrapper>
    )
}

export default EmotionSelect;