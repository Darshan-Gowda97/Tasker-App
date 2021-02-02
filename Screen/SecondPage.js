import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import ModalScreen from './Modal';
//  import { NavigationContainer } from '@react-navigation/native';
import Dialog from 'react-native-popup-dialog';




const SecondPage = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.screen}>
      
      {/* <Button onPress={() => navigation.goBack()} title="Back to FirstPage" />  */}
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Task</Text>
      </TouchableOpacity>
      <ModalScreen open={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
      paddingLeft : 10,
      paddingRight : 10,
      marginTop : 740,
  },
  openButton: {
    backgroundColor: "#ff8200",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
export default SecondPage;