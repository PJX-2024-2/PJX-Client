import styled from 'styled-components';

export const Step1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 6.4rem 1.6rem 0 1.6rem;
`;
export const LayoutBox = styled.div`
  width: 100%;
  height: 30rem;
`;
export const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 5.2rem;
  border-radius: 10px;
  border: solid 1.2px ${({ theme }) => theme.colors.gray[200]};
  padding: 1.5rem 1.6rem 1.5rem 1.6rem;
  margin-top: 4.4rem;
  gap: 1rem;
`;
export const EmailInput = styled.input`
  ${({ theme }) => theme.fonts.r_16_400};
  border: none;
  width: 20.5rem;
  height: 2.2rem;
`;
export const DomainCheckSpan = styled.span`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  ${({ theme }) => theme.fonts.r_16_500};
  color: ${({ theme }) => theme.colors.primary.default};
  width: 9rem;
  cursor: pointer;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin }}) => mixin.flexBox({ justify: 'flex-end' })};
  width: 100%;
`;