// CardStyles.js

import { StyleSheet } from 'react-native';

export const cardStyles = StyleSheet.create({
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
    top: 5,
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
});
