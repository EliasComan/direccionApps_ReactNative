import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import placeReducer from "./place.reducer";

export const store =configureStore({
reducer:{
    place:placeReducer
},
middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
})
})

