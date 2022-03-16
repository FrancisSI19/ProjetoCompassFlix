
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
<<<<<<< HEAD
import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
=======
import { View } from 'react-native';
import ListMovies from './src/components/ListMovies';

const App = () => {
  return (
    <View><ListMovies /></View>
>>>>>>> origin/ListMovies
  );
};


export default App;