import { Place } from "../models/place"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    places: [],

}
const placeSlice = createSlice({
    name:'place',
    initialState,
    reducers:{
        addPlace: (state , action) => {
            const newPlace = new Place(Date.now(), action.payload.title, action.payload.image)
            state.places.push(newPlace)
            console.log(newPlace)
        }
    }
})
 
export const {addPlace} = placeSlice.actions
export default placeSlice.reducer