import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addAnimal } from '../../store/reducers/animalSlice';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const AddAnimalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState(null);

  const handleAddAnimal = () => {
    const newAnimal = { id: Date.now(), name, type, color, image };
    dispatch(addAnimal(newAnimal));
    navigation.navigate('AnimalList');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Ionicons name="add-circle-outline" size={40} color="black" />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Type"
          value={type}
          onChangeText={(text) => setType(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Couleur"
          value={color}
          onChangeText={(text) => setColor(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ajouter" onPress={handleAddAnimal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  imagePicker: {
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
  },
});

export default AddAnimalScreen;
