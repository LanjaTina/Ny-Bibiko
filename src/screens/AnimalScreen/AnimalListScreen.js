import React, { useState, useRef } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnimals, selectFavorites, addToFavorites, removeFromFavorites } from '../../store/reducers/animalSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import CardFlip from 'react-native-card-flip';
import { useNavigation } from '@react-navigation/native';
import {theme} from "../../core/theme"

const AnimalListScreen = () => {
  const animals = useSelector(selectAnimals);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef({});

  const handleAnimalPress = (animal) => {
    navigation.navigate('Details', { animal });
  };

  const handleAddToFavorites = (animal) => {
    if (favorites.some(favAnimal => favAnimal.id === animal.id)) {
      dispatch(removeFromFavorites(animal.id));
    } else {
      dispatch(addToFavorites(animal));
    }
  };

  const handleCardFlip = (index) => {
    if (flippedCard !== null && flippedCard !== index) {
      cardRefs.current[flippedCard].flip();
    }
    cardRefs.current[index].flip();
    setFlippedCard(flippedCard === index ? null : index);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.cardContainer}>
      <CardFlip
        style={styles.cardFlip}
        ref={(card) => (cardRefs.current[index] = card)}
        duration={1000}
      >
        {/* Face avant */}
        <TouchableOpacity
          style={[styles.card, styles.cardFront]}
          activeOpacity={1}
          onPress={() => handleCardFlip(index)}
        >
          <Image source={item.image} style={styles.img} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <FontAwesome5
              name={favorites.some(favAnimal => favAnimal.id === item.id) ? 'heart' : 'heart'}
              solid={favorites.some(favAnimal => favAnimal.id === item.id)}
              style={[
                styles.heartIcon,
                favorites.some(favAnimal => favAnimal.id === item.id) ? { color: '#cd3b25' } : { color: '#cd3b25' }
              ]}
              size={20}
              onPress={() => handleAddToFavorites(item)}
            />
          </View>
        </TouchableOpacity>

        {/* Face arrière */}
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.cardBack]}
          onPress={() => handleCardFlip(index)}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.name} :</Text>
          <Text style={styles.backText}>{item.miniDescription}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleAnimalPress(item)}>
            <Text style={styles.textbutton}>Details</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </CardFlip>
    </View>
  );

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlatList
        data={animals}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 10, paddingBottom: 100 }}
        keyExtractor={(item, idx) => item.name + idx}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cardFlip: {
    width: 160,
    height: 180,
  },
  card: {
    width: 160,
    height: 180,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardFront: {
    backgroundColor: '#dbdbe3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
    top: 5
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
    right: 20,
  },
  backText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  heartIcon: {
    marginRight: 15,
    left: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textbutton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimalListScreen;
