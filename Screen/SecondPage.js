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
import ModalScreen from './Modal';
import CheckBox from '@react-native-community/checkbox';
import Dialog from 'react-native-popup-dialog';

const SecondPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.CategoryContainer}>
        <Text style={styles.CategoryStyle}>CATEGORY:</Text>
        <View style={styles.TaskList}>
          <Text style={styles.SubcategoryStyle}>TO-DO</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={styles.CheckBoxText}>Hi</Text>
          </View>
          <Text style={styles.SubcategoryStyle}>COMPLETED</Text>
          <View style={styles.checkboxContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <Text style={styles.CheckBoxText}>Hello</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add Task</Text>
      </TouchableOpacity>
      <ModalScreen open={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  openButton: {
    backgroundColor: '#ff8200',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 660,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  CategoryStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    marginBottom: 1,
  },
  SubcategoryStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 1,
  },
  CategoryContainer: {
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.5)',
    // borderColor: '#20232a',
    borderRadius: 15,
  },
  TaskList: {
    flexDirection: 'column',
    marginTop: 3,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    marginLeft: 40,
  },
  CheckBoxText: {
    paddingLeft: 5,
    marginTop: 5,
    fontSize: 16,
  },
});
export default SecondPage;
