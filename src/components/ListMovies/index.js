import React, {useEffect, useState} from 'react';
import MovieList from '../../screens/MovieList';
import { Container, Title, SubTitle, TitleList,Name } from './styles';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ListMovies({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
    } catch (error) {
      console.log(error)
    }
  }, []);

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button title='sair' onPress={removeData} />
        <Container>
            <Title>
              Olá, <Name>{name === null ? username : name}</Name>!
            </Title>
                <SubTitle>Reveja ou acompanhe os filmes que você assistiu...</SubTitle>
                  <TitleList>Filmes populares este mês</TitleList>
         
                  <MovieList/>
              </Container>
             
     
     
    </>
  );
}

export default ListMovies;
