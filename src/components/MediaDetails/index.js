import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

const MediaDetails = ({ type, favorite, rated, rating, details, markAsFavorite, goBack, setModalVisible, director, setShowListModal }) => {
  return (
    <>
      <Image
        style={styles.backdrop}
        source={{ uri: `https://image.tmdb.org/t/p/w780${details.backdrop_path}` }}
      />

        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => goBack()}
        >
          <Ionicons name='arrow-back' size={26} color='#000' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnFavorite}
          onPress={markAsFavorite}
        >
          {favorite
            ? <MaterialIcons name='star' size={26} color='#EC2626' />
            : <MaterialIcons name='star-border' size={26} color='#000' />}
        </TouchableOpacity>

        <View style={styles.mainSection}>
          <View style={styles.poster}>
            <Image
              style={styles.posterImg}
              source={{ uri: `https://image.tmdb.org/t/p/w780${details.poster_path}` }}
            />

            {rated
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
                )}
          </View>

          <View style={[styles.infoContainer]}>
            {type === 'movie'
              ? (
                <>
                  <Text style={styles.title}>{details.title}</Text>

                  <View style={styles.timeInfoContainer}>
                    <Text style={styles.releaseYear}>{new Date(details.release_date).getFullYear()} | </Text>
                    <Text style={styles.runtime}>{details.runtime} min</Text>
                  </View>

                  <Text style={styles.directionText}>
                    Direção por
                    <Text style={styles.directorName}> {director?.name} </Text>
                  </Text>
                </>
              )
              : (
                <>
                  <Text style={styles.title}>{details.name}</Text>

                  <Text style={styles.directionText}>
                    No ar pela primeira vez em
                    <Text style={styles.directorName}> {new Date(details.first_air_date).getFullYear()} </Text>
                  </Text>
                  {details.created_by.length === 0
                  ? false
                  : (
                    <Text style={styles.directionText}>
                      Criado por
                      <Text style={styles.directorName}> {details.created_by[0].name} </Text>
                    </Text>
                  )}
                </>
              )}

            <View style={styles.ratingContainer}>
              <Text style={styles.voteAverage}>
                {details.vote_average}/10
              </Text>

              <View style={styles.voteCountContainer}>
                <Ionicons name='heart' size={24} color='#EC2626' />
                <Text style={styles.voteCount}>
                  {details.vote_count >= 1000
                    ? `${(details.vote_count / 1000).toFixed(0)}k`
                    : details.vote_count}
                </Text>
              </View>
            </View>

            {type === 'movie' && (
              <TouchableOpacity
                style={styles.containerAddMovie}
                onPress={() => setShowListModal(true)}
              >
                <View style={styles.btnAddMovie}>
                  <MaterialIcons name='add' size={20} color='#000' />
                </View>
                <Text style={styles.txtAddMovie}>Adicionar a uma lista</Text>
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.overview}>
            {details.overview === ''
              ? 'Visão geral indisponível no momento.'
              : details.overview}
          </Text>
        </View>
        {/* <Seasons seasons={details.seasons} tvShowId={details.id} /> */}
    </>
  );
}

export default MediaDetails;
