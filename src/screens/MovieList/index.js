import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { ContainerVote, Vote, Image } from '../styles';
import { API_KEY, URL, LANGUAGE } from '../../constants/constants';
import api from '../../services/api';
import IconStar from '../../components/IconStar';
import VoteAverage from '../../components/VoteAverage';

export default function MovieList() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      if (loading) return;

      setLoading(true);

      const response = await api.get(`${URL}movie/popular?api_key=${API_KEY}&${LANGUAGE}&page=${page}`);

      setMovies([...movies, ...response.data.results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FlatList
      contentContainerStyle={{ alignItems: 'center' }}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      data={movies}
      keyExtractor={item => String(item.id)}
      renderItem={ListItem}
      onEndReached={loadMovies}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<FooterList load={loading} />}
    />
  );

  function ListItem({ item }) {
    return (
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MovieDetails', {movieId: item.id})}
        >
          <Image source={{uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`}}/>
        </TouchableOpacity>
        <ContainerVote>
          <IconStar/>
          <Vote>
            {item.vote_average}
            <VoteAverage/>
          </Vote>
        </ContainerVote>
      </View>
    );
  }

  function FooterList({ load }) {
    if (!load) return null;

    return (
      <View style={{ margin: 5 }}>
        <ActivityIndicator size={30} color='#E9A6A6' />
      </View>
    );
  }
}
