import { useNavigate } from 'react-router-dom';
import WriteHeader from '../../components/common/WriteHeader/WriteHeader';
import * as S from './WriteAi.style';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import InputType from '../../types/InputType';
import { IcPlus } from '../../assets/svg';
import BtnLarge from '../../components/common/Button/LargeButton/BtnLarge';
import CostSubmit from '../../components/WriteCost/Submit/CostSubmit';

const WriteAi = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [state, setState] = useState<string>('submit');
  const [values, setValues] = useState<InputType>({
    category: '지출 내역 입력',
    price:0,
    memo:'',
    image:'',
  });
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate('/write-cost');
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setValues((prevValues) => ({
        ...prevValues,
        image: imgUrl,
      }));
    }
  };

  const handleSubmit = () => {
    if(!isRegistered){
      alert('api 연결');
      setIsRegistered(true);
    } else {
      alert('최종 등록');
      //navigate
    }
  };

  return(
    <S.WriteAiWrapper>
      <WriteHeader onPrev={handlePrev}>AI 지출 등록</WriteHeader>
      {
        !isRegistered ? 
          (
            <>
              <S.HorizontalLine />
              <S.InputBox>
                <S.TextBox>
                  영수증 사진을 촬영해주세요. 
                  <p>글자가 잘보이도록 놓아주세요.</p>
                </S.TextBox>
                <S.Label
                  htmlFor='imgInput'
                >
                  {
                    values.image? (
                      <S.PreviewImage src={values.image} alt='preview' />
                    ) : 
                    <>
                      <IcPlus />
                      영수증 사진 추가 (0/1)
                    </>  
                  }
                </S.Label>
                <S.FileInput 
                  type='file'
                  id='imgInput'
                  onChange={onFile}
                />
              </S.InputBox>
            </>
          ) : 
          (
            <CostSubmit />
          )
      }
      <S.ButtonField>
        <BtnLarge onClick={handleSubmit}>등록하기</BtnLarge>
      </S.ButtonField>
    </S.WriteAiWrapper>
  );
};

export default WriteAi;