import React, { useEffect, useState } from 'react';
import { Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Name,
  Imagem,
  Icon1, Icon2,
  Linha1, Linha2, Meio,
  Botão, TxtBotão, Sair,
 } from './styles1';
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';



function Perfil({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
    getFavoriteMovies()
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
  async function getFavoriteMovies(){
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      console.log(sessionId,accountId)
      try {
        const queryString = 
      `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`
      const {data} = await api.get(queryString)
      setFavoriteMovies(data.results)

      } catch (error) {
        console.log(error)
        
      }
      
    } catch (error) {
      console.log(error)
    }
   
  }

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
         <RatedSeries/>
      </>
      
    </Container>)
}



export default Perfil