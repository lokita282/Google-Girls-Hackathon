import React from 'react';
import {View, Text, ScrollView, StyleSheet,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import YouTube from 'react-native-youtube';

const Elearning = () => {
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
        <Text style={styles.header}>Videos :</Text>
        <YouTube
          videoId="05f70foq-ek" // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={false} // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{alignSelf: 'center', height: 200,width:300}}
        />
        <Text style={styles.header}>Podcasts :</Text>
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 70}}>
          <Image style={{alignSelf:'center'}} source={require('../assets/bank.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Netbanking</Text>
        </View>
        <View>
          <Image style={{alignSelf:'center'}} source={require('../assets/heritage.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Indian Heritage</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{marginRight: 70}}>
          <Image style={{alignSelf:'center'}} source={require('../assets/govt.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Government</Text>
        </View>
        <View>
          <Image style={{alignSelf:'center'}} source={require('../assets/fraud.png')} />
          <Text style={{textAlign: 'center', margin: 10}}>Fraud</Text>
        </View>
      </View>
      <Text style={styles.header}>Books :</Text>
      </View>
    </ScrollView>
  );
};

export default Elearning;
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
