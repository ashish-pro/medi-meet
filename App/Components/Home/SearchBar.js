import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

const SearchBar = ({setSearchText}) => {
    const [searchInput, setSearchInput] = useState();
    return (
        <View style={{ marginTop: 15 }}>
            <View style={{
                display: 'flex', flexDirection: 'row',
                gap: 5, alignItems: 'center', borderWidth: 0.6,
                borderColor: Colors.GRAY, padding: 7, borderRadius: 8
            }}>
                <Ionicons name="search" size={24} color={Colors.PRIMARY} />
                <TextInput placeholder='Search' onChangeText={(value)=>setSearchInput(value)} 
                style={{width:'100%'}}
                onSubmitEditing={() => setSearchText(searchInput)}/>
            </View>
        </View>
    )
}

export default SearchBar