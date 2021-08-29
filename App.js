import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import ISS from './screens/ISS';
import Meteor from './screens/Meteor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown:false}}
      >
      
        <Stack.Screen 
        name="Home" 
        component={Home} />

        <Stack.Screen 
        name="ISS" 
        component={ISS} />

        <Stack.Screen
        name="Meteor" 
        component={Meteor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


