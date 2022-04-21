import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Dashboard = () => {
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
      <Text style={styles.header}>Daily Tasks :</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor:'#AEAEAE',
          borderWidth:2,
          marginLeft:5,
          width:350,
          borderRadius:10,
          marginBottom:7,
        }}>
        <View>
          <Text style={{marginBottom: 20, color: 'black', fontSize: 16}}>
            How to connect to wifi?
          </Text>
          <Text style={{color: '#1A73E8', fontSize: 14}}>Learn Now </Text>
        </View>
        <Image style={{width:70,height:70,marginLeft:20}} source={require('../assets/wifi.png')} />
      </View>

      <Text style={styles.header}>Technical Assistance :</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 70}}>
          <Image source={require('../assets/food.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Food</Text>
        </View>
        <View>
          <Image source={require('../assets/travel.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Travel</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 70}}>
          <Image source={require('../assets/grocery.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Grocery</Text>
        </View>
        <View>
          <Image source={require('../assets/medicines.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Medicines</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 70}}>
          <Image source={require('../assets/doctor.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Consultation</Text>
        </View>
        <View>
          <Image source={require('../assets/connect.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Connect</Text>
        </View>
      </View>
    </View></ScrollView>
  );
};

export default Dashboard;
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
