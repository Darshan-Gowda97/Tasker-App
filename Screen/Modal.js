import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import {Children} from 'react';
//  import { NavigationContainer } from '@react-navigation/native';

const ModalScreen = ({open, onClose}) => {
  if (!open) return null;

  const [category, setCategory] = useState('');
  const [task, setTask] = useState('');
  const [Response, setResponse] = useState(false);

  useEffect(() => {
    if (Response) {
      setTimeout(() => {
        setResponse(false);
        setCategory('');
        setTask('');
      }, 5000);
    }
  }, [Response]);

  const sendRequest = async () => {
    const id = parseInt(category);
    const name = task;
    const Data1 = {name};
    const Data = JSON.stringify(Data1);
    console.log(Data);
    try {
      const response = await axios.post(
        'http://192.168.43.95:5000//add_category',
        Data1,
      );
      console.log(response);
      console.log(response.data);
      if (response.status == 200) {
        setResponse(true);
      }
      return response;
    } catch (error) {
      console.log('error', error);
    }
  };

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>STAY ACTIVE!!!</Text>

          <TextInput
            style={styles.Input}
            placeholder="  Add Category Name"
            value={task}
            onChangeText={(val) => setTask(val)}
          />
          <DismissKeyboard>
            <TextInput
              style={styles.Input}
              value={category}
              keyboardType="numeric"
              placeholder="  Add Category ID"
              onChangeText={(val) => setCategory(val)}
            />
          </DismissKeyboard>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#A5A0F3'}}
              onPress={sendRequest}>
              <Text style={styles.textStyle}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#A5A0F3'}}
              onPress={onClose}>
              <Text style={styles.textStyle}>Go Back</Text>
            </TouchableOpacity>
          </View>

          {Response && (
            <Text style={styles.Responsetext}>Category Added SuccessFully</Text>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  modalView: {
    // position: 'absolute',
    height: 400,
    width: 250,
    margin: 30,
    overlayColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 200,
    zIndex: 2,
  },
  //#F194FF
  //#f8b43f
  openButton: {
    height: 50,
    width: 100,
    backgroundColor: '#A5A0F3',
    borderRadius: 30,
    padding: 20,
    marginTop: 20,

    margin: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  Responsetext: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    marginTop: 13,
  },
  Input: {
    borderWidth: 3,
    borderRadius: 20,

    margin: 10,
    borderColor: 'rgba(165,160,243,0.4)',
    width: 200,
    alignItems: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 22,
    fontFamily: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
});

export default ModalScreen;
