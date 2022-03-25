import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import FavoriteMovies from './src/components/FavoriteMovies';

import AppRoutes from './src/routes/app.routes';
import MoviesFavorites from './src/screens/MoviesFavorites';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <NavigationContainer>
        {/*<AppRoutes/>*/}
       <FavoriteMovies/>
      </NavigationContainer>
    </>
  );
};

export default App;
