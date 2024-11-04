import * as S from './AiSubmit.style';
import React from 'react';
import { useState, ChangeEvent } from 'react';
import { IcPlus } from '../../../assets/svg';
import BtnLarge from '../../common/Button/LargeButton/BtnLarge';
import InputType from '../../../types/InputType';
import usePostReceiptAnalyze from '../../../hooks/queries/receipt/usePostReceiptAnalyze';

interface AiSubmitProps {
  setValues: React.Dispatch<React.SetStateAction<InputType>>;
  onState: React.Dispatch<React.SetStateAction<string>>
}

const AiSubmit = ({ setValues, onState }: AiSubmitProps) => {
  const [imgUrl, setImgUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { mutate: postRecipt } = usePostReceiptAnalyze();
  const mockMemo = '토마토는 3천원';
  const mockCost = 3000;

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgUrl(url);
      setSelectedFile(file);
    }
  };
  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }
    const body = { file: selectedFile};    
    try{

      postRecipt(body, {
        onSuccess: (response) => {
          setValues((prevValues) => ({
            ...prevValues,
            image: imgUrl,
            memo: mockMemo,
            price: mockCost,
          }));
          onState('submit');
          console.log(response.result)
        }
      });
      
    }
    catch(err) {
      console.error(err);
      alert("Error occurred while submitting the receipt.");
      return;
    }
  };

  return(
    <S.AiSubmitWrapper>
      <S.HorizontalLine />
      <S.TextBox>
          영수증 사진을 촬영해주세요. 
          <p>글자가 잘보이도록 놓아주세요.</p>
      </S.TextBox>
      <S.Label
        htmlFor='imgInput'
      >
        {
          imgUrl !== ''? (
            <S.PreviewImage src={imgUrl} alt='preview' />
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
      <S.ButtonField>
        <BtnLarge onClick={handleSubmit}>등록하기</BtnLarge>
      </S.ButtonField>
    </S.AiSubmitWrapper>
  );
};

export default AiSubmit;