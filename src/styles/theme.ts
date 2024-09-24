import mixin from './mixin';
import { css } from 'styled-components';

const colors = {
  normal: {
    white: '#FFFFFF',
    black: '#000000',
  },
  gray: {
    G_50: '#F8F9FC',
    G_100: '#F3F5F9',
    G_200: '#E9EAF0',
    G_400: '#BEC3CC',
    G_500: '#8C9097',
    G_600: '#5E6066',
    G_700: '#27262E',
  },
  orange: {
    O_100: '#F67402',
    O_200: '#FF5B29',
  }
};

const fonts = {
  m_10_500: css`
    font-size: 10px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_10_600: css`
    font-size: 10px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  m_11_500: css`
    font-size: 11px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  m_12_400: css`
    font-size: 12px;
    font-weight: 400;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  r_12_400: css`
    font-size: 12px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  m_12_500: css`
    font-size: 12px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  r_12_500: css`
    font-size: 12px;
    font-weight: 500;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  m_13_500: css`
    font-size: 13px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  m_13_600: css`
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_13_600: css`
    font-size: 13px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  r_14_400: css`
    font-size: 14px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  m_14_500: css`
    font-size: 14px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_14_600: css`
    font-size: 14px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  m_15_500: css`
    font-size: 15px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_15_600: css`
    font-size: 15px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  r_16_400: css`
    font-size: 16px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  m_16_500: css`
    font-size: 16px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_16_600: css`
    font-size: 16px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  b_16_700: css`
    font-size: 16px;
    font-weight: 700;
    font-family: "Pretendard-Bold";
    line-height: normal;
  `,
  r_18_400: css`
    font-size: 18px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  r_18_600: css`
    font-size: 18px;
    font-weight: 400;
    font-family: "Pretendard-Regular";
    line-height: normal;
  `,
  b_20_600: css`
    font-size: 20px;
    font-weight: 600;
    font-family: "Pretendard-Bold";
    line-height: normal;
  `,
  sb_22_600: css`
    font-size: 22px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  sb_25_600: css`
    font-size: 25px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  m_30_500: css`
    font-size: 30px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  m_34_500: css`
    font-size: 34px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  m_35_500: css`
    font-size: 35px;
    font-weight: 500;
    font-family: "Pretendard-Medium";
    line-height: normal;
  `,
  sb_35_600: css`
    font-size: 35px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
  `,
  sb_40_600: css`
    font-size: 40px;
    font-weight: 600;
    font-family: "Pretendard-SemiBold";
    line-height: normal;
`,
};

const theme = { mixin, colors, fonts };

export default theme;