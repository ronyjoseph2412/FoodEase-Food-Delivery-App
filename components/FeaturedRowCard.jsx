import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'


const FeaturedRowCard = ({
    id,
    imgurl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lat,
    lng

}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Restaurant',{
                id,
    imgurl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lat,
    lng
            })
        }} activeOpacity={0.7}>
            <View className="flex flex-col mx-2 border rounded-xl">
                <Image source={{
                    uri: (imgurl)
                }} className="h-40 w-72  rounded-t-xl" />
                <View className=" px-4 pt-2 pb-4 flex flex-col space-y-0.5 justify-start">
                    <View>
                        <Text className="font-bold text-xl">{title}</Text>
                    </View>
                    <View className="flex flex-row space-x-2 items-center justify-start">
                        <View>
                            <StarIcon size={14} color="green" />
                        </View>
                        <View>
                            <Text className="text-green-700">{rating}</Text>
                        </View>
                        <View>
                            <Text className="text-slate-400">{genre}</Text>
                        </View>
                    </View>
                    <View className="flex flex-row space-x-2 items-center justify-start">
                        <View>
                            <LocationMarkerIcon size={14} color="black" />
                        </View>
                        <View>
                            <Text>Nearby</Text>
                        </View>
                        <View>
                            <Text className="text-slate-400 text-xs">{address}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeaturedRowCard