import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

const Slider = () => {
    const sliderList = [
        {
            id: 1,
            name: 'Slider 1',
            imageUrl: 'https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?size=626&ext=jpg&ga=GA1.1.282912230.1706962609&semt=sph'
        },
        {
            id: 2,
            name: 'Slider 2',
            imageUrl: 'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.1.282912230.1706962609&semt=sph'
        }      
    ]
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=> (
            <Image source={{uri:item.imageUrl}}
            style={{width:Dimensions.get('screen').width*0.9,
        height:220, borderRadius:10, margin:2}} />
        )}
      />
    </View>
  )
}

export default Slider