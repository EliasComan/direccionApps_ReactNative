import * as Location from 'expo-location'

import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import MapPreview from './MapPreview'
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

    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
})
const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation] = useState()
    const navigation = useNavigation()
    const route= useRoute()
    const handleGetLocation = async () => {
            const isLocationGranted = await verifyPermissions()
            if (!isLocationGranted){
                return;
            };
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

    const handlePicklocation = async () => {
        const isLocationGranted = await verifyPermissions()
        if (!isLocationGranted) return ;

        navigation.navigate('Map')
    }

    const mapLocation = route?.params?.mapLocation
    useEffect(()=>{
        if (mapLocation) {
            setPickedLocation({
                lat:mapLocation.latitude,
                lng:mapLocation.longitude
            })
            onLocation({
                lat:mapLocation.latitude,
                lng:mapLocation.longitude
            })
        }
    },[mapLocation])
    return (
    <View style={styles.container}>
        <MapPreview location={pickedLocation} style={styles.preview}>
                <Text>Esperando ubicacion</Text>
        </MapPreview>
        <View style={styles.buttons}>
            <Button color={colors.darkBlue} title='Seleccionar ubicacion' onPress={() =>handleGetLocation()}/>
            <Button title='Elegir en mapa' onPress={handlePicklocation} color={colors.darkBlue}/>

        </View>
    </View>

    )
}

export default LocationSelector