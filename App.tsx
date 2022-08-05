import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
    return <Home />
  } else {
    return null
  }
}

