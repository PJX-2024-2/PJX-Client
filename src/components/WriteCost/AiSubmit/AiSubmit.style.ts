import styled from 'styled-components';

export const AiSubmitWrapper = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
`;
export const HorizontalLine = styled.div`
  background: ${({ theme }) => theme.colors.gray[200]};
  width: 34.4rem;
  height: 0.1rem;
  margin-top: 4rem;
`;
export const InputBox = styled.div`
  ${({ theme: { mixin }}) => mixin.flexCenter({})};
  width: 100%;
  gap: 1.2rem;
  padding: 1.2rem 0;
`;
export const TextBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.fonts.sb_13_600};
  p {
    ${({ theme }) => theme.fonts.m_11_500};
    color: ${({ theme }) => theme.colors.gray[500]};
  };
`;
export const Label = styled.label`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
  ${({ theme }) => theme.fonts.m_13_500};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  color: ${({ theme }) => theme.colors.gray[500]};
  text-align: center;
  width: 31.5rem;
  height: 40rem;
  border-radius: 10px;
  margin: 1.2rem 0;
  gap: 1rem;
`;
export const FileInput = styled.input`
  display: none;
`;
export const PreviewImage = styled.img`
  width: 31.5rem;
  height: 40rem;
`;
export const ButtonField = styled.div`
  ${({ theme: { mixin}}) => mixin.flexCenter({})};
`;