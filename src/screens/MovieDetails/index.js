import React, {useEffect, useState} from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

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

  useEffect(() => {
    fetchDetails(movieId).then((data) => {
      setLoading(true);

      setBackdrop(data.backdrop);
      setPoster(data.poster);
      setTitle(data.title);
      setReleaseYear(new Date(data.releaseDate).getFullYear());
      setRuntime(data.runtime);
      setVoteAverage(data.voteAverage);
      setVoteCount(data.voteCount);
      setOverview(data.overview);

      setLoading(false);
    });

    fetchCredits(movieId).then((data) => {
      setLoading(true);

      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);

      setLoading(false);
    });
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
          onPress={() => navigation.navigate('ListMovies')}
        >
          <Ionicons name='arrow-back' size={26} color='#000' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnFavorite}
        >
          <MaterialIcons name='star-border' size={26} color='#000' />
          {/* <MaterialIcons name='star' size={26} color='#EC2626' /> */}
        </TouchableOpacity>

        <View style={styles.mainSection}>
          <View style={styles.poster}>
            <Image
              style={{ width: 116, height: 172}}
              source={{ uri: `https://image.tmdb.org/t/p/w780${poster}` }}
            />

            <TouchableOpacity
              style={{
                alignItems: 'center',

                padding: 4,
                borderRadius: 5,
                backgroundColor: '#E9A6A6'
              }}
            >
              <Text style={{ color: '#000', textTransform: 'uppercase', fontSize: 10, fontFamily: 'OpenSans-Bold' }}>Avalie agora</Text>
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
