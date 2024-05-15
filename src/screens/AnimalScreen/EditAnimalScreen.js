import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateAnimal } from '../../store/reducers/animalSlice';
import { useNavigation } from '@react-navigation/native';

const EditAnimalScreen = ({ route }) => {
  const { animal, image } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState(animal.name);
  const [type, setType] = useState(animal.type);
  const [color, setColor] = useState(animal.color);

  const handleSubmit = () => {
    const updatedAnimal = {
      ...animal,
      name,
      type,
      color,
    };

    dispatch(updateAnimal({ id: animal.id, updatedAnimal }));
    navigation.navigate('AnimalList');
  };

  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.animalImage} />}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom de l'animal"
      />
      <TextInput
        style={styles.input}
        value={type}
        onChangeText={setType}
        placeholder="Type de l'animal"
      />
      <TextInput
        style={styles.input}
        value={color}
        onChangeText={setColor}
        placeholder="Couleur de l'animal"
      />
      <Button title="Enregistrer" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  animalImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default EditAnimalScreen;
