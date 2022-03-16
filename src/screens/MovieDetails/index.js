/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { useEffect, useState } from 'react';

import { fetchCredits } from '../../services/api';

export default function MovieDetails({ route }) {

  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  const [actor, setActor] = useState([]);

  const { movie } = route.params;

  useEffect(() => {

    setLoading(true);

    fetchCredits(movie.id).then((data) => {
      setCredits(data.credits);
      setDirector(data.director);
      setActor(data.actores)
      setLoading(false);
    });
  }, []);

 return (
   <View>
     <Image
          style={{ width: 80, height: 100 }}
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movie?.poster_path}`,
                }}
     ></Image>

      <Text>Direção por: {director?.name}</Text>

      <Text>{movie?.original_title}</Text>
      <Text>{movie?.overview}</Text>
      <Text>{movie?.vote_average}/10</Text>
      <Text>{}</Text>



   </View>
  );
}