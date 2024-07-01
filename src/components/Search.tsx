import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Overlay } from 'react-native-elements';

import { Box, Select, CheckIcon } from 'native-base';
import { CardConsulta } from './CardConsulta';

import { getAllEspecialidades, getEspecialidadeEspecialistas } from '../services/EspecialidadeService';
import { getAllunidades } from '../services/UnidadeService';

// const localizacoes = [
//     { id: 1, label: 'Pernambuco', value: 'Pernambuco' },
//     { id: 2, label: 'São Paulo', value: 'São Paulo' },
//     { id: 3, label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
// ];

const Search = () => {
    const [valorEspecialidade, setValorEspecialidade] = useState('');
    const [valorUnidade, setValorUnidade] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [especialidadesEspecialistas, setEspecialidadesEspecialistas] = useState({} as Especialidade);
    const [especialidades, setEspecialidades] = useState([]);
    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        async function getEspecialidades() {
            try {
                const result = await getAllEspecialidades();
                // console.log(result)
                setEspecialidades(result);
            } catch (error) {
                console.error(error);
            }
            
        }

        async function getUnidades() {
            try {
                const result = await getAllunidades();
                // console.log(result)
                setUnidades(result);
            } catch (error) {
                console.error(error);
            }
            
        }
        getEspecialidades();
        getUnidades();
    }, []);

    async function pesquisarEspecialistas() {
        try {
            const result = await getEspecialidadeEspecialistas(valorEspecialidade, valorUnidade);
            if (result !== null) {
                setEspecialidadesEspecialistas(result);
                setModalVisible(true);
            } else {
                setEspecialidadesEspecialistas(null);
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
                        <Text style={styles.modalTitle}>{especialidadesEspecialistas.especialistas ? 'Especialistas encontrados:' : 'Nenhum especialista encontrado.'}</Text>
                        {especialidadesEspecialistas.especialistas  ? especialidadesEspecialistas.especialistas.map((especialista) => (
                            <Box w={'100%'} p={0} key={especialista.id}>
                                <CardConsulta
                                    nome={especialista.nome}
                                    especialistaId={especialista.id}
                                    especialidade={especialidadesEspecialistas.nome}
                                    especialidadeId={valorEspecialidade}
                                    unidadeId={valorUnidade}
                                    sexo={especialista.sexo}
                                    foto={especialista.foto}
                                />
                            </Box>
                        )): null}
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
                        <Select.Item key={especialidade.id} value={especialidade.id} label={especialidade.nome}/>
                    ))}
                </Select>

                <Select
                    marginBottom={5}
                    style={styles.select}
                    accessibilityLabel="Escolha a Unidade"
                    placeholder="Escolha a unidade"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}
                    onValueChange={valorUnidade => setValorUnidade(valorUnidade)}>
                    {unidades.map(unidade => (
                        <Select.Item key={unidade.id} value={unidade.id} label={unidade.nome}/>
                    ))}
                </Select>
{/* 
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
                </Select> */}

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
