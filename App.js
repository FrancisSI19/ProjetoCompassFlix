import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppRoutes from './src/routes/app.routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
    <Provider store={store}>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </Provider>
    </>
  )
}

export default App;
