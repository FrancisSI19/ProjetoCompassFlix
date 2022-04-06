import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { API_KEY } from '../../../../constants/constants';
import api from '../../../../services/api';

import SucessModal from '../SuccessModal';

const ListModal = ({ visible, setVisible, movieId }) => {
  const [movieList, setMovieList] = useState([]);
  const [selectedListId, setSelectedListId] = useState('');

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const selectList = (id) => {
    if (id === selectedListId) {
      setSelectedListId('');
    } else {
      setSelectedListId(id);
    }
  }

  const getCreatedLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');
      const queryString = `account/${accountId}/lists?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}`;

      const { data } = await api.get(queryString);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const addMovie = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const queryString = `list/${selectedListId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`;

      const { data } = await api.post(queryString, {media_id: movieId})
      console.log(data);

      setShowSuccessModal(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(movieId);
    getCreatedLists();
  }, [])

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType='fade'
      >
        <View style={styles.background}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Salvar filme em...</Text>

              <TouchableOpacity onPress={() => {
                setVisible(false);
                setSelectedListId('');
              }}>
                <Icon name='close' size={18} color='#000' />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              {movieList.length === 0
                ? <Text style={styles.noListText}>Você precisa criar uma lista primeiro.</Text>
                : movieList.map(list => {
                  return (
                    <View
                      style={styles.list}
                      key={list.id}
                    >
                      <TouchableOpacity
                        style={[styles.radio, {padding: selectedListId === list.id ? 3 : 10}]}
                        onPress={() => selectList(list.id)}
                      >
                        <View style={[styles.radioFill, {padding: selectedListId === list.id ? 7 : 0 }]} />
                      </TouchableOpacity>
                      <Text style={styles.listTitle}>{list.name}</Text>
                    </View>
                  );
                })
              }
              <TouchableOpacity
                style={[styles.btnSave, {backgroundColor: selectedListId ? '#000' : '#C4C4C4'}]}
                disabled={selectedListId ? false : true}
                onPress={addMovie}
              >
                <Text style={[styles.txtSave, {color: selectedListId ? '#fff' : '#8E8E8E'}]}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <SucessModal
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
        setShowListModal={setVisible}
        setSelectedListId={setSelectedListId}
      />
    </>
  );
}

export default ListModal;
