import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert
} from 'react-native';
import axios from "axios"
//import firebase from 'firebase';
//import db from '../config';

export default class ISS extends React.Component {

  constructor(){
    super()

    this.state={
      location:{}
    }
  }

  getISSData=()=>{
    axios.get("")
    .then((response)=>{
      this.setState({
        location:response.data
      })
    })
    .catch((error)=>{
      Alert.alert(error.message)
    })
  }

  componentDidMount(){
    this.getISSData()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.safe} />
        <ImageBackground
          source={require('../assets/meteor_bg1.png')}
          style={styles.bg}></ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  safe: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
})