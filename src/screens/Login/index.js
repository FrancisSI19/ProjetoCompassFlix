import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import {
  createRequestToken,
  validateTokenWithLogin,
  createSession,
  getAccountDetails
} from '../../constants/urls'

import styles from './styles';
import Loading from '../../components/Loading';
import Input from '../../screens/Login/Input';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);

  const [keyboardShown, setKeyboardShown] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShown(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShown(false);
    });

    getAccountData();

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const getAccountData = () => {
    setLoading(true);
    try {
      AsyncStorage.getItem('username')
        .then(value => {
          if (value !== null) navigation.navigate('TabBar');
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const SignIn = async () => {
    console.log(username);
    console.log(password);

    let requestToken = '';
    let sessionId = '';

    setLoading(true);

    try {
      const { data } = await api.get(createRequestToken);

      requestToken = data.request_token;
      console.log('requestToken:', requestToken);

      try {
        const { data } = await api.post(validateTokenWithLogin, {
          username: username,
          password: password,
          request_token: requestToken
        });
        console.log('validateToken:', data);

        try {
          const { data } = await api.post(createSession, { request_token: requestToken });
          sessionId = data.session_id;

          try {
            const {data} = await api.get(`${getAccountDetails}${sessionId}`);

            await AsyncStorage.setItem('sessionId', sessionId);
            await AsyncStorage.setItem('accountId', (data.id).toString());
            await AsyncStorage.setItem('name', data.name);
            await AsyncStorage.setItem('username', data.username);
            const avatarPath = data.avatar.tmdb.avatar_path === null ? '' : data.avatar.tmdb.avatar_path;
            await AsyncStorage.setItem('avatar', avatarPath);

            console.log('sessionId:', sessionId);
            console.log('accountId:', data.id);
            console.log('name:', data.name);
            console.log('username:', data.username);
            console.log('avatar:', avatarPath);

            setInvalidLogin(false);
            setUsername('');
            setPassword('');

            navigation.navigate('TabBar');
          } catch (error) {
            console.log(error);
          }

        } catch (error) {
          console.log(error);
        }

      } catch (error) {
        setInvalidLogin(true);
        console.log(error);
      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  console.log(loading)

  return loading ? <Loading size={60} /> : (
    <SafeAreaView style={styles.rootContainer}>
      {
        !keyboardShown && (
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../../assets/img/banner.png')}
            />
            <Image
              style={styles.logo}
              source={require('../../assets/img/logo.png')}
            />
          </View>
        )
      }

      <Text style={[styles.loginText, { marginTop: keyboardShown ? 40 : -20 }]}>
        Login
      </Text>

      <Text style={styles.loginDescription}>
        Entre na sua conta para continuar.
      </Text>

      <Input placeholder='e-mail' iconName='md-person-circle-outline' setLoginInfo={setUsername} invalidLogin={invalidLogin} value={username} />
      <Input secureTextEntry placeholder='senha' iconName='lock-closed-outline' setLoginInfo={setPassword} invalidLogin={invalidLogin} value={password} />

      {
        invalidLogin &&
        <Text style={{ color: '#EC2626', fontSize: 12, fontFamily: 'OpenSans-Regular', marginTop: 16 }}>
          Usu??rio ou senha inv??lidos
        </Text>
      }

      <TouchableOpacity style={[styles.signInBtn, { marginTop: invalidLogin ? 16 : 48 }]} onPress={SignIn}>
        <Text style={styles.enterTxt}>
          Entrar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;
