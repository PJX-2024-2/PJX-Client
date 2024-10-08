import * as S from './SmallTitle.style';
import React from 'react';

interface SmallTitleProps {
  children: React.ReactNode;
}

const SmallTitle = ({ children }: SmallTitleProps) => {
  return(
    <S.SmallTitleWrapper>
      {children}
    </S.SmallTitleWrapper>
  );
};

export default SmallTitle;