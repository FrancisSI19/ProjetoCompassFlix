import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesing from "react-native-vector-icons/AntDesign";
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';
import { Container, Image, ContainerVote, Vote, } from './styles';


function RatedMovieList() {
    const navigation = useNavigation()
    const [ratedMovies, setRatedMovies] = useState([]);

    const getRatedMovies = async () => {
        try {
            
            const sessionId = await AsyncStorage.getItem('sessionId');
            const accountId = await AsyncStorage.getItem('accountId');
            
            const { data } = await api.get
                (`account/${accountId}/rated/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`)
            setRatedMovies(data.results);

        } catch (error) {
            
            console.log(error);
        }

    }
    useEffect(() => {
        
        getRatedMovies()

    }, [])
    return <>

    <FlatList
      data={ratedMovies}
      numColumns={4}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
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
              <AntDesing name="star" color="#EC2626" />
              <Vote>{item.vote_average}/10</Vote>
            </ContainerVote>
          </Container>
        );
      }}
    />
    
    </>
};

export default RatedMovieList;
