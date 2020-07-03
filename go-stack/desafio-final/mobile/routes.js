import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import Encomenda from './src/pages/Encomenda';
import ConfirmarEntrega from './src/pages/ConfirmarEntrega';
import Problema from './src/pages/Problema';
import InformarProblema from './src/pages/InformarProblema';
import Perfil from './src/pages/Perfil';

function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen
          name="Encomenda"
          component={Encomenda}
          initialParams={{ encomenda: 'Encomendas' }}
        />
        <Stack.Screen name="ConfirmarEntrega" component={ConfirmarEntrega} />
        <Stack.Screen name="Problema" component={Problema} />
        <Stack.Screen name="InformarProblema" component={InformarProblema} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
