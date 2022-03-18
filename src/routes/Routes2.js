import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';
import ListMovies from '../components/ListMovies';
const Stack = createNativeStackNavigator();

function Routes2() {
return (
    <Stack.Navigator screenOptions={{ headerShown: false, color:'#454545' }}>
      <Stack.Screen 
           options={{headerShown:false}}
           name="ListMovies"
           component={ListMovies}
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
   export default Routes2