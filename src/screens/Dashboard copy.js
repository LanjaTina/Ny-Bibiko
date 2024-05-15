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
import { SafeAreaView } from 'react-native-safe-area-context';
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
      <ImageBackground blurRadius={20} source={require("../../assets/background.jpg")} style={styles.backgroundImage}>
        <View style={styles.container}>
          <SafeAreaView>
            <View>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Image source={require('../../assets/icones/logout.png')} className="h-12 w-12" />
            </TouchableOpacity>
            </View>
          </SafeAreaView>
          {/* <Stack.Navigator>
            <Stack.Screen name="AnimalList" component={AnimalListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="AnimalDetails" component={AnimalDetailsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="FavoriteAnimalsScreen" component={FavoriteAnimalsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="AddAnimalScreen" component={AddAnimalScreen}options={{ headerShown: false }} />
            <Stack.Screen name="EditAnimalScreen" component={EditAnimalScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
          <View style={styles.buttonContainer}>
            <Button title="Ajouter" style={styles.button} onPress={() => navigation.navigate('AddAnimalScreen')} />
            <Button title="Voir Favoris" style={styles.button} onPress={() => navigation.navigate('FavoriteAnimalsScreen')} />
          </View>
          <View style={styles.logoutButtonContainer}>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Image source={require('../../assets/icones/logout.png')} style={styles.logoutIcon} />
            </TouchableOpacity>
          </View> */}
        </View>
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute', 
    paddingHorizontal: 10,
    backgroundColor:'transparent',
  },
  buttonContainer: {
    position:"absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4A4653',
  },
  logoutButtonContainer: {
    left: 1500,
    position:"absolute",
  },
  logoutButton: {
    backgroundColor: 'transparent', // Pour rendre le bouton transparent
    
    
  },
  logoutIcon: {
    
    width: 30,
    height: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
