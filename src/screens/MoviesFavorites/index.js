import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Container, Image } from './styles';
import { fetchFavorites } from "../../services/api";


function MoviesFavorites({ navigation }) {
    const navigation = useNavigation()
    const [favorites, setFavorites] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetchFavorites(favorites)
          .then((data) => {
            setFavorites([...favorites, ...data]);
            setLoading(false);
    
          }).catch(error => error)
    
      }, [ACCOUNT_ID])
    return (
        <FlatList
            data={favorites}
            numColumns={4}
            keyExtractor={item => item.id}
            onEndReached={loadMoreItem}
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
    );
};


export default MoviesFavorites;
