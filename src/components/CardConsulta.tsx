import { Text, Avatar, VStack, View, Box } from 'native-base'
import {TouchableOpacity} from 'react-native';
import { ButtonX } from './ButtonX'
import { useState } from 'react';
import { Overlay, Button } from 'react-native-elements';
import { createConsulta } from '../services/ConsultaService';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Title } from './Title';

interface CardProps {
  nome: string;
  especialistaId: string;
  foto: string;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta({
  nome,
  especialistaId,
  foto, 
  data,
  especialidade,
  foiAgendado,
  foiAtendido
}: CardProps){

  const [dados, setDados] = useState({} as any);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [show, setShow] = useState(false);
  
  const showDatePicker = () => {
    setShow(true);
    var selectedDate = new Date();
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setTime(currentDate)
    openModal();
  };

  const openModal = () => {
    setModalVisible(true);
  }
  const closeModal = () => {
    setModalVisible(false);
  }
  
  async function handleAgendarConsulta(dados){
    const pacienteId = await AsyncStorage.getItem('pacienteId')
    try{
      createConsulta({
        data: new Date(`${dados.data}T${dados.hora}:00`),
        especialistaId: especialistaId,
        pacienteId : pacienteId,
      })
    }catch(error){
      console.error(error)
    }
  }
  


return (
  <VStack w="100%" bg={foiAtendido ? 'blue.100': 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
    { modalVisible && (
      <Overlay isVisible={modalVisible} overlayStyle={{ width: '90%', borderRadius: 20 }} >
      <VStack>
        <View style={styles.closeButtonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
        </View>
        {show && (
          <Box justifyContent={'center'} alignItems={'center'} paddingBottom={10} paddingX={5}>
            <Title color={'blue.500'}>Agendar consulta</Title>
            <Box flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} margin={5}>
                <Text fontSize={'md'} fontWeight={'800'} color={'blue.800'}>Selecione a data</Text>
                <DateTimePicker
                    style={{width: 150}}
                    testID="dateTimePicker"
                    mode={'date'}
                    value={date}
                    onChange={(event, selectedDate) => {setDate(selectedDate)}}
                    is24Hour={true}
                    display="default"
                />
            </Box>
            <Box flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontSize={'md'} fontWeight={'800'} color={'blue.800'}>Selecione a hora</Text>
                <DateTimePicker
                    style={{width: 150}}
                    testID="dateTimePicker"
                    mode='time'
                    value={time}
                    onChange={(event, selectedTime) => {setTime(selectedTime)}}
                    is24Hour={true}
                    display="default"
                />
            </Box>
            <ButtonX 
              mt={10} 
              width={'100%'} 
              onPress={() => {
                setDados(
                  {
                    data: date.toISOString().split('T')[0],
                    hora: time.toTimeString().split(' ')[0].slice(0, 5),
                    especialista: nome,
                    foto: foto, foiAtendido: false, foiAgendado: true
                  }
                )

                handleAgendarConsulta(dados)
              }
            }
              >
              {'Confirmar agendamento'}
            </ButtonX>          
          </Box>
        )}
      </VStack>
      </Overlay>
    )} 
      <VStack flexDir="row">
        <Avatar size="lg" source={{ uri: foto }} />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text fontSize="md">{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <ButtonX mt={4} onPress={showDatePicker}>
        {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
      </ButtonX>
    </VStack>
  )
}


const styles = {
    closeButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    closeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },

}