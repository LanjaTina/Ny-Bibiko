import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../store/reducers/animalSlice';

const { width } = Dimensions.get('window');

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
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Image source={animal.image1} style={styles.image} />
        <Image source={animal.image2} style={styles.image} />
        <Image source={animal.image3} style={styles.image} />
        <Image source={animal.image4} style={styles.image} />
      </ScrollView>
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
  },
  scrollView: {
    height: 300, // Adjust height as necessary
    width: '100%',
  },
  image: {
    width: width,
    height: 300, // Adjust height as necessary
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AnimalDetailsScreen;
