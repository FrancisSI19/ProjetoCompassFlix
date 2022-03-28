import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MovieList from '../../screens/MovieList';
import {Container, Title, SubTitle, TitleList, Name} from '../styles';

export default function ListMovies({navigation}) {
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
        <Image
          style={Profile.image}
          source={{uri: `https://image.tmdb.org/t/p/w300/${avatar}`}}/>

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
const Profile = StyleSheet.create({
  image: {
    width: 44,
    height: 44,
    top: 18,
    left: 312,
    borderRadius: 40,
  },
});
