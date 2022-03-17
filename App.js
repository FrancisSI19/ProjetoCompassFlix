import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './src/screens/Login';
import Routes from './src/routes/index'

function App() {
  return (
    <NavigationContainer>
      < Routes/> 
    </NavigationContainer>

  );
};

export default App;

