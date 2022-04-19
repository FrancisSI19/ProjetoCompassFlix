import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { API_KEY } from '../../constants/constants';
import api from '../../services/api';

import styles from './styles';
import Poster from '../../components/Poster';
import ModalRemove from '../../components/ModalRemove';
import Switch from '../../components/Switch';

const MyMovies = ({ navigation, route }) => {
  const {listId} = route.params;
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');

  const [isEnable, setIsEnable] = useState(false);
  const [movies, setMovies] = useState([]);

  const [visible, setVisible] = useState(false);
  const [movieToRemove, setMovieToRemove] = useState('');

  const getListDetails = async () => {
    try {
      const queryString = `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}&language=pt-BR`;

      const { data } = await api.get(queryString);
      setListName(data.name);
      setListDescription(data.description);
      setMovies(data.items);
    } catch (error) {
      // console.log(error);
    }
  }

  const removeMovie = async movieId => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const queryString = `list/${listId}/remove_item?api_key=${API_KEY}&session_id=${sessionId}`;

      const { data } = await api.post(queryString, { media_id: movieId });
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  }

  const renderMovieList = ({ item }) => {
    return (
      <>
        {isEnable
          ? (<View>
              <Poster posterPath={item.poster_path} />
              <TouchableOpacity style={styles.btnRemove}
                onPress={() => {
                  setMovieToRemove(item.id)
                  setVisible(true)}}>

                <Entypo name='minus' size={12} color='#EC2626' />
              </TouchableOpacity>
            </View>)

          : (<TouchableOpacity onPress={() => navigation.navigate('MovieDetails', {movieId: item.id, requestScreen: 'MyMovies'})}>
              <Poster posterPath={item.poster_path} />
            </TouchableOpacity>)}
      </>
    );
  }

  useEffect(() => {
    getListDetails();
  }, [movies]);

  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={styles.goBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back' size={22} color='#000' />
        </TouchableOpacity>

        <Switch isEnable={isEnable} setIsEnable={setIsEnable} />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTxt}>{listName}</Text>
      </View>

      <Text style={styles.description}>
        {listDescription}
      </Text>

      <FlatList
        contentContainerStyle={styles.movieList}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        data={movies}
        renderItem={renderMovieList}
        keyExtractor={movie => movie.id}
      />

      <ModalRemove
        description='Deseja mesmo remover o filme?'
        visible={visible}
        setVisible={setVisible}
        removeItem={removeMovie}
        itemToRemove={movieToRemove}
      />
    </View>
  );
}

export default MyMovies;

