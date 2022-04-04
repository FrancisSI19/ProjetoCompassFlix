import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Input = props => {
  const invalidFieldColor = '#EC2626';
  const defaultFieldColor = 'rgba(255, 255, 255, 0.5)';

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, {color: props.invalidLogin ? invalidFieldColor : defaultFieldColor}]}
        placeholderTextColor={props.invalidLogin ? invalidFieldColor : defaultFieldColor}
        {...props}
        onChangeText={(value) => props.setLoginInfo(value)}
        value={props.value}
      />
      <Icon
        style={styles.icon}
        name={props.iconName}
        size={20}
        color={props.invalidLogin ? invalidFieldColor : defaultFieldColor}
      />
    </View>
  );
}

export default Input;
