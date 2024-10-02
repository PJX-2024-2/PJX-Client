import styled from "styled-components";


export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 1.4rem;
    background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const DateWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
    width: 100%;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
`;

export const YearMonthDate = styled.div`
  ${({ theme }) => theme.fonts.r_14_400};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Day = styled.div`
${({ theme: { mixin } }) => mixin.flexCenter({ })};
background-color: white;
height: 3.2rem;
border-radius: 30px;
padding: 1.2rem;
color: ${({ theme }) => theme.colors.gray[500]};
${({ theme }) => theme.fonts.m_12_500};
`;

export const IconWrapper = styled.div`
display:flex;
align-items: center;
gap: 1.2rem;
`;

