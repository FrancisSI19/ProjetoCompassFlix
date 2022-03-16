import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View
      // eslint-disable-next-line prettier/prettier
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(21,21,21)',
      }}>
      <ActivityIndicator size="small" color="#0000ff" />
      <Text style={{ color: 'white', alignSelf: 'center' }}>
        Aguarde...
      </Text>
    </View>
  );
};

export default Loading;