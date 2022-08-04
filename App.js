import React from 'react';
import {Appearance} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistedStore} from './src/store';
import Navigation from './src/navigation/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from './src/screen/SplashScreen';

const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'light') {
  EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $PRIMARY: '#5E454B',
    $TEXT: '#5E454B',
    $BG_COLOR: '#DFD3C3',
    $CARD_BACKGROUND: '#C7B198',
    $PRIMARY_LIGHT: '#AA7070',
    $DARK: '#000000',
    $DARK_LIGHT: '#333',
    $WHITE: '#FFFFFF',
    $GREY: '#dcdcdc',
    $ERROR: '#ff0000',
  });
} else {
  EStyleSheet.build({
    // always call EStyleSheet.build() even if you don't use global variables!
    $PRIMARY: '#5C3D2E',
    $TEXT: '#834C69',
    $BG_COLOR: '#362222',
    $CARD_BACKGROUND: '#F5EEDC',
    $PRIMARY_LIGHT: '#C0D8C0',
    $DARK: '#000000',
    $AUTH: '#726A95',
    $DARK_LIGHT: '#333',
    $WHITE: '#FFFFFF',
    $GREY: '#dcdcdc',
    $ERROR: '#ff0000',
  });
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<SplashScreen />}
        persistor={persistedStore}
        onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
