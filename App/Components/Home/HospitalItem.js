import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'

const HospitalItem = ({ hospital }) => {
    // console.log(JSON.stringify(hospital))
    return (
        <View style={{ width: 200, 
        borderWidth:1,borderRadius:10, borderColor:Colors.LIGHT_GRAY, marginRight:10 }}>

            <Image source={{ uri: hospital.attributes.Image.data.attributes.url }}
                style={{ width: '100%', height: 110, borderTopLeftRadius:10, borderTopRightRadius:10 }} />
            <View style={{padding:7}}>
                <Text style={{fontFamily:'appfont-semibold',
            fontSize:16}}>{hospital.attributes.Name}</Text>
                <Text style={{color:Colors.GRAY}}>{hospital.attributes.Address}</Text>

            </View>
        </View>
    )
}

export default HospitalItem