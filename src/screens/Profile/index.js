import React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Loading from '../../components/Loading';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';

const Profile = ({ navigation }) => {
  const [ratingLoading, setRatingLoading] = useState(true);
  const [favoritesLoading, setFavoritesLoading] = useState(true);
  const [ratedsLoading, setRatedsLoading] = useState(true);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const [showMovieList, setShowMovieList] = useState(true);

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [movieRatingCount, setMovieRatingCount] = useState('');

  const [favoriteTvShows, setFavoriteTvShows] = useState([]);
  const [ratedTvShows, setRatedTvShows] = useState([]);
  const [tvShowsRatingCount, setTvShowsRatingCount] = useState([]);

  const getUserData = async () => {
    try {
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
  }

  const clearUserData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  const logoutAlert = () => {
    Alert.alert('Atenção!', 'Deseja mesmo sair?', [
      {
        text: 'CANCELAR',
        onPress: () => {},
      },
      {
        text: 'SIM',
        onPress: () => clearUserData(),
      },
    ]);
  }

  const getFavoriteMovies = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      const {data} = await api.get(queryString);

      setFavoriteMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const getRatedMovies = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/rated/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      const {data} = await api.get(queryString);

      setRatedMovies(data.results);
      setMovieRatingCount(data.total_results);
    } catch (error) {
      console.log(error);
    }
  }

  const getFavoriteTvShows = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      const {data} = await api.get(queryString);

      setFavoriteTvShows(data.results);
    } catch (error) {
      console.log(error);
    }
    setFavoritesLoading(false);
  }

  const getRatedTvShows = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/rated/tv?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      const {data} = await api.get(queryString);

      setRatedTvShows(data.results);
      setTvShowsRatingCount(data.total_results);
    } catch (error) {
      console.log(error);
    }
    setRatingLoading(false);
    setRatedsLoading(false);
  }

  useEffect(() => {
    getUserData();

    getFavoriteMovies();
    getRatedMovies();

    getFavoriteTvShows();
    getRatedTvShows();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView>
        <TouchableOpacity
          style={styles.btnLeave}
          onPress={logoutAlert}
        >
          <Ionicons name='exit-outline' size={16} color='#000' />
          <Text style={styles.txtLeave}>Sair</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.profilePic}
            source={{ uri: `https://image.tmdb.org/t/p/w400/${avatar}` }}
          />
          <Text style={styles.username}>{name !== null ? name : username}</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
        {
          ratingLoading
            ? <Loading size={36} />
            : (
              <>
                <Text style={{ color: '#9C4A8B', fontSize: 24, fontFamily: 'OpenSans-Bold' }}>{showMovieList ? movieRatingCount : tvShowsRatingCount}</Text>
                <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'OpenSans-Regular' }}>Avaliações</Text>
              </>
            )
        }
        </View>

        <View style={{ flexDirection: 'row', width: '100%', marginTop: 40 }}>
          <View style={{ flex: 1, alignItems: 'center', paddingVertical: 14, borderWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.19)', borderBottomColor: 'rgba(255, 255, 255, 0.19)', borderRightColor: 'rgba(255, 255, 255, 0.19)' }}>
            <TouchableOpacity onPress={() => setShowMovieList(true)}>
              <Image
                style={{ width: 28, height: 28 }}
                source={showMovieList ? require(`../../assets/img/cinema.png`) : require(`../../assets/img/movies.png`)}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center', paddingVertical: 14, borderWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.19)', borderBottomColor: 'rgba(255, 255, 255, 0.19)' }}>
            <TouchableOpacity onPress={() => setShowMovieList(false)}>
              <Image
                style={{ width: 28, height: 28 }}
                source={showMovieList ? require(`../../assets/img/series1.png`) : require(`../../assets/img/series.png`)}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>
            {
              showMovieList
                ? 'Filmes favoritos de '
                : 'Séries favoritas de '
            }
            {name !== null ? name : username}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(showMovieList ? 'FavoriteMovies' : 'FavoritesSeries')}>
            <Text style={{ color: '#E9A6A6', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 30, paddingBottom: 20, borderWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.19)' }}>
          {
            favoritesLoading
              ? <Loading size={36} />
              : (
                showMovieList
                  ? (
                    favoriteMovies.map((movie, index) => {
                      if (index < 4) {
                        return (
                          <TouchableOpacity
                            key={movie.id}
                            onPress={() => navigation.navigate('MovieDetails', {movieId : movie.id, requestScreen : 'Profile'})}
                          >
                            <Image
                              style={{ width: 67, height: 89, borderRadius: 7, marginHorizontal: 10 }}
                              source={{ uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}` }}
                            />
                          </TouchableOpacity>
                        );
                      }
                    })
                  )
                  : (
                    favoriteTvShows.map((tvShow, index) => {
                      if (index < 4) {
                        return (
                          <TouchableOpacity
                            key={tvShow.id}
                            onPress={() => navigation.navigate('', {tvShowId : tvShow.id, requestScreen : 'Profile'})}
                          >
                            <Image
                              style={{ width: 67, height: 89, borderRadius: 7, marginHorizontal: 10 }}
                              source={{ uri: `https://image.tmdb.org/t/p/w780${tvShow.poster_path}` }}
                            />
                          </TouchableOpacity>
                        );
                      }
                    })
                  )
              )
          }
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>
            {
              showMovieList
                ? 'Avaliações de filmes recentes de '
                : 'Avaliações de séries recentes de '
            }
            {name !== null ? name : username}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate(showMovieList ? 'RatedMovies' : 'RatedSeries')}>
            <Text style={{ color: '#E9A6A6', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 30, paddingBottom: 20 }}>
          {
            ratedsLoading
              ? <Loading size={36} />
              : (
                showMovieList
                  ? (
                    ratedMovies.map((movie, index) => {
                      if (index < 5) {
                        return (
                          <View
                            style={{ marginHorizontal: 10 }}
                            key={movie.id}
                          >
                            <TouchableOpacity
                              onPress={() => navigation.navigate('MovieDetails', {movieId : movie.id, requestScreen : 'Profile'})}
                            >
                              <Image
                                style={{ width: 58, height: 82, borderRadius: 7 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}` }}
                              />
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                              <Ionicons name='star' size={12} color='#EC2626' />
                              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 4 }}>{movie.rating}/10</Text>
                            </View>
                          </View>
                        );
                      }
                    })
                  )
                  : (
                    ratedTvShows.map((tvShow, index) => {
                      if (index < 5) {
                        return (
                          <View
                            style={{ marginHorizontal: 10 }}
                            key={tvShow.id}
                          >
                            <TouchableOpacity
                              onPress={() => navigation.navigate('', {tvShowId : tvShow.id, requestScreen : 'Profile'})}
                            >
                              <Image
                                style={{ width: 58, height: 82, borderRadius: 7 }}
                                source={{ uri: `https://image.tmdb.org/t/p/w780${tvShow.poster_path}` }}
                              />
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                              <Ionicons name='star' size={12} color='#EC2626' />
                              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 4 }}>{tvShow.rating}/10</Text>
                            </View>
                          </View>
                        );
                      }
                    })
                  )
              )
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
