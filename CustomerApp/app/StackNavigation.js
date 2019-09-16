import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Movies from './Movies';
import Add from './AddCustomer';
import Details from './AsyncStorage';
import CustomerList from './CustomerList';

const AppNavigator = createStackNavigator({
    Login:Login,
   	Movies:Movies,
   	Add:Add,
   	Details:Details,
   	CustomerList:CustomerList
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);