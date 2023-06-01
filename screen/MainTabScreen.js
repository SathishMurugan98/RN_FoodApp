import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// import Icon from 'react-native-vector-icons/Ionicons';
// import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
// import IconAwesome from 'react-native-vector-icons/FontAwesome';

import {Icon} from 'native-base';
import HomeScreen from '../screen/HomeScreen';
import CardsList from '../components/CardsList';
import DetailScreen from '../screen/DetailScreen';

import DonateScreen from '../screen/DonateScreen';
import DonateScreenImages from '../screen/donate/DonateScreenImages';
import DonateScreenPayment from '../screen/donate/DonateScreenPayment';

import ProScreen from '../screen/ProScreen';
import ProPayment from '../screen/pro/ProPayment';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DonateStack = createStackNavigator();
const ProStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator initialRouteName="Home" headerMode={false}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="CardsList" component={CardsList} />
    <HomeStack.Screen name="Detail" component={DetailScreen} />
  </HomeStack.Navigator>
);

const ProStackScreen = ({navigation}) => (
  <ProStack.Navigator initialRouteName="ProScreen" headerMode={false}>
    <ProStack.Screen name="ProScreen" component={ProScreen} />
    <ProStack.Screen name="ProPayment" component={ProPayment} />
  </ProStack.Navigator>
);

const DonateStackScreen = ({navigation}) => (
  <DonateStack.Navigator initialRouteName="DonateScreen" headerMode={false}>
    <DonateStack.Screen name="DonateScreen" component={DonateScreen} />
    <DonateStack.Screen
      name="DonateScreenImages"
      component={DonateScreenImages}
    />
    <DonateStack.Screen
      name="DonateScreenPayment"
      component={DonateScreenPayment}
    />
  </DonateStack.Navigator>
);

const MainTabScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="#758283"
      barStyle={{backgroundColor: '#FFF'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        // barStyle={{backgroundColor: 'blue'}}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" style={{fontSize: 25}} type="Ionicons" />
          ),
        }}
      />
      <Tab.Screen
        name="ProScreen"
        component={ProStackScreen}
        options={{
          tabBarLabel: 'Pro',
          tabBarIcon: ({color}) => (
            <Icon
              name="diamond"
              style={{fontSize: 22, color: {color}}}
              type="FontAwesome"
            />
          ),
        }}
      />
      <Tab.Screen
        name="DonateScreen"
        component={DonateStackScreen}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color}) => (
            <Icon
              name="hand-heart"
              style={{fontSize: 25}}
              type="MaterialCommunityIcons"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
