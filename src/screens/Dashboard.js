import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AnimalListScreen from './AnimalScreen/AnimalListScreen';
import AnimalDetailsScreen from './AnimalScreen/AnimalDetailsScreen';
import FavoriteAnimalsScreen from './AnimalScreen/FavoriteAnimalsScreen';
import AddAnimalScreen from './AnimalScreen/AddAnimalScreen';
import EditAnimalScreen from './AnimalScreen/EditAnimalScreen';
import store from '../store/store';
import { Text, Button, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            containerStyle: {
              backgroundColor: "#0000FF", // Couleur de l'arrière-plan pour toutes les pages
            },
          }}
        >
          <Stack.Screen name="AnimalList" component={AnimalListScreen} />
          <Stack.Screen name="AnimalDetails" component={AnimalDetailsScreen} />
          <Stack.Screen name="FavoriteAnimalsScreen" component={FavoriteAnimalsScreen} />
          <Stack.Screen name="AddAnimalScreen" component={AddAnimalScreen} />
          <Stack.Screen name="EditAnimalScreen" component={EditAnimalScreen} />
        </Stack.Navigator>
        
      <View style={styles.test} >
        <View style={styles.buttonContainer} >
          <TouchableOpacity onPress={() => navigation.navigate('AnimalList')} style={styles.logoutButton}>
            <Image source={require('../../assets/icones/home.png')} style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddAnimalScreen')} style={styles.logoutButton}>
            <Image source={require('../../assets/icones/add.png')} style={styles.button} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FavoriteAnimalsScreen')} style={styles.logoutButton}>
            <Image source={require('../../assets/icones/heart.png')} style={styles.button} />
          </TouchableOpacity>
        </View>
        
      </View>
      
      <View style={styles.logoutButtonContainer}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Image source={require('../../assets/icones/logout.png')} style={styles.logoutIcon} />
          </TouchableOpacity>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
    
  },
  test:{
    position: 'absolute',
    top: 570,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius:20,
  },
  button: {
    width:32,
    height:32,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  logoutButton: {
    backgroundColor: 'transparent', // Pour rendre le bouton transparent
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
});
