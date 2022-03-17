import React, { useEffect, useState } from 'react';
import { 
  Image, 
  Keyboard,
  StatusBar, 
  View,
  navigation
} from 'react-native';
import {Button,Entrar, Container, ImageLogo,Login1, LoginDescri } from './styles';
import Input from './components/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    console.log('useEffect')
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

  return (
    <Container>
      <StatusBar 
        barStyle='dark-content' 
        backgroundColor='#ffffff' 
      />

      {
        !keyboardShown && (
          <View style={{ alignItems: 'center' }}>
            <Image source={require('../Login/assets/img/banner.png')} />
            <ImageLogo
            
              source={require('../Login/assets/img/logo.png')}
            />
          </View>
        )
      }

      <Login1>
        Login
      </Login1>
      <LoginDescri>
        Entre na sua conta para continuar.
      </LoginDescri>

      <Input placeholder='e-mail' iconName='md-person-circle-outline' setLoginInfo={setUsername} />
      <Input placeholder='senha' iconName='lock-closed-outline' secureTextEntry setLoginInfo={setPassword} />

      <Button onPress={() => navigation.navigate('ListMovies')}>
        <Entrar>
          Entrar
        </Entrar>
      </Button>
      
    </Container>
  );
}

export default Login;
