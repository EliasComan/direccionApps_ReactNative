import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native'
import React,{ useState } from "react";

import { colors } from '../utils/colors';

const styles = StyleSheet.create({
    container :{

        marginBottom:10,
    },
    preview:{
        width: '100%',
        height: 200,
        marginBottom:10,
        justifyContent:'center',
        alignContent:'center',
        borderColor:colors.greenBlue,
        borderWidth:1

    },
    image:{
        width: '100%',
        height: '100%'
        
    }
})

const ImageSelector = () => {
const [pickedUrl, setPickedUrl] = useState(null)

const verifyPermissions = () => {
    const {status } =   ImagePicker.requestCameraPermissionsAsync()
    console.log(ImagePicker.requestCameraPermissionsAsync())
    if (status !== 'granted') {
        Alert.alert('Permisos insuficientes',
        'Necesistas permisos para utilizar la camara',[{text:'Ok'}])
        return false
    } 
        return true
    
}
const handleTakeImage = () => {
    const isCameraPermissionGranted =  verifyPermissions()
    if ( !isCameraPermissionGranted) {
        return;
    } 
    const image =  ImagePicker.launchCameraAsync({
        allowsEditing:true,
        aspect:[16,9],
        quality:0.8,
    })       
    setPickedUrl(image.uri)
    props.onImage(image.uri)
}
    return (
    <View style={styles.container}>
        <View style={styles.preview}>
                {!pickedUrl? 
                <Text>No hay imagen seleccionada</Text>
                    :
                <Image source={{uri:pickedUrl}} style={styles.image}></Image>
            }
        </View>
        <Button title='Tomar foto' color={colors.darkBlue}
        onPress={handleTakeImage}
        ></Button>
    </View>
  )
}

export default ImageSelector