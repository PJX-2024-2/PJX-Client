import React, { useState } from "react";
import * as S from './GNB.style';
import { IcAlarmActive, IcAlarmUnActive, IcExpensesActive, IcExpensesUnActive, IcFeedActive, IcFeedUnActive, IcMyActive, IcMyUnActive } from "../../assets/svg";

const GNB = () => {
    const [activeTab, setActiveTab] = useState('expenses');
    return(
        <S.GNBWrapper>
            <S.NavigateBtn onClick={() => setActiveTab('expenses')}>
                {activeTab === 'expenses' ? <IcExpensesActive /> : <IcExpensesUnActive/>}
                <p>내 지출</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => setActiveTab('feed')}>
                {activeTab === 'feed' ? <IcFeedActive /> : <IcFeedUnActive />}
                <p>피드</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => setActiveTab('alarm')}>
                {activeTab === 'alarm' ? <IcAlarmActive /> : <IcAlarmUnActive />}
                <p>알람</p>
            </S.NavigateBtn>

            <S.NavigateBtn onClick={() => setActiveTab('my')}>
                {activeTab === 'my' ? <IcMyActive /> : <IcMyUnActive />}
                <p>마이</p>
            </S.NavigateBtn>
        </S.GNBWrapper>
    )
} 

export default GNB;