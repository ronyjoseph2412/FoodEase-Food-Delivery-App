import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const PreparingOrder = () => {
  const navigation = useNavigation();
  const { params: {
    total, title, lat,
    lng
  } } = useRoute();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OrderConfirmation',{total,title,lat,
        lng})
    }, 4000);
  })

  return (
    <SafeAreaView className="bg-[#F8F8F8] h-screen flex-1 justify-center items-center w-[100%]">
      <View>
        <Image source={require('../assets/restaurant.gif')} className="h-96 w-96" />
      </View>
      <View className="w-[80%] -mt-2 mx-auto">
        <Text className="text-xl text-center">Waiting for the Restaurant to confirm the order</Text>
      </View>
    </SafeAreaView>
  )
}

export default PreparingOrder