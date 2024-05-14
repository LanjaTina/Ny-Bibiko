// AnimalDetailsScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAnimal  } from '../../store/reducers/animalSlice';

const AnimalDetailsScreen = ({ route, navigation }) => {
  const { animal } = route.params;
  
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeAnimal(animal.id));
    navigation.goBack();
  };
  const handleEdit = () => {
    navigation.navigate('EditAnimalScreen', { animal });
  };

  return (
    <View>
      <Text>Nom: {animal.name}</Text>
      <Text>Type: {animal.type}</Text>
      <Text>Couleur: {animal.color}</Text>
      <Button title="Modifier" onPress={handleEdit} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
};

export default AnimalDetailsScreen;
