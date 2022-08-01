import { Place } from "../models/place"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    places: [],

}
const placeSlice = createSlice({
    name:'place',
    initialState,
    reducers: {
        addPlace: (state, action) => {
          const newPlace = new Place(
            action.payload.id.toString(),
            action.payload.title,
            action.payload.image,
            action.payload.address,
            action.payload.coords,
          );
          state.places.push(newPlace);
        },
        loadAddress: (state, action) => {
            console.log('ACTION', action.payload)
          state.places = action.payload;
        }
      },
})
 
export const {addPlace,loadAddress} = placeSlice.actions
export default placeSlice.reducer