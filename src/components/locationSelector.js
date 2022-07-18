import * as Location from 'expo-location'

import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { colors } from '../utils/colors'

const styles= StyleSheet.create({
    container :{
        marginBottom:20,

    },
    preview:{
        width: '100%',
        marginBottom:10,
        height: 200,
        justifyContent:'center',
        alignItems:'center',
        borderColor:colors.greenBlue,
        borderWidth:1
    },
    image:{
        width: '100%',
        height: '100%'

    }
})
const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState()
    
    const handleGetLocation = async () => {
            const isLocationGranted = await verifyPermissions()
            if (!isLocationGranted){
                return;
            };
            console.log( await Location.getCurrentPositionAsync({
                timeInterval:5000
            }))
            const location = await Location.getCurrentPositionAsync({
                timeInterval:5000,

            })
                setPickedLocation({
                    lat:location.coords.latitude,
                    lng:location.coords.longitude
                })
                onLocation({
                    lat:location.coords.latitude,
                    lng:location.coords.longitude
                })
            }
    
    const verifyPermissions = async () => {
        const {status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Por favor habilita la localizacion para continuar',
                [{text:'Ok'}]
            )
            
            return false
        } else {
            return true
        }
    }
  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            {
                pickedLocation ?
                <Text>{pickedLocation.lat}, {pickedLocation.lng} </Text>
                :
                <Text>No hay direccion seleccionada</Text>
            }
        </View>
        <Button color={colors.darkBlue} title='Seleccionar ubicacion' onPress={() =>handleGetLocation()}/>
    </View>

    )
}

export default LocationSelector