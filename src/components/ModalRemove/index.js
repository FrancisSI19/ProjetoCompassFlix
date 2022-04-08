import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ModalRemove = ({ visible, setVisible, description, removeItem, itemToRemove }) => {
  return (
    <Modal
      transparent
      animationType='fade'
      visible={visible}
    >
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.attention}>Atenção!</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.btnsContainer}>
            <TouchableOpacity
              style={styles.btnNo}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.textNo}>Não</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnYes}
              onPress={() => {
                removeItem(itemToRemove);
                setVisible(false);
              }}
            >
              <Text style={styles.textYes}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalRemove;
