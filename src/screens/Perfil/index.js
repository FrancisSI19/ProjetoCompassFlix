import React, { useEffect, useState } from 'react';
import { Button, Image, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Name, Imagem, Icon1, Icon2, Linha1, Linha2, Meio, Botão, TxtBotão, Sair } from './styles1';
import MoviesFavorites from '../MoviesFavorites';
function Perfil({ navigation }) {
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

  const optionAlert = () => {
    Alert.alert(
      "Atenção!",
      "Deseja mesmo sair?",
      [
        {
          text: 'CANCELAR',
          onPress: () => { }
        },
        {
          text: 'SIM',
          onPress: () => removeAccountData()
          
        }
      ]
    )
  }
  
  const removeAccountData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(optionAlert)
  return (
    <Container>

      <Botão title="sair"  onPress={optionAlert} >
        <TxtBotão>
          Sair
        </TxtBotão>
      </Botão>
      <Sair
        source={require('../../assets/img/sair1.png')}
      />
      <Linha1></Linha1>
      <Icon1
        source={require('../../assets/img/movies.png')}
      />
      <Meio>
      
      </Meio>
      <Icon2
        source={require('../../assets/img/series.png')}
      />
      <Linha2></Linha2>
     
      <>
        <Name>
          <Name>{name === null ? username : name}</Name>
        </Name>
        <Imagem

          source={{
            uri: `https://image.tmdb.org/t/p/w400/${avatar}`,
          }}
        />
         
      </>
      
    </Container>)
}



export default Perfil