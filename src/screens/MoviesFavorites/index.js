import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Container, Image } from './styles';
import { fetchFavorites } from "../../services/api";


function MoviesFavorites() {
    const navigation = useNavigation()
    const [favorites_id, setFavorites_id] = useState();

    useEffect(() => {
        setLoading(true);
        fetchFavorites(favorites_id)
          .then((data) => {
            setFavorites_id([...favorites_id, ...data]);
            setLoading(false);
              
          }).catch(error => error)
          console.log(data);
      }, [favorites_id])
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
