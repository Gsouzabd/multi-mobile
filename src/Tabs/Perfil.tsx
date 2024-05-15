import { VStack, Text, Avatar, Divider } from 'native-base';
import { Title } from '../components/Title';
import { BoxTitle } from '../components/BoxTitle';
import { CardTitle } from '../components/CardTitle';
import perfilWhats from "../assets/perfilwhats.png";
import api from '../services/api';
import { getPaciente } from '../services/PacienteService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Paciente } from '../Interfaces/Paciente';


const Perfil = () => {
    const [paciente, setPaciente] = useState({} as Paciente);

    useEffect(() => {
        async function getDadosPaciente() {
            const pacienteId = await AsyncStorage.getItem('pacienteId')
            const result = await getPaciente(pacienteId);
            if(result){
                setPaciente(result);
            }
        }
        getDadosPaciente();
    }, []);


    console.log(paciente)
    return (
        
        <VStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title color={'blue.500'} mb={5}>
                Meu Perfil
            </Title>

            <Avatar size={'xl'} source={perfilWhats} m={5}></Avatar>

            <BoxTitle>
                Informações pessoais
            </BoxTitle>
            
            <CardTitle>{paciente.nome}</CardTitle>
            <Text color={'gray.700'} m={1}>{paciente.email}</Text>
            <Text color={'gray.700'} m={1}>{paciente.endereco.rua}, {paciente.endereco.numero} - {paciente.endereco.estado}</Text>

            <Divider margin={5} w={"80%"}/>

            <BoxTitle>
                Planos de Saúde
            </BoxTitle>

            {
               paciente.planosSaude.length > 0 ? paciente.planosSaude.map((planoSaude) => {
                return(
                    <CardTitle>{planoSaude}</CardTitle>
                )
               }) : 'Nenhum plano de saúde informado'
            }

        </VStack>
    );
};

export default Perfil;
