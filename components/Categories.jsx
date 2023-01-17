import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { urlFor } from '../sanity'

const Categories = ({categories}) => {
  return (
    <ScrollView horizontal
    showsHorizontalScrollIndicator={false} className="px-4 -ml-1 mr-1"
    >
      {/* <Text>Categories</Text> */}
      {
        categories !==[] && categories.map((category)=>{
          return(<CategoryCard imgurl={urlFor(category.image).url()} key={category._id} title={category.name} />)
        })
      }
      
    </ScrollView>
  )
}

export default Categories