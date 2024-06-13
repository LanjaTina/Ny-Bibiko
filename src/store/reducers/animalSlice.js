import { createSlice } from '@reduxjs/toolkit';
const initialAnimals = [
  { id: 1, type: 'Chat', name: 'RagDoll', color: 'Noir', image: require('../../../assets/Animal/RagDoll/Ragdoll1.jpeg') },
  { id: 2, type: 'Chat', name: 'Siamois', color: 'Beige', image: require('../../../assets/Animal/Siamois/Siamois4.jpg') },
  { id: 3, type: 'Chien', name: 'Berger', color: 'Marron', image: require('../../../assets/Animal/Berger/Berger1.jpg') },
  { id: 4, type: 'Chien', name: 'Labrador', color: 'Doré', image: require('../../../assets/Animal/Labrador/Labrador1.jpg') },
  { id: 5, type: 'Oiseau', name: 'Perroquet', color: 'Multicolore', image: require('../../../assets/Animal/Perroquet/Perroquet1.jpg') },
  { id: 6, type: 'Oiseau', name: 'Aigle', color: 'Verte', image: require('../../../assets/Animal/Aigle/Aigle1.jpg') },
  { id: 7, type: 'Cheval', name: 'Pur-sang', color: 'Marron', image: require('../../../assets/Animal/Pur-Sang/Pursang1.jpg') },
  { id: 8, type: 'Cheval', name: 'Shetland', color: 'Noir et blanc', image: require('../../../assets/Animal/Shetland/Shetland1.jpg') },
  { id: 9, type: 'Lapin', name: 'Angora', color: 'Blanc', image: require('../../../assets/Animal/Angora/Angora1.jpeg') },
  { id: 10, type: 'Lapin', name: 'Belier', color: 'Marron et blanc', image: require('../../../assets/Animal/Belier/Belier1.jpg') },
  { id: 11, type: 'Félin', name: 'Lion', color: 'Jaune', image: require('../../../assets/Animal/Lion/Lion1.jpg') },
  { id: 12, type: 'Félin', name: 'Tigre', color: 'Orange et noir', image: require('../../../assets/Animal/Tigre/Tigre1.jpg') },
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
