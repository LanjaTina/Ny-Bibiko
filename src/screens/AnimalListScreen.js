import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Button ,SafeAreaView , StyleSheet, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnimals, addToFavorites } from '../store/reducers/animalSlice';
import MyButton from '../components/MyButton';

const animals = [
  { id: 1, type: 'Chat', name: 'Minou', color: 'Noir', image: '../assets/chien.jpg' },
  { id: 2, type: 'Chien', name: 'Rex', color: 'Marron', image: `require('../assets/logo.png')` },
];

const AnimalListScreen = ({ navigation }) => {
  
  const animals = useSelector(selectAnimals);
  const dispatch = useDispatch();

  const handleAnimalPress = (animal) => {
    navigation.navigate('AnimalDetails', { animal });
  };

  const handleAddToFavorites = (animal) => {
    dispatch(addToFavorites(animal));
  };
  return (
    
    <View style={styles.mainContainer}>
    <SafeAreaView />
    <View style={styles.container}>
      <FlatList
        data={animals}
        style={styles.flatlistStyle}
        renderItem={({item}) => {
          return (
            <View style={styles.cardBox} key={item.id}>
              <View style={styles.innerContainer}>
                <Image source={require('../assets/chien.jpg')} style={styles.img} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.color}>{item.color}</Text>
                  <MyButton title="O" onPress={() => handleAddToFavorites(item)} />
                </View>
              </View>
            </View>

          );
        }}
      />
    </View>
  </View>
    /* <View>
      <FlatList
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAnimalPress(item)}>
            <Text>{item.name}</Text>
            <Button title="Ajouter aux favoris" onPress={() => handleAddToFavorites(item)} />
          </TouchableOpacity>
          
        )}
        keyExtractor={item => item.id.toString()}
      />
      
    </View> */

  );
};

export default AnimalListScreen;
const styles = StyleSheet.create({
  cardBox: {
    marginBottom: 30,
    backgroundColor: 'white',
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Pour centrer verticalement
    paddingHorizontal: 10,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  type: {
    fontSize: 14,
    marginTop: 5,
  },
  color: {
    fontSize: 14,
    marginTop: 5,
  },
  but: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
