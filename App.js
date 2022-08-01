import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import PlaceNavigator from './src/navigation/placeNavigation';
import { Provider } from 'react-redux';
import { init } from './src/db/db.sqlite';
import { store } from './src/store/store';

export default function App() {
  init()
  .then(()=> console.log('DB initialized'))
  .catch(()=> console.log('Error'))
  return (
    <Provider store={store}>
        <NavigationContainer>
          <PlaceNavigator/>
        </NavigationContainer>
    </Provider>
  );
}
