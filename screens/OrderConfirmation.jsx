import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { XIcon,PhoneOutgoingIcon } from 'react-native-heroicons/solid';
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native';



const OrderConfirmatio = () => {
  const navigation = useNavigation();
  const { params: {
    total, title, lat,
    lng
  } } = useRoute();
  return (
    <SafeAreaView>
      <View className="flex-1 justify-start h-[100%] w-[100%] bg-[#52BDBC]">
        <View className="px-4 pt-12 flex flex-row justify-between">
          <TouchableOpacity activeOpacity={0.75} onPress={()=>{navigation.navigate("Home")}}>
            <XIcon size={30} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text className="text-xl text-slate-100">Order Help?</Text>
          </View>
        </View>
        <View className="z-10 flex flex-col justify-center items-center w-[100%]">

          <View className="w-[90%] mt-14 px-4 py-6 rounded-xl flex flex-col  bg-white">
            <View className="flex flex-row justify-between items-center">
              <View className="flex flex-col space-y-4">
                <View><Text className="text-md text-slate-400">Estimated Arrival</Text></View>
                <View><Text className="text-3xl">45-50 Mins</Text></View>
              </View>
              <View>
                <Image source={{
                  uri:"https://links.papareact.com/fls"
                }} className="h-20 w-20"></Image>
              </View>
            </View>
            <View className="mt-4">
              <Text className="text-md text-slate-500">Your Order is being prepared at {title}</Text>
              <Text className="text-md text-slate-500">The Order Total {total}</Text>
            </View>
          </View>


        </View>
        <View className="h-[63%] w-full -mt-20 z-0">

          <MapView
            initialRegion={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            className="h-full w-full"
          >

            <Marker
              coordinate={{ latitude: lat, longitude: lng }}
            />
          </MapView>
        </View>
        <View className="h-[45%] space-x-2 px-4 py-4 flex flex-row bg-white">
          <View>
            <Image source={{
              uri:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            }} className="h-14 w-14 rounded-full" />
          </View>
          <View className="flex flex-col space-y-1">
            <Text className="text-lg text-slate-900">Rony Joseph</Text>
            <Text className="text-md text-slate-400">Your Rider</Text>
          </View>
          <View className="w-[43%]">

          </View>
          <View className="mt-4">
            <PhoneOutgoingIcon size={30} color="#52BDBC" />
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default OrderConfirmatio