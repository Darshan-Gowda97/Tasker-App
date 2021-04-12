import React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import TaskCategory from '../Components/TaskCategory';
import axios from 'axios';

const TaskModal = ({open, onClose}) => {
  const [Task, setTask] = useState('');
  const [isImportantOn, setImportant] = useState(true);
  const [isPlannedOn, setPlanned] = useState(false);
  const [CatgArray, setCatgArray] = useState([]);

  const toggleState = () => {
    setImportant(!isImportantOn);
    setPlanned(!isPlannedOn);
  };

  const GetCategory = async () => {
    try {
      const response = await axios.get(
        'http://192.168.43.95:5000/fetch_category',
      );
      console.log(response.data.data);
      setCatgArray(response.data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <Modal
      isVisible={open}
      onSwipeComplete={() => onClose()}
      swipeDirection="down"
      style={styles.modal}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0, 1)'}}>
        <View>
          <TouchableOpacity style={styles.HeaderIcon} onPress={() => onClose()}>
            <MaterialCommunityIcons name="arrow-left" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.HeaderText}>Create</Text>
        </View>
        <View>
          <Text style={styles.HeaderText}>New Task</Text>
        </View>
        <View>
          <TextInput
            style={styles.TaskInput}
            placeholderTextColor={'grey'}
            placeholder="       Task Title"
            value={Task}
            onChangeText={(val) => setTask(val)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.BodyText}>Task Type</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {isImportantOn ? (
            <TouchableOpacity
              style={{...styles.TaskInput1, backgroundColor: '#5ba0f0'}}>
              <Text style={{color: 'white'}}>Important</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.TaskInput1}
              onPress={() => toggleState()}>
              <Text style={{color: 'grey'}}>Important</Text>
            </TouchableOpacity>
          )}
          {isPlannedOn ? (
            <TouchableOpacity
              style={{...styles.TaskInput2, backgroundColor: '#5ba0f0'}}>
              <Text style={{color: 'white'}}>Planned</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.TaskInput2}
              onPress={() => toggleState()}>
              <Text style={{color: 'grey'}}>Planned</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.BodyText}>Choose date & time</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.TaskInput3}>
            <MaterialCommunityIcons
              name="calendar-range-outline"
              size={20}
              color="grey"
              style={{paddingLeft: 15}}
            />
            <Text style={{color: 'grey', paddingLeft: 10}}>Select a date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TaskInput4}>
            <MaterialCommunityIcons
              name="calendar-range-outline"
              size={20}
              color="grey"
              style={{paddingLeft: 15}}
            />
            <Text style={{color: 'grey', paddingLeft: 10}}>Select Time</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.BodyText}>Category</Text>
        </View>
        <View style={styles.Category}>
          <TaskCategory CatgName="Personal" color="#f47373" />
          <TaskCategory CatgName="Event" color="orange" />
          <TaskCategory CatgName="Meetings" color="skyblue" />
          <TaskCategory CatgName="Birthday" color="#1273de" />
          <TaskCategory CatgName="Personal" color="#2ccce4" />
          {CatgArray.length
            ? CatgArray.map((prop) => (
                <TaskCategory key={prop.ID} CatgName={prop.CATEGORY} />
              ))
            : null}
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#7F5BE1', '#9C86DF']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={styles.AddButton}>
            <Text style={styles.ButtonText}>Create Task</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    margin: 0, // This is the important style you need to set
  },
  HeaderIcon: {
    marginTop: 30,
    margin: 20,
    marginBottom: 30,
  },
  HeaderText: {
    color: '#ffff',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
    marginLeft: 30,
    marginBottom: -8,
  },
  TaskInput: {
    backgroundColor: 'rgba(155,155,155,0.4)',
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 42,
    marginBottom: 25,
    width: 350,
    height: 50,
    alignItems: 'center',
  },
  TaskInput1: {
    //backgroundColor: 'rgba(155,155,155,0.4)',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 42,
    marginBottom: 20,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TaskInput2: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 15,
    marginBottom: 20,
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TaskInput3: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 42,
    marginBottom: 20,
    width: 150,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  TaskInput4: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    marginLeft: 15,
    marginBottom: 20,
    width: 150,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  Category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    marginLeft: 42,
  },
  AddButton: {
    marginTop: 40,
    marginLeft: 30,
    width: 350,
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: '#ffff',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  BodyText: {
    color: '#ffff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: 30,
  },
});

export default TaskModal;
