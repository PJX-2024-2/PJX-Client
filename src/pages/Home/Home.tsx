import { IcSearch } from '../../assets/svg';
import MonthlyCost from '../../components/MonthlyCost/MonthlyCost';
import * as S from './Home.style';
import React from 'react';

const Home = () => {
    

    return (
        <S.HomeWrapper>
            <MonthlyCost/>
            <S.DateWrapper>
            <S.YearMonthDate>2024년 09월 03일</S.YearMonthDate>
            <S.IconWrapper>
            <S.Day>목요일</S.Day>
            <IcSearch/>
            </S.IconWrapper>
            </S.DateWrapper>
        </S.HomeWrapper>
    );
};

export default Home;
