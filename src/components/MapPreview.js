import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'

import { URL_MAPS } from '../utils/maps'

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    map:{
        width: '100%',
        height: 220
    }

})

const MapPreview = ({location, children, style}) => {
    const {lat, lng} = location || {};
    const  mapUrl =  URL_MAPS(lat,lng) 
    return (
        <View style={{...styles.container, ...style}}>
            {
                location ?
                <Image source={{uri:mapUrl}} style={styles.map}/>
                :
                children
            }

        </View>
  )
}

export default MapPreview