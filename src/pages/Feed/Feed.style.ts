import styled from "styled-components";

export const FeedWrapper = styled.div`
${({ theme: { mixin } }) => mixin.flexBox({direction: 'column'})};
${({ theme }) => theme.fonts.m_30_500};
    color: ${({ theme }) => theme.colors.gray[700]};
    width: 100%;
    height: 100vh;
    padding: 1.6rem;
    gap: 2rem;
`;