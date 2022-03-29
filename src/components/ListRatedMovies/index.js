import React, { useEffect, useState } from 'react';
import { Container, Name, IconBack, Title, ContainerRated} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RatedMovieList from '../../screens/MoviesRate';
import { useNavigation } from '@react-navigation/native';

//{ route: {params} , navigation } inserir na função da tela do usuário quando tiver a tela do retorno.
function RatedMovies() {
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
        onPress={() => navigation.navigate('Perfil')}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>

      <Title>
        Avaliações de filmes recentes de <Name>{name === null ? username : name}</Name>!
      </Title>
      <ContainerRated>
      <RatedMovieList/>
      </ContainerRated>
    </Container>

  );
}

export default RatedMovies;
