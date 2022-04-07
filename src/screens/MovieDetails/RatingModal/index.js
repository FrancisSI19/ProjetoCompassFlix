import React from 'react';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import api from '../../../services/api';
import { API_KEY } from '../../../constants/constants';

const RatingModal = ({ visible, setModalVisible, movieId, setCurrentRating, setRated }) => {
  const [rating, setRating] = useState('');
  const [invalidRating, setInvalideRating] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function buttonDisable() {
    if (setInvalideRating === true) {
      disabled = true
    } else {
      disabled = false;
    }
  }

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
        const queryString = `movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;
        // console.log(queryString);

        try {
          const { data } = await api.post(queryString, {
            value: userRating
          });

          console.log(data);
          setRated(true);
          setCurrentRating(rating);
          setModalVisible(false);
        } catch (error) {
          console.log(error);
        }

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
            invalidRating && <Text style={styles.invalidRating}>A nota deve ser entre 0.5 e 10</Text>
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
              disabled={buttonDisable}
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
