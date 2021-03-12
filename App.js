/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {material} from 'react-native-typography';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstPage from './Screen/FirstPage';
import SecondPage from './Screen/SecondPage';
import TabBar from './Components/TabBar';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        initialParams={{icon: 'home-outline', size: 25}}
      />
      <Tab.Screen
        name="Notifications"
        component={FirstPage}
        initialParams={{icon: 'plus-circle', size: 45}}
      />
      <Tab.Screen
        name="Profile"
        component={FirstPage}
        initialParams={{icon: 'account-circle-outline', size: 25}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="FirstPage"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  Icon1: {
    color: '#fff',
    marginRight: 15,
  },
  body: {
    color: 'lightgray',
    height: 30,
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default App;
