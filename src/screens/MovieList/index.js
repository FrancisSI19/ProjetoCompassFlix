/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesing from "react-native-vector-icons/AntDesign";
import { fetchMovies } from "../../services/api";
import Loading from '../../components/Loading';
import { ContainerVote, Vote, Image, Container } from './styles';


function MovieList() {

    const navigation = useNavigation()
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
  
    useEffect(() => {
      setLoading(true);
      fetchMovies(pageNumber)
        .then((data) => {
          setMovies([...movies, ...data]);
          console.log([...movies, ...data].map(x=>x.id))
        setLoading(false);
      
      }).catch(error => error)

    }, [pageNumber])

    const loadMoreItem = () => {
      setPageNumber(pageNumber + 1);
      console.log(pageNumber + 1, "tteste")
  }

  
    return loading ? (
      <Loading />
    ) : (
        
          <FlatList
              data={movies}
              numColumns={4}
              keyExtractor={item => item.id}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0.5}
              showsVerticalScrollIndicator={false}      
              renderItem={({ item}) => {
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