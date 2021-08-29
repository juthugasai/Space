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
import MapView,{Marker} from 'react-native-maps'
//import { timesSeries } from 'async';

//import firebase from 'firebase';
//import db from '../config';

export default class ISS extends React.Component {

  constructor(props){
    super(props)

    this.state={
      location:{}
    }
  }

  getISSData=()=>{
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
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
    //Checking the key names array for its length
    if(Object.keys(this.state.location).length ===0){
      return(
        <View
          style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Text>Loading..</Text>
        </View>
      )
    }
    else{
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.safe} />
          <ImageBackground
            source={require('../assets/bg.png')}
            style={styles.bg}>

            <View style = {styles.titleContainer}>
              <Text style={styles.titleText}>ISS Location</Text>
            </View>
          <View style = {{
            flex: 0.7
          }}>
            <MapView style = {styles.map}
            region={{
              latitude:this.state.location.latitude, 
              longitude:this.state.location.longitude,
              latitudeDelta:100,
              longitudeDelta:100
            }}>
              <Marker
              coordinate={{ 
                latitude:this.state.location.latitude, 
                longitude:this.state.location.longitude
                }}>
                  <Image style = {{height: 50, width: 50}} source={require("../assets/iss_icon.png")}/>
                </Marker>
            </MapView>
            
            </View>        


            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
              <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
              <Text style={styles.infoText}>Altitude (KM): {this.state.location.altitude}</Text>
              <Text style={styles.infoText}>Velocity (KM/H): {this.state.location.velocity}</Text>


            </View>
          </ImageBackground>
        </View>
      );
    }

    
    
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
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white"
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30
  },
  infoText: {
      fontSize: 15,
      color: "black",
      fontWeight: "bold"
  },
  map: {
    width: "100%",
    height: "100%"
},
})
