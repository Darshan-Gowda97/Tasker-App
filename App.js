/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Component  }  from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { material } from 'react-native-typography';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './Screen/FirstPage';
import SecondPage from './Screen/SecondPage';
// import ModalScreen from './Screen/Modal';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

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
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
          style={{
            width: 25,
            height: 45,
            marginLeft: 15
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

// function ModalScreen() {

//   const [modalVisible, setModalVisible] = useState(true);

//   return (
//     <View style={styles.centeredView}>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.");
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>

//             <TouchableHighlight
//               style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
//               onPress={() => setModalVisible(!modalVisible)}

//             >

//               <Text style={styles.textStyle}>Hide Modal</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </Modal>

//       <TouchableHighlight
//         style={styles.openButton}
//         onPress={() => alert("Hi")}
//       >
//         <Text style={styles.textStyle}>Show Modal</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };



function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Taskerr', //Set Header Title
          headerLeft: () =>
            <NavigationDrawerStructure
              navigationProps={navigation}
            />,
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
            <TouchableOpacity onPress={() => navigation.navigate("SecondPage")}>
              <FontAwesome style={styles.Icon1} name='bell' size={25} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const secondScreenStack = ({ navigation }) => {

  

  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () =>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
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
           <FontAwesome style={styles.Icon1} name='plus' size={25} />
          
          </TouchableOpacity> 
        ),

      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'To-Do', //Set Header Title

        }} />
    </Stack.Navigator>
  );
}

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
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'To First page' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'To Second page' }}
          component={secondScreenStack} />
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
    marginRight: 15
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






// const timeToString = (time) => {
//   const date = new Date(time);
//   return date.toISOString().split('T')[0];

// };

//  const App: () => React$Node = () => {


//   const [items, setItems] = useState({});

//   const  loadItems = (day) => {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);
//         if (!items[strTime]) {
//           items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(items).forEach(key => {
//         newItems[key] = items[key];
//       });

//       setItems(newItems);
//     }, 1000);
//   };

//   const renderItem = (item) =>{

//     return(

//       <TouchableOpacity style={{marginRight:10,marginTop:17}}>
//         <Card>
//           <Card.Content>
//             <View style={styles.card} >
//             <Text style={material.caption}>{item.name}</Text>
//               {/* <Typography>{item.name}</Typography> */}
//               <Avatar.Text label="D"/> 
//             </View>
//           </Card.Content>
//         </Card>
//       </TouchableOpacity>
//     )

//   } 



//   return (
//    <>

//        {/* <StatusBar barStyle="Hidden" />  */}

//        <View style={styles.body}>

//         <Text style={styles.Text1}>Taskerr</Text>
//        <FontAwesome  style={styles.Icon1}  name = 'bell' size = {22} REGULAR/> 
//        <FontAwesome  style={styles.Icon2} name='align-justify' size={22} Regular/> 

//          </View>


//          <View style={styles.agenda}>
//          <Agenda

//            items={items}
//            loadItemsForMonth={loadItems}
//            selected={'2021-01-24'}
//            renderItem={renderItem}
//           />

//            </View> 

//            <MyDrawer/>





//     </>
//   );


//   };


//   scrollView: {
//     backgroundColor: 'azure',
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     color: 'lightgray',
//     height: 30,
//     flexDirection: 'row', 
//     paddingRight: 10,
//     paddingLeft: 10,

//   },
//   agenda:{
//     flex:1,
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   Text1:{
//     color: '#494f4f',
//     fontSize: 20,
//     fontFamily:'monospace',
//     padding: 4,
//     fontWeight: 'bold',
//     paddingLeft: 10,
//     // marginRight:10,
//     // marginTop:17,

//   },
//   Icon1: {
//     color : '#fff',
//     padding: 4,
//     paddingLeft: 210,
//   },
//   Icon2: {
//     color: '#6c7272',
//     padding: 4,
//     paddingLeft: 30,
//   },
//   sectionTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'aqua',
//   },
//   card:{
//     flexDirection : 'row',
//     justifyContent : 'space-between',
//     alignItems : 'center',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.aqua,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 30,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

//  export default App;
