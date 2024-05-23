import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import { Box, Select, CheckIcon } from 'native-base';
import { getEspecialistaBy } from '../services/EspecialistaService';
import { CardConsulta } from './CardConsulta';

const especialidades = [
    { id: 1, label: 'Cardiologia', value: 'cardiologia' },
    { id: 2, label: 'Dermatologia', value: 'dermatologia' },
    { id: 3, label: 'Ginecologia', value: 'ginecologia' },
    { id: 4, label: 'Ortopedia', value: 'ortopedia' },
    { id: 5, label: 'Pediatria', value: 'pediatria' },
];

const localizacoes = [
    { id: 1, label: 'Pernambuco', value: 'Pernambuco' },
    { id: 2, label: 'São Paulo', value: 'São Paulo' },
    { id: 3, label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
];

const Search = () => {
    const [valorEspecialidade, setValorEspecialidade] = useState('');
    const [valorLocalizacao, setValorLocalizacao] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [especialistas, setEspecialistas] = useState([]);

    async function pesquisarEspecialistas() {
        try {
            const result = await getEspecialistaBy([
                { key: 'especialidade', value: valorEspecialidade },
                { key: 'estado', value: valorLocalizacao }
            ]);
            if (result !== null) {
                setEspecialistas(result);
                setModalVisible(true);
            } else {
                setEspecialistas([]);
                setModalVisible(true);
            }

        } catch (error) {
            console.error(error);
        }
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (

        <View style={styles.container} >
            {/* Modal */}
            { modalVisible && (
                <Overlay isVisible={modalVisible} overlayStyle={{ width: '90%', borderRadius: 20 }} >
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{especialistas.length > 0 ? 'Especialistas encontrados:' : 'Nenhum especialista encontrado.'}</Text>
                        {especialistas.map((especialista) => (
                            <Box w={'100%'} p={0} key={especialista.id}>
                                <CardConsulta
                                    nome={especialista.nome}
                                    especialidade={especialista.especialidade}
                                    foto={especialista.imagem}
                                />
                            </Box>
                        ))}
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
            )}
            <Box w={'50%'} p={5} 
                style={{
                    shadowColor: '#000',
                    shadowRadius: 4,
                    borderWidth: 0.300,
                    borderRadius: 10,
                    borderColor: 'gray'
                }}
            >
                <Select
                    marginBottom={5}
                    style={styles.select}
                    accessibilityLabel="Escolha a especialidade"
                    placeholder="Escolha a especialidade"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}
                    onValueChange={valorEspecialidade => setValorEspecialidade(valorEspecialidade)}>
                    {especialidades.map(especialidade => (
                        <Select.Item key={especialidade.id} value={especialidade.value} label={especialidade.label}/>
                    ))}
                </Select>

                <Select
                    marginBottom={5}
                    style={styles.select}
                    accessibilityLabel="Informe a localização"
                    placeholder="Informe a localização"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}
                    onValueChange={valorLocalizacao => setValorLocalizacao(valorLocalizacao)}>
                    {localizacoes.map(localizacao => (
                        <Select.Item key={localizacao.id} value={localizacao.value} label={localizacao.label}/>
                    ))}
                </Select>

                <TouchableOpacity style={styles.button} onPress={pesquisarEspecialistas}>
                    <Text 
                        style={
                            { color: 'white', textAlign: 'center', fontWeight: "700", fontSize: 16 }
                        }>
                            Buscar
                    </Text>
                </TouchableOpacity>


            </Box>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: 50,
        // marginRight: 50
    },
    button: {
        width: 280,
        height: 48,
        padding: 12,
        backgroundColor: '#0B3B60',
        paddingTop: 12,
        paddingRight: 16,
        paddingBottom: 12,
        paddingLeft: 16,
        borderRadius: 8,
    },

    select: {
        fontSize: 16,
        width: 280,
        height: 48,
        padding: 0,
        paddingHorizontal: 16,
        gap: 0,
        borderLeftWidth: 0,
    },

      modalContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',  
        zIndex: 1000,
        margin: 0
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 40,
      },
      modalText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'left',
      },
      closeButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#2196F3',
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
      },
});

export default Search;
