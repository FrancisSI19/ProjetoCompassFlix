import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ListModal = ({ visible, setVisible }) => {
  const list = [
    { name: 'Filmes que mudaram a minha vida' },
    { name: '10 Melhores filmes de terror' },
    { name: 'Filmes para assistir e refletir' },
  ]
  const [selected, setSelected] = useState('');

  const selectList = (name) => {
    if (name === selected) {
      setSelected('');
    } else {
      setSelected(name);
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
    >
      <View style={styles.background}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Salvar filme em...</Text>

            <TouchableOpacity onPress={() => setVisible(false)}>
              <Icon name='close' size={18} color='#000' />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            {list.map(list => {
              return (
                <View
                  style={styles.list}
                  key={list.name}
                >
                  <TouchableOpacity
                      style={[styles.radio, {padding: selected === list.name ? 2 : 10}]}
                      onPress={() => selectList(list.name)}
                    >
                    <View style={{ backgroundColor: '#000', borderRadius: 20, padding: selected === list.name ? 8 : 0 }} />
                  </TouchableOpacity>
                  <Text style={styles.listTitle}>{list.name}</Text>
                </View>
              );
            })}

            <TouchableOpacity
              style={[styles.btnSave, {backgroundColor: selected ? '#000' : '#C4C4C4'}]}
              disabled={selected ? false : true}
            >
              <Text style={[styles.txtSave, {color: selected ? '#fff' : '#8E8E8E'}]}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ListModal;
