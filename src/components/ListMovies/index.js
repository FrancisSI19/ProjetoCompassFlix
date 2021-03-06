import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MovieList from '../../screens/MovieList';
import {Container, Title, SubTitle, TitleList, Name} from '../styles';

function ListMovies({navigation}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error)}
  }, []);

  return (
    <>
      <Container>
        <TouchableOpacity  onPress={() => navigation.navigate('ProfileStack')}>
          <Image
            style={Perfil.imagem}
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${avatar}`,
            }}
          />
        </TouchableOpacity>
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
    position: 'absolute',
    width: 44,
    height: 44,
    top: 18,
    right: 10,
    borderRadius: 40,
  },
});

export default ListMovies;
