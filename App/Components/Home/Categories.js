import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalAPI from '../../Services/GlobalAPI'
import Colors from '../../../assets/Shared/Colors';

const Categories = () => {
    const [categoryList, setCategoryList] = useState();
    useEffect(() => {
        getCategories();
    }, [])
    const getCategories = () => {
        GlobalAPI.getCategories().then(resp => {
            // console.log(resp.data.data)
            setCategoryList(resp.data.data);
        })
    }
    if (!categoryList) {
        return null;
    }
    return (
        <View style={{ marginTop: 10 }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'appfont-bold'
                }}>Doctor Speciality</Text>
                <Text style={{ color: Colors.BLUE_LINK }}>See All</Text>
            </View>
            <FlatList
                data={categoryList}
                numColumns={4}
                columnWrapperStyle={
                    {
                        flex: 1,
                        justifyContent: 'space-between'
                    }
                }
                style={{ marginTop: 5 }}
                renderItem={({ item, index }) => index<4&& (
                    <View style={{alignItems:'center'}}>
                        <View style={{ padding: 10, backgroundColor: Colors.ICON, borderRadius: 99 }}>
                            <Image source={{
                                uri: item.attributes.Icon.data.attributes.url
                            }}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <Text>{item.attributes.Name}</Text>
                    </View>
                )} />
        </View>
    )
}

export default Categories