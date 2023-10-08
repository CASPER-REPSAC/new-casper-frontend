import { DefaultTheme } from 'styled-components';
import COLORS from './colors';

export const darkTheme: DefaultTheme = {
  green100: COLORS.green100,
  green200: COLORS.green200,
  red100: COLORS.red100,
  red200: COLORS.red200,

  textDefault: '#FFFFFF',
  textStrong: '#FFFFFF',
  textWeek: '#D2DAE0',
  textPoint: '#4362D0',

  subMenuHover: '',
  subMenuActive: '',

  borderDefault: '#444C56',
  borderBold: '#FFFFFF',
  surfaceDefault: '#14212B',
  surfaceAlt: '#4B5966',
  surfacePointDefault: '#12171C',
  surfacePointAlt: '#12171c82',

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
};
