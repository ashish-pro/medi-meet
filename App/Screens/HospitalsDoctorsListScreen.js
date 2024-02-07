import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';

const HospitalsDoctorsListScreen = () => {
    const param = useRoute().params;
  return (
    <View style={{padding:20}}>
      {/* <Text>{param?.categoryName}</Text> */}
      <PageHeader title={param?.categoryName}/>
    </View>
  )
}

export default HospitalsDoctorsListScreen