import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Poster = ({ posterPath }) => {
  return (
    <Image
      style={styles.poster}
      source={{ uri: `https://image.tmdb.org/t/p/w780${posterPath}` }}
    />
  );
}

export default Poster;
const styles = StyleSheet.create({
  poster: {
    width: 80,
    height: 104,
    margin: 10,
    borderRadius: 8,
  }
});
