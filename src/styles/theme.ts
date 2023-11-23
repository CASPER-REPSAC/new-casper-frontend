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

  inputSurface: COLORS.gray850,
  pageTitleSurface: COLORS.gray900,
  notAllowedCorsor: COLORS.gray100,
  redError: COLORS.red400,

  /* 헤더 색상 */
  subMenuSurface: COLORS.gray600,
  subMenuBorder: COLORS.white,

  /* 메뉴 색상 */
  menuHover: COLORS.gray800,
  menuActive: COLORS.gray900,
  sideMenuHover: COLORS.gray700,
  sideMenuActive: COLORS.gray700,
  sideMenuHighlight: COLORS.gray500,

  /* 버튼 색상 */
  defaultButtonHover: COLORS.gray900,
  defaultButtonActive: COLORS.gray950,
  greenButton: COLORS.green400,
  greenHover: COLORS.green300,
  greenActive: COLORS.green500,
  redButton: COLORS.red400,
  redHover: COLORS.red300,
  redActive: COLORS.red500,

  /* 게시판 색상 */
  boardHover: COLORS.gray850,
  boardActive: COLORS.gray900,

  /* 에디터 색상 */
  toolbarBg: COLORS.gray900,
  toolbarBorder: COLORS.gray800,
  toolbarHover: COLORS.gray200,
  toolbarActive: COLORS.white,
  toolbarDefault: COLORS.gray500,
  editorBg: COLORS.gray900,
  editorBorder: COLORS.gray700,
  toolbarOptionBg: COLORS.gray400,
};

export const lightTheme: DefaultTheme = {
  // 아직 미지정

  purple: COLORS.purple600,

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

  /* 헤더 색상 */
  subMenuSurface: COLORS.gray200,
  subMenuBorder: COLORS.gray400,

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
  defaultButtonHover: COLORS.gray900,
  defaultButtonActive: COLORS.gray950,

  notAllowedCorsor: COLORS.gray100,
  redError: COLORS.red400,
  /* 에디터 색상 */
  toolbarBg: COLORS.gray900,
  toolbarBorder: COLORS.gray800,
  toolbarHover: COLORS.gray200,
  toolbarActive: COLORS.white,
  toolbarDefault: COLORS.gray500,
  editorBg: COLORS.gray900,
  editorBorder: COLORS.gray700,
  toolbarOptionBg: COLORS.gray400,
};
