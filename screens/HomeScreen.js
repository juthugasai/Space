import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';

export default class SHomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.safe} />
        <ImageBackground source={require('../assets/bg.png')} style={styles.bg}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Space-Tracker</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('ISS');
            }}>
            <Text style={styles.buttonText}>ISS</Text>
            <Text style={styles.know}>{'Know More--->'}</Text>
            <Text style={styles.digit}>1</Text>
            <Image
              source={require('../assets/iss_icon.png')}
              style={styles.img}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Meteor');
            }}>
            <Text style={styles.buttonText}>Meteor</Text>
            <Text style={styles.know}>{'Know More--->'}</Text>
            <Text style={styles.digit}>2</Text>
            <Image
              source={require('../assets/meteor_icon.png')}
              style={styles.img}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    flex: 0.25,
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,

    borderRadius: 30,
    backgroundColor: 'white',
  },

  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'Black',
    marginTop: 75,
    paddingLeft: 30,
  },
  know: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  digit: {
    position: 'absolute',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
    color: 'rgba(183,183,183,0.5)',
  },
  img: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },

  title: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'grey',
  },
  safe: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
});
