import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Movies from './Movies';

const AppNavigator = createStackNavigator({
    Login:Login,
   	Movies:Movies,
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);