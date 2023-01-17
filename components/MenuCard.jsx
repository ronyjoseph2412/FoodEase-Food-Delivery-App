import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from '../sanity'
import BasketContext from '../context/BasketContext';

const MenuCard = ({ dish }) => {
  const img = urlFor(dish.image).url()
  const [pressed, setpressed] = useState(true)
  const [quantity, setquantity] = useState(0)
  const context = useContext(BasketContext);
  const {addToBasket, removeFromBasket} = context;
  const handlePress = (method) => {
    if (method==="add") {
      addToBasket(dish)
    } else {
      removeFromBasket(dish)
    }
  }



  return (
    <View className="flex flex-row justify-between mx-2 mt-8 pb-2">
      <View className="w-[60%] flex flex-col space-y-2">
        <View>
          <TouchableOpacity >
            <View>
              <Text className="text-xl font-bold">{dish.name}</Text>
            </View>
            <View>
              <Text className="text-sm">{dish.short_description}.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae!</Text>
            </View>
            <View>
              <Text className="text-xs">₹ {dish.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        
        
        <View className="flex flex-row items-center justify-start space-x-6 pt-2">
          <View >
            {/* <Text className="text-lg">-</Text> */}
            {
              pressed && 
            <TouchableOpacity activeOpacity={0.75} onPress={() => { if(quantity>0){setquantity(quantity - 1);handlePress("previous") }}}>
              <MinusCircleIcon size={36} color="white" fill={quantity>0?"#84B9B4":"#84b9b44a"} />
            </TouchableOpacity>
            }
          </View>
          <View>
            {
              pressed &&
            <Text>{quantity}</Text>
            }
          </View>
          <View>
            {
              pressed &&
            <TouchableOpacity activeOpacity={0.75} onPress={() => { if(quantity<10){setquantity(quantity + 1);handlePress("add")} }}>
              <PlusCircleIcon size={36} color="white" fill={quantity<10?"#84B9B4":"#84b9b44a"} />
            </TouchableOpacity>
            }
          </View>
        </View>
        
        
      </View>
      <View className="w-[33%]">
        <View>
          <Image source={{
            uri: img
          }} className="h-32 w-32 rounded-xl">

          </Image>
        </View>
      </View>

    </View >
  )
}

export default MenuCard