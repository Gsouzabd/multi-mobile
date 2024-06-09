import { VStack, Divider, ScrollView } from 'native-base'
import { ButtonX } from '../components/ButtonX'
import { CardConsulta } from '../components/CardConsulta'
import { Title } from '../components/Title'

export default function Consultas(){
  return(
    <ScrollView p="5">
      <Title color="blue.500" pt={5}>Minhas consultas</Title>
      <ButtonX mt={5} mb={5}>Agendar nova consulta</ButtonX>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/andreocunha.png'
        data='20/04/2023'
        foiAgendado
      />

      <Divider mt={5} />

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/andreocunha.png'
        data='20/04/2023'
        foiAtendido
      />
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/andreocunha.png'
        data='20/04/2023'
        foiAtendido
      />
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto='https://github.com/andreocunha.png'
        data='20/04/2023'
        foiAtendido
      />
    </ScrollView>
  )
}