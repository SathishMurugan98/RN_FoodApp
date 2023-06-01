/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootScreen from './screen/RootScreen';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RootScreen" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
