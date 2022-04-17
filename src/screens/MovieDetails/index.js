import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import { fetchCredits } from '../../services/api';
import Loading from '../../components/Loading';
import ModalRating from '../../components/ModalRating';
import ListModal from './Components/ListModal';
import InfoModal from './Components/InfoModal';
import MediaDetails from '../../components/MediaDetails';

const MovieDetails = ({ navigation, route }) => {
  const { movieId } = route.params;
  const [loading, setLoading] = useState(true);

  const [credits, setCredits] = useState(null);
  const [director, setDirector] = useState('');

  const [cast, setCast] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const [showListModal, setShowListModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [listContainsMovie, setListContainsMovie] = useState(false);

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
      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);
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

        <ModalRating
          visible={modalVisible}
          setModalVisible={setModalVisible}
          mediaId={movieId}
          mediaType='movie'
          setCurrentRating={setRating}
          setRated={setRated}
        />

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
      </ScrollView>
    </View>
  );
};

export default MovieDetails;