import React, {useEffect, useState} from 'react';
import { 
  Image, 
  FlatList,
  SafeAreaView, 
  ScrollView,
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchCredits, fetchDetails} from '../../services/api';

import styles from './style';
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
  console.log('Movie ID:', movieId);

  useEffect(() => {
    setLoading(true);

    fetchDetails(movieId).then((data) => {
      setBackdrop(data.backdrop);
      setPoster(data.poster);
      setTitle(data.title);
      setReleaseYear(new Date(data.releaseDate).getFullYear());
      setRuntime(data.runtime);
      setVoteAverage(data.voteAverage);
      setVoteCount(data.voteCount);
      setOverview(data.overview);
    })

    fetchCredits(movieId).then((data) => {
      setCredits(data.credits);
      setDirector(data.director);
      setCast(data.cast);
    });

    setLoading(false);
  }, []);

  return loading ? <Loading /> : (
    <SafeAreaView style={styles.rootContainer}>
      {/* <ScrollView> */}
        <Image 
          style={[styles.movieBackdrop]}
          source={{ uri: `https://image.tmdb.org/t/p/w780${backdrop}` }}
        />

        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('MovieList')}>
          <Icon name='arrow-back' size={24} color='#000' />
        </TouchableOpacity>

        <View style={styles.mainContent}>
          <View style={styles.movieSection}>
            <Image 
              style={styles.moviePoster}
              source={{ uri: `https://image.tmdb.org/t/p/w780${poster}` }} 
            />

            <View style={styles.movieInfo}>
              <View style={styles.mainInfo}>
                <Text style={styles.movieTitle}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.movieYear}>{releaseYear}</Text>
                  <Text style={styles.movieDuration}>{runtime} min</Text>
                </View>
              </View>

              <Text style={styles.direction}>
                Direção por 
                <Text style={styles.director}> {director?.name}</Text>
              </Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.voteAverage}>{voteAverage}/10</Text>

                <View style={styles.voteCountContainer}>
                  <Icon name='heart' size={24} color='#EC2626' />
                  <Text style={styles.voteCount}>{voteCount >= 1000 ? `${(voteCount/1000).toFixed(0)}k` : voteCount}</Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.overview}>
            {overview}
          </Text>
          
          <View style={styles.castTag}>
            <Text style={styles.castTxt}>Elenco</Text>
            <View style={styles.castBorder} />
          </View>
          
          <FlatList
            data={cast}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.castContainer} key={index}>
                    <Image 
                      style={styles.castPic}
                      source={{ uri: `https://image.tmdb.org/t/p/w780${item.profilePath}` }} 
                    />
                    <View style={styles.castInfo}>
                      <Text style={styles.castName}>{item.originalName}</Text>
                      <Text style={styles.castCharacter}>{item.characterName}</Text>
                    </View>
                  </View>
              );
            }}
          >

          </FlatList>

          {/* <View>
            {
              cast.map((item, index) => {
                return (
                  <View style={styles.castContainer} key={index}>
                    <Image 
                      style={styles.castPic}
                      source={{ uri: `https://image.tmdb.org/t/p/w780${item.profilePath}` }} 
                    />
                    <View style={styles.castInfo}>
                      <Text style={styles.castName}>{item.originalName}</Text>
                      <Text style={styles.castCharacter}>{item.characterName}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View> */}
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default MovieDetails;
