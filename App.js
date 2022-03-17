import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

import MovieDetails from './src/screens/MovieDetails';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
      <NavigationContainer>
        <Routes /> 
      </NavigationContainer>
    </>
  );
};

export default App;
