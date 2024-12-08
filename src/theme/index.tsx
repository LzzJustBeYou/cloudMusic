import React, { createContext, ReactNode, useContext } from 'react';
import { lightTheme, darkTheme, ThemeType } from './themes';

interface ThemeContextProps {
  theme: ThemeType;
  themeData: typeof lightTheme | typeof darkTheme; // 当前主题数据
  toggleTheme: () => void; // 切换主题方法
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  themeData: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ThemeContextProps;
}) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
