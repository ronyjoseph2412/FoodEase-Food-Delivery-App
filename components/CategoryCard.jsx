import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgurl,title}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} className="relative z-0 mx-2 pr-2">
            <View className="flex flex-col justify-center items-center">
                <Image source={{
                    uri:imgurl
                }} className="h-32 w-32  rounded-xl"></Image>

            <View className="mt-1 z-10">
                <Text className="text-black font-semibold ">{title}</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryCard