import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme } from 'react-native-paper';

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
        <Stack.Screen
          name="Encomenda"
          component={Encomenda}
          initialParams={{ encomenda: 'Encomendas' }}
        />
        <Stack.Screen name="ConfirmarEntrega" component={ConfirmarEntrega} />
        <Stack.Screen name="Problema" component={Problema} />
        <Stack.Screen name="InformarProblema" component={InformarProblema} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsComponents() {
  const Bottom = createMaterialBottomTabNavigator();

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
      accent: '#7D40E7',
    },
  };

  return (
    <Bottom.Navigator
      theme={theme}
      activeColor="#7D40E7"
      inactiveColor="#999999"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Dashboard: 'reorder',
            Perfil: 'account-circle',
          };

          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}
    >
      <Bottom.Screen
        name="Dashboard"
        component={Dashboard}
        size={24}
        options={{ tabBarLabel: 'Entregas' }}
      />
      <Bottom.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarLabel: 'Meu Perfil' }}
      />
    </Bottom.Navigator>
  );
}

export default Routes;
