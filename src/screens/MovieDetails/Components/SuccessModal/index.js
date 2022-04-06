import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const SucessModal = ({ showSuccessModal, setShowSuccessModal, setShowListModal, setSelectedListId }) => {

  return (
    <Modal
      transparent
      visible={showSuccessModal}
      animationType='fade'
    >
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.checkIcon}>
            <Icon name='check' size={16} color='#000' />
          </View>
          <Text style={styles.successTxt}>Lista atualizada com sucesso!</Text>

          <TouchableOpacity
            style={styles.okBtn}
            onPress={() => {
              setSelectedListId('');
              setShowSuccessModal(false);
              setShowListModal(false);
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
