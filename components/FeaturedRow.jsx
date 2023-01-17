import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import FeaturedRowCard from './FeaturedRowCard';
import { urlFor } from '../sanity'
const FeaturedRow = ({ title, description, restaurants,categories }) => {

    return (
        <View className="flex flex-col mt-3">
            <View className="flex flex-row justify-between items-start">
                <View className="flex flex-col">
                    <Text className="text-xl font-bold">{title}</Text>
                    <Text className="text-md  text-slate-500 font-semibold">{description}</Text>
                </View>
                <View className="mt-2">
                    <ArrowRightIcon size={28} color="#84B9B4" />
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
                {restaurants?.map((restaurant) => {
                    return(<FeaturedRowCard key={restaurant._id}
                        imgurl={urlFor(restaurant.image).url()}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type.name}
                        address={restaurant.address}
                        dishes={restaurant.dishes}
                        lat={restaurant.lat}
                        lng={restaurant.long}
                        
                        
                        />)
                })
                }
                
            </ScrollView>
        </View>
    )
}

export default FeaturedRow