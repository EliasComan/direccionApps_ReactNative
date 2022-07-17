import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import PlaceNavigator from './src/navigation/placeNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <PlaceNavigator/>
        </NavigationContainer>
    </Provider>
  );
}
