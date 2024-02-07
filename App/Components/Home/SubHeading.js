import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'


const SubHeading = ({subHeadingTitle}) => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10
    }}>
        <Text style={{
            fontSize: 16,
            fontFamily: 'appfont-semibold'
        }}>{subHeadingTitle}</Text>
        <Text style={{ color: Colors.BLUE_LINK }}>See All</Text>
    </View>
  )
}

export default SubHeading