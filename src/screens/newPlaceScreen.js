import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React,{useState} from 'react'

import ImageSelector from "../components/imageSelector";
import LocationSelector from "../components/locationSelector";
import { colors } from "../utils/colors";
import { savePlace } from "../store/place.actions";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    input:{
      borderBottomColor:colors.darkBlue,
      marginVertical:20,
      marginHorizontal:10,
      borderBottomWidth:1,
      height: 40,
      shadowColor:colors.greenBlue,
      shadowRadius:5,
      shadowOpacity:10,
      borderRadius:10,
    },
    button:{
      border:1,
      borderRadius:30,
      margin:5,
      padding: 3,
      marginTop:20,
      color: colors.darkBlue
    }
})



const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [image, setImage ] =  useState()
  const [coords, setCoords ] = useState('')
  const handleTitleChange = (text ) => {
    setTitle(text)};
  const handleSave =() => {
    dispatch(savePlace(title, image, coords))
  }
  return (
    <ScrollView >
        <View style={styles.container}>
            <Text style={styles.title}>Escriba un titulo para el lugar seleccionado</Text>
            <TextInput 
              style={styles.input} 
              value={title}
              onChangeText={handleTitleChange}>
            </TextInput>
            <ImageSelector
            onImage={(image)=>setImage(image)}
            />
            <LocationSelector
            onLocation={(coords) => setCoords(coords)}
            />
            <Button 
              color={colors.darkBlue}  
              title='Guardar lugar'
              onPress={() => handleSave()}>
               </Button>
        </View>
    </ScrollView>
  )
}

export default NewPlaceScreen