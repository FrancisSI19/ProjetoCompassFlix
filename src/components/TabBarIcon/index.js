import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import images from '../../assets/img';

const TabBarIcon = ({ tabName, bgColor }) => {
  return (
    <View style={[styles.background, { backgroundColor: bgColor }]}>
      <Image
        style={{ width: 28, height: 28 }}
        source={images.tabBarIcon[tabName]}
      />
    </View>
  );
}

export default TabBarIcon;

const styles = StyleSheet.create({
  background: {
    padding: 8,
    borderRadius: 50,
  }
});
