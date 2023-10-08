import { DefaultTheme } from 'styled-components';
import COLORS from './colors';

export const darkTheme: DefaultTheme = {
  green100: COLORS.green100,
  green200: COLORS.green200,
  red100: COLORS.red100,
  red200: COLORS.red200,

  textDefault: COLORS.white,
  textStrong: COLORS.white,
  textWeek: COLORS.gray50,
  textPoint: COLORS.white,

  borderDefault: COLORS.gray600,
  borderBold: COLORS.gray400,
  surfaceDefault: COLORS.gray800,
  surfaceAlt: COLORS.gray900,
  surfacePointDefault: '#12171C',
  surfacePointAlt: '#12171c82',

  menuHover: COLORS.gray800,
  menuActive: COLORS.gray900,
  subMenuHover: COLORS.gray200,
  subMenuActive: COLORS.gray400,

  greenButton: COLORS.green400,
  greenHover: COLORS.green300,
  greenActive: COLORS.green500,

  pageTitleBg: COLORS.gray900,

  white: '#FFFFFF',
};

export const lightTheme: DefaultTheme = {
  textDefault: '#5F6E76',
  textStrong: '#14212B',
  textWeek: '#879298',
  textPoint: '#4362D0',
  borderDefault: '#D2DAE0',
  borderBold: '#6E8091',
  surfaceDefault: '#FFFFFF',
  surfaceAlt: '#F5F7F9',
  surfacePointDefault: '#E9E9E9',
  surfacePointAlt: '#F5F7F9',
  green100: '#73c92d',
  green200: '#57ab5a',
  white: '#FFFFFF',
  red100: '#CF222E',
  red200: '#af3f38',

  // 아직 미지정
  subMenuHover: COLORS.blueGrey200,
  subMenuActive: COLORS.blueGrey600,
  menuHover: '',
  menuActive: '',
  greenButton: '',
  greenHover: '',
  greenActive: '',
  pageTitleBg: COLORS.gray900,
};
