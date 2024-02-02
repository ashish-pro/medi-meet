import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';

const Home = () => {
    const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20, marginTop:20}}>
      <Header/>
        {/* <Button title='SignOut' onPress={()=>signOut()}></Button> */}
      <SearchBar setSearchText={(value)=> console.log(value)}/>
    </View>
  )
}

export default Home