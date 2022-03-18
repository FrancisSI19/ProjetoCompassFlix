import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor='rgba(255, 255, 255, 0.5)'
        {...props}
        onChangeText={(value) => props.setLoginInfo(value)}
      />
      <Icon
        style={styles.icon} 
        name={props.iconName} 
        size={20} 
        color='rgba(255, 255, 255, 0.5)'
      />
    </View>
  );
}

export default Input;
