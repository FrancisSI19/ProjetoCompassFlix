import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="MovieList">
      <Stack.Screen
        name="MovieList"
        component={MovieList}
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
