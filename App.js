import React from 'react';
import Product from './src/screen/Product';
import { Provider } from 'react-redux';
import store from './src/store';
import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
