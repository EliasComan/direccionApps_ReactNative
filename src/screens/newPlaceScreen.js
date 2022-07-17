import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React,{useState} from 'react'

import ImageSelector from "../components/imageSelector";
import { addPlace } from "../store/place.reducer";
import { colors } from "../utils/colors";
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
  const handleTitleChange = (text ) => {
    setTitle(text)};
  const handleSave =() => {
    dispatch(addPlace(title))
  }
  return (
    <ScrollView >
        <View style={styles.container}>
            <Text style={styles.title}>text</Text>
            <TextInput 
              style={styles.input} 
              value={title}
              onChangeText={handleTitleChange}>
            </TextInput>
            <ImageSelector
            onImage={(image)=>console.log(image)}
            />
            <Button 
              color={colors.darkBlue}  
              title='Add direction'
              onPress={() => handleSave()}>
               </Button>
        </View>
    </ScrollView>
  )
}

export default NewPlaceScreen