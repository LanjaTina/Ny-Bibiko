import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../store/reducers/animalSlice';

const { width } = Dimensions.get('window');

const AnimalDetailsScreen = ({ route, navigation }) => {
  const { animal } = route.params;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDelete = () => {
    dispatch(removeAnimal(animal.id));
    navigation.goBack();
  };

  const handleEdit = () => {
    navigation.navigate('EditAnimalScreen', { animal });
  };

  const handleScroll = (event) => {
    const slideIndex = Math.ceil(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  const images = [animal.image1, animal.image2, animal.image3, animal.image4];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex ? styles.activeIndicator : styles.inactiveIndicator,
            ]}
          />
        ))}
      </View>
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: width,
    height: 300, // Adjust height as necessary
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  inactiveIndicator: {
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default AnimalDetailsScreen;
