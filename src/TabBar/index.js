import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MovieList from '../screens/MovieList';
import Icone from 'react-native-vector-icons/Entypo';
import MovieDetails from '../screens/MovieDetails';
import Routes2 from '../routes/Routes2';
const Tab = createBottomTabNavigator();
function TabBar() {
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarActiveBackgroundColor: '#454545'  }}>

        <Tab.Screen 
        options={{ 
          tabBarIcon: () => <Icone name="list" color={'red'} size={24} />,
        }}
        name="Routes2"
        component={Routes2}
        />
    </Tab.Navigator>
  )}
export default TabBar;