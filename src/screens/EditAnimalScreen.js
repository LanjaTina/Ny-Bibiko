// EditAnimalScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAnimal } from '../store/reducers/animalSlice';
import { useNavigation } from '@react-navigation/native';
const EditAnimalScreen = ({ route, navigation }) => {
  const { animal } = route.params;
  const navigations = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState(animal.name);
  const [type, setType] = useState(animal.type);
  const [color, setColor] = useState(animal.color);

  const handleSubmit = () => {
    const updatedAnimal = {
      ...animal,
      name: name,
      type: type,
      color: color,
    };

    dispatch(updateAnimal({ id: animal.id, updatedAnimal: updatedAnimal }));
    navigations.navigate('AnimalList');
    /* navigation.goBack(); */
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Nom de l'animal" />
      <TextInput value={type} onChangeText={setType} placeholder="Type de l'animal" />
      <TextInput value={color} onChangeText={setColor} placeholder="Couleur de l'animal" />
      <Button title="Enregistrer" onPress={handleSubmit} />
    </View>
  );
};

export default EditAnimalScreen;
