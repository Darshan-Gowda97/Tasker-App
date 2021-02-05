/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {material} from 'react-native-typography';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './Screen/FirstPage';
import SecondPage from './Screen/SecondPage';
// import ModalScreen from './Screen/Modal';
import Dialog, {DialogContent} from 'react-native-popup-dialog';

// import { Typography} from '@material-ui/core';

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{
            width: 25,
            height: 45,
            marginLeft: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Taskerr', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#ff8200', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
            fontSize: 30,
            marginLeft: 80,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
              <FontAwesome style={styles.Icon1} name="bell" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const secondScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#ff8200', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          fontSize: 30,
          marginLeft: 90,
        },
        headerRight: () => (
          <TouchableOpacity o>
            <FontAwesome style={styles.Icon1} name="plus" size={25} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'To-Do', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

// function ModalStackScreen() {
//   return (
//     <Stack.Navigator mode="modal">
//       <Stack.Screen name="MyModal" component={ModalScreen} options={{ headerShown: false }}/>
//     </Stack.Navigator>
//   );
// }

function App() {
  // class App extends Component{
  //     render(){
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{drawerLabel: 'To First page'}}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{drawerLabel: 'To Second page'}}
          component={secondScreenStack}
        />
        {/* <Drawer.Screen
          name="ModalScreen"
          options={{ drawerLabel: 'To Add To-Do' }}
          component={ModalStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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
