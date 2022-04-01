import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';

const Loading = ({ size }) => {
  return (
    <View style={styles.background}>
      <ActivityIndicator size={size} color="#E9A6A6" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  }
})

export default Loading;
