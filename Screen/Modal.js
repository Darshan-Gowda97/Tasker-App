import * as React from 'react';
import {useState} from 'react';
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
} from 'react-native';
import axios from 'axios';
//  import { NavigationContainer } from '@react-navigation/native';

const ModalScreen = ({open, onClose}) => {
  // const [modalVisible, setModalVisible] = useState(true);
  if (!open) return null;

  const category1 = 'abcd';
  const [category, setCategory] = useState(1);
  const [task, setTask] = useState('');

  const sendRequest = ({category, task}) => {
    const Data = {
      id: category,
      name: task,
    };
    console.log(Data);
    return Data;
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        // visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>STAY ACTIVE!!!</Text>
            <TextInput
              style={styles.Input}
              value={category}
              keyboardType="numeric"
              placeholder="  Add Category ID"
              onChangeText={(val) => setCategory(val)}
            />
            <TextInput
              style={styles.Input}
              placeholder="  Add Task"
              value={task}
              onChangeText={(val) => setTask(val)}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#f8b43f'}}
                onPress={async () => {
                  const id = parseInt(category);
                  const name = task;
                  const Data1 = {name, id};
                  console.log(Data1);
                  const Data = JSON.stringify(Data1);
                  console.log(Data);
                  try {
                    // fetch data from a url endpoint

                    const data = await axios.get(
                      'http://192.168.43.95/fetch_category',
                    );
                    console.log(data);
                    return data;
                  } catch (error) {
                    console.log('error', error);
                    // appropriately handle the error
                  }
                  // await axios
                  //   .post('/add_todo', Data)
                  //   .then(function (response) {
                  //     console.log(response);
                  //   })
                  //   .catch(function (error) {
                  //     console.log('this is the ' + error);
                  //   });

                  // fetch('add_todo', {
                  //   method: 'POST',
                  //   body: JSON.stringify(Data1),
                  //   headers: {
                  //     'Content-type': 'application/json; charset=UTF-8',
                  //   },
                  // })
                  //   .then((response) => response.json())
                  //   .then((json) => console.log(json))
                  //   .catch(function (error) {
                  //     console.log(
                  //       'There has been a problem with your fetch operation: ' +
                  //         error.message,
                  //     );
                  //   });
                }}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{...styles.openButton, backgroundColor: '#f8b43f'}}
                onPress={onClose}>
                <Text style={styles.textStyle}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    zIndex: 2,
  },
  modalView: {
    height: 400,
    width: 250,
    margin: 30,
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
    elevation: 5,
    zIndex: 2,
  },
  openButton: {
    height: 50,
    width: 100,
    backgroundColor: '#F194FF',
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
  Input: {
    borderWidth: 3,
    borderRadius: 20,

    margin: 10,
    borderColor: 'rgba(248,180,63,0.4)',
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
