import React from 'react';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import api from '../../../services/api';
import { API_KEY } from '../../../constants/constants';

function CreateListModal () {
    const [text, onChangeText] = useState('');
    const [visible, setModalVisible] = useState();
    
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
                                maxLength={50}
                                onChangeText={onChangeText}
                                value={text}
                            />
                        <View>
                            <TextInput
                                style={styles.input2}
                                keyboardType='text'
                                maxLength={50}
                                onChangeText={onChangeText}
                                value={text}
                            />
                            </View>
                        </View>

                       
                    </View>

                    
                    <View>
                        <TouchableOpacity
                            style={styles.btnCancel}
                            onPress={() => {
                                setModalVisible(false);
                                
                            }}
                        >
                            <Text style={styles.textCancel}>
                                CANCELAR
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnOk}
                            onPress={() => {
                                text();
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
