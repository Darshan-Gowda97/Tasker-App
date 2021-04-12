import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Task from '../Components/Task';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TaskModal from '../Components/TaskModal';
import CheckBox from '@react-native-community/checkbox';

const SecondPage = ({navigation}) => {
  const [isTaskModalVisible, setTaskModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(toggleCheckBox);
  return (
    <View>
      <View style={styles.HeaderBar}>
        <View style={styles.Icons}>
          <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
            <MaterialCommunityIcons name="less-than" size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="view-headline"
              size={35}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.Text1}>Today</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 45,
              paddingRight: 40,
            }}>
            <Text style={styles.Text2}>Yesterday</Text>
            <MaterialCommunityIcons
              name="circle-medium"
              size={20}
              color="#fff"
            />
            <Text style={styles.Text2}>Tommorow</Text>
          </View>
        </View>
      </View>

      <View style={styles.TaskList}>
        <Task
          toggleValue={toggleCheckBox}
          setToggle={() => setToggleCheckBox(!toggleCheckBox)}
        />
        <Task
          toggleValue={toggleCheckBox}
          setToggle={() => setToggleCheckBox(!toggleCheckBox)}
        />
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setTaskModalVisible(true)}>
          <Text style={styles.textStyle}>Add new task</Text>
        </TouchableOpacity>
        <TaskModal
          open={isTaskModalVisible}
          onClose={() => setTaskModalVisible(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderBar: {
    backgroundColor: '#2f88f0',
    width: '100%',
    height: 140,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 100,
  },
  Icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  Text1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 28,
    color: '#fff',
    marginBottom: 0,
  },
  Text2: {
    fontFamily: 'Poppins-Thin',
    fontSize: 15,
    color: '#fff',
    marginBottom: 0,
  },
  TaskList: {
    marginTop: 30,
  },
  openButton: {
    backgroundColor: '#2f88f0',
    width: '70%',
    height: 50,
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 60,
    elevation: 10,
    //marginTop: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default SecondPage;
