import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import Login from '../screens/Login';
import ListMovies from '../components/ListMovies';
import ListTVShows from '../components/ListTVShows';
import MovieDetails from '../screens/MovieDetails';
import FavoriteMovies from '../components/FavoriteMovies';
import Perfil from '../screens/Perfil'
import FavoriteSeries from '../components/FavoritesSeries';
import RatedMovies from '../components/ListRatedMovies';


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
        name="ListTVShows"
        component={ListTVShows}
        // TabBarcolor='#454545'
      />

      <Stack.Screen
        name="ListMovies"
        component={ListMovies}
        // TabBarcolor='#454545'
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
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#454545'
        },
        tabBarIcon: ({ focused }) => {
          let tabName;
          let bgColor;

          if (route.name === 'HomeStack') {
            tabName = 'home';
          } else if (route.name === 'Profile') {
            tabName = 'profile';
          }

          if (focused) {
            bgColor = '#E9A6A6';
          } else {
            bgColor = '#454545';
          }

          // return <TabBarIcon tabName={tabName} bgColor={bgColor} />
        }
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: () => {
            return (
              <View style={{
                padding: 10,
                borderRadius: 50,
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
      />
      <Tab.Screen
        name="Profile"
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
      />

      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
      />
      <Stack.Screen
        name="FavoriteMovies"
        component={FavoriteMovies}
      />
        <Stack.Screen 
        name="FavoriteSeries"
        component={FavoriteSeries}
        TabBarcolor='#454545'
      />
      <Stack.Screen 
        name="FilmesAvaliados"
        component={RatedMovies}
        TabBarcolor='#454545'
      />
       
    </Stack.Navigator>
  );
}
