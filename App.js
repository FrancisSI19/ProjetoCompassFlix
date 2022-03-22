import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import AppRoutes from './src/routes/app.routes';

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
