import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NetworkProvider} from './src/context/NetworkContext';

export default function App() {
  return (
    <NetworkProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NetworkProvider>
  );
}
