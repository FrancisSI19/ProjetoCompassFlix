import React from 'react';
import { StatusBar } from 'react-native';

import MovieDetails from './src/screens/MovieDetails';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle='dark-content' 
        backgroundColor='#fff' 
      />
      <MovieDetails />
    </>
  );
};

export default App;
