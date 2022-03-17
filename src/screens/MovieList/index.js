/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AntDesing from 'react-native-vector-icons/AntDesign';

import StyledListMovies from '../../components/ListMovies/styles';

import { fetchMovies } from '../../services/api';
import Loading from '../../components/Loading';

export default function MovieList() {

    const navigation = useNavigation();

    const [movies, setMovies] = useState([]);s;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);

      fetchMovies(movies)
        .then((data) => {

          setMovies(data);

        setLoading(false);
      }).catch(error => error);

    }, []);

    return loading ? (
      <Loading />
    ) : (
      <View>
            <FlatList
              data={movies}
              numColumns={4}
              keyExtractor={ item => item.id.toString()}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('MovieDetails', { movie: item });
                      }}>
                      <Image
                        style={StyledListMovies.image}
                        source={{
                          uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`,
                        }}
                      />
                    </TouchableOpacity>
                    <View style={StyledListMovies.view_vote}>
                        <AntDesing name="staro" style={StyledListMovies.icon} />
                        <Text style={StyledListMovies.vote}>{item.vote_average}/10</Text>
                    </View>
                  </View>
                );
              }}
            />
      </View>
    );
  }

