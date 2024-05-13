import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnimals, addToFavorites } from '../store/reducers/animalSlice';

const animals = [
  { id: 1, type: 'Chat', name: 'Minou', color: 'Noir', image: 'url_de_l_image' },
  { id: 2, type: 'Chien', name: 'Rex', color: 'Marron', image: 'url_de_l_image' },
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
    <View>
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
      
    </View>
  );
};

export default AnimalListScreen;
