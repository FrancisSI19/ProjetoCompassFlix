/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesing from "react-native-vector-icons/AntDesign";
import { fetchMovies } from "../../services/api";
import Loading from '../../components/Loading';
import { ContainerVote, Vote, Image, Container } from './styles';


function MovieList() {
    const navigation = useNavigation()

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [PAGE_NUMBER, setPAGE_NUMBER] = useState(1);
  
    useEffect(() => {
      setLoading(true);

      fetchMovies(movies)
        .then((data) => {
        
          setMovies(data);
  
        setLoading(false);
      }).catch(error => error)

    }, [PAGE_NUMBER])

    const loadMoreItem = () => {
      setPAGE_NUMBER(PAGE_NUMBER + 1);
  }

  
    return loading ? (
      <Loading />
    ) : (
            <FlatList
              data={movies}
              numColumns={4}
              keyExtractor={item => item.id.toString()}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}
              renderItem={({ item, index }) => {
                  return (
                    <Container>
                      
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('MovieDetails', { movieId: item.id });
                        }}>
                        <Image
                          source={{
                            uri: `https://image.tmdb.org/t/p/w780${item.poster_path}`,
                          }}
                        />
                      </TouchableOpacity>
                      <ContainerVote>
                          <AntDesing name="star" color="#EC2626"/>
                          <Vote>{item.vote_average}/10</Vote>
                      </ContainerVote>
                    </Container>
                  );
                }}
            />
    );
  };
  
export default MovieList;