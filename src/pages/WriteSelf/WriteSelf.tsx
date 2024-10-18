import WriteHeader from '../../components/common/WriteHeader/WriteHeader';
import * as S from './WriteSelf.style';
import React from 'react';

const WriteSelf = () => {
  return(
    <S.WriteSelfWrapper>
      <WriteHeader>직접 지출 등록</WriteHeader>
      직접 작성 페이지
    </S.WriteSelfWrapper>
  );
};

export default WriteSelf;