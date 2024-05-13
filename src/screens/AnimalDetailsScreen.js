import React from 'react';
import { View, Text, Image } from 'react-native';

const AnimalDetailsScreen = ({ route }) => {
  const { animal } = route.params; // Récupérer l'animal des paramètres de navigation

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: animal.image }} style={{ width: 200, height: 200 }} />
      <Text>Type: {animal.type}</Text>
      <Text>Nom: {animal.name}</Text>
      <Text>Couleur: {animal.color}</Text>
    </View>
  );
};

export default AnimalDetailsScreen;
