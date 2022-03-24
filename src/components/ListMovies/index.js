import React, { useEffect, useState } from 'react';
import MovieList from '../../screens/MovieList';
import { Container, Title, SubTitle, TitleList, Name, Avatar } from './styles';
import { Button,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';

function ListMovies({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeAccountData = async () => {
    try {
      await AsyncStorage.clear();
        navigation.navigate('Login');

    } catch (error) {
    }
  }

  return (
    <>
      <Button title='sair' onPress={removeAccountData} />


      <Container>
      <Image
        style = {Perfil.imagem}
        source={{
                  uri: `https://image.tmdb.org/t/p/w300/${avatar}`,
                }}/>

        <Title>
          Olá, <Name>{name === null ? username : name}</Name>!
        </Title>
        <SubTitle>Reveja ou acompanhe os filmes que você assistiu...</SubTitle>
        <TitleList>Filmes populares este mês</TitleList>
        <MovieList />
      </Container>
    </>
  );
}
const Perfil = StyleSheet.create({
  imagem: {
  width: 44,
  height: 44,
  top: 18,
  left:312,
  borderRadius:40
    },
})

export default ListMovies;
