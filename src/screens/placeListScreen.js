import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Place } from "../models/place";
import PlaceItem from "../components/placeItem";
import React from 'react'
import {colors} from "../utils/colors";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.gold,
        borderWidth:1,
        borderColor:colors.gray
    },
    image:{
      width: 10,
      height: 10,
      borderRadius:80,
      backgroundColor:colors.darkBlue,
    },
    info:{
      flex: 1,
      margin: 10,
      padding: 2,
      alignItems:'flex-start',
      justifyContent:'center'
    },
    title:{
      fontSize:20,
      fontWeight:'bold'
    }

})



const PlaceListScreen = ({navigation}) => {
 const places= useSelector(state => state.place.places)
 
 const onSelected = ( place) => {
  navigation.navigate('PlaceDetail',{placeId:place.id} )

 }
 const renderItems = ({item}) => {
  return <PlaceItem {...item} onSelect={()=> onSelected()} />
 }
 return (
    <FlatList 
    data={places}
    renderItem={renderItems}
    keyExtractor={(item) => item.id}
    />
   
  )
}

export default PlaceListScreen