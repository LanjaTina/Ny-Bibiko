import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AnimalListScreen from './AnimalListScreen';
import AnimalDetailsScreen from './AnimalDetailsScreen';
import FavoriteAnimalsScreen from './FavoriteAnimalsScreen';
import store from '../store/store';
import { Text,Button,StyleSheet,View  } from 'react-native';
const Stack = createStackNavigator();

export default function Dashboard({ navigation }) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    });
  };
  return (
    <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name="AnimalList" component={AnimalListScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AnimalDetails" component={AnimalDetailsScreen} />
      <Stack.Screen name="FavoriteAnimalsScreen" component={FavoriteAnimalsScreen} />
    </Stack.Navigator>
    <View style={styles.buttonContainer}>
        <Button title="Ajouter" style={styles.button}/>
        <Button title="Voir Favoris" style={styles.button} onPress={() => navigation.navigate('FavoriteAnimalsScreen')} />
        <Button title="Logout" style={styles.button} onPress={handleLogout} />
      </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button:{
    backgroundColor: '#4A4653',
  }
});
