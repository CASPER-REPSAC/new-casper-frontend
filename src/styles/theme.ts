import { DefaultTheme } from 'styled-components';
import COLORS from './colors';

export const darkTheme: DefaultTheme = {
  purple: COLORS.purple600,
  white: COLORS.white,

  textDefault: COLORS.white,
  textStrong: COLORS.white,
  textWeek: COLORS.gray50,
  textPoint: COLORS.white,

  borderDefault: COLORS.gray600,
  borderBold: COLORS.gray400,
  surfaceDefault: COLORS.gray800,
  surfaceAlt: COLORS.gray900,

  /* 메뉴 색상 */
  menuHover: COLORS.gray800,
  menuActive: COLORS.gray900,
  subMenuHover: COLORS.gray200,
  subMenuActive: COLORS.gray400,
  sideMenuHover: COLORS.gray700,
  sideMenuActive: COLORS.gray700,
  sideMenuHighlight: COLORS.gray500,

  /* 버튼 색상 */
  greenButton: COLORS.green400,
  greenHover: COLORS.green300,
  greenActive: COLORS.green500,
  redButton: COLORS.red400,
  redHover: COLORS.red300,
  redActive: COLORS.red500,

  inputSurface: COLORS.gray850,

  pageTitleSurface: COLORS.gray900,
  boardHover: COLORS.gray700,
  boardActive: COLORS.gray600,

  notAllowedCorsor: COLORS.gray100,

  redError: COLORS.red400,
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
  pageTitleSurface: COLORS.gray900,
  sideMenuHover: '',
  sideMenuActive: '',
  sideMenuHighlight: '',
  boardHover: COLORS.gray700,
  boardActive: COLORS.gray600,
  inputSurface: '',
  redButton: '',
  redHover: '',
  redActive: '',
  notAllowedCorsor: COLORS.gray100,
  redError: COLORS.red400,
};
