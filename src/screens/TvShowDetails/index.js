import React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import Loading from '../../components/Loading';
import ModalRating from '../../components/ModalRating';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import Seasons from './Components/Seasons';
import MediaDetails from '../../components/MediaDetails';

const TvShowDetails = ({ navigation, route }) => {
  const { tvShowId } = route.params;
  const [loading, setLoading] = useState(true);

  const [favorite, setFavorite] = useState(false);
  const [rated, setRated] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const [details, setDetails] = useState()
  const getDetails = async () => {
    try {
      const queryString = `tv/${tvShowId}?api_key=${API_KEY}&language=pt-BR`;
      const { data } = await api.get(queryString);
      console.log(data.seasons);

      setDetails(data);
    } catch (error) {
      // console.log(error);
    }
  }

  const markAsFavorite = async () => {
    try {
      setFavorite(!favorite);

      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`;
      await api.post(queryString, {
        media_type: 'tv',
        media_id: tvShowId,
        favorite: !favorite
      });

    } catch (error) {
      setFavorite(!favorite);
      // console.log(error);
    }
  }

  const getStates = async () => {
    try {
      const accountId = await AsyncStorage.getItem('accountId');
      const sessionId = await AsyncStorage.getItem('sessionId');

      const queryString = `tv/${tvShowId}/account_states?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR`;
      const { data } = await api.get(queryString);

      setFavorite(data.favorite);

      if (data.rated) {
        const queryString = `account/${accountId}/rated/tv?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}&sort_by=created_at.desc`;

        const { data } = await api.get(queryString);
        const { rating } = data.results.find(tvShow => tvShow.id === tvShowId);

        setRated(true);
        setRating(rating);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const goBack = () => navigation.goBack();

  useEffect(() => {
    getDetails();
    getStates();
  }, []);

  return loading ? <Loading size={60} /> : (
    <View style={styles.root}>
      <ScrollView>
        <MediaDetails
          type='tv'
          favorite={favorite}
          rated={rated}
          rating={rating}
          details={details}
          markAsFavorite={markAsFavorite}
          goBack={goBack}
          setModalVisible={setModalVisible}
        />

        <Seasons seasons={details.seasons} tvShowId={tvShowId} />

        <ModalRating
          visible={modalVisible}
          setModalVisible={setModalVisible}
          mediaId={tvShowId}
          mediaType='tv'
          setCurrentRating={setRating}
          setRated={setRated}
        />
      </ScrollView>
    </View>
  );
}

export default TvShowDetails;
