import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  View,
  Text,
  Alert,
  ColorPropType,
  Touchable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Name,
  Imagem,
  Icon1,
  Icon2,
  Linha1,
  Linha2,
  Meio,
  Botão,
  TxtBotão,
  Sair,
  ImagemSeriesFilmes,
  ViewImagensSeriesFilmes,
  SeriesFilmesUsuario,
  Vermais,
  TxtVertudo,
  ImagemAvaliados,
  ImagemFavoritos,
  VerTudo,
} from './styles1';
import MoviesFavorites from '../MoviesFavorites';
import api from '../../services/api';
import {API_KEY} from '../../constants/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {API_URL} from '../../constants/constants'
import RatedMovieList from '../MoviesRate';
import RatedMovies from '../../components/ListRatedMovies';
import {Vote} from './styles';

function Perfil({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [favoritesTvShows, setFavoriteTvShows] = useState([])

  useEffect(() => {
    try {
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
    getFavoriteTvshows();
    getFavoriteMovies();
    getRatedMovies();
  }, []);

  const optionAlert = () => {
    Alert.alert('Atenção!', 'Deseja mesmo sair?', [
      {
        text: 'CANCELAR',
        onPress: () => {},
      },
      {
        text: 'SIM',
        onPress: () => removeAccountData(),
      },
    ]);
  };

  const removeAccountData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  async function getFavoriteMovies() {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      console.log(sessionId, accountId);
      try {
        const queryString = `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
        const {data} = await api.get(queryString);
        setFavoriteMovies(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getFavoriteTvshows() {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      console.log(sessionId, accountId);
      try {
        const { data } = await api.get
        (`account/${accountId}/favorite/tv?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`)
    setFavoriteTvShows(data.results);
    setFavoriteTvShows(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  

  const getRatedMovies = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const {data} = await api.get(
        `account/${accountId}/rated/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`,
      );
      setRatedMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRatedMovies();
  }, []);

  return (
    <Container>
      <Botão title="sair" onPress={optionAlert}>
        <TxtBotão>Sair</TxtBotão>
      </Botão>
      <Sair source={require('../../assets/img/sair1.png')} />
      <Linha1></Linha1>
      <Icon1 source={require('../../assets/img/movies.png')} />
      <Meio></Meio>
      <Icon2 source={require('../../assets/img/series.png')} />
      <Linha2></Linha2>

    
        <Name>
          <Name>{name === null ? username : name}</Name>
        </Name>
        <Imagem
          source={{
            uri: `https://image.tmdb.org/t/p/w400/${avatar}`,
          }}
        />
      
        <ViewImagensSeriesFilmes>
          <SeriesFilmesUsuario>
            {' '}
            Filmes favoritas de {username}{' '}
          </SeriesFilmesUsuario>
          <Vermais
            onPress={() => {
              navigation.navigate('FavoriteMovies');
            }}>
            <TxtVertudo>Ver tudo</TxtVertudo>
          </Vermais>
          {favoriteMovies.map((movie, index) => {
            if (index < 4)
              return (
                <ImagemFavoritos
                  key={movie.id}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                  }}
                />
              );
          })}

          
        </ViewImagensSeriesFilmes>

        {/* <ViewImagensSeriesFilmes>
          <SeriesFilmesUsuario>
            {' '}
            Filmes favoritas de {username}{' '}
          </SeriesFilmesUsuario>
          <Vermais
            onPress={() => {
              navigation.navigate('FavoriteMovies');
            }}>
            <TxtVertudo>Ver tudo</TxtVertudo>
          </Vermais>
          {favoritesTvShows.map((TV, index) => {
            if (index < 4)
              return (
                <ImagemFavoritos
                  key={TV.id}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w780${TV.poster_path}`,
                  }}
                />
              );
          })}

          
        </ViewImagensSeriesFilmes> */}
        <VerTudo
            onPress={() => {
              navigation.navigate('RatedMovies');
            }}>
            <TxtVertudo>Ver tudo</TxtVertudo>
          </VerTudo>

        <ViewImagensSeriesFilmes>
          {ratedMovies.map((movie, index) => {
            if (index < 4)
              return (
                <ImagemAvaliados
                  key={movie.id}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
                  }}
                />
              );
          })}
        </ViewImagensSeriesFilmes>
    
    </Container>
  );
}

export default Perfil;
