import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeAnimal } from '../../store/reducers/animalSlice';
import {theme} from "../../core/theme"

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

  const handleThumbnailPress = (index) => {
    setActiveIndex(index);
    scrollViewRef.current.scrollTo({ x: index * width, animated: true });
  };

  const images = [animal.image1, animal.image2, animal.image3, animal.image4];
  const scrollViewRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
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
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleThumbnailPress(index)}>
            <Image
              source={image}
              style={[
                styles.thumbnail,
                index === activeIndex ? styles.activeThumbnail : styles.inactiveThumbnail,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.textName}>{animal.name}</Text>
      <View style={{
        backgroundColor:theme.colors.secondary,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

      }}>
        <Text style={styles.text}>Type: {animal.type}</Text>
        <Text style={styles.text}>Couleur: {animal.color}</Text>
        <Text style={styles.text}>{animal.description}</Text>
      </View>
      
      {/* <Button title="Modifier" onPress={handleEdit} />
      <Button title="Supprimer" onPress={handleDelete} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    height: 300, 
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    width: width,
    height: 250, 
    resizeMode: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeThumbnail: {
    borderWidth: 2,
    borderColor: '#000',
  },
  inactiveThumbnail: {
    borderWidth: 2,
    borderColor: 'transparent',
  },
  text: {
    fontSize: 18,
    color:"white",
    marginVertical: 10,
  },
  textName: {
    color:"white",
    fontWeight:"bold",
    fontSize: 30,
    marginVertical: 10,
  },
});

export default AnimalDetailsScreen;
