import React, { useState, useRef } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnimals, addToFavorites } from '../../store/reducers/animalSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import CardFlip from 'react-native-card-flip';

const AnimalListScreen = ({ navigation }) => {
  const animals = useSelector(selectAnimals);
  const dispatch = useDispatch();

  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef({});

  const handleAnimalPress = (animal) => {
    navigation.navigate('AnimalDetails', { animal });
  };

  const handleAddToFavorites = (animal) => {
    dispatch(addToFavorites(animal));
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
          onPress={() => handleCardFlip(index)}
        >
          <Image source={item.image} style={styles.img} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <FontAwesome5 name="heart" style={styles.heartIcon} size={20} color="#cd3b25" onPress={() => handleAddToFavorites(item)} />
          </View>
        </TouchableOpacity>

        {/* Face arrière */}
        <TouchableOpacity
          style={[styles.card, styles.cardBack]}
          onPress={() => handleCardFlip(index)}
        >
          <Text style={styles.backText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
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
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        keyExtractor={(item, idx) => item.name + idx}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
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
    top:5
    
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingHorizontal: 10,
    
  },
  name: {
    fontSize:18,
    marginLeft: 10,
    fontWeight: 'bold',
    right:20,
  },
  backText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  heartIcon: {
    marginRight: 15,
    left:20,
  },
});

export default AnimalListScreen;

