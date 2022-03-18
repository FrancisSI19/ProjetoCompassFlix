import React, { useEffect, useState } from 'react';

import {

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

import Input from '../../screens/Login/Input'



const Login = ({ navigation }) => {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');



  const [keyboardShown, setKeyboardShown] = useState(false);



  useEffect(() => {

    getData();



    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {

      setKeyboardShown(true);

    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {

      setKeyboardShown(false);

    });



    return () => {

      showSubscription.remove();

      hideSubscription.remove();

    };

  }, []);



  const getData = () => {

    try {

      AsyncStorage.getItem('username')

        .then(value => {

          if (value !== null) navigation.navigate('TabBar');

        });

    } catch (error) {

      console.log(error);

    }

  }



  const SignIn = async () => {

    console.log(username);

    console.log(password);



    let requestToken = '';

    let sessionId = '';

   

    if (username === '' || password === '') {

      alert('Ops! Você esqueceu de inserir seus dados.');

    } else {

      try {

        const {data} = await api.get(createRequestToken);

        requestToken = data.request_token;

        console.log(requestToken);

 

        try {

          const {data} = await api.post(validateTokenWithLogin, {

            username: username,

            password: password,

            request_token: requestToken

          });

          console.log(data);

 

          try {

            const {data} = await api.post(createSession, {request_token: requestToken});

            console.log(data);

            sessionId = data.session_id;

 

            try {

              const {data} = await api.get(`${getAccountDetails}${sessionId}`);

              console.log(data)

              await AsyncStorage.setItem('name', data.name);

              await AsyncStorage.setItem('username', data.username);

              await AsyncStorage.setItem('connected', 'true');

              navigation.navigate('TabBar');

             

            } catch (error) {

              console.log(error);

            }

           

          } catch (error) {

            console.log(error);

          }

 

        } catch (error) {

          console.log(error);

          alert('Ops! Não foi possível se conectar, verifique se os dados informados estão corretos e tente novamente.')

        }

 

      } catch (error) {

        console.log(error);

      }

    }

  }



  return (

    <SafeAreaView style={styles.rootContainer}>

      {

        !keyboardShown && (

          <View style={{ alignItems: 'center' }}>

            <Image source={require('../../assets/img/banner.png')} />

            <Image

              style={styles.logo}

              source={require('../../assets/img/logo.png')}

            />

          </View>

        )

      }



      <Text style={[styles.loginText, {marginTop: keyboardShown ? 40 : -20}]}>

        Login

      </Text>

      <Text style={styles.loginDescription}>

        Entre na sua conta para continuar.

      </Text>



      <Input placeholder='e-mail' iconName='md-person-circle-outline' setLoginInfo={setUsername} />

      <Input secureTextEntry placeholder='senha' iconName='lock-closed-outline' setLoginInfo={setPassword} />



      <TouchableOpacity style={styles.enterBtn} onPress={SignIn}>

        <Text style={styles.enterTxt}>

          Entrar

        </Text>

      </TouchableOpacity>

    </SafeAreaView>

  );

}



export default Login;

