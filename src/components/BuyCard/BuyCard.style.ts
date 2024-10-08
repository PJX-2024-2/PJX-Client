import styled from "styled-components";

export const BuyCardWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column',align: 'flex-start'})};
width: 100%;
padding: 0 0.4rem;
gap: 1rem;
`;

export const BuyName = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({justify: 'space-between', align: 'center'})};
width: 100%;
p{
${({theme})=> theme.fonts.m_13_600};
color: ${({theme})=> theme.colors.gray[700]};
}
`;
export const CostEmozWrapper = styled.div`
display: flex;
gap: 0.8rem;
`;

export const BuyCost = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({align: 'center'})};
${({theme})=> theme.fonts.m_12_500};
color: #AAA;
padding: 0 1rem;
background-color: white;
height: 2.8rem;
border-radius: 6px;
border: 1px solid rgba(0, 0, 0, 0.12);

`;

export const BuyText = styled.div`
`;

export const BuyPicture = styled.div`
`;

export const BuyContent = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({})};
width: 100%;
`;