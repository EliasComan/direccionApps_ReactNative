import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MapPreview from "../components/MapPreview";
import React from 'react'
import { colors } from "../utils/colors";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container:{
        flex: 1,
      },
    image:{
      flex: 1,
      width: '100%',
      height: 300
    },
    location:{
      margin: 20,
      width: '90%',
      maxWidth:350,
      backgroundColor:'#fffff',
      shadowColor:colors.darkBlue,
      shadowOpacity:0.26,
      shadowOffset:{width:0, height:2},
      shadowRadius:8,
      elevation:5,
      borderRadius:10
    },
    addressContainer:{
      padding: 20
    },
    address:{
      fontSize:30,
      color:colors.darkBlue
    },
    map:{
      height: 300
    }
})



const PlaceDetailScreen = ({navigation, route}) => {
  const {placeId}= route.params

  const place = useSelector(state=> 
    state.place.places.find(place => place.id === placeId)
    )
console.log(place)
    return (
    <ScrollView style={styles.container}>
       <View style={styles.location}>
       <Image source={{uri:place.image}} style={styles.image}/>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.coords}</Text>
        </View>
        <MapPreview style={styles.map} location={place}>
         <Text>Ubicaion no disponible</Text>
        </MapPreview>
       </View>
    </ScrollView>
  )
}

export default PlaceDetailScreen