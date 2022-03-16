import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListMovies from '../ListMovies';
import Icone from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
function tabBar() {
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
        options={{
          tabBarIcon: () => <Icone name="list" color={'gray'} size={24} />,
        }}
        name="ListMovies"
        component={ListMovies}
        />
    </Tab.Navigator>
  )}
export default tabBar