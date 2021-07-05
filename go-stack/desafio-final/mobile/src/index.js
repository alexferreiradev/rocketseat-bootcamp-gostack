import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import '../config/ReactotronConfig';
import Routes from '../routes';
import App from './App';
import { store, persistor } from './store/index';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <App />
      </PersistGate>
    </Provider>
  );
}
