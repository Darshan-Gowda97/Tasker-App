import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Category = ({onPress, text, task}) => {
  let color = '';
  let icon = '';
  if (text == 'Personal') {
    color = 'blue';
    icon = 'account-outline';
  } else if (text == 'Meeting') {
    color = 'blue';
    icon = 'account-supervisor';
  } else if (text == 'Create Board') {
    color = 'green';
    icon = 'plus-circle-outline';
  } else if (text == 'Private') {
    color = 'green';
    icon = 'lock-open-variant-outline';
  } else if (text == 'Events') {
    color = 'red';
    icon = 'calendar-range-outline';
  } else {
    color = 'red';
    icon = 'gift-outline';
  }

  return (
    <TouchableOpacity style={styles.Box} onPress={onPress}>
      <View style={styles.innnerBox}>
        <MaterialCommunityIcons name={icon} size={35} color={color} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.task}>{task} Task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 160,
    height: 160,
    marginTop: 10,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  innnerBox: {
    width: '35%',
    height: '35%',
    backgroundColor: '#eee',
    borderRadius: 15,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginTop: 13,
  },
  task: {
    fontFamily: 'Poppins-Thin',
    fontSize: 15,
  },
});

export default Category;
