import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import { fetchCredits } from '../../services/api';
import Loading from '../../components/Loading';
import ListModal from './Components/ListModal';
import InfoModal from './Components/InfoModal';
import RatingModal from './RatingModal';
import MediaDetails from '../../components/MediaDetails';

const MovieDetails = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);

  const [director, setDirector] = useState('');

  const [cast, setCast] = useState([]);
  const [backdrop, setBackdrop] = useState('');
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [runtime, setRuntime] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [voteCount, setVoteCount] = useState('');
  const [overview, setOverview] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const [showListModal, setShowListModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [listContainsMovie, setListContainsMovie] = useState(false);

  const { movieId, requestScreen } = route.params;
  const [details, setDetails] = useState();
  const getDetails = async () => {
    try {
      const queryString = `movie/${movieId}?api_key=${API_KEY}&language=pt-BR`;
      const { data } = await api.get(queryString);

      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  const [favorite, setFavorite] = useState(false);
  const [rated, setRated] = useState(false);
  const getStates = async () => {
    try {
      const accountId = await AsyncStorage.getItem('accountId');
      const sessionId = await AsyncStorage.getItem('sessionId');

      const queryString = `movie/${movieId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`;
      const { data } = await api.get(queryString);

      setFavorite(data.favorite);
      setRated(data.rated);

      if (data.rated) {
        const queryString = `account/${accountId}/rated/movies?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}&sort_by=created_at.desc`;

        const { data } = await api.get(queryString);
        const { rating } = data.results.find(movie => movie.id === movieId);

        setRating(rating);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const goBack = () => navigation.goBack();

  useEffect(() => {
    fetchCredits(movieId).then((data) => {
      setPoster(data.poster);
      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);
      setBackdrop(data.backdrop);
      setTitle(data.title);
      setReleaseYear(new Date(data.releaseDate).getFullYear());
      setRuntime(data.runtime);
      setVoteAverage(data.voteAverage);
      setVoteCount(data.voteCount);
      setOverview(data.overview);
    });

    getDetails();
    getStates();
  }, []);

  const markAsFavorite = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`;
      try {
        setFavorite(!favorite);
        const { data } = await api.post(queryString, {
          media_type: 'movie',
          media_id: movieId,
          favorite: (!favorite)
        });
      } catch (error) {
        setFavorite(!favorite);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const isRated = async () => {
    setLoading(true);
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      try {
        const queryString = `account/${accountId}/rated/movies?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}&sort_by=created_at.desc`;

        const { data } = await api.get(queryString);
        const movie = data.results.find(movie => movie.id === movieId);

        if (movie) {
          setRated(true);
          setRating(movie.rating);
        } else {
          setRated(false);
        }
      } catch (error) {
        console.log(error);
      }

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  // redux
  function handleAdd(favorite){
    dispatch({
      type: 'ADD_FAVORITE',
      favorite,
    });
  }
  return loading ? <Loading size={60} /> : (
    <View style={styles.root}>
      <ScrollView>
        <MediaDetails
          type='movie'
          favorite={favorite}
          rated={rated}
          rating={rating}
          details={details}
          markAsFavorite={markAsFavorite}
          goBack={goBack}
          setModalVisible={setModalVisible}
          director={director}
          setShowListModal={setShowListModal}
        />
      
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back' size={26} color='#000' />
        </TouchableOpacity>
      
        <TouchableOpacity
          style={styles.btnFavorite}
          onPress={() => {
            handleAdd(favorite);
            markMovieAsFavorite();
          }}
        >
          {
            favorite
              ? <MaterialIcons name='star' size={26} color='#EC2626' />
              : <MaterialIcons name='star-border' size={26} color='#000' />
          }
        </TouchableOpacity>
        <View style={styles.mainSection}>
          <View style={styles.posterEnvelope}>
            <Image
              style={styles.poster}
              source={{ uri: `https://image.tmdb.org/t/p/w780${poster}` }}
            />

            {
              rated
                ? (
                  <TouchableOpacity
                    style={styles.btnRated}
                    onPress={() => {
                      setModalVisible(true)
                    }}
                  >
                    <Text style={styles.txtRated}>Sua nota: {rating}/10</Text>

                    <View style={styles.icon}>
                      <EvilIcons
                        name='pencil'
                        size={10}
                      />
                    </View>
                  </TouchableOpacity>
                )
                : (
                  <TouchableOpacity
                    style={styles.btnRate}
                    onPress={() => {
                      setModalVisible(true)
                    }}
                  >
                    <Text style={styles.txtRate}>Avalie agora</Text>
                  </TouchableOpacity>
                )
            }

          </View>

          <RatingModal
            visible={modalVisible}
            setModalVisible={setModalVisible}
            movieId={movieId}
            setCurrentRating={setRating}
            setRated={setRated}
          />
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
                      ? `${(voteCount / 1000).toFixed(0)}k`
                      : voteCount
                  }
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.containerAddMovie}
              onPress={() => setShowListModal(true)}
            >
              <View style={styles.btnAddMovie}>
                <MaterialIcons name='add' size={20} color='#000' />
              </View>
              <Text style={styles.txtAddMovie}>Adicionar a uma lista</Text>
            </TouchableOpacity>

            <ListModal
              visible={showListModal}
              setVisible={setShowListModal}
              movieId={movieId}
              setShowSuccessModal={setShowSuccessModal}
              setListContainsMovie={setListContainsMovie}
            />

            <InfoModal
              visible={showSuccessModal}
              setVisible={setShowSuccessModal}
              listContainsMovie={listContainsMovie}
            />
            <View style={styles.castContainer}>
              <View style={styles.castTag}>
                <Text style={styles.castText}>Elenco</Text>
                <View style={styles.castBorder} />
              </View>

              {cast.map(item => {
                return (
                  <View
                    style={styles.castInfoContainer}
                    key={item.id}
                  >
                    <Image
                      style={styles.castProfile}
                      source={{ uri: `https://image.tmdb.org/t/p/w780${item.profilePath}` }}
                    />
                    <View style={styles.castNameContainer}>
                      <Text style={styles.castName}>
                        {item.originalName}
                      </Text>
                      <Text style={styles.characterName}>
                        {item.characterName}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default MovieDetails;
