import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from '../../assets/images/app.png'
import Colors from '../../assets/Shared/Colors'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={app} style={styles.appImage} />
      <View style={{
        backgroundColor: Colors.white,
        padding: 10,
        alignItems: 'center',
        marginTop: -90,
      }}>
        <Text style={styles.heading}>Your Ultimate Doctor </Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{ textAlign: 'center', marginTop: 15, }}> Book Appointment Effortlessly and manage your health journey </Text>
        <SignInWithOAuth />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  appImage: {
    width: 400,
    height: 600,
    objectFit: 'contain',
    marginTop: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold'
  },
})