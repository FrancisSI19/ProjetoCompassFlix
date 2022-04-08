import React from 'react';
import {useEffect, useState} from 'react';

import {ScrollView, Text, TouchableOpacity,Image, Button} from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container, ButtonAdd, IconBack, Title, ContainerList, ContainerDel, IconDelete, TextoContagemFilmes} from './styles';
import {useNavigation} from '@react-navigation/native';
import CreateListModal from './CreateListModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
function MyMoviesList () {
  const navigation = useNavigation();
  function clickHandler() {
    alert('Cliquei no botão');
  }

  const [movieList, setMovieList] = useState([]);

  const getCreatedLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      const queryString = `account/${accountId}/lists?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}`;

      const {data} = await api.get(queryString);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteList = async (id) => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      
      const queryString = `https://api.themoviedb.org/3/list/${id}?api_key=${API_KEY}&session_id=${sessionId}`

     const {data} = await api.delete(queryString);
     console.log(data)
    } catch (error) {
      console.log(error.response.data)
      
    }
  }

  
  useEffect(() => {
    getCreatedLists();
    deleteList();
  }, []);

  return (
    
    <Container>
     
      <Title>Minhas Listas</Title>
      {movieList.map(list => {
        return(
          <ContainerList
          
             key={list.id}>
            <Text style = {{color: 'white'}}>{list.name}
            </Text>
            <Text style = {{color:'#fff',fontFamily: 'Open Sans',fontweight: 400,fontsize: 10,}} > {list.item_count} FILMES</Text>
            <ContainerDel onPress={()=>deleteList(list.id)}title='delete'/>
            <Image style = {{top:-90, left:308, color:'red'}}
              source={require('../../assets/img/Vector.png')}
            />
          </ContainerList>
        
        )
      })}
      <IconBack onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="arrow-back" size={26} color="#000" />
      </IconBack>
      <ButtonAdd onPress={clickHandler}>
        <AntDesing name="pluscircle" size={50} color="#E9A6A6" />
        <CreateListModal />
      </ButtonAdd>
    </Container>
   
  );
}

export default MyMoviesList;

