import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import Login from '../screens/Login';
import TabBar from '../TabBar';
const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
 <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen 
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="TabBar"
        component={TabBar}
      />

      
    </Stack.Navigator>
  );
}
export default AppRoutes;