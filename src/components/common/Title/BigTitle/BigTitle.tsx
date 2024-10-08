import React from 'react';
import * as S from './BigTitle.style';

interface BigTitleProps {
  children: React.ReactNode;
}

function BigTitle ({ children }: BigTitleProps) {
  return(
    <S.BigTitleWrapper>
      {children}
    </S.BigTitleWrapper>
  );
}

export default BigTitle;