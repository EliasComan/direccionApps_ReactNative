import * as fileSystem from 'expo-file-system'

import React from 'react'
import {addPlace} from './place.reducer'

export const savePlace = (title, image) => {
    return async dispatch => {
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
        dispatch(addPlace({title,image:path}))
    }
}