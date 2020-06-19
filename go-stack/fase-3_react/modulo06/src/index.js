import React from 'react';
import 'react-native-gesture-handler';

import '../config/ReactotronConfig';
import Routes from '../routes';

export default function App() {
  console.tron.log('App iniciado');

  return <Routes />;
}
