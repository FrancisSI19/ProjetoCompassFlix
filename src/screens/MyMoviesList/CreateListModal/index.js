import React from 'react';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import api from '../../../services/api';
import { API_KEY } from '../../../constants/constants';

function CreateListModal ({visible, setModalVisible, setName, setDescription, name, description, createList}) {
    const [listName, setListName] = useState('');
    const [listDescription, setListDescription] = useState('');

    return (
        <Modal
            transparent
            animationType='fade'
            visible={visible}
        >
            <View style={styles.background}>
                <View style={styles.envelope}>
                    <Text style={styles.title}>Nova lista</Text>

                    <View style={styles.ratingEnvelope}>
                        <View style={styles.inputEnvelope}>

                            <TextInput
                                style={styles.input}
                                maxLength={30}
                                placeholder= 'Nome da lista'
                                onChangeText={value => setName(value)}
                                value={name}   
                            />

                            <TextInput
                                style={styles.input2}
                                placeholder = 'Descrição'
                                maxLength={50}
                                onChangeText={value => setDescription(value)}
                                value= {description}
                            />
                        </View>

                       
                    </View>

                    
                    <View>
                        <TouchableOpacity
                            style={styles.btnCancel}
                            onPress={() => {
                                setModalVisible(false);
                                setDescription('');
                                setName('');
                            }}
                        >
                            <Text style={styles.textCancel}>
                                CANCELAR
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnOk}
                            onPress={() => {
                                setModalVisible(false);
                                createList();
                                setDescription('');
                                setName('');
                            }}

                        >
                            <Text style={styles.textOk}>
                                SALVAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default CreateListModal;
