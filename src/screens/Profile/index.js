import React from 'react';
import { useEffect, useState } from 'react';
import { Alert, Image, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { API_KEY } from '../../constants/constants';
import api from '../../services/api';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [ratingCount, setRatingCount] = useState(0);

  const getUserData = async () => {
    try {
      AsyncStorage.getItem('name').then(value => setName(value));
      AsyncStorage.getItem('username').then(value => setUsername(value));
      AsyncStorage.getItem('avatar').then(value => setAvatar(value));
    } catch (error) {
      console.log(error);
    }
  }

  const clearAccountData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  const logoutAlert = () => {
    Alert.alert('Atenção!', 'Deseja mesmo sair?', [
      {
        text: 'CANCELAR',
        onPress: () => {},
      },
      {
        text: 'SIM',
        onPress: () => clearAccountData(),
      },
    ]);
  }

  const getFavoriteMovies = async () => {
    try {
      const sessionId = await AsyncStorage.getItem('sessionId');
      const accountId = await AsyncStorage.getItem('accountId');

      const queryString = `account/${accountId}/favorite/movies?api_key=${API_KEY}&session_id=${sessionId}&language=pt-BR&sort_by=created_at.desc`;
      const {data} = await api.get(queryString);
      console.log(data.results);

      setFavoriteMovies(data.results);
      setRatingCount(data.total_results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserData();
    getFavoriteMovies();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView>
        <TouchableOpacity
          style={styles.btnLeave}
          onPress={logoutAlert}
        >
          <Ionicons name='exit-outline' size={16} color='#000' />
          <Text style={styles.txtLeave}>Sair</Text>
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.profilePic}
            source={{ uri: `https://image.tmdb.org/t/p/w400/${avatar}` }}
          />
          <Text style={styles.username}>{name !== null ? name : username}</Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: '#9C4A8B', fontSize: 24, fontFamily: 'OpenSans-Bold' }}>{ratingCount}</Text>
          <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'OpenSans-Regular' }}>Avaliações</Text>
        </View>

        <View style={{ flexDirection: 'row', width: '100%', marginTop: 40 }}>
          <View style={{ flex: 1, alignItems: 'center', paddingVertical: 14, borderWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.19)', borderBottomColor: 'rgba(255, 255, 255, 0.19)', borderRightColor: 'rgba(255, 255, 255, 0.19)' }}>
            <TouchableOpacity>
              <Image source={require('../../assets/img/movies.png')} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center', paddingVertical: 14, borderWidth: 1, borderTopColor: 'rgba(255, 255, 255, 0.19)', borderBottomColor: 'rgba(255, 255, 255, 0.19)' }}>
            <TouchableOpacity>
              <Image source={require('../../assets/img/series1.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>
            Filmes favoritos de {name !== null ? name : username}
          </Text>

          <TouchableOpacity>
            <Text style={{ color: '#E9A6A6', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 30, paddingBottom: 20, borderWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.19)' }}>
          {
            favoriteMovies.map((movie, index) => {
              if (index < 4) {
                return (
                  <TouchableOpacity key={movie.id}>
                    <Image
                      style={{ width: 67, height: 89, borderRadius: 7, marginHorizontal: 10 }}
                      source={{ uri: `https://image.tmdb.org/t/p/w780${movie.poster_path}` }}
                    />
                  </TouchableOpacity>
                );
              }
            })
          }
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>
            Avaliações de filmes recentes de {name !== null ? name : username}
          </Text>

          <TouchableOpacity>
            <Text style={{ color: '#E9A6A6', fontSize: 10, fontFamily: 'OpenSans-SemiBold' }}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 30, paddingBottom: 20, borderWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.19)' }}>
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 67, height: 89, borderRadius: 7 }}
                source={require('../../assets/img/the_batman_cover.png')}
              />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='star' size={12} color='#EC2626' />
              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 6 }}>7.2/10</Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 67, height: 89, borderRadius: 7 }}
                source={require('../../assets/img/the_batman_cover.png')}
              />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='star' size={12} color='#EC2626' />
              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 6 }}>7.2/10</Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 67, height: 89, borderRadius: 7 }}
                source={require('../../assets/img/the_batman_cover.png')}
              />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='star' size={12} color='#EC2626' />
              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 6 }}>7.2/10</Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 67, height: 89, borderRadius: 7 }}
                source={require('../../assets/img/the_batman_cover.png')}
              />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name='star' size={12} color='#EC2626' />
              <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'OpenSans-SemiBold', marginLeft: 6 }}>7.2/10</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
