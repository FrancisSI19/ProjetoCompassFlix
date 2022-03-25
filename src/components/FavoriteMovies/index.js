import React, { useEffect, useState } from 'react';
import { Container, Name, IconBack, Title, ContainerFavorites } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoviesFavorites from '../../screens/MoviesFavorites';

function FavoriteMovies() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (

    <Container>
      <IconBack
        onPress={() => navigation.navigate('User')}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>

      <Title>
        Filmes favoritos de <Name>{name === null ? username : name}</Name>!
      </Title>

      <MoviesFavorites />

    </Container>

  );
}

export default FavoriteMovies;
