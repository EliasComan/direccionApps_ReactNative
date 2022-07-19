import MapView, { Marker } from "react-native-maps";
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IonicIcon from '@expo/vector-icons/Ionicons'
import { colors } from "../utils/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})



const MappsScreen = ({navigation}) => {
  const initialRegion ={
    latitude:-34.61315,
    longitude: -58.37723,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421
  }
  const [selectedLocation, setselectedLocation] = useState(initialRegion)

  const handlePickedLocation = (e) =>{
    setselectedLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta:0.0922,
      longitudeDelta:0.0421
    })
  }
  const handleSaveLocation= () => {
    navigation.navigate('NewPlace', {mapLocation: selectedLocation})
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight : ()=> {
       return( 
       <TouchableOpacity onPress={
          handleSaveLocation
        }>
          <IonicIcon name="md-save-outline" size={28} color={colors.darkBlue}/>
        </TouchableOpacity>
      )
  }})
  },[navigation, handleSaveLocation])
  return (
    <MapView style={styles.container}
    initialRegion={initialRegion}
    onPress={handlePickedLocation}
    >
      {selectedLocation?.latitude &&
        <Marker
        title="Ubicacion seleccionada"
        coordinate={{
          latitude:selectedLocation.latitude,
          longitude:selectedLocation.longitude,
        }}
        />
      }

    </MapView>
      
  )
}

export default MappsScreen