import styled from 'styled-components';

export const FriendItemWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column', align: 'center' })};
  ${({ theme }) => theme.colors.gray[50]};
  width: 34.3rem;
  height: 6rem;
  padding: 1rem 1.6rem 1rem 2.2rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  gap: 1rem;
  cursor: pointer;
`;
export const FriendImg = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const NicknameBox = styled.div`
  ${({ theme }) => theme.fonts.sb_13_600};
  width: 22.7rem;
  height: 3.5rem;
`;
export const Icon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;