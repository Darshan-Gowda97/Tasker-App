import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckBox from '@react-native-community/checkbox';

const Task = ({toggleValue, setToggle}) => {
  const num = 0;
  console.log(num);
  if (num) {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <CheckBox
            disabled={false}
            value={toggleValue}
            onValueChange={setToggle}
            style={{
              transform: [{scaleX: 1.5}, {scaleY: 1.5}],
              borderColor: 'black',
            }}
            tintColors={{true: '#2f88f0', false: 'grey'}}
            //style={styles.checkbox}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <TouchableOpacity style={styles.container1}>
          <BouncyCheckbox
            isChecked
            textColor="#000"
            disableText="true"
            fillColor="#2f88f0"
            size={40}
            onPress={(checked) => console.log('Checked: ', checked)}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 80,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 20,
    elevation: 5,
  },
  container1: {
    width: '90%',
    height: 80,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    // elevation: 5,
  },
  checkbox: {
    width: 50,
    height: 70,
    borderRadius: 20,
  },
});
export default Task;
