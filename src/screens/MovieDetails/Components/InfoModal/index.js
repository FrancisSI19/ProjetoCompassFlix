import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const SucessModal = ({ visible, setVisible, listContainsMovie }) => {

  return (
    <Modal
      transparent
      visible={visible}
      animationType='fade'
    >
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={listContainsMovie ? styles.exclamationIcon : styles.checkIcon}>
            {listContainsMovie
              ? <Icon name='exclamation' size={16} color='#000' />
              : <Icon name='check' size={16} color='#000' />}

          </View>
          <Text style={styles.successTxt}>
            {listContainsMovie
              ? 'O filme já pertence a essa lista!'
              : 'Lista atualizada com sucesso!'}
          </Text>

          <TouchableOpacity
            style={styles.okBtn}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Text style={styles.okTxt}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default SucessModal;
