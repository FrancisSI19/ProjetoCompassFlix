import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import ListMovies from '../components/ListMovies';
import MovieDetails from '../screens/MovieDetails';
import FavoriteMovies from '../components/FavoriteMovies';
import FavoritesSeries from '../components/FavoritesSeries';
import TabBarIcon from '../components/TabBarIcon';
import ListTVShows from '../components/ListTVShows';
import RatedMovies from '../components/ListRatedMovies';
import Profile from '../screens/Profile';
import FavoriteSeries from '../components/FavoritesSeries';
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

      
    </Stack.Navigator>

  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#454545'
        },
        tabBarIcon: ({ focused }) => {
          let tabName;
          let bgColor;

          if (route.name === 'TVShowsList') {
            tabName = 'tvShowsList'
          }
          else if (route.name === 'HomeStack') {
            tabName = 'home';
          } else if (route.name === 'ProfileStack') {
            tabName = 'profile';
          }

          if (focused) {
            bgColor = '#E9A6A6';
          } else {
            bgColor = '#454545';
          }

          return <TabBarIcon tabName={tabName} bgColor={bgColor} />
        }
      })}
    >
      <Tab.Screen
        name="TVShowsList"
        component={ListTVShows}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
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
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
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
        name="RatedMovies"
        component={RatedMovies}
      />

      <Stack.Screen
        name="FavoritesSeries"
        component={FavoritesSeries}
      />
    </Stack.Navigator>
  )
}
