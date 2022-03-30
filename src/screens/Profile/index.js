import React from 'react';
import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const Profile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const getUserData = async () => {
    try {
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.btnLeave}>
        <Ionicons name='exit-outline' size={16} color='#000' />
        <Text style={styles.txtLeave}>Sair</Text>
      </TouchableOpacity>

      <Image
        style={styles.profilePic}
        source={{ uri: `https://image.tmdb.org/t/p/w400/${avatar}` }}
      />
      <Text style={styles.username}>{name !== null ? name : username}</Text>
    </View>
  );
}

export default Profile;
