import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppRoutes from './src/routes/app.routes';

const App = () => {
  return (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>

  );
};

export default App;
