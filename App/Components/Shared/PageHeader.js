import { View, Text, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PageHeader = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={{display:'flex', flexDirection:'row', gap:3, alignItems:'center'}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      <Text style={{fontSize:25, fontFamily:'appfont-semibold'}}>{title}</Text>
    </View>
  )
}

export default PageHeader