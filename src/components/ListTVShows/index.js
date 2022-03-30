import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TVShowsList from '../../screens/TVShowsList';
import {Container, Title, SubTitle, TitleList, Name} from '../styles';

export default function ListTVShows({navigation}) {
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

  return (
    <Container>
      <Image
        style={Profile.image}
        source={{uri: `https://image.tmdb.org/t/p/w300/${avatar}`}}/>

      <Title>
        Olá, <Name>{name === null ? username : name}</Name>!
      </Title>
      <SubTitle>Reveja ou acompanhe as séries que você assistiu...</SubTitle>
      <TitleList>Séries populares este mês</TitleList>
      <TVShowsList />
    </Container>
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
