import * as React from 'react';
import {useState, useEffect} from 'react';
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
import Snackbar from 'react-native-snackbar';
import axios from 'axios';

const FirstPage = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [CatgArray, setCatgArray] = useState([]);

  const SnackBar = ({msg}) => {
    Snackbar.show({
      text: msg,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#A5A0F3',
      textColor: 'white',
    });
  };

  const GetCategory = async () => {
    try {
      const response = await axios.get(
        'http://192.168.43.95:5000/fetch_category',
      );
      console.log(response.data.data);
      console.log(response.data.status_code);
      setCatgArray(response.data.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    GetCategory();
  }, [isModalVisible]);

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

        {console.log(CatgArray.length)}

        {CatgArray.length
          ? CatgArray.map((prop) => (
              <Category key={prop.ID} text={prop.CATEGORY} task={10} />
            ))
          : null}
        <Category text={'Create Board'} onPress={() => setModalVisible(true)} />
        <ModalScreen
          open={isModalVisible}
          onClose={() => setModalVisible(false)}
          snackMsg={(msg) => SnackBar({msg})}
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
