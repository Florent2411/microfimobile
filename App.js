import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './App/navigation/MainNavigation';
import { useFonts } from 'expo-font';
import * as React from 'react';
export default function App() {
  const [loaded] = useFonts({
    RobotoRegular: require('./App/assets/fonts/Roboto/Roboto-Regular.ttf'),
    RobotoBlack: require('./App/assets/fonts/Roboto/Roboto-Black.ttf'),
    RobotoItalic: require('./App/assets/fonts/Roboto/Roboto-Italic.ttf'),
    RobotoLight: require('./App/assets/fonts/Roboto/Roboto-Light.ttf'),
    RobotoBold: require('./App/assets/fonts/Roboto/Roboto-Bold.ttf'),
    RobotoMedium: require('./App/assets/fonts/Roboto/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
        <MainNavigation/>
    </SafeAreaProvider>
  );
}