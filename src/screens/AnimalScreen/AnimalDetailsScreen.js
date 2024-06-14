import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeAnimal, addToFavorites, removeFromFavorites, selectFavorites } from '../../store/reducers/animalSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { theme } from '../../core/theme';

const { width } = Dimensions.get('window');

const AnimalDetailsScreen = ({ route, navigation }) => {
  const { animal } = route.params;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const favorites = useSelector(selectFavorites);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const scrollViewRef = useRef(null);

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

  const handleAddToFavorites = (animal) => {
    if (favorites.some(favAnimal => favAnimal.id === animal.id)) {
      dispatch(removeFromFavorites(animal.id));
    } else {
      dispatch(addToFavorites(animal));
      setShowHeartAnimation(true); // Activer l'animation de cœur
      setTimeout(() => setShowHeartAnimation(false), 4000); // Désactiver après 2 secondes
    }
  };

  const images = [animal.image1, animal.image2, animal.image3, animal.image4];

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
      <View style={styles.descriptionContainer}>
        <Text style={styles.textDescription}>{animal.description}</Text>
        <Text style={styles.text}><Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>Type:</Text> {animal.type}</Text>
        <Text style={styles.text}><Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>Couleur:</Text> {animal.color}</Text>
        
          <FontAwesome5
            name={favorites.some(favAnimal => favAnimal.id === animal.id) ? 'heart' : 'heart'}
            solid={favorites.some(favAnimal => favAnimal.id === animal.id)}
            style={[
              styles.heartIcon,
              favorites.some(favAnimal => favAnimal.id === animal.id) ? { color: '#cd3b25' } : { color: '#cd3b25' }
            ]}
            size={25}
            onPress={() => handleAddToFavorites(animal)}
          />
        {showHeartAnimation && (
          <LottieView
            source={require('../../../assets/heart.json')}
            autoPlay
            loop={false}
            style={styles.heartAnimation}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    height: 250,
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    color: 'white',
    marginVertical: 10,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  textDescription: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  textName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
  descriptionContainer: {
    backgroundColor: theme.colors.secondary,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: '20%',
    width: '100%',
    paddingBottom: 10,
    paddingHorizontal: 20,
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  heartAnimation: {
    position: 'absolute',
    bottom: -50,
    right: 0,
    width: "100%",
    height: "100%",
  },
});

export default AnimalDetailsScreen;
