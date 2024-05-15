import { createSlice } from '@reduxjs/toolkit';
const initialAnimals = [
  { id: 1, type: 'Chat', name: 'Minou', color: 'Noir', image: require('../../../assets/chien.jpg') },
  { id: 2, type: 'Chien', name: 'Rex', color: 'Marron', image: require('../../../assets/chien.jpg') },
];

export const animalSlice = createSlice({
  name: 'animals',
  initialState: {
    list: initialAnimals,
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
    updateAnimalImage: (state, action) => {
      const { id, image } = action.payload;
      const animalToUpdate = state.list.find(animal => animal.id === id);
      if (animalToUpdate) {
        animalToUpdate.image = image;
      }
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

export const { addAnimal, removeAnimal, selectAnimal, addToFavorites, removeFromFavorites,updateAnimal,updateAnimalImage } = animalSlice.actions;

export const selectAnimals = state => state.animals.list;
export const selectSelectedAnimal = state => state.animals.selectedAnimal;
export const selectFavorites = state => state.animals.favorites;

export default animalSlice.reducer;
