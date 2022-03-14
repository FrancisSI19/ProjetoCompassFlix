import React, { useEffect, useState } from 'react';
import { 
  Image, 
  Keyboard,
  SafeAreaView, 
  Text, 
  TouchableOpacity, 
  View
} from 'react-native';

import styles from './styles';
import Input from './components/Input';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
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
      <Input placeholder='senha' iconName='lock-closed-outline' secureTextEntry setLoginInfo={setPassword} />

      <TouchableOpacity style={styles.enterBtn}>
        <Text style={styles.enterTxt}>
          Entrar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Login;
