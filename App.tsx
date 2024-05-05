import { NativeBaseProvider, StatusBar } from 'native-base';
import Login from './src/Login';
import { THEMES } from './src/styles/themes';
import Routes from './src/Routes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]}/>
      <Routes/>
    </NativeBaseProvider>
    
  );
}

