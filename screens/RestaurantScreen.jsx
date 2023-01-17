import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StarIcon, ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid';
import MenuCard from '../components/MenuCard';
import { useEffect } from 'react';
import BasketContext from '../context/BasketContext';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const pressed = ()=>{
    console.log("Pressed");
    navigation.navigate('Basket',{title,lat,
      lng});
  }
  
  const { params: {
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
  } } = useRoute();
  // console.log(dishes)
  const context = useContext(BasketContext);
  const { total, basket, removeFromBasket } = context;

  return (
    <SafeAreaView>
      <ScrollView >
        <View className="px-2 flex flex-col justify-center overflow-y-scroll relative pb-40">

          <Image source={{
            uri: imgurl
          }} className="h-72 -mx-4 aspect-auto" />
          <TouchableOpacity activeOpacity={0.7} onPress={navigation.goBack} className="absolute top-[7%] left-[4%] bg-slate-100 py-2 px-2 rounded-full">
            <View  >
              <ArrowLeftIcon size={28} color="#84B9B4" />
            </View>
          </TouchableOpacity>
          <View className="px-2 flex flex-col justify-center mt-4">
            <Text className="font-extrabold text-4xl">{title}</Text>
            <View className="flex  flex-row w-11/12 px-1 items-center justify-start space-x-4">
              <View className="mt-1">
                <StarIcon size={14} color="green" />
              </View>
              <View>
                <Text className="font-bold text-md text-green-700">{rating}</Text>
              </View>
              <View>
                <Text className="font-bold text-md text-slate-500">{genre}</Text>
              </View>
              <View>
                <Text className="font-bold text-md text-slate-500">{address}</Text>
              </View>
            </View>
            <View>
              <Text className="text-md text-slate-500">{short_description}</Text>
            </View>
            <View className="border-t -mx-4 border-slate-600 overflow-hidden">
              <View className="flex flex-row px-4 items-center space-x-3 my-4">
                <View><QuestionMarkCircleIcon color="#333"></QuestionMarkCircleIcon></View>
                <View><Text className="font-extrabold tracking-wide">Have a food allergy?</Text></View>
              </View>
            </View>
            <View className="bg-[#F2F2F2] -mx-4 py-3 px-4">
              <Text className="text-xl">Menu</Text>
            </View>
            {/* Menu Cards */}
            {
              dishes.map((dish) => {
                return (<MenuCard dish={dish} key={dish._id} />)
              })
            }
          </View>
        </View>
      </ScrollView>
        {
          total > 0 && (

            <View className={`flex flex-col justify-center items-center w-[100%] top-[85%] absolute h-screen`} >
            <TouchableOpacity activeOpacity={0.8} className="bg-[#84B9B4] flex flex-row h-14 mx-auto w-[80%] rounded-xl justify-between items-center px-4">
              <View className="py-1 px-2 rounded-md bg-[#377A78]">
                <Text className="text-white text-xl font-bold">{basket.length}</Text>
              </View>
              <TouchableOpacity onPress={pressed}>
                <Text className="text-white text-xl font-bold">View Basket</Text>
              </TouchableOpacity>
              <View>
                <Text className="text-white text-xl">₹ {total}</Text>
              </View>
            </TouchableOpacity>

            </View>
          )
        }
      {/* Basket */}
    </SafeAreaView>
  )
}

export default RestaurantScreen