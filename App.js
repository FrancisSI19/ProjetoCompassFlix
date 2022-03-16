import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/components/Routes';

export default function App(){
  return( 
  <NavigationContainer>
     <Routes/>
  </NavigationContainer>
  )
}