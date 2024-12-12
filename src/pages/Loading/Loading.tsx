import { IcTitleIcon } from '../../assets/svg';
import * as S from './Loading.style';
import React from 'react';

const Loading = () => {
  return(
    <S.LoadingWrapper>
      <IcTitleIcon />
      로딩중
    </S.LoadingWrapper>
  );
};

export default Loading;