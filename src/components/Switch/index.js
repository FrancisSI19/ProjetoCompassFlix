import React, { useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Switch = ({ isEnable, setIsEnable }) =>{
  const [position, setPosition] = useState(new Animated.Value(0));

  const animate = () => {
    Animated.timing(
      position, {
        toValue: isEnable ? 0 : 36,
        duration: 500,
        useNativeDriver: false
      }
    ).start();
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setIsEnable(!isEnable);
        animate();
      }}
    >
      <Animated.View style={[styles.toggle, {left: position}]} />
      <Ionicons style={{marginLeft: 10}} name='eye' size={16} color={isEnable ? '#000' : '#fff'} />
      <FontAwesome style={{marginLeft: 23}} name='pencil' size={16} color={isEnable ? '#fff' : '#000'} />
    </TouchableOpacity>
  );
}

export default Switch;
