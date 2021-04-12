import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TaskCategory = ({CatgName, color}) => {
  return (
    <TouchableOpacity style={{...styles.Box, backgroundColor: color}}>
      <Text style={styles.Text1}>{CatgName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: 100,
    height: 45,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: 'white',
  },
});

export default TaskCategory;
