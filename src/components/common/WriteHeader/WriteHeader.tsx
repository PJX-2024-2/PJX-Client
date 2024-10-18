import { IcBack } from '../../../assets/svg';
import * as S from './WriteHeader.style';
import React from 'react';

interface WriteHeaderProps {
  children: React.ReactNode;
}

const WriteHeader = ({ children }: WriteHeaderProps) => {
  //const navigate = useNavigate();
  const handleBack = () => {
    alert('뒤로가기');
  };
  
  return(
    <S.WriteHeaderWrapper>
      <S.IconWrapper onClick={() => handleBack()}>
        <IcBack />
      </S.IconWrapper>
      {children}
      <S.BlankBox />
    </S.WriteHeaderWrapper>
  );
};

export default WriteHeader;