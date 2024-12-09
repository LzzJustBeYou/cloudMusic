import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export type ThemeType = 'light' | 'dark';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    card: '#ffffff',
    text: '#000000',
    border: '#cccccc',
    notification: '#ff80ab',
    inputBackgroud: '#eeeeee',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    card: '#1f1f1f',
    text: '#ffffff',
    border: '#272727',
    notification: '#ff80ab',
    inputBackgroud: '#eeeeee',
  },
};
