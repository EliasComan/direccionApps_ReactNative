import * as fileSystem from 'expo-file-system'

import {addPlace, loadAddress} from './place.reducer'
import { fetchAddress, insertAddress } from '../db/db.sqlite'

import { URL_GEOCODING } from '../utils/maps'

export const savePlace = (title, image, coords) => {
    return async dispatch => {
        const response = await fetch(URL_GEOCODING(coords.lat,coords.lng));
        if(!response.ok) throw new Error('No ha podido obtener la direccion')
        const data = await response.json()
        if (!data.results) throw new Error('No se ha podido obtener la direccion')
        

        const address= data.results[0].formatted_address
        const fileName =  image.split('/').pop()
        const path = fileSystem.documentDirectory+fileName;

        try {
           await fileSystem.moveAsync({
            from:image,
            to:path
            })
            const dbRespponse = await insertAddress(title,path,address,coords)
            dispatch(addPlace({id:dbRespponse.insertId,title,image:path, address, coords}))
        } catch (error) {
            console.log(error)
        }
    }
}

export const loadPlaces = () => {
    return async (dispatch) => {
        try {
            const result = await fetchAddress()
            dispatch(loadAddress(result.rows._array))
        } catch (error) {
            throw Error
        }
    }
}