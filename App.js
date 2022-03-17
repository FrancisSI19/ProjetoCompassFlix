import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes';

import MovieDetails from './src/screens/MovieDetails';

const App = () => {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
  );
};

export default App;
