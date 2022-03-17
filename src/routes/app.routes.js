import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import ListMovies from '../components/ListMovies';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
 <Stack.Navigator screenOptions={{ headerShown: false }}>
   {/* <Stack.Screen 
        options={{headerShown: true}}
        name="Login"
        component={Login}
      /> */}
      <Stack.Screen
        name="MovieList"
        component={ListMovies}
        options={{
          title: 'MovieList',
          headerTintColor: '#f0f0f0',
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
        }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          title: 'MovieDetails',
          headerTintColor: '#f0f0f0',
          headerStyle: {
            backgroundColor: '#1c1c1c',
            height: 300,
          },
        }}
      />
    </Stack.Navigator>
  );
}
export default AppRoutes;