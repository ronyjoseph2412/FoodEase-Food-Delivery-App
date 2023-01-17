import { View, Text, SafeAreaView, ScrollView, Modal, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { XCircleIcon } from "react-native-heroicons/solid";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import BasketCard from '../components/BasketCard';
import BasketContext from '../context/BasketContext';

const BasketScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const context = useContext(BasketContext);
  const { basket, total } = context;
  const [BasketCart, setBasketCart] = useState([])
  useEffect(() => {
    let newBasket = []
    for(let i = 0; i < basket.length; i++){
      newBasket.push(basket[i].name);
    }
    
      const counts = {};
      for (var i = 0; i < newBasket.length; i++) {
         counts[newBasket[i]] = 1 + (counts[newBasket[i]] || 0);
      };
      newBasket=[];
      for(let j in counts){
        for(let i=0;i<basket.length;i++){
          if(basket[i].name === j){
            newBasket.push({name:j,quantity:counts[j],price:basket[i].price,imgurl:basket[i].image});
            break;
          }
        }
        }
        setBasketCart(newBasket);
  }, []);

  const { params: {
    title,    lat,
    lng
  } } = useRoute();




  return (
    <SafeAreaView className=" h-full">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}

      >
        <View className="flex flex-col justify-center pt-10 bg-slate-100 w-[100%]">

          <View className="flex flex-row justify-between items-center bg-white w-[100%] px-4">
            <View></View>
            <View className="flex flex-col justify-center">
              <View>
                <Text className="text-2xl font-bold text-center">
                  Basket
                </Text>

              </View>
              <View>
                <Text className="text-xl text-slate-400 font-bold text-center">
                  {title}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => { setModalVisible(false); navigation.navigate("Home") }}>
                <XCircleIcon size={32} color="#84B9B4" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-10 py-3 bg-white flex flex-row justify-between px-4 items-center">
            <View>
              <Image source={{
                uri: 'https://links.papareact.com/wru',
              }} className="h-12 w-12 rounded-lg"></Image>
            </View>
            <View>
              <Text className="text-lg">Deliver in 50-75 min</Text>
            </View>
            <View>
              <Text className="text-lg text-[#84B9B4] shadow">Change</Text>
            </View>
          </View>

          <View className="flex flex-col mt-10 bg-white">
            {BasketCart.map((item) => {
              
              return (<BasketCard key={item.name} imgurl={item.imgurl} name={item.name} quantity={item.quantity} price={item.price} />)

            })
          
          
          }
          </View>

          <View className="pt-2 pb-6 flex flex-col mt-10  w-[100%] px-4 bg-white">
            <View className="flex flex-row justify-between items-center py-2">
              <View>
                <Text className="text-lg text-slate-400 font-bold">
                  Subtotal
                </Text>
              </View>
              <View>
                <Text className="text-lg text-slate-400 font-bold">
                  ₹ {total}
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center py-2">
              <View>
                <Text className="text-lg text-slate-400 font-bold">
                  Delivery Fee
                </Text>
              </View>
              <View>
                <Text className="text-lg text-slate-400 font-bold">
                  ₹ 30
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center py-2">
              <View>
                <Text className="text-lg text-black font-bold">
                  Order Total
                </Text>
              </View>
              <View>
                <Text className="text-lg text-black font-bold">
                  ₹ {total + 30}
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{navigation.navigate("PreparingOrder",{   total,title,lat,
    lng})}} activeOpacity={0.75} className="bg-[#84B9B4] flex flex-col justify-center items-center py-3 mt-3 mx-4 rounded-xl">
                <Text className="text-lg font-semibold text-white">Place Order</Text>
              </TouchableOpacity>

            </View>

          </View>


        </View>






      </Modal>
    </SafeAreaView>
  )
}

export default BasketScreen