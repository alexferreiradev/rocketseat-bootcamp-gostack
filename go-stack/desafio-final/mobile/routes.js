import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import Encomenda from './src/pages/Encomenda';
import User from './src/pages/User';

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
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: '' }}
                />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                    name="Encomenda"
                    component={Encomenda}
                    initialParams={{ encomenda: 'Encomendas' }}
                />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
