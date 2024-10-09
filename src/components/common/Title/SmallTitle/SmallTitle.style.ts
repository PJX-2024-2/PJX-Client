import styled from 'styled-components';

export const SmallTitleWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  ${({ theme }) => theme.fonts.sb_22_600};
  letter-spacing: -0.22px;
  width: 100%;
  gap: 1rem;
`;