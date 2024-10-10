import * as S from './Profile.style';
import React from 'react';
import Title from '../../../components/common/Title/Title';
import { IcBack, IcPen } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';
import mockImage from '../../../assets/profileMockImage.png'
import BtnLarge from '../../../components/common/Button/LargeButton/BtnLarge';

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    alert('저장 API 연결');
  };

  return(
    <S.ProfileWrapper>  
      <Title isLarge={false}>
        <S.IconBox onClick={() => handleBack()}>
          <IcBack />
        </S.IconBox>
        내  프로필
      </Title>

      <S.ImageBox>
        <S.ProfileImage src={mockImage}/>
        <S.EditIconBox><IcPen width='1.8rem' height='1.8rem'/></S.EditIconBox>
      </S.ImageBox>

      <S.EditBox>
        <S.EditItem>
          <S.EditTitleText>이메일</S.EditTitleText>
          <p>email@naver.com</p>
          <S.EditSpan>수정</S.EditSpan>
        </S.EditItem>
        <S.EditItem>
          <S.EditTitleText>닉네임</S.EditTitleText>
          <p>이웃집 토토로</p>
          <S.EditSpan>수정</S.EditSpan>
        </S.EditItem>
      </S.EditBox>

      <S.ButtonField>
        <BtnLarge onClick={() => handleSubmit()}>저장</BtnLarge>
      </S.ButtonField>
    </S.ProfileWrapper>
  );
};

export default Profile;