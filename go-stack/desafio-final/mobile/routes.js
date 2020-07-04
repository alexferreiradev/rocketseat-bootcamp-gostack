import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
        <Stack.Screen
          name="Dashboard"
          component={TabsComponents}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsComponents() {
  const Bottom = createMaterialBottomTabNavigator();

  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Dashboard" component={Dashboard} />
      <Bottom.Screen
        name="Encomenda"
        component={Encomenda}
        options={{ tabBarColor: '#ccc', tabBarLabel: 'Teste' }}
        initialParams={{ encomenda: 'Encomendas' }}
      />
      <Bottom.Screen name="ConfirmarEntrega" component={ConfirmarEntrega} />
      <Bottom.Screen name="Problema" component={Problema} />
      <Bottom.Screen name="InformarProblema" component={InformarProblema} />
      <Bottom.Screen name="Perfil" component={Perfil} />
    </Bottom.Navigator>
  );
}

export default Routes;
