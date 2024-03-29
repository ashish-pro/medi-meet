import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();
const TabNavigations = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Tab.Screen name='Home' component={HomeNavigation} options={
            {
                tabBarIcon:({color, size})=> (
                    <Ionicons name="home" size={size} color={color} />
                )
            }
        }/>
        <Tab.Screen name='Appointment' component={Appointment} options={
            {
                tabBarIcon:({color, size})=> (
                    <Ionicons name="calendar" size={size} color={color} />
                )
            }
        }/>
        <Tab.Screen name='Profile' component={Profile} options={
            {
                tabBarIcon:({color, size})=> (
                    <FontAwesome name="user" size={size} color={color} />
                )
            }
        }/>
    </Tab.Navigator>
  )
}

export default TabNavigations