import { createSlice } from '@reduxjs/toolkit';
const initialAnimals = [
  { 
    id: 1, 
    type: 'Chat', 
    name: 'RagDoll', 
    color: 'Noir', 
    image1: require('../../../assets/Animal/RagDoll/Ragdoll1.jpg'),
    image2: require('../../../assets/Animal/RagDoll/Ragdoll2.jpg'),
    image3: require('../../../assets/Animal/RagDoll/Ragdoll3.jpg'),
    image4: require('../../../assets/Animal/RagDoll/Ragdoll4.jpg'),
    miniDescription: 'Chat au poil long et doux, calme et affectueux.',
    description: 'Le Ragdoll est une race de chat connue pour son caractère doux et ses grands yeux bleus. Il est réputé pour sa docilité et son attachement à ses propriétaires. Le Ragdoll a un pelage long et soyeux qui nécessite un brossage régulier pour éviter les nœuds.'
  },
  { 
    id: 2, 
    type: 'Chat', 
    name: 'Siamois', 
    color: 'Beige', 
    image1: require('../../../assets/Animal/Siamois/Siamois1.jpg'),
    image2: require('../../../assets/Animal/Siamois/Siamois2.jpg'),
    image3: require('../../../assets/Animal/Siamois/Siamois3.jpg'),
    image4: require('../../../assets/Animal/Siamois/Siamois4.jpg'),
    miniDescription: 'Chat élégant au corps svelte et au visage pointu.',
    description: 'Le Siamois est une race de chat originaire de Thaïlande. Il se distingue par son corps svelte, ses grandes oreilles et ses yeux en amande d\'un bleu intense. Les Siamois sont réputés pour être bavards et avoir un fort caractère.'
  },
  { 
    id: 3, 
    type: 'Chien', 
    name: 'Berger', 
    color: 'Marron', 
    image1: require('../../../assets/Animal/Berger/Berger1.jpg'),
    image2: require('../../../assets/Animal/Berger/Berger2.jpg'),
    image3: require('../../../assets/Animal/Berger/Berger3.jpg'),
    image4: require('../../../assets/Animal/Berger/Berger4.jpg'),
    miniDescription: 'Chien de taille moyenne, intelligent et dévoué.',
    description: 'Le Berger est une race de chien connue pour sa loyauté et son intelligence. Ils sont souvent utilisés comme chiens de travail, y compris comme chiens de berger pour le bétail. Les Bergers sont énergiques et ont besoin d\'exercice quotidien.'
  },
  { 
    id: 4, 
    type: 'Chien', 
    name: 'Labrador', 
    color: 'Doré', 
    image1: require('../../../assets/Animal/Labrador/Labrador1.jpg'),
    image2: require('../../../assets/Animal/Labrador/Labrador2.jpg'),
    image3: require('../../../assets/Animal/Labrador/Labrador3.jpg'),
    image4: require('../../../assets/Animal/Labrador/Labrador4.jpg'),
    miniDescription: 'Chien fidèle et amical, idéal pour la famille.',
    description: "Le Labrador Retriever est une race de chien réputée pour sa nature amicale, sa tolérance et sa capacité à s'entendre avec les enfants et autres animaux. Ils sont également très intelligents et faciles à entraîner."
  },
  { 
    id: 5, 
    type: 'Oiseau', 
    name: 'Perroquet', 
    color: 'Multicolore', 
    image1: require('../../../assets/Animal/Perroquet/Perroquet1.jpg'),
    image2: require('../../../assets/Animal/Perroquet/Perroquet2.jpg'),
    image3: require('../../../assets/Animal/Perroquet/Perroquet3.jpg'),
    image4: require('../../../assets/Animal/Perroquet/Perroquet4.jpg'),
    miniDescription: 'Oiseau exotique coloré et intelligent.',
    description: 'Le perroquet est un oiseau très intelligent et social, connu pour sa capacité à imiter les sons et les paroles humaines. Il existe de nombreuses espèces de perroquets, chacune ayant ses propres couleurs vives et comportements distinctifs.'
  },
  { 
    id: 6, 
    type: 'Oiseau', 
    name: 'Aigle', 
    color: 'Verte', 
    image1: require('../../../assets/Animal/Aigle/Aigle1.jpg'),
    image2: require('../../../assets/Animal/Aigle/Aigle2.jpg'),
    image3: require('../../../assets/Animal/Aigle/Aigle3.jpg'),
    image4: require('../../../assets/Animal/Aigle/Aigle4.jpg'),
    miniDescription: 'Rapace majestueux et symbole de liberté.',
    description: 'L\'aigle est un grand rapace avec une vision exceptionnelle et une capacité de vol impressionnante. Il est souvent considéré comme un symbole de puissance, de liberté et de vision claire. Les aigles sont carnivores et chassent principalement d\'autres animaux.'
  },
  { 
    id: 7, 
    type: 'Cheval', 
    name: 'Pur-sang', 
    color: 'Marron', 
    image1: require('../../../assets/Animal/Pur-Sang/Pursang1.jpg'),
    image2: require('../../../assets/Animal/Pur-Sang/Pursang2.jpg'),
    image3: require('../../../assets/Animal/Pur-Sang/Pursang3.jpg'),
    image4: require('../../../assets/Animal/Pur-Sang/Pursang4.jpg'),
    miniDescription: 'Cheval de course rapide et élégant.',
    description: 'Le Pur-sang est une race de cheval connue pour sa vitesse, son agilité et sa grâce. Ils sont largement utilisés dans les courses de chevaux et sont appréciés pour leur puissance et leur endurance. Les Pur-sang sont également utilisés comme chevaux de sport et de loisir.'
  },
  { 
    id: 8, 
    type: 'Cheval', 
    name: 'Shetland', 
    color: 'Noir et blanc', 
    image1: require('../../../assets/Animal/Shetland/Shetland1.jpg'),
    image2: require('../../../assets/Animal/Shetland/Shetland2.jpg'),
    image3: require('../../../assets/Animal/Shetland/Shetland3.jpg'),
    image4: require('../../../assets/Animal/Shetland/Shetland4.jpg'),
    miniDescription: 'Poney robuste et intelligent, idéal pour les enfants.',
    description: "Le Shetland est une race de poney originaire des Îles Shetland en Écosse. Ils sont connus pour leur robustesse, leur intelligence et leur taille réduite. Les Shetlands sont populaires comme poneys de compagnie et sont souvent utilisés pour l'équitation des enfants."
  },
  { 
    id: 9, 
    type: 'Lapin', 
    name: 'Angora', 
    color: 'Blanc', 
    image1: require('../../../assets/Animal/Angora/Angora1.jpg'),
    image2: require('../../../assets/Animal/Angora/Angora2.jpg'),
    image3: require('../../../assets/Animal/Angora/Angora3.jpg'),
    image4: require('../../../assets/Animal/Angora/Angora4.jpg'),
    miniDescription: 'Lapin au pelage long et doux, nécessitant un entretien régulier.',
    description: 'L\'Angora est une race de lapin connue pour son pelage long, soyeux et doux. Ils nécessitent un brossage régulier pour éviter les nœuds et les boules de poils. Les Angoras sont appréciés pour leur apparence élégante et leur nature douce.'
  },
  { 
    id: 10, 
    type: 'Lapin', 
    name: 'Belier', 
    color: 'Marron et blanc', 
    image1: require('../../../assets/Animal/Belier/Belier1.jpg'),
    image2: require('../../../assets/Animal/Belier/Belier2.jpg'),
    image3: require('../../../assets/Animal/Belier/Belier3.jpg'),
    image4: require('../../../assets/Animal/Belier/Belier4.jpg'),
    miniDescription: 'Lapin au tempérament doux et aux grandes oreilles.',
    description: 'Le Belier est une race de lapin caractérisée par ses grandes oreilles tombantes et son tempérament doux. Ils sont populaires comme animaux de compagnie en raison de leur nature calme et affectueuse. Les Beliers sont originaires de France et sont élevés pour leur viande et leur laine.'
  },
  { 
    id: 11, 
    type: 'Félin', 
    name: 'Lion', 
    color: 'Jaune', 
    image1: require('../../../assets/Animal/Lion/Lion1.jpg'),
    image2: require('../../../assets/Animal/Lion/Lion2.jpg'),
    image3: require('../../../assets/Animal/Lion/Lion3.jpg'),
    image4: require('../../../assets/Animal/Lion/Lion4.jpg'),
    miniDescription: 'Grand félin majestueux, roi de la savane africaine.',
    description: 'Le Lion est un grand félin connu pour sa crinière distinctive et sa stature majestueuse. Ils vivent principalement en Afrique et sont considérés comme des prédateurs apex dans leur habitat naturel. Les Lions vivent en groupes sociaux appelés fiertés.'
  },
  { 
    id: 12, 
    type: 'Félin', 
    name: 'Tigre', 
    color: 'Orange et noir', 
    image1: require('../../../assets/Animal/Tigre/Tigre1.jpg'),
    image2: require('../../../assets/Animal/Tigre/Tigre2.jpg'),
    image3: require('../../../assets/Animal/Tigre/Tigre3.jpg'),
    image4: require('../../../assets/Animal/Tigre/Tigre4.jpg'),
    miniDescription: 'Grand félin rayé, symbole de force et de puissance.',
    description: "Le Tigre est un grand félin caractérisé par son pelage rayé et sa musculature puissante. Il est le plus grand des grands félins et est connu pour sa force et son agilité. Les Tigres sont des prédateurs solitaires qui chassent principalement les gros mammifères."
  },
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
      const animalToAdd = action.payload;
      if (!state.favorites.find(animal => animal.id === animalToAdd.id)) {
        state.favorites.push(animalToAdd);
      }
    },
    removeFromFavorites: (state, action) => {
      const animalToRemoveId = action.payload;
      state.favorites = state.favorites.filter(animal => animal.id !== animalToRemoveId);
    },
  },
});

export const { addAnimal, removeAnimal, selectAnimal, addToFavorites, removeFromFavorites,updateAnimal,updateAnimalImage } = animalSlice.actions;

export const selectAnimals = state => state.animals.list;
export const selectSelectedAnimal = state => state.animals.selectedAnimal;
export const selectFavorites = state => state.animals.favorites;

export default animalSlice.reducer;
