import WriteHeader from '../../components/common/WriteHeader/WriteHeader';
import CostName from '../../components/WriteCost/CostName/CostName';
import CostSubmit from '../../components/WriteCost/Submit/CostSubmit';
import CostPrice from './../../components/WriteCost/CostPrice/CostPrice';
import * as S from './WriteSelf.style';
import React, { useState } from 'react';

const WriteSelf = () => {
  const [state, setState] = useState<string>('submit');
  const [values, setValues] = useState({
    category: '',
  });
  const steps = [
    {
      label: 'submit',
      title: '직접 지출 등록',
    },
    {
      label: 'costName',
      title: '지출 내용',
    },
    {
      label: 'costPrice',
      title: '지출 금액',
    },
  ];
  
  return(
    <S.WriteSelfWrapper>
      <WriteHeader>직접 지출 등록</WriteHeader>
      <CostSubmit />
    </S.WriteSelfWrapper>
  );
};

export default WriteSelf;