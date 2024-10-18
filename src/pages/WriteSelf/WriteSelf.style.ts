import styled from 'styled-components';

export const WriteSelfWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  padding: 1.4rem 1.6rem 0 1.6rem;
`;