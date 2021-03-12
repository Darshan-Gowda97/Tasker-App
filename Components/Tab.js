import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = ({color, tab, onPress, icon, size}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={size} color={color} solid />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});

export default Tab;
