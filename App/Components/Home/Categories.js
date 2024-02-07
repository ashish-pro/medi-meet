import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalAPI from "../../Services/GlobalAPI";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
    const navigation = useNavigation();
    const [categoryList, setCategoryList] = useState();
    useEffect(() => {
        getCategories();
    }, []);
    const getCategories = () => {
        GlobalAPI.getCategories().then((resp) => {
            // console.log(resp.data.data)
            setCategoryList(resp.data.data);
        });
    };

    if (!categoryList) {
        return null;
    }
    return (
        <View style={{ marginTop: 10 }}>
            <SubHeading subHeadingTitle={"Doctor Speciality"} />
            <FlatList
                data={categoryList}
                numColumns={4}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: "space-between",
                }}
                renderItem={({ item, index }) =>
                    index < 4 && (
                        <TouchableOpacity onPress={() => navigation.navigate('hospital-doctor-list-screen', {
                            categoryName: item.attributes.Name
                        })} style={{ alignItems: "center" }}>
                            <View
                                style={{
                                    padding: 10,
                                    backgroundColor: Colors.ICON,
                                    borderRadius: 99,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: item.attributes.Icon.data.attributes.url,
                                    }}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <Text>{item.attributes.Name}</Text>
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    );
};

export default Categories;
