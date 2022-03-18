import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { 
  Image, 
} from 'react-native';
import { Icon, } from '../TabBar/styles'
import Routes2 from '../routes/Routes2';
const Tab = createBottomTabNavigator();
function TabBar() {
    return(
        <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarActiveBackgroundColor: '#454545'  }}>
            
        <Tab.Screen 
        options={{ 
          tabBarIcon: () =>  <Icon source={require('../assets/img/movies.png')} />,
        
        
        }}
        name="Routes2"
        component={Routes2}
        />
    </Tab.Navigator>
  )}
export default TabBar;