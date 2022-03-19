import React from 'react';
import {Image, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import ListMovies from '../components/ListMovies';
import MovieDetails from '../screens/MovieDetails';

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
    </Stack.Navigator>
  );
}
