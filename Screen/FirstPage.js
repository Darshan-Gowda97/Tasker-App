import * as React from 'react';
import {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {material} from 'react-native-typography';
// import { NavigationContainer } from '@react-navigation/native';

const FirstPage = ({navigation}) => {
  const [items, setItems] = useState({});

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });

      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View style={styles.card}>
              <Text style={material.caption}>{item.name}</Text>
              {/* <Typography>{item.name}</Typography> */}
              <Avatar.Text label="D" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.agenda}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2021-01-24'}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'azure',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    color: 'lightgray',
    height: 30,
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
  },
  agenda: {
    flex: 1,
  },
  Text1: {
    color: '#494f4f',
    fontSize: 20,
    fontFamily: 'monospace',
    padding: 4,
    fontWeight: 'bold',
    paddingLeft: 10,
    // marginRight:10,
    // marginTop:17,
  },
  Icon1: {
    color: '#6c7272',
    padding: 4,
    paddingLeft: 210,
  },
  Icon2: {
    color: '#6c7272',
    padding: 4,
    paddingLeft: 30,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'aqua',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.aqua,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 30,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default FirstPage;
