import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { API_KEY } from '../../../../constants/constants';
import api from '../../../../services/api';

const ListModal = ({ visible, setVisible }) => {
  const [movieList, setMovieList] = useState([]);
  const [selected, setSelected] = useState('');

  const selectList = (name) => {
    if (name === selected) {
      setSelected('');
    } else {
      setSelected(name);
    }
  }

  const getCreatedLists = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const queryString = `https://api.themoviedb.org/3/account/12056192/lists?api_key=${API_KEY}&language=pt-BR&session_id=${sessionId}`;

      const { data } = await api.get(queryString);
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCreatedLists();
  }, [])

  return (
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
              setSelected('');
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
                      style={[styles.radio, {padding: selected === list.name ? 2 : 10}]}
                      onPress={() => selectList(list.name)}
                    >
                      <View style={[styles.radioFill, {padding: selected === list.name ? 8 : 0 }]} />
                    </TouchableOpacity>
                    <Text style={styles.listTitle}>{list.name}</Text>
                  </View>
                );
              })
            }

            <TouchableOpacity
              style={[styles.btnSave, {backgroundColor: selected ? '#000' : '#C4C4C4'}]}
              disabled={selected ? false : true}
            >
              <Text style={[styles.txtSave, {color: selected ? '#fff' : '#8E8E8E'}]}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ListModal;