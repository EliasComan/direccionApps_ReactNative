import * as fileSystem from 'expo-file-system'

import React from 'react'
import { URL_GEOCODING } from '../utils/maps'
import {addPlace} from './place.reducer'

export const savePlace = (title, image, coords) => {
    return async dispatch => {
        const response = await fetch(URL_GEOCODING(coords.lat,coords.lng));
        if(!response.ok) throw new Error('No ha podido obtener la direccion')
        const data = await response.json()
        if (!data.results) throw new Error('No se ha podido obtener la direccion')
        

        const address= data.results[0].formatted_address
        console.log(address)
        const fileName =  image.split('/').pop()
        const path = fileSystem.documentDirectory+fileName;

        try {
           await fileSystem.moveAsync({
            from:image,
            to:path
            })
        } catch (error) {
            console.log(error)
        }
        dispatch(addPlace({title,image:path, address, coords}))
    }
}