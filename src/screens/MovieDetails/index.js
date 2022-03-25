import React, {useEffect, useState} from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import {fetchCredits, fetchDetails} from '../../services/api';
import Loading from '../../components/Loading';

  const MovieDetails = ({ navigation, route }) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');

  const [backdrop, setBackdrop] = useState('');
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [runtime, setRuntime] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [voteCount, setVoteCount] = useState('');
  const [overview, setOverview] = useState('');
  const [cast, setCast] = useState([]);

  const {movieId} = route.params;

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetchDetails(movieId).then((data) => {

      setBackdrop(data.backdrop);
      setPoster(data.poster);
      setTitle(data.title);
      setReleaseYear(new Date(data.releaseDate).getFullYear());
      setRuntime(data.runtime);
      setVoteAverage(data.voteAverage);
      setVoteCount(data.voteCount);
      setOverview(data.overview);


    });

    fetchCredits(movieId).then((data) => {


      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);


    });

    isFavorite();

  }, []);

  const isFavorite = async () => {
    setLoading(true);
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      try {
        const {data} = await api.get(queryString);

        data.results.find(movie => movie.id === movieId)
        ? setFavorite(true)
        : setFavorite(false);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const markMovieAsFavorite = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`;
      setFavorite(!favorite);
      try {
        const {data} = await api.post(queryString, {
          media_type: 'movie',
          media_id: movieId,
          favorite: (!favorite)
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return loading ? <Loading size={60} /> : (
    <View style={styles.root}>
      <ScrollView>
        <Image
          style={styles.backdrop}
          source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop}` }}
        />

        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.navigate('ListMovies')}
        >
          <Ionicons name='arrow-back' size={26} color='#000' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnFavorite}
          onPress={markMovieAsFavorite}
        >
          {
            favorite
            ? <MaterialIcons name='star' size={26} color='#EC2626' />
            : <MaterialIcons name='star-border' size={26} color='#000' />
          }
        </TouchableOpacity>

        <View style={styles.mainSection}>
          <View style={styles.poster}>
            <Image
              style={{ width: 116, height: 178, borderRadius: 6}}
              source={{ uri: `https://image.tmdb.org/t/p/w780${poster}` }}
            />

            <TouchableOpacity
              style={styles.rateBtn}
            >
              <Text style={styles.rateText}>Avalie agora</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.mediaInfoEnvelope]}>
            <Text style={styles.title}>
              {title}
            </Text>
            <View style={styles.timeInfoEnvelope}>
              <Text style={styles.releaseYear}>{releaseYear} | </Text>
              <Text style={styles.runtime}>{runtime} min</Text>
            </View>

            <Text style={styles.directionText}>
              Direção por
              <Text style={styles.directorName}> {director?.name} </Text>
            </Text>

            <View style={styles.ratingEnvelope}>
              <Text style={styles.voteAverage}>
                {voteAverage}/10
              </Text>

              <View style={styles.voteCountEnvelope}>
                <Ionicons name='heart' size={24} color='#EC2626' />
                <Text style={styles.voteCount}>
                  {
                    voteCount >= 1000
                    ? `${(voteCount/1000).toFixed(0)}k`
                    : voteCount
                  }
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.overview}>
            {overview}
          </Text>

          <View style={styles.castTag}>
            <Text style={styles.castText}>Elenco</Text>
            <View style={styles.castBorder} />
          </View>

          {
            cast.map(item => {
              return (
                <View
                  style={styles.castEnvelope}
                  key={item.id}
                >
                  <Image
                    style={styles.castProfile}
                    source={{ uri: `https://image.tmdb.org/t/p/w780${item.profilePath}` }}
                  />
                  <View style={styles.castInfoEnvelope}>
                    <Text style={styles.castName}>
                      {item.originalName}
                    </Text>
                    <Text style={styles.characterName}>
                      {item.characterName}
                    </Text>
                  </View>
                </View>
              );
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;
