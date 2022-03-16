/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {StyleSheet, FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {fetchMovies} from "../../services/api";
import Loading from '../../components/Loading';


export default function MovieList() {

    const navigation = useNavigation()

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);

      fetchMovies(movies)
        .then((data) => {
        
          setMovies(data);
  
        setLoading(false);
      }).catch(error => error)

    }, [])



    return loading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.banner}
            source={{
              uri: `http://image.tmdb.org/t/p/w780${movies[0]?.backdrop_path}`,
            }}
            
          />
        </View>
  
        <View>
          <View style={styles.movieListCard}>
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
                        source={{
                          uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`,
                        }}
                        style={{ width: 80, height: 100, marginHorizontal: 8, marginVertical: 15 }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({

    banner:{
      marginHorizontal: 30,
    },
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center'
    },

  });