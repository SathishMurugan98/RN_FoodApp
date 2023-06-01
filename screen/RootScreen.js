/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProScreen from './ProScreen';
import DonateScreen from './DonateScreen';
import MainTabScreen from './MainTabScreen';

const Drawer = createDrawerNavigator();

const RootScreen = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainTabScreen} />
      <Drawer.Screen name="ProScreen" component={ProScreen} />
      <Drawer.Screen name="DonateScreen" component={DonateScreen} />
    </Drawer.Navigator>
  );
};

export default RootScreen;
