import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-big-calendar';

const Events = () => {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2022, 4, 4, 16, 0),
      end: new Date(2022, 4, 4, 14, 30),
    },
    {
      title: 'Coffee break',
      start: new Date(2022, 1, 11, 15, 45),
      end: new Date(2022, 1, 11, 16, 30),
    },
  ]
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons
            name="view-dashboard-edit-outline"
            color="black"
            size={25}
          />
          <Text>Search</Text>
        </View>
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 20}}>
          <Image source={require('../assets/card.png')} />
        </View>
        <View>
          <Image source={require('../assets/card1.png')} />
        </View>
      </View>
      
      <Text style={styles.header}>Webinars Lined Up:</Text>
      <Calendar events={events} height={600} />
      </View>
    </ScrollView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#AEAEAE',
    borderRadius: 50,
    marginTop: 10,
    width: 350,
    marginLeft: 5,
  },
  header: {
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 5,
    color: 'black',
    marginBottom: 10,
  },
});
