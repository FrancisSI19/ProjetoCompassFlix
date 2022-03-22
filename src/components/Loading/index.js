import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loading = ({ size }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#E9A6A6" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(21,21,21)',
  }
});
