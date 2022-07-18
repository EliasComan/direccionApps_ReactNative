import Ionicons from '@expo/vector-icons/Ionicons'
import MappsScreen from '../screens/mappsScreen';
import NewPlaceScreen from '../screens/newPlaceScreen';
import PlaceDetailScreen from '../screens/placeDetailScreen';
import PlaceListScreen from '../screens/placeListScreen';
import { Platform } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {colors} from '../utils/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()
const PlaceNavigator = () => {
    return(
    <stack.Navigator initialRouteName='Place'
    screenOptions={{
        headerTintColor:colors.greenBlue,
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <stack.Screen 
        name='Place' 
        component={PlaceListScreen}
        options={({navigation})=>(
        {title: 'Direcciones',
        headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('NewPlace')}>
                <Ionicons name="add-circle-outline" size={30} color={colors.darkBlue}/>
            </TouchableOpacity>
        )
    })}
        />
        <stack.Screen
        name='NewPlace'
        component={NewPlaceScreen}
        options={{title:'Nueva direccion'}}
        />
        <stack.Screen
        name='PlaceDetail'
        component={PlaceDetailScreen}
        options={{title:'Detalle de direccion'}}
        />
        <stack.Screen
        name='Map'
        component={MappsScreen}
        options={{title:'Mapa'}}
        />
    </stack.Navigator>
)}
export default PlaceNavigator