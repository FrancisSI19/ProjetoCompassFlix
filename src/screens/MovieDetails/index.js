import React, {useEffect, useState} from 'react';
import { 
  Image, 
  SafeAreaView, 
  ScrollView,
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {fetchCredits} from '../../services/api';

import styles from './style';

const MovieDetails = ({ route }) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  const [actor, setActor] = useState([]);

  const {movie} = route.params;

  useEffect(() => {
    setLoading(true);

    fetchCredits(movie.id).then((data) => {
      setCredits(data.credits);
      setDirector(data.director);
      setActor(data.actores);
      setLoading(false);
    });

  }, []);

  const cast = [
    { name: 'Robert Pattinson', character: 'Bruce Wayne / The Batman', img: require('../../assets/img/image48.png') },
    { name: 'Zoë Kravitz', character: 'Selina Kyle / Catwoman', img: require('../../assets/img/image49.png') },
    { name: 'Paul Dano', character: 'Edward Nashton / The Riddler', img: require('../../assets/img/image50.png') },
    { name: 'Jeffrey Wright', character: 'Lt. James Gordon', img: require('../../assets/img/image51.png') },
    { name: 'John Turturro', character: 'Carmine Falcone', img: require('../../assets/img/image52.png') },
  ]

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView>
        <Image 
          style={[styles.movieBackground, ]}
          source={require('../../assets/img/the_batman_background.png')}
        />

        <TouchableOpacity style={styles.backBtn}>
          <Icon name='arrow-back' size={24} color='#000' />
        </TouchableOpacity>

        <View style={styles.mainContent}>
          <View style={styles.movieSection}>
            <Image 
              style={styles.movieCover}
              source={{ uri: `https://image.tmdb.org/t/p/w780${movie?.poster_path}` }} 
            />

            <View style={styles.movieInfo}>
              <View style={styles.mainInfo}>
                <Text style={styles.movieTitle}>{movie?.original_title}</Text>
                <Text style={styles.movieYear}>2022</Text>
                <Text style={styles.movieDuration}>176 min</Text>
              </View>

              <Text style={styles.direction}>
                Direção por 
                <Text style={styles.director}> {director?.name}</Text>
              </Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.voteAverage}>{movie?.vote_average}/10</Text>

                <View style={styles.voteCountContainer}>
                  <Icon name='heart' size={24} color='#EC2626' />
                  <Text style={styles.voteCount}>30k</Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.overview}>
            {movie?.overview}
          </Text>
          
          <View style={styles.castTag}>
            <Text style={styles.castTxt}>Elenco</Text>
            <View style={styles.castBorder} />
          </View>
          
          <View>
            {
              cast.map((item, index) => {
                return (
                  <View style={styles.actorContainer} key={index}>
                    <Image 
                      style={styles.actorPic}
                      source={item.img} 
                    />
                    <View style={styles.actorInfo}>
                      <Text style={styles.actorName}>{item.name}</Text>
                      <Text style={styles.actorCharacter}>{item.character}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
