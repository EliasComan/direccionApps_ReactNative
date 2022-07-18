import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Place } from "../models/place";
import PlaceItem from "../components/placeItem";
import React from 'react'
import {colors} from "../utils/colors";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container:{
        flex: 1,
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
    },
    emptyContainer:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      marginVertical:20
    }

})



const PlaceListScreen = ({navigation}) => {
 const places= useSelector(state => state.place.places)
 
 const onSelected = ( place) => {
  navigation.navigate('PlaceDetail',{placeId:place.id} )

 }
 const renderItems = ({item}) => {
  return <PlaceItem {...item} address={'123 calle, ciudad, pais'} onSelect={()=> onSelected()} />
 }
 
 const ListEmptyComponent = () => {
  return(
    <View style={styles.emptyContainer}>
      <Text>No hay lugares todavia</Text>
    </View>
  )
 }
 return (
    <FlatList 
    data={places}
    renderItem={renderItems}
    keyExtractor={(item) => item.id}
    ListEmptyComponent={ListEmptyComponent}
    style={styles.container}
    />
   
  )
}

export default PlaceListScreen