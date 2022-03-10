import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes';

import Login from './src/screens/Login';

const App = () => {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
  );
};

export default App;
