import {NavigationContainer} from '@react-navigation/native'
import Stack from './src/screens/index'
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

export default function App() {
  const [loaded] = useFonts({
    AileronH: require('./assets/font/Aileron-Heavy.otf'),
    AileronR: require('./assets/font/Aileron-Regular.otf'),
  });

  if (!loaded) {
      return null;
  }
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  );
}
