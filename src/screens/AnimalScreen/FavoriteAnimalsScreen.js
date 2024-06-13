// FavoriteAnimalsScreen.js

import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../store/reducers/animalSlice';

const FavoriteAnimalsScreen = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View >
            <Text style={{color:"white"}}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default FavoriteAnimalsScreen;
