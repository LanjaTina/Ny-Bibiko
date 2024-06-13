import React from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnimals, addToFavorites } from '../../store/reducers/animalSlice';
import MyButton from '../../components/MyButton';
import TextInput from '../../components/TextInput';/* 
import {MagnifyingGlassIcon} from '@expo/vector-icons'; */
import { FontAwesome5 } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card'
import { TouchableOpacity } from 'react-native-gesture-handler';
const AnimalListScreen = ({ navigation }) => {
  const animals = useSelector(selectAnimals);
  const dispatch = useDispatch();

  const handleAnimalPress = (animal) => {
    navigation.navigate('AnimalDetails', { animal });
  };

  const handleAddToFavorites = (animal) => {
    dispatch(addToFavorites(animal));
  };

  return (
        <View style={{ flex:1,marginTop:20}}>
       
        <FlatList
        data={animals}
        numColumns={2}
        columnWrapperStyle={{gap:10, paddingHorizontal: 12}}
        contentContainerStyle={{gap:10,paddingBottom: 20}}
        keyExtractor={(item,idx) => item.name + idx}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            
            <TouchableOpacity
            style ={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"row",
              backgroundColor:"#dbdbe3",
              flex:1,
              height:200,
              width:160,
              borderRadius:20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
              <FlipCard
                style={styles.card}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false} // Assurez-vous que cette valeur soit à false pour démarrer en mode face avant
                clickable={true}
              >
              <View style={[styles.face, styles.faceFront]}>
                <Image source={item.image} style={styles.img}/>
                <View style={{
                  paddingTop:12,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <Text style={{color:"black" , marginLeft:5}}>{item.name}</Text>
                  <FontAwesome5 name="heart" size={20} color="red" onPress={() => handleAddToFavorites(item)} />
                </View>
              </View>

              <View style={[styles.face, styles.faceBack]}>
                <Text>Type: {item.type}</Text>
                <Text>Color: {item.color}</Text>
                <TouchableOpacity style={styles.detailsButton} onPress={() => handleAnimalPress(item)}>
                  <Text style={styles.detailsButtonText}>Details</Text>
                </TouchableOpacity>
              </View> 
            </FlipCard>
            
            </TouchableOpacity>
          );
        }}
        />
      </View>
  );
};
const styles = StyleSheet.create({
  img:{
    width:150,
    height:150,
    borderRadius:20,
    top:5,
    left:4.5,
  },
  card: {
    width: 160,
    height: 200,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal:10,
    paddingVertical: 5,
    marginBottom:20,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 35, // Adjust this value to add space for the icon
  },
})


export default AnimalListScreen;
