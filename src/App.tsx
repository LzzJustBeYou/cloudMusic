import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Navigation } from './navigation';
import { Appearance, useColorScheme } from 'react-native';
import { ThemeProvider } from './theme'; // 自定义的主题上下文和提供器
import { ThemeType, lightTheme, darkTheme } from './theme/themes'; // 定义的主题类型和具体实现

// 加载导航和图片资源
Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

// 防止启动画面自动隐藏
SplashScreen.preventAutoHideAsync();

export function App() {
  const systemColorScheme = useColorScheme(); // 检测系统主题
  const [theme, setTheme] = useState<ThemeType>(systemColorScheme === 'dark' ? 'dark' : 'light');

  // 切换主题方法
  const toggleTheme = () => {
    setTheme((prev: ThemeType) => (prev === 'light' ? 'dark' : 'light'));
  };

  // 当系统主题变化时自动更新
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) {
        setTheme(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeProvider value={{ theme, toggleTheme, themeData: theme === 'light' ? lightTheme : darkTheme }}>
      <Navigation
        theme={theme === 'light' ?  lightTheme : darkTheme}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </ThemeProvider>
  );
}
