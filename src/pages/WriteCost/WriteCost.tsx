import React from "react";
import * as S from './WriteCost.style';
import Title from '../../components/common/Title/Title';
import { IcWriteAi, IcWriteSelf } from '../../assets/svg';

const WriteCost = () => {
	return (
		<S.WriteCostWrapper>
			<Title>
				🤖 <br />
				지출 등록 방식을 <br />
				선택해주세요
			</Title>
			<S.SelectBox>
				<S.ItemBox>
					<IcWriteAi />
					AI 영수증
				</S.ItemBox>
				<S.ItemBox>
					<IcWriteSelf />
					직접 작성
				</S.ItemBox>
			</S.SelectBox>
		</S.WriteCostWrapper>
	);
};

export default WriteCost;