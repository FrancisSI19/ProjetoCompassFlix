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

const MyMovies = ({ navigation }) => {
  const [viewMode, setViewMode] = useState(true);
  const [movies, setMovies] = useState([]);

  const [visible, setVisible] = useState(false);
  const [movieToRemove, setMovieToRemove] = useState('');

  const getListDetails = async () => {
    try {
      const listId = '8197678';
      const queryString = `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}&language=pt-BR`;

      const { data } = await api.get(queryString);
      console.log(data.items);
      setMovies(data.items);
    } catch (error) {
      console.log(error);
    }
  }

  const renderMovieList = ({ item }) => {
    return (
      <>
        {viewMode
          ? (<TouchableOpacity>
              <Poster posterPath={item.poster_path} />
            </TouchableOpacity>)
          : (<View>
              <Poster posterPath={item.poster_path} />
              <TouchableOpacity style={styles.btnRemove}
                onPress={() => {
                  setMovieToRemove(item.id)
                  setVisible(true);
                }}
              >
                <Entypo name='minus' size={12} color='#EC2626' />
              </TouchableOpacity>
            </View>)}
      </>
    );
  }

  const removeMovie = async (movieId) => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const queryString = `list/8197678/remove_item?api_key=${API_KEY}&session_id=${sessionId}`;

      const { data } = await api.post(queryString, { media_id: movieId });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getListDetails();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={styles.goBackBtn}
        >
          <Ionicons name='arrow-back' size={22} color='#000' />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setViewMode(!viewMode)}
        >
          <Text style={{ color: '#fff' }}>Switch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTxt}>Filmes que mudaram a minha vida</Text>
      </View>

      <Text style={styles.description}>
        Essa é uma lista de filmes que vai mudar a sua vida e gerar reflexão sobre diversos temas. Aproveite para unir o útil ao agradável e usar seu tempo livre para conhecer histórias inspiradoras.
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
