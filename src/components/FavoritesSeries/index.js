import React, { useEffect, useState } from 'react';
import { Container, Name, IconBack, Title, ContainerFavorite} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SeriesFavorites from '../../screens/SeriesFavorites';

//{ route: {params} , navigation } inserir na função da tela do usuário quando tiver a tela do retorno.
function FavoriteSeries({navigation}) {

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
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>

      <Title>
        Séries favoritas de <Name>{name === null ? username : name}</Name>!
      </Title>
      <ContainerFavorite>
      <SeriesFavorites/>
      </ContainerFavorite>
    </Container>

  );
}

export default FavoriteSeries;
