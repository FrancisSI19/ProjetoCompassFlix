import React from 'react';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles';
import { API_KEY } from '../../../constants/constants';
import api from '../../../services/api';

const RatingModal = ({ visible, setModalVisible, tvShowId, setCurrentRating, setRated }) => {
  const [rating, setRating] = useState('');
  const [invalidRating, setInvalideRating] = useState(false);

  const ratingIsValid = (userRating) => {
    return (
      (userRating >= 0.5 && userRating <= 10)
        && (userRating[0] !== '.' && userRating[userRating.length - 1] !== '.')
        ? true
        : false
    );
  }

  const rateMovie = async () => {
    const userRating = rating;

    if (ratingIsValid(userRating)) {
      setInvalideRating(false);

      try {
        const sessionId = await AsyncStorage.getItem('sessionId');
        const queryString = `tv/${tvShowId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

        const { data } = await api.post(queryString, {
          value: userRating
        });

        setRated(true);
        setCurrentRating(rating);
        setModalVisible(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setInvalideRating(true);
    }
  }

  return (
    <Modal
      transparent
      animationType='fade'
      visible={visible}
    >
      <View style={styles.background}>
        <View style={styles.envelope}>
          <Text style={styles.title}>Faça a sua avaliação!</Text>

          <View style={styles.ratingEnvelope}>
            <View style={styles.inputEnvelope}>
              <EvilIcons
                style={styles.icon}
                name='pencil'
                size={20}
                color='#C4C4C4'
              />

              <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={3}
                onChangeText={value => setRating(value.replace(/[^0-9.]/g, ''))}
                value={rating}
              />
            </View>

            <Text style={styles.maxVote}> / 10</Text>
          </View>

          {
            invalidRating && <Text style={styles.invalidRating}>A nota deve ser entre 0,5 e 10</Text>
          }

          <View style={[styles.btnsEnvelope, { marginTop: invalidRating ? 10 : 32 }]}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => {
                setInvalideRating(false);
                setModalVisible(false);
                setRating('');
              }}
            >
              <Text style={styles.textCancel}>
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnOk}
              onPress={() => {
                rateMovie();
              }}
            >
              <Text style={styles.textOk}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default RatingModal;
