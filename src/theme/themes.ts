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
    border: '#ffffff',
    notification: '#ff80ab',
    inputBackgroud: '#eeeeee',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#1f1f1f',
    card: '#1f1f1f',
    text: '#ffffff',
    border: '#1f1f1f',
    notification: '#ff80ab',
    inputBackgroud: '#454545',
  },
};
