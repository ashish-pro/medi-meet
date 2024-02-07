import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalsDoctorsListScreen from '../Screens/HospitalsDoctorsListScreen';


const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='hospital-doctor-list-screen' component={HospitalsDoctorsListScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigation