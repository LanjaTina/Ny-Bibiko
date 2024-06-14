import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../store/reducers/animalSlice';

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
    <View style={styles.container}>
      <Image source={animal.image} style={styles.image} />
      <Text style={styles.text}>Nom: {animal.name}</Text>
      <Text style={styles.text}>Type: {animal.type}</Text>
      <Text style={styles.text}>Couleur: {animal.color}</Text>
      <Text style={styles.text}>Description: {animal.description}</Text>
      <Button title="Modifier" onPress={handleEdit} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AnimalDetailsScreen;
