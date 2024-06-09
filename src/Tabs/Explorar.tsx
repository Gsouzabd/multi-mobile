import { VStack, Text } from 'native-base';
import Search from '../components/Search';
import { Title } from '../components/Title';

const Explorar = () => {
    return (
        <VStack style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title color={'blue.500'} mb={5}>
                Buscar especialistas
            </Title>
            
            <Search/>
            
        </VStack>
    );
};

export default Explorar;
