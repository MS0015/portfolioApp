import React from 'react';
import { NativeBaseProvider } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { theme } from './src/asset/theme';
import MainScene from './src/routes/MainScene';
import store from './src/reducer/store';
import AlertComp from './src/comp/AlertComp';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider
          theme={theme}
          config={{
            suppressColorAccessibilityWarning: true,
            dependencies: {
              'linear-gradient': LinearGradient,
            },
          }}
        >
          <MainScene />

          <AlertComp />
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
