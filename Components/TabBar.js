import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import Tab from './Tab';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? 'red' : 'white';

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };
  //706EF2 AFBCFD
  return (
    <LinearGradient
      colors={['#4236F2', '#A5A0F3', '#4236F2']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            size={route.params.size}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
      {/* <View style={styles.wrapper}></View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    width: 400,
    height: 70,
    //elevation: 2,
  },
});

export default TabBar;
