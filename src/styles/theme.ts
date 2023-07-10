import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  bgColor: '#1E272E',
  color1: '#12171C', // 진함
  color2: 'rgb(72, 84, 96)', // 연함
  textColor: 'rgb(244,244,244)',
  liquid: 'rgba(0,0,0,0.2)',
  border: '#485460',
  boxShadow: 'rgb(11,11,11)',
};

export const lightTheme: DefaultTheme = {
  bgColor: 'white',
  color1: 'rgb(247, 249,252)', // 진함
  color2: 'rgb(182, 220,247)', // 연함
  textColor: '#40407a',
  liquid: 'rgba(182, 220,247,0.3)',
  border: 'rgba(182, 220,247,0.4)',
  boxShadow: 'rgb(122,155,177)',
};
