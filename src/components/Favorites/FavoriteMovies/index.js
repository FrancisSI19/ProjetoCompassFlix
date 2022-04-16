import React, { useEffect, useState } from 'react';
import { Container, Name, IconBack, Title, ContainerFavorite} from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoviesFavorites from '../../../screens/MoviesFavorites';
import { useNavigation } from '@react-navigation/native';

function FavoriteMovies() {
  const navigation = useNavigation();
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
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>

      <Title>
        Filmes favoritos de <Name>{name === null ? username : name}</Name>!
      </Title>
      <ContainerFavorite>
      <MoviesFavorites />
      </ContainerFavorite>
    </Container>

  );
}

export default FavoriteMovies;
