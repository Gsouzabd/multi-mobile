import React from 'react';
import { FlatList, VStack, Box, Text, Divider } from 'native-base';
import { Title } from '../components/Title';
import Search from '../components/Search';
import Header from '../components/Header';
import { format } from 'date-fns'; // Assuming you're using date-fns for date formatting

import { depoimentos } from '../utils/Depoimentos';
import SectionTitle from '../components/SectionTitle';
import { useState, useEffect } from 'react';
import { Paciente } from '../Interfaces/Paciente';
import { getPaciente } from '../services/PacienteService';
import { getConfigurations, STORAGE_URL } from '../services/ConfigurationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'react-native';
const Principal = () => {

  const [paciente, setPaciente] = useState({} as Paciente);
  const [config, setConfig] = useState({} as any);
  const currentDate = format(new Date(), 'dd/MM/yyyy');

  useEffect(() => {
      async function getDadosPaciente() {
        const pacienteId = await AsyncStorage.getItem('pacienteId')
        const result = await getPaciente(pacienteId);
        // console.log(result)
        if(result){
            setPaciente(result);
        }
      }
      async function getConfigs() {
        const result = await getConfigurations();
        if(result){
            setConfig(result);
        }
      }

      getDadosPaciente();
      getConfigs();
  }, []);
  if (!paciente || paciente == undefined || !paciente.email) {
      return <Text>Loading...</Text>;
  }

  return (        
        <VStack
          style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}
        >

          <Box key="header" w="100%" borderRadius="lg" pt={100} pl={0}>
            <Image 
                source={{ uri: STORAGE_URL + config.logo }} 
                style={{ width: '20%', height: 70 }} 
                alt="logo" 
              />
          </Box>
          <Box key="banner" w="120%" borderRadius="lg">
            <Image 
              source={{ uri: STORAGE_URL + config.banner_app }} 
              style={{ width: '100%', height: 200 }} 
              alt="Banner" 
            />
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" paddingX={20}>
            <SectionTitle key="section-title">Bem vindo, {paciente.nome}</SectionTitle> 
            <Text textAlign="right" fontWeight={700}>{currentDate}</Text>
          </Box>          

          <Box key="box" w="100%" borderRadius="lg" p={0} shadow={2} mb={5}>
            <Text  textAlign='justify'>{config.descricao}</Text>
            </Box>
          <Search key="search" />

        </VStack>
  );
};

export default Principal;
