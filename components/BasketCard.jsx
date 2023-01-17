import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const BasketCard = ({imgurl,name,price,quantity}) => {
    const img = urlFor(imgurl).url()
    return (
        <View className="flex flex-row justify-between py-3 px-2">
            <View className="flex flex-row items-center justify-start space-x-2">
                <View className="">
                    <Text className="text-lg text-[#84B9B4]">{quantity} x</Text>
                </View>
                <View className="flex flex-col justify-center items-center ">
                    <Image source={{
                        uri: img,
                    }} className="h-14 w-14 rounded-full" />
                </View>
                <View className="w-[48%]">
                    <Text className="text-lg">{name}</Text>
                </View>
            </View>
            <View className="flex flex-row items-center justify-end space-x-1">
                <View>
                    <Text className="text-lg">₹ {price}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.75}>
                    <Text className="text-md text-[#84B9B4]">Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketCard