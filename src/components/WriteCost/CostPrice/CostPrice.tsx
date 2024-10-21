import BtnContained from '../../common/Button/ContainedButton/BtnContained';
import BtnSmall from '../../common/Button/SmallButton/BtnSmall';
import * as S from './CostPrice.style';
import React, { ChangeEvent } from 'react';
import { useState } from 'react';

const CostPrice = () => {
  const [price, setPrice] = useState(0);
  const counts = [
    {
      label: '1천원',
      value: 1000,
    },
    {
      label: '5천원',
      value: 5000,
    },
    {
      label: '1만원',
      value: 10000,
    },
    {
      label: '3만원',
      value: 30000,
    },
  ];

  const handleSubmit = () => {
    alert('가격 입력 완료');
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const handlePrice = (value: number) => {
    setPrice(price + value);
  };

  return(
    <S.CostPriceWrapper>
      <S.InputBox>
        <S.PriceInput 
          value={price}
          placeholder='0'
          onChange={onChange}
        /> 원
      </S.InputBox>
      <S.NameText>바이바이바나나</S.NameText>
      <S.CountButtonField>
        {
          counts.map((count) => (
            <BtnContained
              key={count.label}
              onClick={handlePrice}
              value={count.value}
            >
              {count.label}
            </BtnContained>
          ))
        }
      </S.CountButtonField>
      <S.ButotnField>
        <BtnSmall onClick={handleSubmit}>확인</BtnSmall>
      </S.ButotnField>
    </S.CostPriceWrapper>
  );
};

export default CostPrice;