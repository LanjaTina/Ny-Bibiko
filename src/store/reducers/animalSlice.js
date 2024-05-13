// animalSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Données factices pour les animaux
const initialAnimals = [
  { id: 1, type: 'Chat', name: 'Minou', color: 'Noir', image: 'url_de_l_image' },
  { id: 2, type: 'Chien', name: 'Rex', color: 'Marron', image: 'url_de_l_image' },
  // Ajoutez plus d'animaux selon vos besoins
];

export const animalSlice = createSlice({
  name: 'animals',
  initialState: {
    list: initialAnimals, // Utilisez les données factices comme état initial
    selectedAnimal: null,
    favorites: [],
  },
  reducers: {
    addAnimal: (state, action) => {
      state.list.push(action.payload);
    },
    removeAnimal: (state, action) => {
      state.list = state.list.filter(animal => animal.id !== action.payload);
    },
    updateAnimal: (state, action) => {
      const { id, updatedAnimal } = action.payload;
      const index = state.list.findIndex(animal => animal.id === id);
      if (index !== -1) {
        state.list[index] = updatedAnimal;
      }
    },
    selectAnimal: (state, action) => {
      state.selectedAnimal = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(animal => animal.id !== action.payload);
    },
  },
});

export const { addAnimal, removeAnimal, selectAnimal, addToFavorites, removeFromFavorites,updateAnimal } = animalSlice.actions;

export const selectAnimals = state => state.animals.list;
export const selectSelectedAnimal = state => state.animals.selectedAnimal;
export const selectFavorites = state => state.animals.favorites;

export default animalSlice.reducer;
