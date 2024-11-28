import React, { useState } from 'react';
import * as S from './EmotionSelect.style';
import { IcAngry, IcHappy, IcPlusRound, IcSad, IcSurprised, IcThinking } from '../../assets/svg';
import usePostFeel from '../../hooks/queries/home/usePostFeel';

const EmotionSelect = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState<{ icon: JSX.Element; name: string }>({
        icon: <IcPlusRound style={{ width: '3rem', height: '3rem' }} />,
        name: '',
    });
    const emotionAPI = usePostFeel();

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // 아이콘 데이터 배열
    const icons = [
        { component: <IcHappy style={{ width: '4rem', height: '4rem' }} />, name: 'HAPPY' },
        { component: <IcThinking style={{ width: '4rem', height: '4rem' }} />, name: 'WONDER' },
        { component: <IcSurprised style={{ width: '4rem', height: '4rem' }} />, name: 'SURPRISED' },
        { component: <IcSad style={{ width: '4rem', height: '4rem' }} />, name: 'SAD' },
        { component: <IcAngry style={{ width: '4rem', height: '4rem' }} />, name: 'ANGRY' },
    ];

    const handleIconClick = (icon: JSX.Element, name: string) => {
        setSelectedIcon({ icon, name });
        console.log(name); // 선택된 아이콘의 이름을 콘솔에 출력
        const body = {
            date: getTodayDate(),
            reactionType: name,
        }
        emotionAPI.mutate(body);
        setOpenModal(false); 
    };

    return (
        <S.EmotionSelectWrapper>
            <div onClick={() => setOpenModal(!openModal)}>
                {selectedIcon.icon}
            </div>
            {openModal && (
                <>
                    <S.ModalOpenBackGround
                        onClick={() => setOpenModal(false)}
                        openModal={openModal}
                    />
                    <S.EmotionModal>
                        {icons.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleIconClick(item.component, item.name)}
                            >
                                {item.component}
                            </div>
                        ))}
                    </S.EmotionModal>
                </>
            )}
        </S.EmotionSelectWrapper>
    );
};

export default EmotionSelect;
