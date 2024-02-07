import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalAPI from '../../Services/GlobalAPI'
import HospitalItem from './HospitalItem'

const PremiumHospitals = () => {
    const [hospitalList, setHospitalList] = useState([]);
    useEffect(()=>{
        getPremiumHospitals();
    },[])

    const getPremiumHospitals = ()=> {
        GlobalAPI.getPremiumHospitals().then(res=>{
            // console.log(res.data.data);
            setHospitalList(res.data.data);
        })
    }
  return hospitalList && (
    <View style={{marginTop:10}}>
      <SubHeading subHeadingTitle={'Our Premium Hospitals'} />
      <FlatList
      data={hospitalList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <HospitalItem hospital={item}/>
      )} />
    </View>
  )
}

export default PremiumHospitals