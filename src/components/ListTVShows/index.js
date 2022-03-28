import React, { useEffect, useState } from 'react';
import TVShowsList from '../../screens/TVShowsList';
import { Container, Title, SubTitle, TitleList, Name } from '../styles';
import {Button, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ListTVShows({ navigation }) {
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
      {/* <Button title='sair' onPress={removeAccountData} /> */}

      <Container>
        <Image
          style={Perfil.imagem}
          source={{uri: `https://image.tmdb.org/t/p/w300/${avatar}`}}/>

        <Title>
          Olá, <Name>{name === null ? username : name}</Name>!
        </Title>
        <SubTitle>Reveja ou acompanhe os séries que você assistiu...</SubTitle>
        <TitleList>Séries populares este mês</TitleList>
        <TVShowsList />
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

export default ListTVShows;
