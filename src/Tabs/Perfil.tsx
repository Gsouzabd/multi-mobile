import { VStack, Text, Avatar, Divider } from 'native-base';
import { Title } from '../components/Title';
import { BoxTitle } from '../components/BoxTitle';
import { CardTitle } from '../components/CardTitle';
import perfilWhats from "../assets/perfilwhats.png";


const Perfil = () => {
    return (
        <VStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title color={'blue.500'} mb={5}>
                Meu Perfil
            </Title>

            <Avatar size={'xl'} source={perfilWhats} m={5}></Avatar>

            <BoxTitle>
                Informações pessoais
            </BoxTitle>
            
            <CardTitle> Gabriel Souza B. Doudement</CardTitle>
            <Text color={'gray.700'} m={1}>11/04/2001</Text>
            <Text color={'gray.700'} m={1}>Recife-PE</Text>

            <Divider margin={5} w={"80%"}/>

            <BoxTitle>
                Histórico Médico
            </BoxTitle>

            <CardTitle>Asma</CardTitle>
            <CardTitle>Dodói da cabeça</CardTitle>


        </VStack>
    );
};

export default Perfil;
