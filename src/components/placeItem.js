import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from 'react'
import {colors} from "../utils/colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:colors.gold,
        borderWidth:1,
        borderColor:colors.gray
    },
    image:{
      width: 100,
      height: 100,
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



const PlaceItem = ({title, image, coords, onSelect, id}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>onSelect(id)}>
          <Image source={{uri:image}} style={styles.image} />
          <View style={styles.info} >
              <Text style={styles.title}>{title}</Text>
              <Text>{coords}</Text>
          </View>
        </TouchableOpacity>
      )
}

export default PlaceItem