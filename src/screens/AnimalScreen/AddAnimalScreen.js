import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addAnimal } from '../../store/reducers/animalSlice';

const AddAnimalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');

  const handleAddAnimal = () => {
    const newAnimal = { id: Date.now(), name, type, color };
    dispatch(addAnimal(newAnimal));
    navigation.navigate('AnimalList');
  };

  return (
    <View>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Type"
        value={type}
        onChangeText={(text) => setType(text)}
      />
      <TextInput
        placeholder="Couleur"
        value={color}
        onChangeText={(text) => setColor(text)}
      />
      <Button title="Ajouter" onPress={handleAddAnimal} />
    </View>
  );
};

export default AddAnimalScreen;
