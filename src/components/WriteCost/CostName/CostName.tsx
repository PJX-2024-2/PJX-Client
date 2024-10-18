import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import * as S from './CostName.style';
import React from 'react';

interface CostNameProps {
  category: string;
}

const CostName = ({ category }: CostNameProps) => {
  //Context 사용하기
  const handleClick = () => {
    alert('지출 내용 입력 완료');
  };

  return(
    <S.CostNameWrapper>
      <S.NameInput 
        value={category}
        placeholder='지출 내용을 입력해주세요'
      />
      <S.ButtonField>
        <BtnSmall onClick={handleClick}>확인</BtnSmall>
      </S.ButtonField>
    </S.CostNameWrapper>
  );
};

export default CostName;