import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { API_KEY } from '../../constants/constants';
import { Container, Image } from './styles';

function SeriesFavorites() {
    const navigation = useNavigation()
    const [favoriteSeries, setFavoriteSeries] = useState([]);

    const getFavoriteSeries = async () => {
        try {

            const sessionId = await AsyncStorage.getItem('sessionId');
            const accountId = await AsyncStorage.getItem('accountId');

            const { data } = await api.get
                (`account/${accountId}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`)
            setFavoriteSeries(data.results);

        } catch (error) {

            console.log(error);
        }

    }
    useEffect(() => {

        getFavoriteSeries()

    }, [])
    return <>
        <FlatList
            data={favoriteSeries}
            numColumns={4}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <Container>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('', { movieId: item.id, requestScreen: 'FavoritesSeries' });
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


export default SeriesFavorites;
