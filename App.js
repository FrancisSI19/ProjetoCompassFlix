import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

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
