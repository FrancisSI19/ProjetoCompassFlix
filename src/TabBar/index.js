import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListMovies from '../ListMovies';
import Icone from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
function tabBar() {
    return(
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
        options={{
          tabBarIcon: () => <Icone name="list" color={'gray'} size={24} />,
        }}
        name="ListMovies"
        component={ListMovies}
        />
    </Tab.Navigator>
    </NavigationContainer>
  )}
export default tabBar;