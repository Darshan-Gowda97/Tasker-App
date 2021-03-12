import * as React from 'react';
import {useState} from 'react';
import ModalScreen from './Modal';

import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import Category from './../Components/Category';

const FirstPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={['#4236F2', '#A5A0F3', '#4236F2']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}>
      <View style={styles.container}>
        <Text style={styles.Text1}>Board</Text>
        <Avatar.Text
          size={40}
          label="D"
          style={styles.avatar}
          labelStyle={styles.label}
        />
      </View>

      <View style={styles.ScrollView}>
        <Category
          color={'blue'}
          icon={'account-outline'}
          text={'Personal'}
          task={10}
          onPress={() => navigation.navigate('SecondPage')}
        />

        <Category color={'red'} icon={'gift-outline'} text={'Work'} task={15} />

        <Category
          color={'green'}
          icon={'lock-open-variant-outline'}
          text={'Private'}
          task={5}
        />

        <Category
          color={'blue'}
          icon={'account-supervisor'}
          text={'Meeting'}
          task={2}
        />

        <Category
          color={'red'}
          icon={'calendar-range-outline'}
          text={'Events'}
          task={4}
        />

        <Category
          color={'green'}
          icon={'plus-circle-outline'}
          text={'Create Board'}
          task={2}
          onPress={() => setModalVisible(true)}
        />
        <ModalScreen
          open={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    color: 'lightgray',
    height: 30,
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
  },
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  Text1: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 246,
  },
  avatar: {
    backgroundColor: '#e1dcee',
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    paddingTop: 5,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  Icon1: {
    color: '#6c7272',
    padding: 10,
    paddingLeft: 210,
  },
  ScrollView: {
    width: '100%',
    height: '86%',
    padding: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  Icon2: {
    color: '#6c7272',
    padding: 4,
    paddingLeft: 30,
  },
});
export default FirstPage;
