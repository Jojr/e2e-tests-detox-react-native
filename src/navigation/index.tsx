import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../scenes/home/';
import { LoginScreen } from '../scenes/login';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Login" component={LoginScreen} />
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
