import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import AppRoutes from './src/routes/app.routes';

import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
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
