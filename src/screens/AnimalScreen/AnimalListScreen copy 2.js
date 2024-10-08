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
     /* <SafeAreaView />
      <View className="flex-row flex-1 p-4 bg-white rounded-2xl" style={styles.search}>
        <TextInput value="Search" className="ml-2"/>
      </View> 
       <View style={styles.container}>
        <FlatList
          data={animals}
          renderItem={({ item }) => (
            <View style={styles.cardBox} key={item.id}>
              <View style={styles.innerContainer}>
                <Image source={item.image} style={styles.img} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.color}>{item.color}</Text>
                  <MyButton title="O" onPress={() => handleAddToFavorites(item)} />
                  <MyButton title="details" onPress={() => handleAnimalPress(item)} />
                </View>
              </View>
            </View>
          )}
        />
      </View> */
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
              
              <View style={{
                display:"flex",
                
              }}>
                <Image source={item.image} style={styles.img} />
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
/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"relative",
    paddingHorizontal: 10,
  },
  cardBox: {
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Pour centrer verticalement
    paddingHorizontal: 10,
  },
  img: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  type: {
    fontSize: 14,
    marginTop: 5,
  },
  color: {
    fontSize: 14,
    marginTop: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }, 
});*/

export default AnimalListScreen;
