import React from 'react';
import ListMovies from '../ListMovies'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ListMovies"
        component={ListMovies}
      />
  </Stack.Navigator>
  );
}