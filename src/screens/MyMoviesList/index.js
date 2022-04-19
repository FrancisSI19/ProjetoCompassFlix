import React, { useState, useEffect } from 'react';
import AntDesing from "react-native-vector-icons/AntDesign";
import { Text, Image, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, ButtonAdd, IconBack, Title, ContainerList, ContainerDel, TextCounter, TextName } from './styles';
import { useNavigation } from '@react-navigation/native';
import CreateListModal from './CreateListModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';

import ModalRemove from '../../components/ModalRemove';

function MyMoviesList() {

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [listName, setListName] = useState('')
  const [listDescription, setListDescription] = useState('');
  const [listToRemove, setListToRemove] = useState('');


  const getCreatedLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      const queryString = `account/${accountId}/lists?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}`;

      const { data } = await api.get(queryString);
      setMovieList(data.results);
    } catch (error) {
      // console.log(error);
    }
  };
  const deleteList = async id => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');

      const queryString = `https://api.themoviedb.org/3/list/${id}?api_key=${API_KEY}&session_id=${sessionId}`

      const { data } = await api.delete(queryString);
      console.log(data)
    } catch (error) {
      // console.log(error.response.data)
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
      // console.log(data)
    } catch (error) {
      // console.log('createList:', error);
    }
  };
  useEffect(() => {
    getCreatedLists();
    deleteList();
  }, [movieList]);

  return (
    <Container>
      <Title>Minhas Listas</Title>
      
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }} >
          {movieList.map(list => (

            <ContainerList
              onPress={() => navigation.navigate('MyMovies', { listId: list.id })}
              key={list.id}>
              <TextName>{list.name.toUpperCase()}
              </TextName>
              <TextCounter> {list.item_count} FILMES</TextCounter>
              <ContainerDel onPress={() => {

                setListToRemove(list.id)
                setVisible(true)
              }} title='delete' />
              
              <Image style={{ top: -90, left: 290 }}
                source={require('../../assets/img/Vector.png')}
              />
            </ContainerList>
          )
          )}

        </ScrollView>
      </View>
      <IconBack onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="arrow-back" size={20} color="#000" />
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
        onPress={() => setModalVisible(true)}>
        <AntDesing name="plus" size={30} color="#fff"/>
      </ButtonAdd>

      <ModalRemove
        description='Deseja mesmo remover essa lista?'
        visible={visible}
        setVisible={setVisible}
        removeItem={deleteList}
        itemToRemove={listToRemove}
      />
    </Container>
  );
}

export default MyMoviesList;
