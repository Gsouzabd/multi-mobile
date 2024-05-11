import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, Select, CheckIcon } from 'native-base';
import SelectDropdown from 'react-native-select-dropdown';

const especialidades = [
    { id: 1, label: 'Cardiologia', value: 'cardiologia' },
    { id: 2, label: 'Dermatologia', value: 'dermatologia' },
    { id: 3, label: 'Ginecologia', value: 'ginecologia' },
    { id: 4, label: 'Ortopedia', value: 'ortopedia' },
    { id: 5, label: 'Pediatria', value: 'pediatria' },
];

const localizacoes = [
    { id: 1, label: 'Recife - PE', value: 'recife' },
    { id: 2, label: 'São Paulo - SP', value: 'sao_paulo' },
    { id: 3, label: 'Rio de Janeiro - RJ', value: 'rio_de_janeiro' },
    { id: 4, label: 'Salvador - BA', value: 'salvador' },
    { id: 5, label: 'Brasília - DF', value: 'brasilia' },
];


const Search = () => {
    const [valorEspecialidade, setValorEspecialidade] = useState('');
    const [valorLocalizacao, setValorLocalizacao] = useState('');

    const handleBuscar = () => {
        alert('Buscar com:'+ valorEspecialidade +" em: "+ valorLocalizacao);
    };

    return (
        <View style={styles.container}>

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

                <TouchableOpacity style={styles.button} onPress={handleBuscar}>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50
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
    }
});

export default Search;
