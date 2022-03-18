import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Input, Icon } from '../styles';

import styles from './styles';

const Input = props => {
  return (
    <Container>
      <Input 
        placeholderTextColor='rgba(255, 255, 255, 0.5)'
        {...props}
        onChangeText={(value) => props.setLoginInfo(value)}
      />
      <Icon>
        <Icon
        name={props.iconName} 
        size={20} 
        color='rgba(255, 255, 255, 0.5)'
      />
      </Icon>
        
    </Container>
  );
}

export default Input;
