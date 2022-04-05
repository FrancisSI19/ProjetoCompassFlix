import React from 'react';
import {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import AntDesing from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, ButtonAdd, IconBack, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import CreateListModal from './CreateListModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
function MyMoviesList () {

  const navigation = useNavigation();
  function clickHandler () {
    alert('Cliquei no botão');
  };
const [movieList, setMovieList] = useState([])
  const getLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const queryString = `https://api.themoviedb.org/3/list?${API_KEY}session_id=${sessionId}`;
      const { data } = await api.post(queryString);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getLists();
  }, [])

  return (

    <Container>
      <IconBack
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name='arrow-back' size={26} color='#000' />
      </IconBack>
      <ScrollView>
        <Container>

          <Title>
            Minhas Listas
          </Title>
        </Container>
      </ScrollView>
      <ButtonAdd
        onPress={clickHandler}
      >
        <AntDesing name="pluscircle" size={50} color="#E9A6A6" />
        <CreateListModal/>
      </ButtonAdd>
    </Container>
  );
};


export default MyMoviesList;

