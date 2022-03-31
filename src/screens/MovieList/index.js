/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { View } from 'react-native';
import {ContainerVote, Vote, Image, Container} from '../styles';
import {fetchMovies} from '../../services/api';
import Loading from '../../components/Loading';
import IconStar from '../../components/IconStar';
import VoteAverage from '../../components/VoteAverage';

export default function MovieList() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchMovies(pageNumber)
      .then(data => {
        setMovies([...movies, ...data]);
        setLoading(false);
      })
      .catch(error => error);
  }, [pageNumber]);

  const loadMoreItem = () => setPageNumber(pageNumber + 1);
  function FooterList({load}){
    if(!load) return null;
    return(
      <View style = {{padding: 10,}}>
        <ActivityIndicator size={25} color = '#E9A6A6'/>
      </View>
    )
  }
  return (
    <FlatList
      data={movies}
      numColumns={4}
      keyExtractor={(item, index) => String(index)}
      onEndReached={loadMoreItem}
      onEndReachedThreshold={0.1}
      ListFooterComponent = { <FooterList load={loading} />}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        
        return (
          <Container>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MovieDetails', {
                  movieId: item.id,
                  requestScreen: 'ListMovies',
                })
              }>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`,
                }}
              />
            </TouchableOpacity>
            <ContainerVote>
              <IconStar />
              <Vote>
                {item.vote_average}
                <VoteAverage />
              </Vote>
            </ContainerVote>
          </Container>
        );
      }}
    />
  );
}
