import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";

import PlaceItem from "../components/placeItem";
import {colors} from "../utils/colors";
import { loadPlaces } from "../store/place.actions";

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
  const dispatch = useDispatch()
 const places= useSelector(state => state.place.places)
 
 const onSelected = ( id) => {
  navigation.navigate('PlaceDetail',{placeId:id} )

 }
 const renderItems = ({item}) => {
  return <PlaceItem {...item}  onSelect={ onSelected} />
 }
 
 const ListEmptyComponent = () => {
  return(
    <View style={styles.emptyContainer}>
      <Text>No hay lugares todavia</Text>
    </View>
  )
 }

 useEffect(() => {
  dispatch(loadPlaces());
}, []);
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