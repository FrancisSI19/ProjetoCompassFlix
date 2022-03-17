import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';
import ListMovies from '../components/ListMovies';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="MovieList">
      <Stack.Screen
        name="MovieList"
        component={ListMovies}
        options={{
          headerShown: false,
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
          headerShown: false,
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
