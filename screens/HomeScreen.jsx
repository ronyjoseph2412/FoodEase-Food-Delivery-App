import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ChevronDownIcon, UserIcon, AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/solid';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    const [categories, setcategories] = useState([])
    const [featuredCategories, setfeaturedCategories] = useState([]);
    useEffect(() => {
        sanityClient.fetch(`*[_type=="featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type->{
                name
            },
            },
          
          }`).then(data => {
            setfeaturedCategories(data);
        });
        sanityClient.fetch(`*[_type=="category"]{
            ..., 
          }`).then(data => {
            setcategories(data);
        });

    }, []);

    return (
        <SafeAreaView>
            {/* Header */}
            <ScrollView>
                <View className="my-2 pt-10 px-4 flex flex-col justify-center">
                    <View className="flex flex-row w-[100%] justify-between items-center">
                        <View className="flex flex-row items-center space-x-2">
                            <View className="">
                                <Image source={{
                                    uri: 'https://links.papareact.com/wru',
                                }} className="h-10 w-10 rounded-2xl"></Image>
                            </View>
                            <View className="flex flex-col">
                                <View className="">
                                    <Text>Deliver Now!</Text>
                                </View>
                                <View className="flex flex-row items-center">
                                    <View>
                                        <Text className="text-lg font-semibold">Current Location</Text>

                                    </View>
                                    <View>

                                        <ChevronDownIcon color="#84B9B4" size={20}></ChevronDownIcon>

                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <UserIcon color="#84B9B4" size={40} />
                            {/* <Text></Text> */}
                        </View>
                    </View>
                    <View className="w-[100%] py-2 flex flex-row justify-between items-center">
                        <View className="w-[85%] py-3 px-2  flex flex-row items-center space-x-1 bg-slate-300">
                            <SearchIcon size={20} color="black"></SearchIcon>
                            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'></TextInput>
                        </View>
                        <View>
                            <AdjustmentsIcon color="#84B9B4" size={40} />
                        </View>
                    </View>
                    <View className="-mx-4 px-0.5 py-2 my-2">
                        {/* Categories */}
                        <Categories categories={categories} />

                    </View>
                    {
                        featuredCategories !== [] &&
                        featuredCategories.map((item) => {
                            return <FeaturedRow key={item._id} title={item.name} description={item.short_description} categories={categories} restaurants={item.restaurants} />
                        })
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen