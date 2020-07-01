import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/Main';
import User from './src/pages/User';

function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          initialParams={{ user: 'Usuários' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
