import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import FavoriteMovies from './src/components/FavoriteMovies';
import RatedMovies from './src/components/ListRatedMovies';

import AppRoutes from './src/routes/app.routes';
import MoviesFavorites from './src/screens/MoviesFavorites';
import RatedMovieList from './src/screens/MoviesRate';


import Perfil from './src/screens/Perfil';
const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <NavigationContainer>
        
      <AppRoutes/>
      </NavigationContainer>
    </>
  );
};

export default App;
