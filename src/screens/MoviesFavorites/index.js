import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Image } from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';

function MoviesFavorites() {
    const navigation = useNavigation()
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const getFavoriteMovies = async () => {
        try {
            
            const sessionId = await AsyncStorage.getItem('sessionId');
            const accountId = await AsyncStorage.getItem('accountId');
            
            const { data } = await api.get
                (`account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`)
            setFavoriteMovies(data.results);

        } catch (error) {
            
            console.log(error);
        }

    }
    useEffect(() => {
        
        getFavoriteMovies()

    }, [])
    return <>
        <FlatList
            data={favoriteMovies}
            numColumns={4}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.1}
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

                    </Container>
                );
            }}
        />
    </>
};


export default MoviesFavorites;
