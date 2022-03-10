import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Main from './Main';



export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <StatusBar style="auto" />
      <Main />
    </SafeAreaView>

  )
}



