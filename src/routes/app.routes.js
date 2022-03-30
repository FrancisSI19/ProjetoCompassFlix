import React from 'react';
import {Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import ListMovies from '../components/ListMovies';
import MovieDetails from '../screens/MovieDetails';
import FavoriteMovies from '../components/FavoriteMovies';
import Perfil from '../screens/Perfil'
import FavoriteSeries from '../components/FavoritesSeries';
import RatedMovies from '../components/ListRatedMovies';
import RatedSeries from '../components/ListRatedSeries';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Login"
        component={Login}
      />
      
      <Stack.Screen
        name="TabBar"
        component={Tabs}
      />

<Stack.Screen
        name="Perfil"
        component={Perfil}
      />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false, 
        headerShown: false, 
        tabBarActiveBackgroundColor: '#454545' 
      }}
    > 
      <Tab.Screen 
        options={{ 
          tabBarIcon: () =>  {
            return (
              <View style={{ 
                  padding: 10, 
                  borderRadius: 30,
                  backgroundColor: '#E9A6A6'

                }}
              >
                <Image style={{
                    width: 25,
                    height: 25,
                    backgroundColor: '#E9A6A6'
                  }}
                  source={require('../assets/img/movies.png')} 
                />
              </View>
            );
          }
        }}
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen 
        options={{ 
          tabBarIcon: () =>  {
            return (
              <View style={{ 
                  padding: 10, 
                  borderRadius: 30,
                  backgroundColor: '#E9A6A6'
                }}
              >
                <Image style={{
                    width: 25,
                    height: 25,
                  
                  }}
                  source={require('../assets/img/perfil.png')} 
                />
              </View>
            );
          }
        }}
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="ListMovies"
        component={ListMovies}
        TabBarcolor='#454545'
      />
   
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{
          title: 'MovieDetails',
          headerTintColor: '#f0f0f0',
          headerStyle: {
            backgroundColor: '#1c1c1c',
            height: 300
          }
        }}
      />
      <Stack.Screen 
        name="FavoriteMovies"
        component={FavoriteMovies}
        TabBarcolor='#454545'
      />
        <Stack.Screen 
        name="FavoriteSeries"
        component={FavoriteSeries}
        TabBarcolor='#454545'
      />
      <Stack.Screen 
        name="RatedMovies"
        component={RatedMovies}
        TabBarcolor='#454545'
      />

      <Stack.Screen 
        name="SeriesRated"
        component={RatedSeries}
        TabBarcolor='#454545'
      />
       
    </Stack.Navigator>
  );
}
