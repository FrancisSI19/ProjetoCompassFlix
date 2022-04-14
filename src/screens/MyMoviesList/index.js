import React, { useState, useEffect } from 'react';
import AntDesing from "react-native-vector-icons/AntDesign";
import { ScrollView, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, ButtonAdd, IconBack, Title, ContainerList, ContainerDel, IconDelete, TextoContagemFilmes } from './styles';
import { useNavigation } from '@react-navigation/native';
import CreateListModal from './CreateListModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';

function MyMoviesList() {

  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [listName, setListName] = useState('')
  const [listDescription, setListDescription] = useState('')


  const getCreatedLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      const queryString = `account/${accountId}/lists?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}`;

      const { data } = await api.get(queryString);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteList = async (id) => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');

      const queryString = `https://api.themoviedb.org/3/list/${id}?api_key=${API_KEY}&session_id=${sessionId}`

      const { data } = await api.delete(queryString);
      console.log(data)
    } catch (error) {
      console.log(error.response.data)

    }
  }
  const createList = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      console.log('id:',sessionId)

      const queryString = `list?api_key=${API_KEY}&session_id=${sessionId}`
      const {data} = await api.post(queryString,
        {
          name: listName,
          description: listDescription,
          language: "pt"
        }
      );
      console.log(data)
    } catch (error) {
      console.log('createList:',error)

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
        return (
          <ContainerList
              onPress={() => navigation.navigate('MyMovies', {listId : list.id})}
            key={list.id}>
            <Text style={{ color: 'white' }}>{list.name}
            </Text>
            <Text style={{ color: '#fff', fontFamily:'Open Sans', fontWeight: '400', fontSize: 10, top:40 }} > {list.item_count} FILMES</Text>
            <ContainerDel onPress={() => deleteList(list.id)} title='delete' />
            <Image style={{ top: -90, left: 308, }}
              source={require('../../assets/img/Vector.png')}
            />
          </ContainerList>

        )
      })}
      <IconBack onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="arrow-back" size={26} color="#000" />
      </IconBack>

      <CreateListModal
        visible={modalVisible}
        setModalVisible={setModalVisible}
        setName={setListName}
        name={listName}
        description={listDescription}
        setDescription={setListDescription}
        createList={createList}
      />


      <ButtonAdd
        onPress={() => setModalVisible(true)}
      >

        <AntDesing name="pluscircle" size={50} color="#E9A6A6" />

      </ButtonAdd>
    </Container>


  );
}

export default MyMoviesList;
