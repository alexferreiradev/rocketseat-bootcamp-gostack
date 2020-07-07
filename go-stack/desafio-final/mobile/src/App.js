import React from 'react';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import '../config/ReactotronConfig';
import createRoutes from '../routes';

export default function App() {
  const logado = useSelector((state) => state.user.userId);

  const Routes = createRoutes(logado);
  return <Routes />;
}
