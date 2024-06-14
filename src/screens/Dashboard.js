import React,{useState} from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import AnimalListScreen from './AnimalScreen/AnimalListScreen';
import AnimalDetailsScreen from './AnimalScreen/AnimalDetailsScreen';
import FavoriteAnimalsScreen from './AnimalScreen/FavoriteAnimalsScreen';
import AddAnimalScreen from './AnimalScreen/AddAnimalScreen';
import EditAnimalScreen from './AnimalScreen/EditAnimalScreen';
import { Ionicons } from '@expo/vector-icons';
import {theme,colors} from "../core/theme";

import store from '../store/store';
import { Text, Button, StyleSheet, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
const Stack = createStackNavigator();

export default function Dashboard({ navigation }) {
  const [currentScreen, setCurrentScreen] = useState('The Animal');
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    });
  };

  return (
    <Provider store={store} >
      <View style={styles.container}>
      <View style={styles.navigatorContainer}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            cardStyle: { backgroundColor: '#808080' },
            headerStyle: {
              backgroundColor:"#D0993c",
              borderBottomLeftRadius: 20, // Ajouter border radius en bas à gauche du header
              borderBottomRightRadius: 20, // Ajouter border radius en bas à droite du header
           
            },
            headerLeft: null,
            headerTitleStyle: {
              color: '#FFFFFF',

            },
            containerStyle: {
              backgroundColor: "#0000FF", // Couleur de l'arrière-plan pour toutes les pages
            },
          }}
        >
          <Stack.Screen name="The Animal" component={AnimalListScreen} />
          <Stack.Screen name="Details" component={AnimalDetailsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Favorites" component={FavoriteAnimalsScreen} />
          <Stack.Screen name="Add Animal" component={AddAnimalScreen} />
          <Stack.Screen name="Edit Animal" component={EditAnimalScreen} />
        </Stack.Navigator>
        </View>
        <View style={styles.test}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('The Animal')} style={styles.iconButton}>
              <Image source={require('../../assets/icones/home.png')} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Add Animal')} style={styles.iconButton}>
              <Image source={require('../../assets/icones/add.png')} style={styles.button} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.iconButton}>
              <Image source={require('../../assets/icones/heart.png')} style={styles.button} />
            </TouchableOpacity>
          </View>
        </View>
        
        {currentScreen !== 'Details' && (
          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Ionicons name="person" size={24} color="white" style={styles.logoutIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  navigatorContainer: {
    flex: 1,
    borderBottomLeftRadius: 20, // Ajouter border radius au bas gauche
    borderBottomRightRadius: 20, // Ajouter border radius au bas droit
    overflow: 'hidden', // Assurer que le contenu respecte le border radius
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
    position: "relative",
  },
  test: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(20px)',
    borderRadius: 20,
  },
  button: {
    width: 32,
    height: 32,
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 35,
    left: 3,
    

  },
  logoutButton: {
    backgroundColor: theme.colors.primary,
    width:40,
    height:40,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius:100,
     
  },
  iconButton: {
    backgroundColor: 'transparent', 
  },
  logoutIcon: {
    width: 24,
    height: 24,
  },
});
