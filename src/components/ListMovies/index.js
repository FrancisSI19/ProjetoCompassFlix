import React from 'react';
import {View, Text, Modal} from 'react-native';
import FlatMovies from '../FlatList';
import StyledListMovies from './styles';

function ListMovies() {
  return (
    <>
      <Modal animationType="slide">
        <View style={StyledListMovies.information}>
            <Text style={StyledListMovies.title}>Olá, Compasses</Text>
                <Text style={StyledListMovies.subtitle}>Reveja ou acompanhe os filmes que você assistiu...</Text>
                  <Text style={StyledListMovies.titleList}>Filmes populares este mês</Text>
                  
                  <FlatMovies />
              </View>
              
      </Modal>
      
    </>
  );
}

export default ListMovies;
