import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 34.1rem;
  height: 5.6rem;
`;