import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import Encomenda from './src/pages/Encomenda';
import ConfirmarEntrega from './src/pages/ConfirmarEntrega';
import Problema from './src/pages/Problema';
import InformarProblema from './src/pages/InformarProblema';
import Perfil from './src/pages/Perfil';

export default (userLogado) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        App: createBottomTabNavigator(
          {
            EncomendaStack: {
              screen: createStackNavigator(
                {
                  Dashboard: {
                    screen: Dashboard,
                  },
                  Encomenda: {
                    screen: Encomenda,
                  },
                  ConfirmarEntrega: {
                    screen: ConfirmarEntrega,
                  },
                  Problema: {
                    screen: Problema,
                  },
                  InformarProblema: {
                    screen: InformarProblema,
                  },
                },
                {
                  initialRouteName: 'Dashboard',
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: <Icon name="event" size={20} color="#fff" />,
              },
            },
            Perfil,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveBackgroundColor: 'rgba(71,59,121,0.1)',
              style: {
                backgroundColor: '#7159c1',
              },
            },
          }
        ),
      },
      {
        initialRouteName: userLogado ? 'App' : 'Login',
      }
    )
  );
// <Stack.Navigator
//   initialRouteName="Login"
//   screenOptions={{
//     headerTitleAlign: 'center',
//     headerBackTitleVisible: false,
//     headerStyle: {
//       backgroundColor: '7159c1',
//     },
//     headerTintColor: 'FFF',
//   }}
// >
//   <Stack.Screen name="Login" component={Login} options={{ title: '' }} />
//   <Stack.Screen
//     name="Dashboard"
//     component={TabsComponents}
//     options={{ title: '' }}
//   />
//   <Stack.Screen
//     name="Encomenda"
//     component={Encomenda}
//     initialParams={{ encomenda: 'Encomendas' }}
//   />
//   <Stack.Screen name="ConfirmarEntrega" component={ConfirmarEntrega} />
//   <Stack.Screen name="Problema" component={Problema} />
//   <Stack.Screen name="InformarProblema" component={InformarProblema} />
// </Stack.Navigator>
// );

// function TabsComponents() {
//   // const Bottom = createMaterialBottomTabNavigator();

//   const theme = {
//     ...DefaultTheme,
//     roundness: 2,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: 'fff',
//       accent: '7D40E7',
//     },
//   };

//   return (
//     <Bottom.Navigator
//       theme={theme}
//       activeColor="7D40E7"
//       inactiveColor="999999"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           const icons = {
//             Dashboard: 'reorder',
//             Perfil: 'account-circle',
//           };

//           return <Icon name={icons[route.name]} color={color} size={size} />;
//         },
//       })}
//     >
//       <Bottom.Screen
//         name="Dashboard"
//         component={Dashboard}
//         size={24}
//         options={{ tabBarLabel: 'Entregas' }}
//       />
//       <Bottom.Screen
//         name="Perfil"
//         component={Perfil}
//         options={{ tabBarLabel: 'Meu Perfil' }}
//       />
//     </Bottom.Navigator>
//   );
// }
