import React from 'react';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles';
import Loading from '../../components/Loading';
import RatingModal from './RatingModal';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';
import Seasons from './Seasons';

const TvShowDetails = ({ navigation, route }) => {
  const { tvShowId, requestScreen } = route.params;
  const [loading, setLoading] = useState(true);

  const [backdrop, setBackdrop] = useState('');
  const [poster, setPoster] = useState('');

  const [title, setTitle] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [overview, setOverview] = useState('');

  const [voteAverage, setVoteAverage] = useState('');
  const [voteCount, setVoteCount] = useState('');

  const [favorite, setFavorite] = useState(false);
  const [rated, setRated] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const [seasons, setSeasons] = useState('');

  const getDetails = async () => {
    try {
      const queryString = `tv/${tvShowId}?api_key=${API_KEY}&language=pt-BR`;
      const { data } = await api.get(queryString);

      setBackdrop(data.backdrop_path);
      setPoster(data.poster_path);
      setTitle(data.name);
      setCreatedBy(data.created_by[0].name);
      setVoteAverage(data.vote_average);
      setVoteCount(data.vote_count);
      setOverview(data.overview);
      setSeasons(data.seasons);
    } catch (error) {
      console.log(error);
    }
  }

  const markAsFavorite = async () => {
    try {
      setFavorite(!favorite);

      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`;
      const { data } = await api.post(queryString, {
        media_type: 'tv',
        media_id: tvShowId,
        favorite: !favorite
      });

    } catch (error) {
      setFavorite(!favorite);
      console.log(error);
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
        const tvShow = data.results.find(tvShow => tvShow.id === tvShowId);

        setRated(true);
        setRating(tvShow.rating);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
    getStates();
  }, []);

  return loading ? <Loading size={60} /> : (
    <View style={styles.root}>
      <ScrollView>
        <Image
          style={styles.backdrop}
          source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop}` }}
        />

        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.navigate(requestScreen)}
        >
          <Ionicons name='arrow-back' size={26} color='#000' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnFavorite}
          onPress={markAsFavorite}
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
            tvShowId={tvShowId}
            setCurrentRating={setRating}
            setRated={setRated}
          />

          <View style={[styles.mediaInfoEnvelope]}>
            <Text style={styles.title}>
              {title}
            </Text>

            <Text style={styles.directionText}>
              Criado por
              <Text style={styles.directorName}> {createdBy} </Text>
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
          </View>

          <Text style={styles.overview}>
            {overview}
          </Text>

          <Seasons seasons={seasons} tvShowId={tvShowId} />
        </View>
      </ScrollView>
    </View>
  );
}

export default TvShowDetails;
