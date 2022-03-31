import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = ({ size }) => {
  return (
    <ActivityIndicator size={size} color="#E9A6A6" />
  );
};

export default Loading;
