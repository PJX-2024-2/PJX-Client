import { IcPlus } from '../../../assets/svg';
import BtnLarge from '../../common/Button/LargeButton/BtnLarge';
import * as S from './CostSubmit.style';
import React from 'react';

const CostSubmit = () => {
  const handleSubmit = () => {
    alert('등록 완료');
  };
  
  return(
    <S.CostSubmitWrapper>
      <S.CostBox>
        <S.PriceSpan>100</S.PriceSpan>원
      </S.CostBox>
      <S.NameText>바이바이바나나</S.NameText>
      <S.Label
        htmlFor='imgInput'
      >
        <IcPlus />
        사진추가
      </S.Label>
      <S.FileInput 
        type='file'
        id='imgInput'
      />
      <S.MemoTextArea placeholder='메모를 여기에 작성'/>
      <S.ButtonField>
        <BtnLarge onClick={handleSubmit}>등록하기</BtnLarge>
      </S.ButtonField>
    </S.CostSubmitWrapper>
  );
};

export default CostSubmit;