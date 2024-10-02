import MonthlyCost from '../../components/MonthlyCost/MonthlyCost';
import * as S from './Home.style';
import React from 'react';
import GNB from '../../components/GNB/GNB';
import Calendar from '../../components/Calendar/Calendar';



const Home = () => {

    return (
        <S.HomeWrapper>
            <MonthlyCost/>
            <Calendar/>
    <GNB/>
        </S.HomeWrapper>
    );
};

export default Home;
