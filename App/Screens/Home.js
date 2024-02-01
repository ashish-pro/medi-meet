import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';

const Home = () => {
    const { isLoaded,signOut } = useAuth();
  return (
    <View>
        <Button title='SignOut' onPress={()=>signOut()}></Button>
      <Text>Home</Text>
    </View>
  )
}

export default Home