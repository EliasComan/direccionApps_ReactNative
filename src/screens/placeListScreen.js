import { StyleSheet, Text, View } from "react-native";

import React from 'react'
import {colors} from "../utils/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.gold
    }
})



const PlaceListScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Direcciones</Text>
    </View>
  )
}

export default PlaceListScreen